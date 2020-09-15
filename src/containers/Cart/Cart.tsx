import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../components/Modal/Modal";
import DeliveryBtnList from "../../components/DeliveryBtnList/DeliveryBtnList";
import CartProgressBars from "./CartProgressBars/CartProgressBars";
import CartList from "../Cart/CartList/CartList";

type CartStylePropsType = {
  visible: boolean;
};

const Cart = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("서울시 구로구 고척로");

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
      {/* 배송 버튼 종류 */}
      <DeliveryBtnList />
      <CartProgressBars />
      <CartComponentText>
        오늘의 꽃 상품의 주문 가능 시간은 14:00 ~ 23:00 이며,
      </CartComponentText>
      <CartComponentText>
        상품 구매 금액이 <span>2만원(오픈 이벤트 적용 중)</span>이상 시 부터
        결제 및 배송이 가능합니다.
      </CartComponentText>
      <CartList />
    </CartComponent>
  );
};

export default Cart;

const CartComponent = styled.article`
  width: 80%;
  height: 80%;
  margin: 0 2em;
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

const CartComponentText = styled.p`
  font-size: 0.8rem;

  span {
    color: red;
  }
`;
