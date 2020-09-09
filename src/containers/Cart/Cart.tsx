import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../../components/Modal/Modal";

type CartStylePropsType = {
  visible: boolean;
};

const Cart = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");

  // 모달창 on/off
  const openModal = () => {
    setVisible(true);
  };

  return (
    <CartComponent visible={visible}>
      <AddressTextBox>
        <AddressText>`배송지 : ${address}`</AddressText>
        <AddressChangeBtn onClick={openModal}>주소 변경하기</AddressChangeBtn>
      </AddressTextBox>
      {visible ? (
        <Modal
          visible={visible}
          setVisible={setVisible}
          setAddress={setAddress}
        />
      ) : null}
    </CartComponent>
  );
};

export default Cart;

const CartComponent = styled.article`
  width: 100%;
  background-color: ${(props: CartStylePropsType) =>
    props.visible ? "rgba(0, 0, 0, 0.6)" : null};
`;

const AddressTextBox = styled.section`
  display: flex;
  margin: 1em 0 3em 0;
  background-color: white;
`;

const AddressText = styled.p`
  font-weight: bold;
`;

const AddressChangeBtn = styled.button`
  color: white;
  font-weight: bold;
  background-color: #424242;
  margin-left: 1em;
  border-radius: 3px;
`;
