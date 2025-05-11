// Stat.jsx
import PropTypes from "prop-types";

const Stat = ({ number, text }) => {
  return (
    <div className="statWrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="170"
        height="169"
        viewBox="0 0 170 169"
        fill="none"
      >
        <circle cx="85" cy="84.5" r="74" stroke="#4CBD9A" stroke-width="21" />
      </svg>
      <span className="number font40 bold">{number}</span>
      <span className="text font16">{text}</span>
    </div>
  );
};

Stat.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.string,
};

export default Stat;
