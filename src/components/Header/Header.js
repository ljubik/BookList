import React from "react";
import style from "./Header.module.css";


const Header = function () {
  return (
    <header className={style.header}>
      <nav>
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
      </nav>
    </header>
  );
};

export default Header;
