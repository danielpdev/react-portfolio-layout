import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [classes, setClasses] = useState({
    menuBtnClass: "",
    menuClass: "",
    menuNavClass: "",
    menuBrandingClass: "",
    menuNavItemClass: "",
    menuPortraitClass: ""
  });
  const toggleMenu = isOpen => {
    if (isOpen) {
      setClasses({
        menuBtnClass: "close",
        menuClass: "show",
        menuNavClass: "show",
        menuBrandingClass: "show",
        menuNavItemClass: "show",
        menuPortraitClass: "show"
      });
    } else {
      setClasses({
        menuBtnClass: "",
        menuClass: "",
        menuNavClass: "",
        menuBrandingClass: "",
        menuNavItemClass: "",
        menuPortraitClass: ""
      });
    }
    setMenuOpen(isOpen);
  };
  const {
    menuBtnClass,
    menuClass,
    menuNavClass,
    menuBrandingClass,
    menuNavItemClass,
    menuPortraitClass
  } = classes;
  const menuItems = [
    {
      link: "/",
      content: "Home"
    },
    {
      link: "/about",
      content: "About"
    },
    {
      link: "/work",
      content: "My work"
    },
    {
      link: "/contact",
      content: "How to reach me"
    }
  ];
  const checkActive = (match, location) => {
    if (!location || match === null) return false;
    const { pathname } = location;
    const { url } = match;
    if (!url) return false;
    return pathname === url;
  };

  return (
    <header>
      <div
        className={`menu-btn ${menuBtnClass}`}
        onClick={() => toggleMenu(!isMenuOpen)}
      >
        <div className="btn-line" />
        <div className="btn-line" />
        <div className="btn-line" />
      </div>
      <nav className={`menu ${menuClass}`}>
        <div className={`menu-branding ${menuBrandingClass}`}>
          <div className={`portrait ${menuPortraitClass}`} />
        </div>
        <ul className={`menu-nav ${menuNavClass}`}>
          {menuItems.map(({ link, content }, index) => (
            <li key={index} className={`nav-item ${menuNavItemClass}`}>
              <NavLink
                to={link}
                isActive={checkActive}
                onClick={() => toggleMenu(false)}
                className="nav-link"
                activeClassName="current"
              >
                {content}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
