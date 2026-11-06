function UserList({users}) {
  return (
    <div>
      <h2 >User list form  </h2>
      {users.length > 0 ? (   ///users.length waxa uu qabanaayo wan in uu xubiyaa varaible ka user la dhaho in eey xogta ku jirto  kadib neh map ayuu ku sameynaa ka dib neh wuusoo banshiga 
        <ul>
          {users.map((users) => (
            <li key={users}>
              
               ID:{users.id} {users.name  }  ({users.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>user not founded</p>
      )}
    </div>
  );
}
export default UserList;
