import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '/src/components/header/Header';

import '/src/styles/Reset.css';
import './App.css';
import '/src/styles/Button.css';

import ItemsPage from './pages/ItemsPage';
import NotFoundPage from './pages/NotFoundPage';
import AddItemPage from './pages/AddItemPage';
import HomePage from './pages/HomePage';
import BoardPage from './pages/BoardPage';
import { ResponsiveProvider } from './Responsive';
import ItemDetailPage from './pages/ItemDetailPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveProvider>
          <Routes>
            <Route path='/' element={<HomePage />}>
              <Route path='board' element={<BoardPage />} />
              <Route path='items' element={<ItemsPage />} />
              <Route
                path='items/:productId'
                element={<ItemDetailPage />}
              ></Route>
              <Route path='additem' element={<AddItemPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </ResponsiveProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
