import React, {useState, useEffect} from "react";
import axios from 'axios'

const UsersList = ({getUsers}) => {

  const [users, setUsers] = useState(null) 

  
  
  useEffect(() => {
    
      axios.get("http://localhost:5001/api/users")
        .then(res => {
          setUsers(res)
        })
        .catch(err => {
          console.log(err);
        })
    
      
  }, [])
  
  return (
    <div>
      <h3>List of users!</h3>
      {users ? users.map(user => <div>{user.username}</div>) : <h4>Loading...</h4>}
    </div>
  );
};

export default UsersList;
