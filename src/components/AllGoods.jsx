import SearchBar from './SearchBar';
import AllItems from './AllItems';
import '../style/item.css';
import { useEffect, useState } from 'react';

import { getData } from '../Api';
function AllGoods() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [orderby, setOrderby] = useState('recent');

  useEffect(() => {
    handleLoad(page, 10, orderby);
  }, [page, orderby]);

  const handleLoad = async (page, pageSize = 10, order = 'recent') => {
    const { list } = await getData(page, pageSize, order);
    setData(list);
  };
  const handlePageButtonClick = (event) => {
    const selectedPage = event.target.innerHTML;
    setPage(selectedPage);
  };

  return (
    <div>
      <div className="allgoods-header">
        <div className="category-name category-list">전체 상품</div>
        <SearchBar handleLoad={handleLoad} />
      </div>
      <ul className="card-container">
        {data.map((item) => (
          <li className="bestitem-card" key={item.id}>
            <AllItems item={item} />
          </li>
        ))}
      </ul>
      <div className="bottom-nav">
        <button>&lt;</button>
        <button onClick={(event) => handlePageButtonClick(event)}>1</button>
        <button onClick={(event) => handlePageButtonClick(event)}>2</button>
        <button onClick={(event) => handlePageButtonClick(event)}>3</button>
        <button onClick={(event) => handlePageButtonClick(event)}>4</button>
        <button onClick={(event) => handlePageButtonClick(event)}>5</button>
        <button>&gt;</button>
      </div>
    </div>
  );
}

export default AllGoods;
