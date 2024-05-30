import '/src/styles/Color.css';
import styled, { css } from 'styled-components';
import iconTagCancel from '/src/assets/ic_tag_cancel.svg';
import iconPlus from '/src/assets/ic_plus.svg';
import iconImageCancel from '/src/assets/ic_cancel.svg';
import { useEffect, useRef, useState } from 'react';

const WEIGHTS = {};

const TextStyle = css`
  font-size: 16px;
  font-weight: 400;
  color: var(--gray-800);
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: 700;
  color: var(--gray-800);
`;

const InputStyle = css`
  width: 100%;
  background-color: var(--gray-100);
  position: relative;

  ${TextStyle}

  padding: 16px 24px;
  border: none;
  border-radius: 12px;

  &::placeholder {
    color: var(--gray-400);

    position: absolute;
    top: 16px;
    left: 24px;
  }
`;

const StyledInput = styled.input`
  ${InputStyle}
`;

const StyledTextArea = styled.textarea`
  resize: none;
  ${InputStyle}
`;

const StyledTag = styled.div`
  display: inline-flex;
  background-color: var(--gray-50);
  padding: 12px 12px 12px 16px;
  border-radius: 26px;

  ${TextStyle}

  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

export function Tag({ children }) {
  return (
    <StyledTag>
      <span>{children}</span>
      {/* <button type='button'>
        
      </button> */}
      <img src={iconTagCancel} />
    </StyledTag>
  );
}

export function Input({
  name,
  value,
  type,
  id,
  placeholder,
  children,
  onChange,
  onKeyDown,
  onKeyUp,
}) {
  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={id}>{children}</StyledLabel>
      {type === 'textarea' ? (
        <StyledTextArea
          name={name}
          value={value}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          rows='5'
        />
      ) : (
        <StyledInput
          name={name}
          value={value}
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
        />
      )}
    </StyledInputContainer>
  );
}

const imgStyle = css`
  width: 282px;
  height: 282px;
`;

const StyledFileUploadButton = styled.button`
  ${InputStyle}
  ${imgStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  & > span {
    color: var(--gray-400);
  }
`;

function FileUploadButton({ onClick }) {
  return (
    <StyledFileUploadButton type='button' onClick={onClick}>
      <img src={iconPlus} alt='이미지 등록' />
      <span>이미지 등록</span>
    </StyledFileUploadButton>
  );
}

const File = styled.input`
  visibility: hidden;
  position: absolute;
`;

const StyledPreviewImage = styled.img`
  ${imgStyle}
`;

const PreviewImagediv = styled.div`
  ${imgStyle}
  position:relative;

  & > img:first-child {
    ${imgStyle}
    border-radius: 12px;
  }

  & > img:last-child {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export function PreviewImage({ preview, onClick }) {
  return (
    <PreviewImagediv>
      {/* <StyledPreviewImage src={preview} alt='이미지 미리보기' /> */}
      <img src={preview} alt='이미지 미리보기' />
      <img src={iconImageCancel} alt='취소' onClick={onClick} />
    </PreviewImagediv>
  );
}

export function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextImage = e.target.files[0];
    onChange(name, nextImage);
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

  return (
    <>
      <div style={{ display: 'flex', gap: '24px' }}>
        <FileUploadButton
          onClick={() => {
            inputRef.current?.click();
          }}
        ></FileUploadButton>

        <File
          type='file'
          accept='image/png, image/jpeg'
          onChange={handleChange}
          ref={inputRef}
        />
        {value && <PreviewImage preview={preview} onClick={handleClearClick} />}
      </div>
    </>
  );
}
