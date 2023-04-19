import React from "react";
import Tilt from "react-parallax-tilt";
import Brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
    return (
        <div className="ma4 mt0" style={{width: "100px", height: "100px"}}>
            <Tilt className="br2 shadow-2 logo__background">
                <div>
                    <img src={Brain} alt="Brain Logo" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;