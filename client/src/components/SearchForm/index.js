import React from "react";

const SearchForm = props => {
  return (
    <form>
      <div className="form-group" style={{ textAlign: "center" }}>
        <input className="form-control form-control-lg" style={{ textAlign: "center", marginTop: "60px" }}
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Book"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
