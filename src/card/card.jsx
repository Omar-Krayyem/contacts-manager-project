import React from "react";
import '../card/card.css';
import {Link} from "react-router-dom";

const Card = (props) => {
    
    // const move = () => {
    //     // event.preventDefault();
    //     window.location.href = '/contact/contact';
    // }

    return(
        <Link to={`/contact/${props.id}`}>
            <div className="card" id="card">
                <div className="face front">
                    <div className="card_img"><img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt=""></img></div>
                    <div className="class-details">
                        <div className="card_title"><h2>{props.name}</h2></div>
                        <div className="card_phone"><h3>{props.phone}</h3></div>
                    </div>
                </div> 
            </div>
        </Link>
    );
}

export default Card;