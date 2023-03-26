import React, { useState } from "react";
import { dashboardDropdown } from "./navitems";
import { Link } from "react-router-dom";
import "./Dropdown.css";


export function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>

      <ul
        className={dropdown ? "dashboard-submenu clicked" : "dashboard-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {dashboardDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

