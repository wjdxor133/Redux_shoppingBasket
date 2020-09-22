import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Cart from "../../containers/Cart/Cart";

const Basket = () => {
  return (
    <BasketPage>
      <Header />

      <Cart />
    </BasketPage>
  );
};

export default Basket;

const BasketPage = styled.main`
  width: 100%;
  height: 100vh;
`;
