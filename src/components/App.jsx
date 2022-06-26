import React from "react";
import Card from "./card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contacts) {
  return (
    <Card
      key={contacts.id}
      name={contacts.name}
      tel={contacts.phone}
      email={contacts.email}
      img={contacts.imgURL}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img={contacts[0].imgURL} />
      {contacts.map(createCard)}

      {/* <Card 
     name={contacts[0].name}
     tel={contacts[0].phone}
     email={contacts[0].email}
     img={contacts[0].imgURL}
     />
     <Card 
     name="Jack Bauer"
     tel="+987 654 321"
     email="jack@nowhere.com"
     img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
     />
     <Card 
    name="Chuck Norris"
    img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
    tel="+918 372 574"
    email="gmail@chucknorris.com"
     /> */}
    </div>
  );
}

export default App;
