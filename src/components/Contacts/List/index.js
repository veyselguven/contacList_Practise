import React, { useState } from "react";

function List({ contacts }) {
  // console.log("Listcontact props=>", contacts);
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });

  return (
    <div>
      <input
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, i) => (
          <div key={i}>
            <li>
              Name:
              {contact.fullname}
              <span>
                Phone:
                {contact.phone_number}
              </span>
            </li>
          </div>
        ))}
      </ul>
      <p>Total Contact is {filtered.length}</p>
    </div>
  );
}

export default List;
