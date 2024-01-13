import React, {useState} from "react";

function Timer(){

    var dateNow = new Date().toLocaleTimeString();
    
    var [state, getState] = useState(dateNow)

    function getTime(){
        var dateNow = new Date().toTimeString();
        getState(dateNow)
    }
    setInterval(getTime, 1000);

    return <div className="timer">
        <h3>{state}</h3>
    </div>
}
export default Timer;