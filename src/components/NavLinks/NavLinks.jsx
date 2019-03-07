import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div>
      <Link to="/">home!!</Link>
      <Link to="/twitter?searchTerm=obama&year=2016&topic=anything">
        show me Twitter!
      </Link>
      <Link to="/tacos">show me TAcos!</Link>
      <Link to="/tacos/10/zzz">show me TAcos 10!</Link>
    </div>
  );
}

export default NavLinks;
