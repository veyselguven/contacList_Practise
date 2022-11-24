import React, { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import "./sstyle.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Veysel",
      phone_number: "6504850316",
    },
    {
      fullname: "Hatun",
      phone_number: "653033530",
    },
    {
      fullname: "Habib",
      phone_number: "32159451",
    },
    {
      fullname: "Merve",
      phone_number: "0544999114",
    },
    {
      fullname: "Irem",
      phone_number: "215912231",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
