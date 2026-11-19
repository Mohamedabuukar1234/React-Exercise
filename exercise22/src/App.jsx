import React, { useState } from 'react'

function App() {
  const[ischeck,setCheck] =useState(false)
  const[selected,setSelected]=useState("")
  const [formData ,setFormData] = useState ({
    userName: "",
    Email : "",
    ID : "",
    password : ""
  })
  const handlesubmit =(event)=>{
    event.preventDefault();
    console.log(formData)
    console.log(ischeck)
    console.log(selected)


  }
  const handlechange =(e)=>{
    const {name,value}=e.target
    setFormData((prev)=>({...prev , [name]:value}))
  }
  
  console
  return (
    <div>
      <form action="" onSubmit={handlesubmit} style={{textAlign:"center", padding: "10px", margin:"5px", border:"2px solid grya", boxShadow:'0 0 20px gray'}}>
      <h2 style={{textAlign:'center', borderBottom : "5px solid gray"}}>THis is exercsie 22</h2>

      <input type="text" name="userName" id="" value={formData.userName} onChange={handlechange} placeholder='User Name' /> 
      <br /> <br />
      <input type="email" name="Email" id="" value={formData.Email} onChange={handlechange} placeholder='Email' />
      <br /><br />
      <input type="tell" name="ID" id="" value={formData.ID} onChange={handlechange} placeholder='ID' />
      <br /><br />
      <input type="password" name="password" id="" value={formData.password} onChange={handlechange} placeholder='Password' />
      <br /> <br />
      <label htmlFor="" style={{textTransform:"capitalize"}}>How Many programin languege do know</label>
      
      <input type="checkbox" name="" id="react" checked={ischeck} onChange={(e)=>setCheck(e.target.checked)} />
      <br /><br />
      <select onChange={(e)=>setSelected(e.target.value)} value={selected}>
        <option value="">selected Country</option>
        <option value="somali">Somali</option>
        <option value="jabuuti">jabuuti</option>
        <option value="kenya">kenya</option>
        <option value="masar">masar</option>
        <option value="falastiin">falastiin</option>
      </select>

      <br /> <br /><br />
      <button type='submit' style={{padding:"10px", borderRadius:"10px", backgroundColor:"tomato", color:'black'}}>submit</button>
      </form>
      
    </div>
  )
}

export default App
