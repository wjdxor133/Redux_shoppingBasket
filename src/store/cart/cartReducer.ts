import CartActionTypes from "./cartTypes";

const INITAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITAL_STATE, action: any) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
