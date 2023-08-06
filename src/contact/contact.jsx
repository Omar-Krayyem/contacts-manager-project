import React from "react";
import '../contact/contact.css';
import Footer from '../footer/footer'
import Nav from '../nav/nav';

const Contact = () => {
    return (
        <div>
        <div><Nav/></div>

        <div class="body">
            <div class="title"><h1>Contact Info</h1></div>
            <form>
                <div class="text_feild">
                    <label>Name</label><br></br>
                    <input type="text" id="name" placeholder="Name"></input> 
                </div>
                <div class="text_feild">
                <label>Phone</label><br></br>
                <input type="text" id="description" placeholder="00961 00 000000"></input> 
                </div>
                <div class="text_feild">
                <label>latitude</label><br></br>
                <input type="text" id="price" placeholder="Number(00.00)"></input> 
                </div>
                <div class="text_feild">
                    <label>longtude</label><br></br>
                    <input type="text" id="price" placeholder="Number(00.00)"></input> 
                </div>
                <div class="form_btn"> 
                    <div class="update btn"><a href="signup.html">Update</a></div>
                    <div class="delete btn"><a href="signup.html">Delete</a></div>
                </div>
                
            </form>
        </div>

        

        <div><Footer/></div>
    </div>
    );
}

export default Contact;