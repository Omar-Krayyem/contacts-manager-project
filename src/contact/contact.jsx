// import React from "react";
import '../contact/contact.css';
import Footer from '../footer/footer'
import Nav from '../nav/nav';

// import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';



const Contact = () => {
    const id = 6;
    // const history = useHistory();


    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [latitude, setLatitude] = useState();
    const [longtude, setLongtude] = useState();
      
    useEffect(() => {
        const getData = async () => {
            try {
              const response = await axios.get(`http://127.0.0.1:8000/api/contacts/${id}`);
              console.log(response.data.data)
              setName(response.data.data.name);
              setPhone(response.data.data.phone);
              setLatitude(response.data.data.latitude);
              setLongtude(response.data.data.longtude);
            } catch (error) {
              console.log(error);
            }
        };
        getData();
    }, id);

    const update = (event) => {
        event.preventDefault();
        
        const postData = {id, name, phone, latitude, longtude };
    
        axios.post('http://127.0.0.1:8000/api/contacts/update', postData)
        .then(response => {
            console.log(response.data.data);
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        });
    };
    

    const deletebtn = (event) => {
        event.preventDefault();
        axios.get(`http://127.0.0.1:8000/api/contacts/destroy/${id}`, id)
        .then(response => {
            console.log(response.data.data);
            window.location.href = '/';
        })
        .catch(error => {
            console.log(error);
            window.location.href = '/contacts';
        });
    };

    return (
        <div>
        <div><Nav/></div>

        <div className="body">
            <div className="title"><h1>Contact Info</h1></div>
            <form>
                <div className="text_feild">
                    <label>Name</label><br></br>
                    <input type="text" id="name" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Name"></input> 
                </div>
                <div className="text_feild">
                <label>Phone</label><br></br>
                <input type="text" id="description" value={phone} onChange={(event)=>setPhone(event.target.value)} placeholder="00961 00 000000"></input> 
                </div>
                <div className="text_feild">
                <label>latitude</label><br></br>
                <input type="text" id="price" value={latitude} onChange={(event)=>setLatitude(event.target.value)} placeholder="Number(00.00)"></input> 
                </div>
                <div className="text_feild">
                    <label>longtude</label><br></br>
                    <input type="text" id="price" value={longtude} onChange={(event)=>setLongtude(event.target.value)} placeholder="Number(00.00)"></input> 
                </div>
                <div className="form_btn"> 
                    <div className="update btn" onClick={update}><a >Update</a></div>
                    <div className="delete btn" onClick={deletebtn}><a >Delete</a></div>
                </div>
                
            </form>
        </div>

        

        <div><Footer/></div>
    </div>
    );
}

export default Contact;