import React from "react";
import PropTypes from "prop-types";

const InputAuth = ({ type, placeholder, handler }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handler}
      autoComplete="true"
      className="w-full py-2 px-4 mt-12 rounded-lg bg-neutral border-primary border-2 focus:bg-secondary text-primary focus:text-white focus:placeholder:text-white placeholder:text-primary"
    />
  );
};

InputAuth.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handler: PropTypes.func,
};

export default InputAuth;
