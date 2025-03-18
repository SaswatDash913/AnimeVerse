import TotSliceReducer from '../features/TotSlice'; 
import { configureStore } from '@reduxjs/toolkit';
const AppStore = configureStore({
  reducer: {
    cart: TotSliceReducer, 
  },
});

export default AppStore;

