import React, { Component } from "react";

const Navbar = ({ totalCounters }) => {
  console.log("Navbar rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <b>Contador de Puntos</b> - Cantidad de Jugadores:{" "}
        <span className="bagde badge-pill badge-secondary ml-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
