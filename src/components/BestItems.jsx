import '../style/item.css';
function BestItems({ item }) {
  const { images, name, price, favoriteCount } = item;
  const formattedPrice = price.toLocaleString();
  return (
    <div>
      <img className="bestitem-img" src={images} alt={`${name}`} />
      <div className="name-text">{name}</div>
      <div className="price">{`${formattedPrice}원`}</div>
      <div className="favorite">❤️{favoriteCount}</div>
    </div>
  );
}

export default BestItems;
