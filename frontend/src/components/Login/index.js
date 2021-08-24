import React,{useState} from 'react'
import {Container} from "./login.styled"
async function loginUser(credentials) {
 return fetch('http://localhost:8080/api/user/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}
function Login({setToken}) {
      const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const {username , password} = inputs
    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
    username,
    password
    });
    setToken(token);
  }
    return (
     <Container>
     <form onSubmit={handleSubmit}>
        <div className="login">     
        <h1> issueTracker </h1>

           <div className="inputContainer">
           <label>
           username: </label>
             <input type="text" name="username" className="signup-text-input type-1" onChange={handleChange}/>
            
            </div>
            <div className="inputContainer">
            <label>
                password: </label>
                <input type="password" name="password" className="signup-text-input type-1"onChange={handleChange} />
           
            </div>
            <button type="submit">Submit</button>
        </div>
     </form>
     </Container>
    )
}

export default Login
