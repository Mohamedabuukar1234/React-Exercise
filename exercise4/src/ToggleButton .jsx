
import { useState } from "react"
function ToggalButtuon(){
    let [ison , seton] = useState(false)
    const toggal = ()=>{
        seton(!ison)

    }
    return(
        <>
        <p>The button is {ison ? "ON": "OF"}</p>
        <button onClick={toggal}> { ison ? "Trun Of ": "Trun On "}</button>

        
        </>
    )









}
export default  ToggalButtuon