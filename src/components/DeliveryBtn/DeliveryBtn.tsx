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
  margin-left: 1em;
  border: 1px solid #c4c4c4;
  padding: 0.5em 1em;
  border-radius: 4px;

  :hover {
    background-color: #424242;
    color: white;
    cursor: pointer;
    border: 1px solid #000;
  }
`;
