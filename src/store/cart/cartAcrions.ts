import CartActionTypes from "./cartTypes";

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

export const addItem = (item: CartDataType) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
