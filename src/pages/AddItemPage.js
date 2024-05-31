import { useEffect, useState } from 'react';
import Tags from '../components/form/Tags';
import FileInput from '../components/form/FileInput';

const INITIAL_VALUES = {
  image: undefined,
  name: '',
  description: '',
  price: '',
  tags: [],
};

function sanitize(name, value) {
  switch (name) {
    case 'price':
      return Number(removeCommas(value)) || 0;

    default:
      return value;
  }
}

// price add &remove commas
const addCommas = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const removeCommas = (value) => {
  return value.replace(/,/g, '');
};

const checkFormComplete = (values) => {
  return Object.values(values).every((value) => {
    return Boolean(value);
  });
};

export default function AddItemPage() {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [values, setValues] = useState(INITIAL_VALUES);

  useEffect(() => {
    // when values changed
    setIsFormComplete(checkFormComplete(values));
  }, [values]);

  // handlers
  const handleSubmit = (e) => {
    // submit handler
    e.preventDefault();
    console.log(e);
  };

  const handleChange = (name, value) => {
    // input change handler
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (e) => {
    // input sanitize
    const { name, value } = e.target;
    handleChange(name, sanitize(name, value));
  };

  return (
    <div>
      <form method='post' id='form-add-item' onSubmit={handleSubmit}>
        <div className='form-header'>
          <h1>상품 등록하기</h1>
          <button
            type='submit'
            disabled={!isFormComplete}
            onClick={() => {
              console.log(isFormComplete);
            }}>
            등록
          </button>
        </div>
        <label htmlFor='ipt-files'>상품 이미지</label>

        <FileInput setValues={setValues} />

        <label htmlFor='ipt-product-name'>상품명</label>
        <input
          type='text'
          id='ipt-product-name'
          name='name'
          value={values.name}
          onChange={handleInputChange}
          placeholder='상품명을 입력해주세요'
        />

        <label htmlFor='ipt-product-description'>상품 소개</label>
        <textarea
          name='description'
          id='ipt-product-description'
          onChange={handleInputChange}
          placeholder='상품 소개를 입력해주세요'></textarea>

        <label htmlFor='ipt-product-price'>판매 가격</label>
        <input
          name='price'
          id='ipt-product-price'
          type='text'
          value={addCommas(values.price.toString())}
          onChange={handleInputChange}
          placeholder='판매 가격을 입력해주세요'
        />

        <Tags tags={values.tags} setValues={setValues} />
      </form>
    </div>
  );
}
