import React from "react";
import '../card/card.css';

const Card = () => {
    return(
            <div class="card" id="card">
                <div class="face front">
                    <div class="card_img"><img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt=""></img></div>
                    <div class="class-details">
                        <div class="card_title"><h2>Omar Krayyem</h2></div>
                        <div class="card_phone"><h3>00961 81 766990</h3></div>
                    </div>
                </div> 
            </div>
    );
}

export default Card;