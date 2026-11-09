
 import React, { useState } from 'react'
 import LanguegeChange from './Languages'
import Language from './Language'

 
 function App() {
  const [luqadaha , setLanguage] = useState ("en")
  const badal = ()=>{
    setLanguage ((prev)=> prev === "en" ? "es": "en")
  }

   return (
     <LanguegeChange.Provider value={luqadaha}>
      <button onClick={badal}>Change The Language{luqadaha === "en" ? "es" : "en"}</button>
       <Language />
     </LanguegeChange.Provider>
   )
 }
 
 export default App
 