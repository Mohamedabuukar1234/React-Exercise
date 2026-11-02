import UseCard from "./UseCard"


function App(){
  let name = 'ali '
  let email = 'ali@gamil.com' 
  return (
    <>
    <UseCard
    name="mohamed abuukar "
    email = 'moha@gmail.com'
    />
      <UseCard
    name={name}
    email = {email}
    />
    
    </>
  )
}
export default App