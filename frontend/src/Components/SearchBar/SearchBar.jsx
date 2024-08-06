import React, { useState } from "react";
import "./searchbar.scss";
function SearchBar({onSearch}) {
  // const [query, setQuery] = useState("");
  // const handleInputChange = (e) => {
  //   setQuery(e.target.value);
  //   onSearch(query)
  // };
  return (
    <div>
      <div className="searchBar">
        {/* <img
          src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg"
          alt=""
        /> */}
        <input
          className="searchInput"
          type="text"
          placeholder="Please type in your book name"
          // value={query}
          // onChange={handleInputChange}
          style={{"fontSize": "14px","color":"red"}}
        />
      </div>
    </div>
  );
}

export default SearchBar;
