import { f1Teams } from "../data/f1Data";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icon.png";

import "./components.css";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <img id="img-cabeçalho" src={icon} />

      <span
        id="alterna-menu"
        className="hamburger"
        onClick={() => setOpenMenu(!openMenu)}
      >
        ☰
      </span>

      <nav className={`navbar ${openMenu ? "open" : ""}`}>
        <Link to="/Site-formula-1">Home</Link>

        <div className="dropdown">
          <span className="dropbtn">Teams</span>

          <div className="dropdown-content">
            {f1Teams.map((team) => (
              <Link key={team.id} to={`/teams/${team.id}`}>
                {team.alias}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
