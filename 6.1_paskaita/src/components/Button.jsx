import PropTypes from "prop-types";

const Button = ({ children, backgroundColor = "red" }) => {
  return <button style={{ backgroundColor }}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Button;