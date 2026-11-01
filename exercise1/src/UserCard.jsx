let name = "mohamed abuukar "
let email = "mohamed@gmail.com"

function UserCard (){
    return(
        <>

        <h1 style = {{color :'red', textAlign: 'center'}}>Persinal information </h1>
        <p style={{fontSize:'30px',fontWeight:'bold',textTransform: 'capitalize'}}>My name is : {name}</p>
        <p style={{fontSize:'30px' ,fontWeight: '', textTransform : 'capitalize'}}>email :   {email}</p>


        </>
    )
}
export default UserCard