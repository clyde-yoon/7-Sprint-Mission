import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import LandingPage from './pages/LandingPage';
import ItemListPage from './pages/ItemListPage';
import ItemPage from './pages/ItemPage.jsx';
import AddItemPage from './pages/AddItemPage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="items">
            <Route index element={<ItemListPage />} />
            <Route path=":productId" element={<ItemPage />} />
          </Route>
          <Route path="additem" element={<AddItemPage />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
