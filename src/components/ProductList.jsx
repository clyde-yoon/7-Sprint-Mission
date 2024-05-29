import "../styles/ProductList.css";
import heartImg from "../assets/icons/ic_heart.svg";
import ProductController from "../components/ProductController";
import Pagination from "../components/Pagination";

function ProductListItem({ item }) {
  return (
    <div className="product-list-item">
      <img className="imgbox" src={item.images[0]} alt={item.title} />
      <div className="info">
        <p>{item.name}</p>
        <p className="price">{Number(item.price).toLocaleString("ko-KR")}원</p>
        <div className="favorite">
          <img src={heartImg} alt="좋아요수"></img>
          <p>{item.favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}

function ProductList({
  items,
  order,
  page,
  handleSelect,
  onClickPage,
  totalProdCount,
  allProdPageSize,
}) {
  return (
    <div className="ProductList">
      <ProductController order={order} handleSelect={handleSelect} />
      <div className="ProductList-container">
        {items.map((item) => {
          return <ProductListItem key={item.id} item={item} />;
        })}
      </div>
      <Pagination
        page={page}
        onClickPage={onClickPage}
        totalProdCount={totalProdCount}
        allProdPageSize={allProdPageSize}
      />
    </div>
  );
}

export default ProductList;
