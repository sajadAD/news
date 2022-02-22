import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import newsReducer from '../Components/News/NewsSlice';
import loginReducer from '../Components/Login/LoginSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    login: loginReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
