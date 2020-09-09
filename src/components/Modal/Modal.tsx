import React from "react";
import styled from "styled-components";
import PostCode from "../PostCode/PostCode";

type modalPropsType = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
};

type modalStylePropsType = {
  visible: boolean;
};

const Modal = ({ visible, setVisible, setAddress }: modalPropsType) => {
  return (
    <ModalOverlay visible={visible}>
      <PostCode setVisible={setVisible} setAddress={setAddress} />
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  display: ${(props: modalStylePropsType) =>
    props.visible ? "block" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;
