import React from "react";

const ElemList = ({ contacts, onDelete }) => {
  return (
    <div>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            onClick={() => {
              onDelete(contact.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default ElemList;
