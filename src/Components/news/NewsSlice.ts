import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { Axios } from '../../Config/Axios';

export interface NewsState {
    status:string,
    lists:[]
}
const initialState: NewsState = {
    status:'',
    lists:[]
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
  reducers: {},
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

export const { } = newsSlice.actions;
export const selectNews = (state: RootState) => state.news;


export default newsSlice.reducer;
