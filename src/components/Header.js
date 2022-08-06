import React from "react";

import logo from "../images/header__logo.svg";

function Header() {
  return (
    <header className="header">
      <a href="#" title="Mesto">
        <img src={logo} className="header__logo" alt="Логотип сайта" />
      </a>
    </header>
  );
}
export default Header;
