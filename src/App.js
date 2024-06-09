import { BrowserRouter, Route, Routes } from "react-router-dom";
import MarketPage from "./pages/MarketPage";
import AddItemPage from "./pages/AddItemPage";
import NavBar from "./components/NavBar";
import "./App.css";
import "./global.css";
import ItemDetail from "./ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/items' element={<MarketPage />} />
        <Route path='/items/:productId' element={<ItemDetail />} />
        <Route path='/additem' element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
