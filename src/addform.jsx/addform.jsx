import './addform.css'
import React, { useState} from 'react';
import axios from 'axios';

const AddForm = ({ onClose }) =>{
    
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    
    const add = (event) => {
        event.preventDefault();

        const postData = { name, phone, latitude, longitude };

        axios.post('http://127.0.0.1:8000/api/contacts/store', postData)
        .then(response => {
            console.log(response.data.data);
            window.location.reload();
            onClose()
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div id="upload_popup" className="upload_popup">
            <div className="upload_files_container">
                <div className="title">
                    <h1>Add Contact</h1>
                </div>
                <form>
                    <div className="text_feild">
                        <label>Contact Name</label><br></br>
                        <input type="text" id="name" placeholder="Contact Name" onChange={(event)=>setName(event.target.value)}></input> 
                    </div>
                    <div className="text_feild">
                        <label>Phone</label><br></br>
                        <input type="text" id="description" placeholder="00961 00 000000" onChange={(event)=>setPhone(event.target.value)}></input> 
                    </div>
                    <div className="text_feild">
                        <label>latitude</label><br></br>
                        <input type="text" id="price" placeholder="Number(00.00)" onChange={(event)=>setLatitude(event.target.value)}></input> 
                    </div>
                    <div className="text_feild">
                        <label>longitude</label><br></br>
                        <input type="text" id="price" placeholder="Number(00.00)" onChange={(event)=>setLongitude(event.target.value)}></input>
                    </div>
                    <input type="submit" className="btn" id="submit" onClick={add} value="Add"></input>
                    <div className="close_btn"><a href="../" onClick={onClose}>Close</a></div>
                </form>
            </div>
          </div>
    );
} 

export default AddForm;