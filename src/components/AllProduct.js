// AllProduct.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Style from './AllProduct.module.css';
import { getProductList } from '../utils/Getproduct';
import { Pagination } from './Pagination';
import { favoriteCount } from '../utils/FavoriteCount';

function AllProduct() {
  const [allItems, setAllItems] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const fetchAllList = async () => {
    const { list } = await getProductList({
      page,
      pageSize: 10,
      orderBy,
    });

    setAllItems(list);
  };

  const handleAllFavoriteCount = async id => {
    const favorite = await favoriteCount(id);

    if (favorite && 'message' in favorite) {
      console.log('좋아요 안눌림...');
    } else {
      fetchAllList();
    }
  };

  useEffect(() => {
    fetchAllList();
  }, [page, orderBy]);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredItems(allItems);
    } else {
      const filtered = allItems.filter(item =>
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  }, [searchTerm, allItems]);

  const handleSearchTermChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className={Style.main_allproduct_container}>
        <h1 className={Style.allproduct_header_title}>전체 상품</h1>
        <div className={Style.all_product_header_right}>
          <input
            value={searchTerm}
            onChange={handleSearchTermChange}
            placeholder="검색할 상품을 입력해주세요"
            className={Style.search_product}
          />
          <Link
            to="/additem"
            className={Style.all_product_additem}
          >
            <a>상품 등록하기</a>
          </Link>
          <select
            className={Style.orderBy}
            value={orderBy}
            onChange={e => setOrderBy(e.target.value)}
          >
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>
      <ul className={Style.main_all_product}>
        {filteredItems?.map(({ id, images, name, price, favoriteCount }) => {
          console.log(filteredItems);
          return (
            <li key={id}>
              <img
                src={images[0]}
                width={220}
                height={220}
              />
              <div className={Style.main_product_detail}>
                <p className={Style.product_name}>{name}</p>
                <p className={Style.product_price}>{price.toLocaleString()}</p>
                <button
                  className={Style.product_favorite}
                  onClick={() => handleAllFavoriteCount(id)}
                >
                  {favoriteCount}
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={Style.pageButton}>
        <Pagination
          pageLimit={5}
          defaultpage={1}
          onChange={page => setPage(page)}
        />
      </div>
    </>
  );
}

export default AllProduct;
