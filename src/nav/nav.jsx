import React from "react";
import '../nav/nav.css';

const Nav = () => {
    return (
        <div>
            <nav>
                <div></div>
                <div class="logo"><h1>Contact Manager</h1></div>
                <div class="right_nav">
                    <a href="../">Logout</a>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
