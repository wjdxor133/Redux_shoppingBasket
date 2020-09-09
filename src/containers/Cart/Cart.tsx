import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../components/Modal/Modal";
import DeliveryBtnList from "../../components/DeliveryBtnList/DeliveryBtnList";

type CartStylePropsType = {
  visible: boolean;
};

const Cart = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("서울시 구로구 고척로 27마길");

  // 모달창 on/off
  const openModal = () => {
    setVisible(true);
  };

  return (
    <CartComponent visible={visible}>
      <AddressTextBox>
        <AddressText>주소: </AddressText>
        <AddressText> {address}</AddressText>
        <AddressChangeBtn onClick={openModal}>주소 변경하기</AddressChangeBtn>
      </AddressTextBox>
      {visible ? (
        <Modal
          visible={visible}
          setVisible={setVisible}
          setAddress={setAddress}
        />
      ) : null}

      <DeliveryBtnList />
    </CartComponent>
  );
};

export default Cart;

const CartComponent = styled.article`
  width: 100%;
  background-color: ${(props: CartStylePropsType) =>
    props.visible ? "#fff" : null};
`;

const AddressTextBox = styled.section`
  display: flex;
  align-items: center;
  margin: 1em 0 3em 0;
  background-color: white;
`;

const AddressText = styled.p`
  font-weight: bold;

  :nth-child(2) {
    margin-left: 1em;
  }
`;

const AddressChangeBtn = styled.button`
  color: white;
  font-weight: bold;
  background-color: #424242;
  margin-left: 1em;
  border-radius: 3px;
  padding: 0.5em;

  :hover {
    cursor: pointer;
  }
`;
