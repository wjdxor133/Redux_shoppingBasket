import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import Modal from "../../components/Modal/Modal";
import DeliveryBtnList from "../../components/DeliveryButton/DeliveryBtnList/DeliveryBtnList";
import CartProgressBars from "./CartProgressBars/CartProgressBars";
import CartList from "../Cart/CartList/CartList";

import { connect } from "react-redux";
import { addItem } from "../../store/cart/cartAcrions";

type CartStylePropsType = {
  visible: boolean;
};

interface CartDataType {
  id: string;
  title: string;
  deliveryPlace: string;
  deliveryType: string;
  productOption: string;
  productImage: string;
  price: number;
  etcTitle: string;
  etcPrice: number;
}

const Cart = ({ addItem }: any) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("서울시 구로구 고척로");

  // 모달창 on/off
  const openModal = () => {
    setVisible(true);
  };

  useEffect(() => {
    const getData = async () => {
      axios
        .get("./data/data.json")
        .then((res) => {
          addItem(res.data.basketItems);
        })
        .catch((error) => {
          if (error.response.status === 400 || 404) {
            console.log("error", error);
          } else if (error.response.status === 500 || 503) {
            console.log("일시적인 오류가 발생했습니다.");
          }
        });
    };

    getData();
  }, []);

  return (
    <CartComponent visible={visible}>
      <CartHeader>
        <CartHeaderText>장바구니</CartHeaderText>
        <CartHeaderCategoryBox>
          <CartHeaderCategoryText>장바구니</CartHeaderCategoryText>
          <IoIosArrowForward size="14" />
          <CartHeaderCategoryText>주문결제</CartHeaderCategoryText>
          <IoIosArrowForward size="14" />
          <CartHeaderCategoryText>주문완료</CartHeaderCategoryText>
        </CartHeaderCategoryBox>
      </CartHeader>
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
      <CartComponentTextBox>
        <CartComponentText>
          오늘의 꽃 상품의 주문 가능 시간은 14:00 ~ 23:00 이며,
        </CartComponentText>
        <CartComponentText>
          상품 구매 금액이 <span>2만원(오픈 이벤트 적용 중)</span>이상 시 부터
          결제 및 배송이 가능합니다.
        </CartComponentText>
      </CartComponentTextBox>
      <CartList />
    </CartComponent>
  );
};

const mapStateToProps = (state: CartDataType[]) => {
  return { cartData: state };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addItem: (item: any) => dispatch(addItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const CartComponent = styled.article`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  background-color: ${(props: CartStylePropsType) =>
    props.visible ? "#fff" : null};
`;

const CartHeader = styled.header`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c4c4c4;
`;

const CartHeaderText = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`;

const CartHeaderCategoryBox = styled.div`
  display: flex;
`;

const CartHeaderCategoryText = styled.p`
  margin: 0 1em;

  :nth-child(1) {
    font-weight: bold;
  }
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

const CartComponentTextBox = styled.div`
  margin: 1em 0;
`;

const CartComponentText = styled.p`
  font-size: 0.8rem;

  span {
    color: red;
  }
`;
