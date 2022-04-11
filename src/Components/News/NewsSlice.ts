import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Axios } from '../../Config/Axios';

export interface NewsState {
    status: string,
    lists: [],
    viewState: boolean
}
const initialState: NewsState = {
    status: '',
    lists: [],
    viewState: true
};
export const fetchNews = createAsyncThunk(
    "products/fetchNews", async (_, thunkAPI) => {
        try {
            const response = await Axios.get('/v2/everything?q=bitcoin&apiKey=948b516b1e854518a8550bf0d55812a9');//where you want to fetch data
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: 'error' });
        }
    });

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        changeViewState: (state, action: PayloadAction<boolean>) => {
            state.viewState = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            /***********fetch News*************/
            .addCase(fetchNews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.lists = action.payload.articles
            });
    },
});

export const { changeViewState } = newsSlice.actions;
export const selectNews = (state: RootState) => state.news;


export default newsSlice.reducer;
