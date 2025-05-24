import PropTypes from 'prop-types';
import Icon from './iconManager';

const Button1 = ({ onClick, label, className, iconName, img, imgClass, style, id }) => {
  return (
    <button id={id} onClick={onClick} className={`button1 ${className}`} style={style}>
      {iconName ? (
        <Icon name={iconName} className={`placeholder my-auto me-2 ${imgClass}`} />
      ) : img ? (
        <img src={img} className={`placeholder my-auto me-2 ${imgClass}`} style={{height:"24px"}} alt="" />
      ) : null}
      {label}
    </button>
  );
};

Button1.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  img: PropTypes.string,
  imgClass: PropTypes.string,
  id: PropTypes.string
};

export default Button1;