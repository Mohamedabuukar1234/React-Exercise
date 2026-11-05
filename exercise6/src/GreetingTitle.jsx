import { useState , useEffect } from "react";

function Greeting (){
    const [name ,setName] = useState ("")
    const [Greeting ,setGreeting] = useState ("helow")

    useEffect (()=>{  
       if(!name){
        document.title ='welcome';
       }else{
        document.title = `${Greeting} ${name}`  // haduu la mid noqon waayo welcome kan code ayaa la qora 
       }
    } ,
    [Greeting,name] // kani waa depence ka 
)

    
    return(
        <div>
            <h2>Enter you name </h2>
            <br />
            <input type="text" name="" id="" placeholder="name"
            value={name}
            onChange={(e)=> setName(e.target.value) } />
            <h2> Greeting</h2>
            <input type="text" name="" id="" placeholder="greeting " value={Greeting}
            onChange={(e)=>setGreeting(e.target.value)} />


        </div>
    )

} export default Greeting