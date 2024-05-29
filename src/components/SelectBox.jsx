import "../styles/SelectBox.css";
import arrowDownImg from "../assets/icons/ic_arrow_down.svg";
import mobileSelectImg from "../assets/icons/ic_sort.svg";
import { useEffect, useState } from "react";

function SelectBox({ handleSelect }) {
  const selectList = ["최신순", "좋아요순"];
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedText, setSelectedText] = useState(selectList[0]);

  const handleOpenList = () => {
    if (isListOpen) {
      setIsListOpen(() => false);
    } else {
      setIsListOpen(() => true);
    }
  };

  const handleSelectItem = (e) => {
    handleSelect(e.target.textContent);
    setSelectedText(() => e.target.textContent);
  };

  return (
    <div className="select-box">
      <button onClick={handleOpenList} className="select-btn">
        <p className="selected-text">{selectedText}</p>
        <img src={arrowDownImg} className="ic-down" />
        <img src={mobileSelectImg} className="ic-mobile" />
      </button>
      {isListOpen && (
        <ul onClick={handleOpenList} className="option-list">
          {selectList.map((item) => {
            return (
              <li onClick={handleSelectItem} className="option-item">
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SelectBox;
