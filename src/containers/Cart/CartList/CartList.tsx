import React from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TiEquals } from "react-icons/ti";

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
      <CartListFooter>
        <CartListFooterText>총 상품 금액: 12,000원</CartListFooterText>
        <AiOutlinePlusCircle size="14" />
        <CartListFooterText>배송비 9,500 원</CartListFooterText>
        <TiEquals size="14" />
        <CartListFooterText>총 합계: 21,500원</CartListFooterText>
      </CartListFooter>
    </CartListComponent>
  );
};

export default CartList;

const CartListComponent = styled.section`
  width: 80%;
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
  width: 20%;
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
