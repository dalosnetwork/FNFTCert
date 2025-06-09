import PropTypes from "prop-types";

export default function Icon({ name, ...props }) {
  switch (name) {
    case "collapse":
      return (
        <svg
          className={props.className}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7 6V18M18 6L12 12L18 18"
            stroke="#333333"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "profile":
      return (
        <svg
          className={props.className}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6.168 18.849C6.41551 18.0252 6.92197 17.3032 7.61225 16.79C8.30252 16.2768 9.13985 15.9997 10 16H14C14.8613 15.9997 15.6996 16.2774 16.3904 16.7918C17.0812 17.3062 17.5875 18.0298 17.834 18.855M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12ZM9 10C9 10.7956 9.31607 11.5587 9.87868 12.1213C10.4413 12.6839 11.2044 13 12 13C12.7956 13 13.5587 12.6839 14.1213 12.1213C14.6839 11.5587 15 10.7956 15 10C15 9.20435 14.6839 8.44129 14.1213 7.87868C13.5587 7.31607 12.7956 7 12 7C11.2044 7 10.4413 7.31607 9.87868 7.87868C9.31607 8.44129 9 9.20435 9 10Z"
            stroke="#333333"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "sort":
      return (
        <svg
          className={props.className}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_106_985)">
            <path
              d="M4 15L7 18L10 15"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 6V18"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 3C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V8C19 8.53043 18.7893 9.03914 18.4142 9.41421C18.0391 9.78929 17.5304 10 17 10C16.4696 10 15.9609 9.78929 15.5858 9.41421C15.2107 9.03914 15 8.53043 15 8V5C15 4.46957 15.2107 3.96086 15.5858 3.58579C15.9609 3.21071 16.4696 3 17 3Z"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 16C15 16.5304 15.2107 17.0391 15.5858 17.4142C15.9609 17.7893 16.4696 18 17 18C17.5304 18 18.0391 17.7893 18.4142 17.4142C18.7893 17.0391 19 16.5304 19 16C19 15.4696 18.7893 14.9609 18.4142 14.5858C18.0391 14.2107 17.5304 14 17 14C16.4696 14 15.9609 14.2107 15.5858 14.5858C15.2107 14.9609 15 15.4696 15 16Z"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 16V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H15.5"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_106_985">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "sortReverse":
      return (
        <svg
          className={props.className}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_105_456)">
            <path
              d="M10 8L7 5L4 8"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 6V18"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 3C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V8C19 8.53043 18.7893 9.03914 18.4142 9.41421C18.0391 9.78929 17.5304 10 17 10C16.4696 10 15.9609 9.78929 15.5858 9.41421C15.2107 9.03914 15 8.53043 15 8V5C15 4.46957 15.2107 3.96086 15.5858 3.58579C15.9609 3.21071 16.4696 3 17 3Z"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 16C15 16.5304 15.2107 17.0391 15.5858 17.4142C15.9609 17.7893 16.4696 18 17 18C17.5304 18 18.0391 17.7893 18.4142 17.4142C18.7893 17.0391 19 16.5304 19 16C19 15.4696 18.7893 14.9609 18.4142 14.5858C18.0391 14.2107 17.5304 14 17 14C16.4696 14 15.9609 14.2107 15.5858 14.5858C15.2107 14.9609 15 15.4696 15 16Z"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 16V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H15.5"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_105_456">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "search":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_105_426)">
            <path
              d="M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 21L15 15"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_105_426">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    case "date":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
        >
          <path
            d="M13 1V5M5 1V5M1 9H17M1 5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3H15C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V17C17 17.5304 16.7893 18.0391 16.4142 18.4142C16.0391 18.7893 15.5304 19 15 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V5ZM5 13H7V15H5V13Z"
            stroke="#333333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "previous":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M13.8831 5.00695L13.9411 5.00195H14.0591L14.1171 5.00695L14.1771 5.01595L14.2291 5.02595L14.3371 5.05795L14.4041 5.08495L14.5361 5.15495L14.6261 5.21995L14.7071 5.29295L14.7901 5.38695L14.8441 5.46395L14.8981 5.55995L14.9151 5.59595L14.9421 5.66295L14.9741 5.77095L14.9841 5.82395L14.9941 5.88395L14.9981 5.94095L15.0001 5.99995V18C15.0001 18.852 14.0141 19.297 13.3771 18.783L13.2931 18.707L7.29311 12.707C7.12093 12.5348 7.0175 12.3057 7.00222 12.0626C6.98694 11.8196 7.06085 11.5794 7.21011 11.387L7.29311 11.293L13.2931 5.29295L13.3871 5.20995L13.4641 5.15595L13.5601 5.10195L13.5961 5.08495L13.6631 5.05795L13.7711 5.02595L13.8241 5.01595L13.8841 5.00595L13.8831 5.00695Z"
            fill="#4CBD9A"
          />
        </svg>
      );
    case "next":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10.1169 5.00695L10.0589 5.00195H9.94089L9.88289 5.00695L9.82289 5.01595L9.77089 5.02595L9.66289 5.05795L9.59589 5.08495L9.46389 5.15495L9.37389 5.21995L9.29289 5.29295L9.20989 5.38695L9.15589 5.46395L9.10189 5.55995L9.08489 5.59595L9.05789 5.66295L9.02589 5.77095L9.01589 5.82395L9.00589 5.88395L9.00189 5.94095L8.99989 5.99995V18C8.99989 18.852 9.98589 19.297 10.6229 18.783L10.7069 18.707L16.7069 12.707C16.8791 12.5348 16.9825 12.3057 16.9978 12.0626C17.0131 11.8196 16.9391 11.5794 16.7899 11.387L16.7069 11.293L10.7069 5.29295L10.6129 5.20995L10.5359 5.15595L10.4399 5.10195L10.4039 5.08495L10.3369 5.05795L10.2289 5.02595L10.1759 5.01595L10.1159 5.00595L10.1169 5.00695Z"
            fill="#4CBD9A"
          />
        </svg>
      );
    case "passwordShow":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_113_699)">
            <path
              d="M10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 12C18.6 16 15.6 18 12 18C8.4 18 5.4 16 3 12C5.4 8 8.4 6 12 6C15.6 6 18.6 8 21 12Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_113_699">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "passwordHide":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_113_683)">
            <path
              d="M21 9C18.6 11.667 15.6 13 12 13C8.4 13 5.4 11.667 3 9"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 15L5.5 11.2"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.0001 14.976L18.5081 11.2"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 17L9.5 13"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 17L14.5 13"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_113_683">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "datePrevious":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="#333333"
            stroke-width="1.67"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "dateNext":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M7.5 15L12.5 10L7.5 5"
            stroke="#333333"
            stroke-width="1.67"
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
