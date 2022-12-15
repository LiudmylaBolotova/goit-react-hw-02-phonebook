import React from 'react';
import ElemList from 'components/ElemList';

export const ContactList = ({ contacts, onDelete }) => (
  <ul>
    <ElemList contacts={contacts} onDelete={onDelete} />
  </ul>
);
