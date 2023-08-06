import React from "react";
import '../addform/addform.css'

const Popup = ({ onClose }) =>{
    return (
        <div id="upload_popup" class="upload_popup">
            <div class="upload_files_container">
                <div class="title">
                    <h1>Add Contact</h1>
                </div>
                <form>
                    <div class="text_feild">
                        <label>Contact Name</label><br></br>
                        <input type="text" id="name" placeholder="Contact Name"></input> 
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
                    <input type="submit" class="btn" id="submit" value="Add"></input>
                    <div class="close_btn"><a href="signup.html" onClick={onClose}>Close</a></div>
                </form>
            </div>
          </div>
    );
} 

export default Popup;