import { useState } from "react"
function Counter (){
    const [Count , setCount] = useState (0)
    
    let handleIncrease = () =>{
        setCount (Count +1)
        
    }
    let handleDecrease =()=>{
        setCount (Count-1)
    }
  

    return (
        <div>
            <h2>Counter Is : { Count} </h2>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease} disabled = {Count <=0 } >Decrease</button>
            

        </div>
    )
}export default Counter