import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  PaymentAmount:null,
  Filmpage:null,
  logined: false,
  Wish:[],
  Movies:[], 
  PassToken:false,
  lastLoginSuccess: null,
};


const TotSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    Signupp: (state, action) => {
      const { user, pass } = action.payload;
      state.PassToken = true;
      const Entry = {
        id: nanoid(),
        username: user,
        password: pass,
      };
      state.data.push(Entry);
    },
    Loginn: (state, action) => {
      const { user, pass } = action.payload;
      let foundUser = null
      for (let i = 0; i < state.data.length; i++) {
        const item = state.data[i];
        if (item.username === user && item.password === pass) {
          foundUser = item;
          break;
        }
      }
      state.logined = !!foundUser;
      state.lastLoginSuccess = !!foundUser; 
    },
    addPayment:(state,action) =>
    {
      state.PaymentAmount = action.payload;     
    },
    addPage:(state,action)=>{
      state.Filmpage = action.payload;
    },
    addWishlist:(state,action)=>{
      const  wishlist  = action.payload;
      state.Wish.push(wishlist)
    },
    removeWishlist:(state,action)=>{
      const remove = action.payload;
      state.Wish = state.Wish.filter(item => item.id !== remove);
    }
  },
});

export const { Signupp, Loginn,addPayment,addPage,addWishlist,removeWishlist } = TotSlice.actions;
export default TotSlice.reducer;
