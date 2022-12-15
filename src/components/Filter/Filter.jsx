import React from 'react';

export const Filter = ({ onChangeFilter, filter }) => {
  return (
    <div>
      <input type="text" value={filter} onChange={onChangeFilter} />
    </div>
  );
};
