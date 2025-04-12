import PropTypes from "prop-types";

export default function Icon({ name, ...props }) {
  switch (name) {
    case "bookmark":
      return (
        <svg
          className={props.className}
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 11L6 8.5L2.5 11V3C2.5 2.73478 2.60536 2.48043 2.79289 2.29289C2.98043 2.10536 3.23478 2 3.5 2H8.5C8.76522 2 9.01957 2.10536 9.20711 2.29289C9.39464 2.48043 9.5 2.73478 9.5 3V11Z"
            stroke="#589E67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "lock":
      return (
        <svg
          className={props.className}
          style={props.style}
          width="36"
          height="37"
          viewBox="0 0 36 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.5" width="36" height="36" rx="18" fill="#F27457" />
          <path
            d="M14.5 15.1945V16.5556H23.0556C23.5713 16.5556 24.0658 16.7604 24.4305 17.1251C24.7951 17.4897 25 17.9843 25 18.5V24.7222C25 25.2379 24.7951 25.7325 24.4305 26.0972C24.0658 26.4618 23.5713 26.6667 23.0556 26.6667H12.9444C12.4287 26.6667 11.9342 26.4618 11.5695 26.0972C11.2049 25.7325 11 25.2379 11 24.7222V18.5C11 17.9843 11.2049 17.4897 11.5695 17.1251C11.9342 16.7604 12.4287 16.5556 12.9444 16.5556H13.3333V15.1945C13.3333 12.5461 15.2801 10.3333 18 10.3333C20.1716 10.3333 21.8663 11.7528 22.4473 13.6856C22.4715 13.7595 22.4807 13.8375 22.4742 13.915C22.4678 13.9925 22.446 14.068 22.41 14.1369C22.374 14.2058 22.3245 14.2669 22.2646 14.3165C22.2047 14.366 22.1354 14.4031 22.0609 14.4255C21.9865 14.4479 21.9083 14.4552 21.8309 14.4469C21.7536 14.4387 21.6787 14.415 21.6106 14.3774C21.5426 14.3397 21.4827 14.2889 21.4346 14.2278C21.3865 14.1667 21.3511 14.0966 21.3304 14.0216C20.8856 12.5422 19.617 11.5 18 11.5C15.9949 11.5 14.5 13.1178 14.5 15.1945ZM12.1667 18.5V24.7222C12.1667 24.9285 12.2486 25.1263 12.3945 25.2722C12.5403 25.4181 12.7382 25.5 12.9444 25.5H23.0556C23.2618 25.5 23.4597 25.4181 23.6055 25.2722C23.7514 25.1263 23.8333 24.9285 23.8333 24.7222V18.5C23.8333 18.2937 23.7514 18.0959 23.6055 17.95C23.4597 17.8042 23.2618 17.7222 23.0556 17.7222H12.9444C12.7382 17.7222 12.5403 17.8042 12.3945 17.95C12.2486 18.0959 12.1667 18.2937 12.1667 18.5Z"
            fill="white"
          />
        </svg>
      );
    case "next":
      return (
        <svg
          className={props.className}
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.25 3.125L9.625 7.5L5.25 11.875"
            stroke="#0C5152"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "previous":
      return (
        <svg
          className={props.className}
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.75 11.875L4.375 7.5L8.75 3.125"
            stroke="#0C5152"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "sort":
      return (
        <svg
          className={props.className}
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 8.5H12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5.5H14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.5 11.5H9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "sort2":
      return (
        <svg
          className={props.className}
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.25 4.25L6 2L3.75 4.25"
            stroke="#727272"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.25 8.75L6 11L3.75 8.75"
            stroke="#727272"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "filter":
      return (
        <svg
          className={props.className}
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.63037 3.5H13.3698C13.4667 3.5 13.5615 3.52814 13.6426 3.58099C13.7238 3.63384 13.7879 3.70914 13.8271 3.79772C13.8663 3.88631 13.8789 3.98437 13.8634 4.07999C13.8479 4.1756 13.8049 4.26466 13.7398 4.33634L9.63013 8.85697C9.54646 8.949 9.5001 9.06892 9.5001 9.1933V12.7324C9.5001 12.8147 9.47977 12.8958 9.44093 12.9683C9.40209 13.0409 9.34594 13.1028 9.27745 13.1484L7.27745 14.4818C7.20215 14.532 7.11463 14.5608 7.02424 14.5652C6.93384 14.5695 6.84396 14.5493 6.76417 14.5066C6.68438 14.4639 6.61767 14.4003 6.57116 14.3227C6.52466 14.245 6.5001 14.1562 6.5001 14.0657V9.1933C6.5001 9.06892 6.45373 8.949 6.37007 8.85697L2.2604 4.33634C2.19524 4.26466 2.15231 4.1756 2.13681 4.07999C2.12131 3.98437 2.13393 3.88631 2.17311 3.79772C2.2123 3.70914 2.27638 3.63384 2.35755 3.58099C2.43873 3.52814 2.53351 3.5 2.63037 3.5V3.5Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "password":
      return (
        <svg
          className={props.className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8825 4.88128L19.1465 4.14533C18.9385 3.93734 18.5545 3.96935 18.3145 4.2573L15.7543 6.80126C14.6023 6.30532 13.3384 6.06532 12.0103 6.06532C8.05822 6.08126 4.63444 8.38523 2.98633 11.6974C2.8903 11.9054 2.8903 12.1614 2.98633 12.3373C3.75426 13.9054 4.90633 15.2014 6.34633 16.1773L4.25034 18.3053C4.01034 18.5453 3.97833 18.9293 4.13838 19.1373L4.87432 19.8732C5.08231 20.0812 5.4663 20.0492 5.7063 19.7613L19.7542 5.71339C20.0582 5.47352 20.0902 5.08956 19.8822 4.88155L19.8825 4.88128ZM12.8583 9.71316C12.5863 9.64914 12.2984 9.56919 12.0264 9.56919C10.6663 9.56919 9.57842 10.6572 9.57842 12.0171C9.57842 12.2891 9.64244 12.5771 9.72239 12.8491L8.65028 13.9051C8.33032 13.3452 8.15433 12.7211 8.15433 12.0172C8.15433 9.88918 9.86636 8.17715 11.9943 8.17715C12.6984 8.17715 13.3224 8.35314 13.8823 8.6731L12.8583 9.71316Z"
            fill="white"
            fillOpacity="0.8"
          />
          <path
            d="M21.0344 11.6974C20.4745 10.5773 19.7384 9.56939 18.8265 8.75336L15.8504 11.6974V12.0173C15.8504 14.1453 14.1384 15.8573 12.0104 15.8573H11.6905L9.80249 17.7453C10.5065 17.8893 11.2425 17.9853 11.9625 17.9853C15.9146 17.9853 19.3384 15.6813 20.9865 12.3532C21.1305 12.1291 21.1305 11.9052 21.0345 11.6972L21.0344 11.6974Z"
            fill="white"
            fillOpacity="0.8"
          />
        </svg>
      );

    case "copy":
      return (
        <svg
          className={props.className}
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon / copy">
            <path
              id="Vector"
              d="M3.84333 13.9475C3.58779 13.8018 3.37523 13.5912 3.22715 13.3371C3.07906 13.0829 3.00071 12.7942 3 12.5V4.16667C3 3.25 3.75 2.5 4.66667 2.5H13C13.625 2.5 13.965 2.82083 14.25 3.33333M6.33333 8.05583C6.33333 7.46639 6.56749 6.90109 6.98429 6.48429C7.40109 6.06749 7.96639 5.83333 8.55583 5.83333H15.7775C16.0694 5.83333 16.3584 5.89082 16.628 6.00251C16.8977 6.1142 17.1427 6.27791 17.349 6.48429C17.5554 6.69067 17.7191 6.93567 17.8308 7.20532C17.9425 7.47497 18 7.76397 18 8.05583V15.2775C18 15.5694 17.9425 15.8584 17.8308 16.128C17.7191 16.3977 17.5554 16.6427 17.349 16.849C17.1427 17.0554 16.8977 17.2191 16.628 17.3308C16.3584 17.4425 16.0694 17.5 15.7775 17.5H8.55583C8.26397 17.5 7.97497 17.4425 7.70532 17.3308C7.43567 17.2191 7.19067 17.0554 6.98429 16.849C6.77791 16.6427 6.6142 16.3977 6.50251 16.128C6.39082 15.8584 6.33333 15.5694 6.33333 15.2775V8.05583Z"
              stroke="#6B7280"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );
    case "search":
      return (
        <svg
          className={props.className}
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.0625 16.125C12.6869 16.125 15.625 13.1869 15.625 9.5625C15.625 5.93813 12.6869 3 9.0625 3C5.43813 3 2.5 5.93813 2.5 9.5625C2.5 13.1869 5.43813 16.125 9.0625 16.125Z"
            stroke="#AFAFAF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.7026 14.2032L17.4996 18.0001"
            stroke="#AFAFAF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "bell":
      return (
        <svg
          className={props.className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.26904 9.75C5.2678 8.86051 5.44262 7.97957 5.78343 7.15796C6.12424 6.33635 6.6243 5.59031 7.25477 4.96286C7.88525 4.33541 8.63368 3.83895 9.45693 3.5021C10.2802 3.16525 11.1619 2.99467 12.0514 3.00019C15.763 3.02778 18.7317 6.11282 18.7317 9.83474V10.5C18.7317 13.8577 19.4342 15.8062 20.0529 16.8711C20.1196 16.9849 20.1551 17.1142 20.1558 17.2461C20.1565 17.378 20.1224 17.5077 20.0569 17.6222C19.9915 17.7367 19.8971 17.8319 19.7831 17.8982C19.6691 17.9646 19.5397 17.9997 19.4078 18H4.59222C4.46034 17.9997 4.33087 17.9645 4.21689 17.8982C4.1029 17.8318 4.00844 17.7366 3.94301 17.6221C3.87759 17.5076 3.84352 17.3778 3.84425 17.2459C3.84498 17.1141 3.88048 16.9847 3.94716 16.8709C4.56622 15.806 5.26904 13.8575 5.26904 10.5L5.26904 9.75Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "question":
      return (
        <svg
          className={props.className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.375 16.875C12.375 17.0821 12.2071 17.25 12 17.25C11.7929 17.25 11.625 17.0821 11.625 16.875C11.625 16.6679 11.7929 16.5 12 16.5C12.2071 16.5 12.375 16.6679 12.375 16.875Z"
            fill="black"
            stroke="black"
            strokeWidth="1.5"
          />
          <path
            d="M12 13.5004V12.7504C12.5192 12.7504 13.0267 12.5965 13.4584 12.308C13.8901 12.0196 14.2265 11.6096 14.4252 11.13C14.6239 10.6503 14.6758 10.1225 14.5746 9.61331C14.4733 9.10411 14.2233 8.63638 13.8562 8.26927C13.489 7.90215 13.0213 7.65215 12.5121 7.55086C12.0029 7.44957 11.4751 7.50156 10.9955 7.70024C10.5158 7.89892 10.1058 8.23537 9.81739 8.66705C9.52895 9.09873 9.375 9.60625 9.375 10.1254"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "dropdown":
      return (
        <svg
          className={props.className}
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 6.5L8 11.5L3 6.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "close":
      return (
        <svg
          className={props.className}
          style={props.style}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 8L8 16" stroke="#6B7280" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 8L16 16" stroke="#6B7280" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "arrowleft":
      return (
        <svg
          className={props.className}
          width="32"
          height="24"
          viewBox="0 0 32 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M26.25 11.75H6.25" stroke="#178FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M12.75 5L6 11.75L12.75 18.5"
            stroke="#178FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "arrowright":
      return (
        <svg
          className={props.className}
          width="32"
          height="24"
          viewBox="0 0 32 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.75 11.75H25.75" stroke="#3ABB6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M19.25 5L26 11.75L19.25 18.5"
            stroke="#3ABB6F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "back":
      return (
        <svg
          className={props.className}
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.875 10.5H3.125"
            stroke="#0C5152"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.75 4.875L3.125 10.5L8.75 16.125"
            stroke="#0C5152"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "date":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
          <path
            d="M13 0.5V4.5M5 0.5V4.5M1 8.5H17M1 4.5C1 3.96957 1.21071 3.46086 1.58579 3.08579C1.96086 2.71071 2.46957 2.5 3 2.5H15C15.5304 2.5 16.0391 2.71071 16.4142 3.08579C16.7893 3.46086 17 3.96957 17 4.5V16.5C17 17.0304 16.7893 17.5391 16.4142 17.9142C16.0391 18.2893 15.5304 18.5 15 18.5H3C2.46957 18.5 1.96086 18.2893 1.58579 17.9142C1.21071 17.5391 1 17.0304 1 16.5V4.5Z"
            stroke="black"
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
