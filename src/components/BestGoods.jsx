import BestItems from './BestItems';
import '../style/item.css';
import { getData } from '../Api';
import { useState, useEffect } from 'react';

function BestGoods() {
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    handleLoad()
  },[])

  const handleLoad = async () => {
    const {list} = await getData(1,4,'favorite');
    
    setData(list)
  }
  return (
    <div>
      <div className="category-name">베스트 상품</div>
      <ul className="card-container">
        {data.map((item) => (
          <li className="bestitem-card" key={item.id}>
            <BestItems item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BestGoods;
