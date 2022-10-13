import React, { useState } from 'react';
import Movements from './Movements';
import Populations from './Populations';
import axios from 'axios'


import './Data.css'

function Data() {

    const [JwtToken, setJwtToken] = useState("")
    const [isCorrectResMovement, setCorrectResMovement] = useState(false)
    const [isCorrectResPopulation, setCorrectResPopulation] = useState(false)
    
    const [movements, setMovements] = useState("")
    const [population, setPopulation] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.get("/movements",{
                headers: {
                     Authorization: `Bearer ${JwtToken}`
            }})
            .then((response) => {
                if(response.status === 200)
                {
                    setCorrectResMovement(isCorrectResMovement => true)
                    setMovements(movements => response.data)
                }                   
            });
            axios.get("/populations",{
                headers: {
                  Authorization : `Bearer ${JwtToken}`
            }})
            .then((response) => {
                if(response.status === 200)
                {
                    setCorrectResPopulation(isCorrectResPopulation => true)
                    setPopulation( population => response.data)
                }                   
            });
            
        } 
        catch (err) {
          console.log("error", err);
        }
        
      };
    
    return (
        <div>
            <form class="parent-forms" onSubmit={handleSubmit}>
                <div class="form-group">
                    <label class="JwtText">Your JwtToken</label>
                    <textarea  type="textarea" class="form-control" id="JwtText" rows="2" 
                            value={JwtToken} onChange={(e) => setJwtToken(e.target.value)}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            {isCorrectResMovement && isCorrectResPopulation &&
                <div className='table'>
                <div class="table1">
                    <Populations ans={population} />
                </div>
                <div class="table2">
                    <Movements ans={movements} />
                </div>
            </div>   
            } 
        </div>

    );
}

export default Data;