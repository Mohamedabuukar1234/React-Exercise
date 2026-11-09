import React, { useState } from 'react'
import CarShop from './card'
import ProductItem from './ProductItem';
import CardSumrry from './CardSumrry';

function App() {
  const [product ,setproduct] = useState ([])
  const addToCart =(item)=>{
    setproduct ([...product , item]);
  };
  const removeItems =(itemId) => {
      console.log("ID la tirtirayo:", itemId)
    setproduct (product.filter((item) => item.id !== itemId))

  };
  const value ={product ,addToCart,removeItems}

  return (
    <CarShop.Provider value={value}>
      <ProductItem  itemId={1} itemName={"laptop"} price={190.50}/>
      <ProductItem  itemId={2} itemName={"Desktop"} price={229.99}/>
      <CardSumrry />
      
    </CarShop.Provider>
  )
}

export default App
