import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";
import { useState } from "react";

function PageNav() {
  const [menu, setMenu] = useState(false);
  function onMenuHandler() {
    const menuOpen = menu ? !menu : !menu;
    setMenu(menuOpen);
  }

  return (
    <nav className={styles.nav}>
      <Logo />

      <ul className={menu ? styles.active : styles.deactivate}>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
        <div className={styles.menu} onClick={() => onMenuHandler()}>
          {menu ? "X" : "="}
        </div>
      </ul>
    </nav>
  );
}

export default PageNav;
