import React from "react";

const SearchBox = (props) => {
    const saveSearchState = (event) => {
        props.setSearchValue(event.target.value)
    }
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={props.searchValue}
        onChange={saveSearchState}
        placeholder="Search for a Movie..."
      ></input>
    </div>
  );
};

export default SearchBox;
