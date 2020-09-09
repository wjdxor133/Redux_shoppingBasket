import React from "react";
import styled from "styled-components";
import Cart from "../../containers/Cart/Cart";

const Basket = () => {
  return (
    <BasketPage>
      <BasketHeader>
        <BasketHeaderLogoText>장바구니</BasketHeaderLogoText>
        <BasketHeaderCategoryBox>
          <BasketHeaderCategoryText>장바구니</BasketHeaderCategoryText>
          <BasketHeaderCategoryText>주문결제</BasketHeaderCategoryText>
          <BasketHeaderCategoryText>주문완료</BasketHeaderCategoryText>
        </BasketHeaderCategoryBox>
      </BasketHeader>
      <Cart />
    </BasketPage>
  );
};

export default Basket;

const BasketPage = styled.div`
  width: 100%;
  height: 100vh;
`;

const BasketHeader = styled.header`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
`;

const BasketHeaderLogoText = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`;

const BasketHeaderCategoryBox = styled.div`
  display: flex;
`;

const BasketHeaderCategoryText = styled.p``;
