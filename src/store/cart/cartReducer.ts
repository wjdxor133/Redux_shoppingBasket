import CartActionTypes from "./cartTypes";

const INITAL_STATE = {
  cartItems: [],
};

// const cartReducer = (state = INITAL_STATE, action) => {
//   switch (action.type) {
//     case CartActionTypes.ADD_ITEM:
//       return {
//         ...state,
//         cartItems: action.payload,
//       };
//   }
// };

export default cartReducer;
