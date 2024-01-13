// eslint-disable-next-line
import React from "react";
import Header from "./Header";
import Banair from "./Banair";
import Card from "./Card";
import contacts, {projets} from "./contacts";
import Band from "./Band";
import Tables, {BodyTable} from "./Tables";


function getPoject(projet){
    return <Tables 
        head={projet.head}
        title={projet.title}
        budget={projet.budget}
        deadline={projet.deadline}
        client={projet.client}
    />
}



function App(){
    return <div>
        <Header />
        <Banair />
        <div className="body-content-card container">
        {contacts.map(contact => <Card icon={contact.icon} title={contact.title} content={contact.content} />)}
        </div>
        <Band />
        <BodyTable />
        {projets.map(getPoject)}
    </div>
}
export default App;