import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const navigate = useNavigate(); // Initialize navigation hook

  // Function to close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !document.querySelector(".header-menu")?.contains(event.target as Node) &&
        !document.querySelector(".dropdown-menu")?.contains(event.target as Node) &&
        !document.querySelector(".header-profile")?.contains(event.target as Node) &&
        !document.querySelector(".dropdown-profile")?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  const toggleProfile = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsProfileOpen((prev) => !prev);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <header className="header">
      <div className="header-menu" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
        {isMenuOpen && (
          <ul className="dropdown-menu">
            <li><Link to="/homepage" onClick={handleMenuItemClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleMenuItemClick}>About</Link></li>
            <li><Link to="/categories" onClick={handleMenuItemClick}>Categories</Link></li>
            <li><Link to="/contact" onClick={handleMenuItemClick}>Contact</Link></li>
          </ul>
        )}
      </div>

      <Link to="/">
        <div className="header-logo">
          <h1>Gift Glimmer</h1>
        </div>
      </Link>

      <div className="header-search">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="header-icons">
        <div className="header-profile" onClick={toggleProfile}>
          <i className="fas fa-user-circle"></i>
          {isProfileOpen && (
            <ul className="dropdown-profile">
              <li onClick={() => setIsProfileOpen(false)}>My Profile</li>
              <li onClick={() => setIsProfileOpen(false)}>My Orders</li>
              <li onClick={() => setIsProfileOpen(false)}>My Wishlist</li>
              <li onClick={() => setIsProfileOpen(false)}>Logout</li>
            </ul>
          )}
        </div>

        {/* Navigate to Cart when clicking the cart icon */}
        <div className="header-cart" onClick={() => navigate("/cart")}>
          <i className="fas fa-shopping-cart"></i>
        </div>

        <div className="header-login">
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
