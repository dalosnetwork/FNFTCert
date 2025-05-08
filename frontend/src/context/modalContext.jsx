import { createContext, useState, useContext } from 'react';
import PropTypes from "prop-types";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({ modalType: null, modalProps: {} });

  const showModal = (modalType, modalProps = {}) => {
    setModalState({ modalType, modalProps });
  };

  const hideModal = () => {
    setModalState({ modalType: null, modalProps: {} });
  };

  return (
    <ModalContext.Provider value={{ ...modalState, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.array,
};

export const useModal = () => useContext(ModalContext);
