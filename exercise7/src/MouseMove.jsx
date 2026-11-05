import { useState , useEffect } from "react"

function MouseMove (){
    const [mouse,setMove ] = useState ({x : 0 , y : 0})
    const[width , setWidth] = useState (window.innerWidth)
    useEffect (()=>{   
        const handleWidth = ()=>
            setWidth(window.innerWidth)
            window.addEventListener("resize" ,handleWidth)
        
        const handlemove= (e)=>{ 
            setMove ({x: e.clientX  , y: e.clientY}) 

            } 
             window.addEventListener("mousemove" ,handlemove) // markaan neh waa marki moveka dhaqaaqo shaqada uu qaban lahaa 
             return ()=>{
                window.removeEventListener("mousemove", handlemove) // wa marka moue move uu clear kareyo 
        } 

    },[])
    return(
        <div>
            <h2>Total Screen Width : {width} px </h2>
            <p>MouseMove x :{mouse.x} </p>
            <p>MouseMove y :{mouse.y} </p>

        </div>
    )
} export default MouseMove