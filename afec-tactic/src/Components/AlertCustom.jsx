import React from "react";

function AlertCustom({color, text}){
    return(
        <span style={{color: color, fontSize: "18px"}}>{text}</span>
    )
}

export default AlertCustom