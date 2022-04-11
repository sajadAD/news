import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Admin } from '../../Config/Admin'

export interface LoginState {
    username: string,
    password: string,
}
const initialState: LoginState = {
    username: '',
    password: ''
};
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ username: string, password: string }>) => {
            if ((action.payload.username) && (action.payload.password)) {
                if ((action.payload.username === Admin.username) && (action.payload.password === Admin.password)) {
                    localStorage.setItem('token', 'logined')
                    window.location.reload(false)
                } else {
                    alert("username and password is already")
                }
            } else {
                alert("please fill out")
            }
        }
    },
});

export const { login } = loginSlice.actions;
export const selectNews = (state: RootState) => state.news;


export default loginSlice.reducer;
