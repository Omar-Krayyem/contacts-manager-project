import '../contacts/contacts.css';
import Card from '../card/card';
import Footer from '../footer/footer'
import Nav from '../nav/nav';
import AddForm from '../addform/addform';

import React, { useState } from 'react';

const Contacts = () => {

    const [isPopupVisible, setPopupVisibility] = useState(false);

    const handleAddButtonClick = (event) => {
        event.preventDefault();
        setPopupVisibility(true);
    }

    return (
        <div>
            <div><Nav/></div>

            <div class="body">
                <div class="addbtn" id="addbtn"><a href="../" onClick={handleAddButtonClick}>Add New Contact</a></div>
                <div class="cards" id="cards">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>         
            </div>

            <div><Footer/></div>
            
            {isPopupVisible && <AddForm onClose={() => setPopupVisibility(false)} />}
        </div>
    );
}

export default Contacts;