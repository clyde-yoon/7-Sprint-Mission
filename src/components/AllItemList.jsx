import { useState, useEffect } from "react";
import { getProducts } from "../api/api";
import heartIcon from "../images/icons/ic_heart.svg";

function AllItemList({ page, filter, isDesktop, isTablet, isMobile }) {
  const [products, setProducts] = useState([]);
  const itemsToShow = isDesktop ? 10 : isTablet ? 6 : isMobile ? 4 : 10;

  const getProductsList = async (options) => {
    const { list } = await getProducts(options);
    setProducts(list);
  };

  useEffect(() => {
    const orderBy = filter === "favorite" ? "favorite" : "recent";
    getProductsList({ page: page, pageSize: itemsToShow, orderBy });
  }, [page, itemsToShow, filter]);

  return (
    <div className="all-item-list-container">
      {products.slice(0, itemsToShow).map((product) => (
        <div key={product.id} className="all-item-list-wrapper">
          <img
            className="all-item-image"
            src={product.images}
            alt={product.name}
            width="221"
            height="221"
          />
          <span className="all-item-list-title">{product.name}</span>
          <strong className="all-item-list-price">
            {Number(product.price).toLocaleString()}원
          </strong>
          <div className="all-item-list-like-wrapper">
            <img src={heartIcon} alt="좋아요" width="16" height="16" />
            <span className="all-item-list-like-count">
              {product.favoriteCount}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllItemList;
