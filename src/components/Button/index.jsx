import PropTypes from "prop-types";
import "./styles.css";

const Button = ({ onClick, children, type }) => {
  return (
    <button className="button" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
  type: "button",
};

export default Button;
