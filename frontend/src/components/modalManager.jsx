import PropTypes from "prop-types";
import { useViewport } from "../hooks/useViewport";

const MODAL_COMPONENTS = {
/*   TRANSACTION: Transaction, */
};

const ModalManager = ({ modalType, modalProps, onClose }) => {
  const viewport = useViewport();
  
  if (!modalType) return null;

  const ModalComponent = MODAL_COMPONENTS[modalType];

  if (!ModalComponent) {
    console.error(`No component found for modalType: ${modalType}`);
    return null;
  }

  return (
    <div className={`modalOverlay`} onClick={onClose}>
      <div
        className={`modalContent ${viewport}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pass modalProps correctly */}
        <ModalComponent {...modalProps} viewport={viewport} onClose={onClose} />
      </div>
    </div>
  );
};

ModalManager.propTypes = {
  modalType: PropTypes.oneOf(Object.keys(MODAL_COMPONENTS)),
  modalProps: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};


export default ModalManager;
