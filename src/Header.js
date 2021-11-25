import React from "react";
const Header = (props) => {
  return (
    <>
      <header className="bd-header fixed-top bg-dark py-3 d-flex align-items-stretch border-bottom border-dark mb-2 d-flex ">
        <div className="container-fluid d-flex align-items-center">
          <h1 className="d-flex align-items-center fs-4 text-white mb-0">
            Movies
          </h1>
        </div>
        <form className="form-inline my-2 my-lg-0 mx-2">
          <input
            onChange={props.search}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </header>
    </>
  );
};
export default Header;
