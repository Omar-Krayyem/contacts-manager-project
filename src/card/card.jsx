import React from "react";
import '../card/card.css';

const Card = (props) => {
    return(
            <div className="card" id="card">
                <div clclassNameass="face front">
                    <div className="card_img"><img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt=""></img></div>
                    <div className="class-details">
                        <div className="card_title"><h2>{props.name}</h2></div>
                        <div className="card_phone"><h3>{props.phone}</h3></div>
                    </div>
                </div> 
            </div>
    );
}

export default Card;