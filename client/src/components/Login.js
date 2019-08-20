import React, {useState} from 'react';

const Login = ({login}) => {

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const {username, password} = credentials;

    const handleChanges = (e) => {
        setCredentials({...credentials, [e.target.name] : e.target.value})
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(credentials)
    }

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Username"type="text" value={username} name="username" onChange={handleChanges} />
                <input placeholder="Password"type="password" value={password} name="password" onChange={handleChanges} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;