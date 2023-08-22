import React from 'react';

const SearchConversations = ({ onSearch }) => (
  <div className="search-conversations">
    <input type="text" placeholder="Search..." onChange={(e) => onSearch(e.target.value)} />
  </div>
);

export default SearchConversations;