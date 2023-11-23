import React from 'react';

export const ListItem = ({ name, phone, id, onDelete }) => {
  return (
    <li>
      <span>{name}</span>: <span>{phone}</span>{' '}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};
