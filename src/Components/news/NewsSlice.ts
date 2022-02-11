import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { Axios } from '../../Config/Axios';

export interface NewsState {
    status:string,
    author:string,
    content:string,
    description:string,
    publishedAt:string,
    title:string,
    url:string,
    urlImage:string,
}

const initialState: NewsState = {
    status:'',
    author:'',
    content:'',
    description:'',
    publishedAt:'',
    title:'',
    url:'',
    urlImage:'',
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
        action.payload.articles.map((item:any)=>{
            state.status = item.status;
            state.author = item.author;
            state.content = item.content;
            state.description = item.description;
            state.publishedAt = item.publishedAt;
            state.title = item.title;
            state.url = item.url;
            state.urlImage = item.urlImage;
        })
      });
  },
});

export const { } = newsSlice.actions;
export const selectNews = (state: RootState) => state.news;


export default newsSlice.reducer;
