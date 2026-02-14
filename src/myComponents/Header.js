import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './Header.css';

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="movie-navbar">
      <div className="navbar-container">
        
        {/* Brand logo/title */}
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>

        {/* Mobile toggle button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links and search */}
        <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          {/* Search bar */}
          {props.searchBar && (
            <form className="navbar-search" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="search-input" 
                type="search" 
                placeholder="Search movies..." 
                aria-label="Search" 
              />
              <button className="search-btn" type="submit">
                Search
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: "My Movies App",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}