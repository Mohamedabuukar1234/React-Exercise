import React, { useContext } from 'react'
import CarShop from './card'

function ProductItem({ itemId, itemName, price }) {
  const { addToCart } = useContext(CarShop);

  const handleAdd = () => {
    addToCart({ id: itemId, name: itemName, price });
  }; 
  return (
    <div>
        <p>{itemName}</p>
        <p>price : ${price}</p>
        <button onClick={handleAdd}>Add cart</button>
      
    </div>
  )
}

export default ProductItem
