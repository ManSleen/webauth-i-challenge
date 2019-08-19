import React, {useState} from 'react';

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const {username, password} = credentials;

    const handleChanges = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(credentials);
    }

    return (
        <div>
            <h2>Register a New User</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Username" type="text" name="username" onChange={handleChanges} value={username} />
                <input placeholder="Password" type="password" name="password" onChange={handleChanges} value={password} />
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register;