import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export function Search() {
  const [state, setState] = useState();
  const history = useHistory();
  const submitHandler = (e) => {
    e.target.reset();
    e.preventDefault(); 
    history.push("/?q=" + state);
  };

  return (
    <form onSubmit={submitHandler} className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setState(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}
