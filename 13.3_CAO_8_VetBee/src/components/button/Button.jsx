import PropTypes from "prop-types";

import './button.css';

const Button = ({ label, link, className }) => {
  return (
    <a href={link} className={`link-button ${className || ''}`}>
        {label}
    </a>
  );
};

Button.propTypes = {
  label: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired
};

export default Button;