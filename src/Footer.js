

import React from "react";
import "./Footer.css";



const Footer = ({ props }) => {
    const numItems = props.length;
    const numPacked = props.filter((items) => items.checked).length;
    const percent = Math.round((numPacked / numItems) * 100);
    return (
        <div className="foot-con">
            <em>
                {" "}
                {percent === 100 ? (
                    <p className="text">You got everything! Ready to go</p>
                ) : (
                    <p className="text">
                        You have {numItems} items on your list, you already packed{" "}
                        {numPacked} ({percent}
                        %)
                    </p>
                )}
            </em>
        </div>
    );
};

export default Footer;