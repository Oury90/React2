import React from "react";
// import Button from "./Button";


function Tables(props){
    return  <div className="body-content-table">
    <table class="table table-striped">
        <tbody>
            <tr>
                <td>{props.title}</td>
                <td>{props.budget}</td>
                <td>{props.deadline}</td>
                <td>{props.client}</td>
            </tr>
        </tbody>
    </table>
</div>

}

function BodyTable(){
    return <div className="content-table">
        <p>ABOUT US</p>
        <h1>Know Us Better</h1>

        <div class="table">
        <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Budget</th>
                <th scope="col">Deadline</th>
                <th scope="col">Client</th>
            </tr>
        </thead>  
        </div>  
    </div>

    
    
    
}

export default Tables;
export {BodyTable};