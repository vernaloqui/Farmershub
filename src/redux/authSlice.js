import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    email: null,
    useName: null,
    userID: null,
 //cart section
    // isCartOpen: false,
    cart: [],
    items: [],
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
        console.log(action.payload)
        const {email, userName, userID} = action.payload
        state.isLoggedIn = true;
        state.email = email;
        state.userName = userName;
        state.userID = userID;
    },
    REMOVE_ACTIVE_USER: (state, action) => {    
        state.isLoggedIn = false;
        state.email = null;
        state.userName = null;
        state.userID = null;

    },
    setItems: (state, action) => {
      state.items = action.payload;
      },
      addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
     },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
          if (item.id === action.payload.id && item.count > 1){
              item.count--;
          }
          return item;
      }); 
  },

  setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
  }

  },
});

export const {SET_ACTIVE_USER, REMOVE_ACTIVE_USER, setItems, 
  addToCart,
  removeFromCart,
  increaseCount,
  setIsCartOpen } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectEmail = (state) => state.auth.email;

export const selectUserName = (state) => state.auth.useName;

export const selectUserID = (state) => state.auth.userID;


export default authSlice.reducer;