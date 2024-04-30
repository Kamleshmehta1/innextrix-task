import { combineReducers, PayloadAction } from '@reduxjs/toolkit';
import authContextSlice from '../redux/slice/authSlice';

export interface User {
  id: string;
  name: string;
  email: string;
}

const combineReducer = combineReducers({
  authContext: authContextSlice,
});

const rootReducer = (state, action: PayloadAction<User>) => {
  return combineReducer(state, action);
};

export { rootReducer };
