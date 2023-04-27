
import { useState } from 'react';
import './App.css';
import ProductComponent from './components/ProductComponent';
import ShelfComponent from './components/ShelfComponent';

function App() {
  return (
    
    <div>
      <div class = "shop">Shop<br></br>
      Counter: 
      
      </div>
      <ShelfComponent></ShelfComponent>
      <ShelfComponent></ShelfComponent>
      <ShelfComponent></ShelfComponent>
      
    </div>
  );
}

export default App;
