import { useState, useRef } from 'react';
import '../style/ItemRegister.css';
import FileInput from './FileInput';

function ItemRegister() {
  const [values, setValues] = useState({
    name: '',
    exp: '',
    price: '',
    tag: '',
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked button');
  };

  return (
    <div className="form-container">
      <form id="register-form" action="" onSubmit={handleSubmit}>
        <div className="item-register-dsc">
          <span>상품 등록하기</span>
          <button type="submit">등록</button>
        </div>
        {/* -------------------파일------------------------------ */}
        <FileInput
          name="imgFile"
          value={values.imgFile}
          onChange={handleChange}
        />
        {/* --------------------상품명----------------------------- */}
        <label className="label-name" htmlFor="form-item">
          상품명
        </label>
        <input
          id="form-item"
          name="name"
          value={values.name}
          type="text"
          placeholder="상품명을 입력해주세요"
          onChange={handleInputChange}
        />
        {/* --------------------상품소개----------------------------- */}

        <label className="label-name" htmlFor="form-exp">
          상품 소개
        </label>
        <textarea
          id="form-exp"
          name="exp"
          value={values.exp}
          type="textarea"
          placeholder="상품 소개를 입력해주세요"
          onChange={handleInputChange}
        ></textarea>
        {/* -----------------------판매 가격-------------------------- */}
        <label className="label-name" htmlFor="form-price">
          판매 가격
        </label>
        <input
          id="form-price"
          name="price"
          value={values.price}
          type="text"
          placeholder="판매 가격을 입력해주세요"
          onChange={handleInputChange}
        />
        {/* ----------------------태그 --------------------------- */}
        <label className="label-name" htmlFor="form-tag">
          태그
        </label>
        <input
          id="form-tag"
          name="tag"
          value={values.tag}
          type="text"
          placeholder="태그를 입력해주세요"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default ItemRegister;
