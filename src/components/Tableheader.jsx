import React from "react";

function Tableheader(){
    return <div className="ctn-table">
    <div className="content-table">
        <p>ABOUT US</p>
        <h1>Know Us Better</h1>
    </div>

    <div className="body-content-table">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Deadline</th>
                    <th scope="col">Client</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{props.title}</td>
                    <td>{props.budget}</td>
                    <td>{props.deadline}</td>
                    <td>{props.client}</td>
                </tr>
            </tbody>
        </table>
        <div className="slide-table">
            <h3>Please tell us about your idea and <br/>how you want it to be</h3>
            <p>
            You are allowed to use this template for your websites. You are NOT allowed to redistribute the template ZIP file on any other template websites.<br/>
            Thank you for downloading and using our templates. Please tell your friends about our website.
            </p>
            <Button />
        </div>
    </div>
</div>
}
export default Tableheader;