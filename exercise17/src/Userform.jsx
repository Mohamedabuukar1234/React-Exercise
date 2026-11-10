import React, { useState } from 'react'


function useForm (initialValues) {
    const [values ,setValues] =useState(initialValues)
    const handlechange =(event)=>{
       const {name,value} = event.target;
       setValues ({
        ...values, [name]:value
       })

    }


  return {values,handlechange}
  
 
}

export default useForm 
