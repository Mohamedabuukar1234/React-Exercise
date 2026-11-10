import React from 'react'
import Userform from './Userform'

function ContactForm() {
    const {values , handlechange}= Userform ({
        name: "",
        email : "",
        id :""  ,
        message: ""
      })
      const handlesubmit = (event)=>{
        event.preventDefault();
        console.log("form Data is " ,{values})

      }
    
  return (
    <div>
        <form action="" onSubmit={handlesubmit}>

    <div>
        <label htmlFor="">Name : </label>
        <input type="text" name="name" id="" placeholder='enter you name' value={values.name} onChange={handlechange} required />
    </div>
    <div>
        <label htmlFor="">Email:</label>
        <input type="email" name="email" id="" value={values.email} required onChange={handlechange} />
    </div>
    <div>

        <label htmlFor="">ID:</label>
        <input type="tell" name="id" id="" value={values.id} onChange={handlechange} />

    </div>
    <div>
    <label htmlFor="">message</label>
    <textarea name="message" id="" value={values.message} onChange={handlechange} ></textarea>


    </div> <br /><br />
    <button type='submit' >submit</button>


        </form>
      
    </div>
  )
}

export default ContactForm
