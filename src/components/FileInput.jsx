import { useState, useRef, useEffect } from 'react';
import '../style/ItemRegister.css';

function FileInput({ name, value, onChange }) {
  const [prevView, setPreview] = useState();

  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = '';
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
  }, [value]);

  const allClearClick = () => {
    handleClearClick();
    setPreview('');
  };

  return (
    <div>
      <div className="item-img">상품 이미지</div>
      <label className="label-img" htmlFor="file-register">
        <div className="plus">+</div>
        <div className="label-text">이미지 등록</div>
      </label>

      <input
        id="file-register"
        type="file"
        onChange={handleChange}
        ref={inputRef}
        style={{ display: 'none' }}
      ></input>
      {value && <img className="prev-img" src={prevView}></img>}
      {value && <button onClick={allClearClick}>x</button>}
    </div>
  );
}

export default FileInput;
