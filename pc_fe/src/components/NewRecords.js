import React from 'react';
import {useState} from 'react';
import axios from 'axios'

function NewRecords() {
    const [id, set_id] = useState("");
    const [account_company, set_account_company] = useState("");
    const [new_movement_reason, set_new_movement_reason] = useState("");
    const [new_species, set_new_species] = useState("");
    const [new_origin_premid, set_new_origin_premid] = useState("");
    const [new_destination_premid, set_new_destination_premid] = useState("");
    const [new_num_of_item_moved, set_new_num_of_item_moved] = useState("");
    const [new_shipment_start_date, set_new_shipment_start_date] = useState("");
    const [JwtToken, setJwtToken] = useState("")
    const [isNewRecordAdded, setNewRecordAdded] = useState(false)

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.post("/movements", {
                account_company: account_company,
                new_movement_reason: new_movement_reason,
                new_species: new_species,
                new_origin_premid: new_origin_premid,
                new_destination_premid: new_destination_premid,
                new_num_of_item_moved: new_num_of_item_moved,
                new_shipment_start_date: new_shipment_start_date,
                id: id,
                },

                {headers: {
                    Authorization: `Bearer ${JwtToken}`
                }
                
            }).then((response) => {
                if(response.status === 200)
                {
                    set_id(id => "")
                    set_account_company(account_company => "")
                    set_new_movement_reason(new_movement_reason => "")
                    set_new_species(new_species => "")
                    set_new_origin_premid(new_origin_premid => "")
                    set_new_destination_premid(new_destination_premid => "")
                    set_new_num_of_item_moved(new_num_of_item_moved => "")
                    set_new_shipment_start_date(new_shipment_start_date => "")
                    setNewRecordAdded(isNewRecordAdded => true)
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
            <div class="form-group">
                <label class="UsernameText">Id</label>
                <input type="text" value={id} class="form-control" id="UsernameText" 
                        onChange={(e) => set_id(e.target.value)}/>
            </div>
            <div class="form-group">
                <label class="UsernameText">Account Company</label>
                <input type="text" value={account_company} class="form-control" id="UsernameText" 
                        onChange={(e) => set_account_company(e.target.value)}/>
            </div>
            <div class="form-group">
                <label class="UsernameText">Movement Reason</label>
                <input type="text" value={new_movement_reason} class="form-control" id="UsernameText" 
                        onChange={(e) => set_new_movement_reason(e.target.value)}/>
            </div>
            <div class="form-group">
                <label class="UsernameText">Species Type</label>
                <input type="text" value={new_species} class="form-control" id="UsernameText" 
                        onChange={(e) => set_new_species(e.target.value)}/>
            </div>
            <div class="form-group">
                <label class="UsernameText">Origin Premise Id</label>
                <input type="text" value={new_origin_premid} class="form-control" id="UsernameText" 
                        onChange={(e) => set_new_origin_premid(e.target.value)}/>
            </div>
            <div class="form-group">
                <label class="UsernameText">Destination Premise Id</label>
                <input type="text" value={new_destination_premid} class="form-control" id="UsernameText" 
                        onChange={(e) => set_new_destination_premid(e.target.value)}/>
            </div>
            <div class="form-group">
                <label class="UsernameText">Number of Animals moved</label>
                <input type="text" value={new_num_of_item_moved} class="form-control" id="UsernameText" 
                        onChange={(e) => set_new_num_of_item_moved(e.target.value)}/>
            </div>
            <div class="form-group">
                <label class="UsernameText">Timestamp</label>
                <input type="text" value={new_shipment_start_date} class="form-control" id="UsernameText" 
                        onChange={(e) => set_new_shipment_start_date(e.target.value)}/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        {
            isNewRecordAdded && <p> The new record has been added, head back to Data tab</p>
        }
        
    </div>
    );
}

export default NewRecords;