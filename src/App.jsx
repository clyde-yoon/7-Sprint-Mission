import { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Body from './components/Body';
import ItemRegister from './components/ItemRegister';

function App() {
  return (
    <>
      <Header />
      {/* <Body /> */}
      <ItemRegister />
    </>
  );
}

export default App;
