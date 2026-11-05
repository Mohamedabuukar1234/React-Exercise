import { useState,useEffect } from "react"
function App(){
  const [search,setSearch]=useState ("")
  const [userdate,SetUserdate] =useState(null)
  const [loading,setLoading] = useState (false)
  const [error ,setError] = useState ("")

  useEffect (()=>{
    if(error){
      console.error("error fething git hub",error)
    }
  } , [error])

  const handlesearch = async ()=>{
    if(!search) return
    setLoading(true)
    setError ('')
    SetUserdate(null)
    try{
      await new Promise ((resolve)=>setTimeout (resolve,1000))
      const responsive = await fetch (`https://api.github.com/users/${search.toLowerCase()}`);
      if(!responsive.ok) {
        throw new error ('git hub not found')
      }
      let date = await responsive.json()
      SetUserdate (date)




    }catch(e){
      setError (e.message);

    }
    finally {
      setLoading (false)
    }

  }

  return(
    <div>
      <h2>gitHub user search </h2>

      <input type="text" name="" id="" placeholder="enter githupuser " 
      value={search}
      onChange={(e)=> setSearch (e.target.value)}/>
      <button onClick={handlesearch}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}



     {userdate && (
        <div style={{ marginTop: '1rem' }}>
          <h3>{userdate.name || userdate.login}</h3>
          <img
            src={userdate.avatar_url}
            alt={userdate.login}
            width="100"
            style={{ borderRadius: '50%' }}
          />
          <p>Location: {userdate.location || 'N/A'}</p>
          <p>Public Repos: {userdate.public_repos}</p>
        </div>
      )}
      

    </div>
  )
}
export default App