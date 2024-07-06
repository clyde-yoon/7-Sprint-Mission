import '../style/item.css';

function SearchBar({ handleLoad }) {
  const handleChange = (e) => {
    const order = e.target.value;
    handleLoad(1, 10, order);
  };

  return (
    <div className="allitems-search-bar">
      <input
        className="category-list"
        type="text"
        placeholder="🔍 검색할 상품을 입력해주세요"
      />
      <button className="category-list">상품 등록하기</button>
      <select onChange={handleChange}>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
    </div>
  );
}

export default SearchBar;
