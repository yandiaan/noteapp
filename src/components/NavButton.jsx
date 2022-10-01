import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const NavButton = ({ title, path, handler }) => {
  return (
    <Link
      to={path}
      className={`w-full block my-4 py-2 hover:bg-secondary rounded-lg`}
      onClick={handler}
    >
      {title}
    </Link>
  );
};

NavButton.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  handler: PropTypes.func,
};

export default NavButton;
