import arrowleft from "./images/arrow_left.svg";
import arrowright from "./images/arrow_right.svg";
import "./pagination.css";

function getPageNumber(number) {
  const numbers = [];
  for (let i = 1; i <= number; i++) {
    numbers.push(i);
  }
  return numbers;
}

function Pagination({ pageNumber, currentPage, onPageChange }) {
  const getPageNumberArray = getPageNumber(pageNumber);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pageNumber) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="button-wrapper">
      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src={arrowleft} alt="���� ȭ��ǥ" />
      </button>
      {getPageNumberArray.map((page) => (
        <button
          key={page}
          className={`pagination-button ${
            page === currentPage ? "select-page" : ""
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === pageNumber}
      >
        <img src={arrowright} alt="������ ȭ��ǥ" />
      </button>
    </div>
  );
}

export default Pagination;
