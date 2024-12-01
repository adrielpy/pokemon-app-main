import PropTypes from "prop-types";
import "./styles.css";

const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: "",
};

export default Input;
