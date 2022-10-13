import React from 'react';
import './Authenticate.css';
import {useState} from 'react';
import axios from 'axios'

function Authenticate() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [JwtToken, setJwtToken] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.post("/authenticate", {
                username: name,
                password: password
            }).then((response) => {
                if(response.status === 200)
                {
                    setJwtToken(JwtToken => response.data.jwt)
                    setName(name => "")
                    setPassword(password => "")
                }                   
            });
        } 
        catch (err) {
          console.log("error", err);
        }
      };
    
    return (
        <form class="parent-forms" onSubmit={handleSubmit}>
            <div class="form-group">
                <label class="UsernameText">Username</label>
                <input type="text" value={name} class="form-control" id="UsernameText" 
                        onChange={(e) => setName(e.target.value)}/>
            </div>
            <div class="form-group">
                <label class="PasswordText">Password</label>
                <input type="password" value={password} class="form-control" id="PasswordText" 
                        onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>

            <div class="form-group">
                <label class="JwtText">Your JwtToken</label>
                <textarea  type="textarea" class="form-control" id="JwtText" rows="6" 
                        value={JwtToken}/>
            </div>
            

        </form>
    );
}

export default Authenticate;