import { useState , useReducer } from "react";
const intialState = {
    countA : 0 ,
    countB: 0
}
const reducer = (state, action)=>{
    switch(action.type){
        case "IncrementA":
            return {...state,countA : state.countA+1}

         case"IncrementB":
            return {...state ,countA : state.countA-1}
         
         case "decrementA":
            return {...state , countB : state.countB+1}
         
        case "decrementB":
            return {...state , countB : state.countB-1}
        case "reset":
            return intialState
            
            
        default :
        return state    
    }
    

}



function DoubleCoCunter (){
    const [state, setState] = useReducer (reducer,intialState)
    return (
        <div>
            <h2>CounterA {state.countA}</h2>
            <button onClick={()=>setState({type :"IncrementA"})} >IncermentA</button>
            <button onClick={()=>setState({type :"IncrementB"})}disabled={state.countA === 0} >IncermentB</button>
            <h2>CounterB is {state.countB}</h2>
            <button onClick={()=>setState({type :"decrementA"})}>DecrementA</button>
            <button onClick={()=>setState({type :"decrementB"})} disabled = {state.countB===0 }>DecrementB</button>
            <br /><br />
            <button onClick={()=> setState ({type:"reset"})}>RestAll</button>

        </div>
    )
} export default DoubleCoCunter