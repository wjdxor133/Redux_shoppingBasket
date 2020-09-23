import React from "react";
import styled from "styled-components";

type DeliveryButtonPropsType = {
  id: number;
  deliveryName: string;
  ChangeDeliveryInfoText: any;
};

const DeliveryButton = ({
  id,
  deliveryName,
  ChangeDeliveryInfoText,
}: DeliveryButtonPropsType) => {
  return (
    <DeliveryButtonComponent onClick={() => ChangeDeliveryInfoText(id)}>
      {deliveryName}
    </DeliveryButtonComponent>
  );
};

export default DeliveryButton;

const DeliveryButtonComponent = styled.li`
  margin-left: 1rem;
  border: 1px solid #c4c4c4;
  font-size: 0.85rem;
  padding: 0.5em 0.8em;
  border-radius: 4px;

  ${({ theme }) => theme.tablet`
    width: 40%;
    font-size: 1rem;
    text-align: center;
    padding: 0.8em;
    margin-bottom: 0.3rem;
  `}

  :hover {
    background-color: #424242;
    color: white;
    cursor: pointer;
    border: 1px solid #000;
  }
`;
