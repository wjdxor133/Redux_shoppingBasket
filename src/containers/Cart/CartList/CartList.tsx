import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TiEquals } from "react-icons/ti";
import CartItem from "../CartItem/CartItem";

interface basketItemsTypes {
  id: number;
  title: string;
  deliveryPlace: string;
  deliveryType: string;
  productOption: string;
  productImage: string;
  price: number;
  etcTitle: string;
  etcPrice: number;
}

const CartList = () => {
  const [data, setData] = useState<basketItemsTypes[]>([]);

  useEffect(() => {
    const getData = async () => {
      axios
        .get("./data/data.json")
        .then((res) => {
          setData(res.data.basketItems);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);
  console.log("data", data);
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
      {data.map((item) => {
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
      })}
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
