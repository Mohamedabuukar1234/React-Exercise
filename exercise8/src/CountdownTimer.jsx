import { useState,useEffect } from "react"


function CountdownTimer (){
    let [initial, setInitial] =useState (30)
    let [timeLeft, setTimeLeft] = useState (30)
    let [isRuning , setIsRuning ] = useState (false )
    
    useEffect (()=>{
        let timer;
        if(isRuning && timeLeft >0 ){
        timer = setInterval (()=>{
            setTimeLeft ((prev)=> prev-1)


        },1000) 
    }
        return ()=> clearInterval (timer)

    } ,[isRuning ,timeLeft]) 

    const handlechange = (e)=>{
        const value = Number (e.target.value)
        setInitial(value)
        setTimeLeft (value)
        setIsRuning (false)

    }
    const handlestar = ()=>{
        if(timeLeft >0){
            setIsRuning (true)
        }
    }
    const handlestop = ()=>{
        setIsRuning(false)

    }
     let handleReset = ()=>{
        setIsRuning(false)
        setTimeLeft (initial)
     }

    return(
        <div>
            <h2>Countdown Timer</h2>
            <p>sertTime is (second)</p>
            <input type="number" name="" id="" value={initial} onChange={handlechange} />
            <p>time is {timeLeft}second </p>
            <button onClick={handlestar} disabled={isRuning || timeLeft === 0}>star</button>
            <button onClick={handlestop}disabled={!isRuning}> stop</button>
            <button onClick={handleReset}>rest</button>


        </div>
    )
} 
export  default CountdownTimer