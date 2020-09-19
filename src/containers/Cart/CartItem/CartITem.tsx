import React from "react";
import styled from "styled-components";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";

interface basketItemsPropsTypes {
  title: string;
  deliveryPlace: string;
  deliveryType: string;
  productOption: string;
  productImage: string;
  price: number;
  etcTitle: string;
  etcPrice: number;
}

const CartItem = ({
  title,
  deliveryPlace,
  deliveryType,
  productOption,
  productImage,
  price,
  etcTitle,
  etcPrice,
}: basketItemsPropsTypes) => {
  return (
    <CartItemComponent>
      <CartItemInfo>
        <CartItemImg src={`${productImage}`} alt=" "></CartItemImg>
        <CartItemText>{title}</CartItemText>
      </CartItemInfo>
      <CartItemDivision>
        <CartItemText>옵션: {productOption}</CartItemText>
        <CartItemText>추가상품: {etcTitle}</CartItemText>
      </CartItemDivision>
      <CartItemPrice>
        <CartItemText>{price}원</CartItemText>
        <CartItemText>{etcPrice}원</CartItemText>
      </CartItemPrice>
      <CartItemCount>
        <FiPlusCircle size="14" />
        <CartCountNum>1</CartCountNum>
        <FiMinusCircle size="14" />
      </CartItemCount>
      <CartItemTotal></CartItemTotal>
      <CartItemManagement></CartItemManagement>
    </CartItemComponent>
  );
};

export default CartItem;

const CartItemComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1em;
`;

const CartItemText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1em;
`;

const CartItemInfo = styled.div`
  width: 30%;
  display: flex;
`;

const CartItemImg = styled.img`
  width: 100px;
  height: 100px;
`;

const CartItemDivision = styled.div`
  width: 14%;
  display: flex;
  flex-direction: column;
`;

const CartItemPrice = styled.div`
  width: 14%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CartItemCount = styled.div`
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartCountNum = styled.span`
  font-weight: bold;
`;

const CartItemTotal = styled.div`
  width: 14%;
`;

const CartItemManagement = styled.div`
  width: 14%;
`;
