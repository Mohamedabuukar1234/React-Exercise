import { useState } from "react"


function ShoppingCard (){
    const [product , setProduct] = useState([])
    const [productName , setproductName] = useState ("")
    const [productPrice , SetProductPrice] = useState ("")
    const handleAdd=()=>{
        if(productName.trim()!== ""  && productPrice.trim()!== "" ){
            const NewProduct = {
                id : Date.now(),
                text : productName,
                price: parseFloat (productPrice),
                quantity : 1
            }
            setProduct([...product ,NewProduct])
            setproductName ("")
            SetProductPrice ("")
            console.log(NewProduct)
        }
    }
    
   const RemoveProduct = (id)=>{
    const updateProduct = product.filter(product=> product.id !== id )
    setProduct (updateProduct)
   }
   const Increase = (id) =>{
    const updatePrice = product.map(product =>(
        product.id === id ? { ...product ,quantity: product.quantity+1}:product
    ))
    setProduct (updatePrice)
   }
     const decrease = (id) =>{
        
    const updatePrice = product.map(product =>(
        product.id === id && product.quantity>1 ? { ...product ,quantity: product.quantity-1}:product
    ))
    setProduct (updatePrice)
   }
   const total = product.reduce((total , product)=> total+product.price*product.quantity,0)
    return(
       <div>
        <h1>shopping Card </h1>
        <div>
        <h2> Add product </h2>
        <input 
            type="text" name="" id="" placeholder="product name"

            onChange={(e) => setproductName(e.target.value)}
            value={productName}
           />
        <input
             type="number" name="" id=""  placeholder="price"
             onChange={(e)=> SetProductPrice(e.target.value)}
             value={productPrice}
             min={0}
             /> 


             <button onClick={handleAdd}>Add card</button>
        </div>
       {
        product.length > 0 ? (
          
                    <div>
                        <h3>product In  Cart </h3>
                         <ul>
                        {
                            product.map(product=>(
                                <li key={product.id}>
                                    <strong>{product.name}</strong> - $ {product.price.toFixed(2)}
                                    <div>
                                        quantity:
                                        <button onClick={ ()=>decrease (product.id)}>-</button>
                                        {product.quantity}
                                        <button onClick={ () => Increase (product.id)}>+</button>
                                    </div>
                                    <div>
                                        <button onClick={ ()=> RemoveProduct(product.id)}>Remove</button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <h4>total price :${total} </h4>
                    </div>
        ) : <p>this produc is emptey </p>
       }
       </div>
    )
}
export default ShoppingCard