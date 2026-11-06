import UserList from "./UserList"
function App(){
  const users = [
    {id : 45 , name : "Mudey" , email : "Mudey@gmail.com"},
    {id : 49 , name : "mohamed" , email : "Moha@gmail.com"},
    {id : 63 , name : "Yusuf" , email : "Yusuf@gmail.com"}
  ]
  return(
    <div>
      
    <UserList users={users} />

    </div>
  )
} export default App