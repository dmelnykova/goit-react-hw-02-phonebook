import React from 'react';

export const FilterField = ({ filter, onChange }) => {
  return (
    <label>
      Filter contacts by name:
      <input type="text" value={filter} onChange={e => onChange(e.target.value)} />
    </label>
  );
};