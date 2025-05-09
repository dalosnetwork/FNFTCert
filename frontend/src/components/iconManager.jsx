import PropTypes from "prop-types";

export default function Icon({ name, ...props }) {
  switch (name) {
    case "collapse":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7 6V18M18 6L12 12L18 18"
            stroke="#333333"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    default:
      return null;
  }
}

Icon.propTypes = {
  className: PropTypes.string,
};
