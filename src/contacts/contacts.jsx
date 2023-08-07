import '../contacts/contacts.css';
import Card from '../card/card';
import Footer from '../footer/footer'
import Nav from '../nav/nav';
import AddForm from '../addform.jsx/addform';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contacts = () => {

    const [isPopupVisible, setPopupVisibility] = useState(false);

    const handleAddButtonClick = (event) => {
        event.preventDefault();
        setPopupVisibility(true);
    }

    const [cards, setCards] = useState([]);

    const fetchCards = async () => {
      await axios.get("http://127.0.0.1:8000/api/contacts/all")
      .then(response => {
        console.log(response.data.data);
        setCards(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
      
    };
  
    useEffect(() => {
      fetchCards();
    }, []);

    return (
        <div>
            <div><Nav/></div>

            <div className="body">
                <div className="addbtn" id="addbtn"><a href="../" onClick={handleAddButtonClick}>Add New Contact</a></div>
                <div className="cards" id="cards">

                    {cards.map((card) => (
                      
                            <Card id={card.id} name={card.name} phone={card.phone} />
                    ))}
                </div>         
            </div>

            <div><Footer/></div>
            
            {isPopupVisible && <AddForm onClose={() => setPopupVisibility(false)} />}
        </div>
    );
}

export default Contacts;