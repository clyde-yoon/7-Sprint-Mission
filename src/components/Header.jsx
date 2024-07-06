import '../style/Header.css';

function Header() {
  return (
    <div className="header">
      <img
        className="panda-logo"
        src="src\assets\판다로고.png"
        alt="판다로고"
      />
      <ul>
        <li>자유게시판</li>
        <li>중고마켓</li>
      </ul>
      <button className="login-button">로그인</button>
    </div>
  );
}

export default Header;
