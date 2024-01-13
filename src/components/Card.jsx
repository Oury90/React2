import React from "react";


function Card(props){
    return <div className="cnt-card">
        <div className="icon-card">
            <h1>{props.icon}</h1>
        </div>
        <div className="content-card">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    </div>
}
export default Card;