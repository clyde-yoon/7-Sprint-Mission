import '../style/item.css';
function AllItems({ item }) {
  const { images, name, price, favoriteCount } = item;
  const formattedPrice = price.toLocaleString();
  return (
    <div className="allitem-card">
      <img className="allitem-img" src={images} alt={`${name}`} />
      <div className="name-text">{name}</div>
      <div className="price">{`${formattedPrice}원`}</div>
      <div className="favorite">❤️{favoriteCount}</div>
    </div>
  );
}

export default AllItems;
