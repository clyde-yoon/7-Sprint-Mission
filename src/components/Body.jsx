import BestGoods from './BestGoods';
import AllGoods from './AllGoods';
import '../style/item.css';

function Body() {
  return (
    <>
      <div className="bestgoods-container main">
        <BestGoods />
      </div>
      <div className="allgodds-container main">
        <AllGoods />
      </div>
    </>
  );
}

export default Body;
