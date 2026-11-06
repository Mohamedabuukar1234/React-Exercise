import { useState } from "react";

function Loginform (){
    const [userName, setUsername] = useState ("")
    const [password , setPassword] = useState ("")
    const [isLoging , setLoging] = useState (false)

    const handlelogin =(event)=>{
        event.preventDefault();
        if(userName && password){
            setLoging (true)
        }

    }

    let handleOut = ()=>{
        setUsername ('')
        setPassword("")
        setLoging (false)
    }


    if(isLoging){
        return(
            <div>
                <h2>welcome Mudane {userName}</h2>
                <button onClick={handleOut}> Loging Out </button>
            </div>
        )
    }

    return(
        <div>
            <form action="" onSubmit={handlelogin}>
                <h2>Loging Form </h2>
                <div>
                <label htmlFor="">User Name</label>
                <input type="text" name="" id=""placeholder="User Name " value={userName} onChange={(e)=> setUsername (e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="" value={password} onChange={(e)=>setPassword (e.target.value)} required />
                </div>
                <button type="submit">Login</button>
               

            </form>

            
        </div>
    )
} export default Loginform