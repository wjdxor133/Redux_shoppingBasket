import React from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TiEquals } from "react-icons/ti";
import CartItem from "../CartItem/CartItem";

const CartList = () => {
  return (
    <CartListComponent>
      <CartListHeader>
        <CartListHeaderText>상품정보</CartListHeaderText>
        <CartListHeaderText>구분</CartListHeaderText>
        <CartListHeaderText>가격</CartListHeaderText>
        <CartListHeaderText>수량</CartListHeaderText>
        <CartListHeaderText>합계</CartListHeaderText>
        <CartListHeaderText>관리</CartListHeaderText>
      </CartListHeader>
      {/* {cartData.map((item: any) => {
        return (
          <CartItem
            key={item.id}
            title={item.title}
            deliveryPlace={item.deliveryPlace}
            deliveryType={item.deliveryType}
            productOption={item.productOption}
            productImage={item.productImage}
            price={item.price}
            etcTitle={item.etcTitle}
            etcPrice={item.etcPrice}
          />
        );
      })} */}
      <CartListFooter>
        <CartListFooterText>총 상품 금액: 12,000원</CartListFooterText>
        <AiOutlinePlusCircle size="12" />
        <CartListFooterText>배송비 9,500 원</CartListFooterText>
        <TiEquals size="12" />
        <CartListFooterText>총 합계: 21,500원</CartListFooterText>
      </CartListFooter>
    </CartListComponent>
  );
};

export default CartList;

const CartListComponent = styled.section`
  width: 80%;
  height: 30%;
  margin-top: 1em;
`;

const CartListHeader = styled.div`
  display: flex;
  background-color: #c4c4c4;
  padding: 0.8em 0;
`;

const CartListHeaderText = styled.p`
  font-weight: bold;
  text-align: center;
  width: 14%;

  :nth-child(1) {
    width: 30%;
  }
`;

const CartListFooter = styled.div`
  display: flex;
  justify-content: center;
  background-color: #c4c4c4;
  padding: 1em 0;
  margin-top: 1em;
`;

const CartListFooterText = styled.p`
  font-size: 0.9rem;
  font-weight: blod;
`;
