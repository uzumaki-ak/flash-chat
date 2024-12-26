import React from "react";
import '../components/nav.css';

const Navbar = () => {
  return (
    <nav className=" navbar-dark shadow">
      <div className="container-fluid d-flex justify-content-center">
        <span className="navbar-brand mb-0 h1 d-flex align-items-center">
          {/* Increase the icon size and color */}
          <i
            className="bi bi-messenger"
            style={{ marginRight: '30px', color: '#006400', fontSize: '2rem' }}  
          ></i>
          {/* Increase the text size and make it darker and bolder */}
          <span style={{ fontWeight: '900', color: '#1a1a1a', fontSize: '2.5rem' }}> 
            Flash Chat
          </span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
