import React, { useContext } from 'react'
import CarShop from './card'

function CardSumrry() {
    const {product,removeItems} = useContext(CarShop)
  return (
    <div>
        <h2>Car summur </h2>
        <p>Total Itemm : {product.length}</p>
        <ul>
           { product.map ((item)=>(
            <li key={item.id}>{item.name}-${item.price} {''}
            <button onClick={()=> removeItems (item.id)}>Remove</button>
            
            </li>
            
           ))
        
        
        
        }

        </ul>
      
    </div>
  )
}

export default CardSumrry
