import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/axios";
import { loadingActions } from "./loadingReducer";

const initialState = {
    postings:[]
}

export const fetchPostingsFirst = createAsyncThunk('posting/fetchPostingFirst', async (_, {dispatch}) => {
    dispatch(loadingActions.setTrueLoading());
    dispatch(postingActions.setDefaultPosting());
    const res = await instance.get('posts').catch((e) => console.log(e));
    const data = res.data;
    console.log(data);
    dispatch(loadingActions.setFalseLoading());

    return data;
})

export const fetchPersonalPostingsFirst = createAsyncThunk('posting/fetchPostingFirst', async (_, { dispatch }) => {
    dispatch(loadingActions.setTrueLoading());
    dispatch(postingActions.setDefaultPosting());
    const res = await instance.get('/personalPosts').catch((e)=> console.log(e));
    const data = res.data;
    console.log(data);
    dispatch(loadingActions.setFalseLoading());

    return data;
})

export const fetchBookmarkPostingsFirst = createAsyncThunk('posting/fetchBookmarkFirst', async (_, { dispatch }) => {
    dispatch(loadingActions.setTrueLoading());
    dispatch(postingActions.setDefaultPosting());
    const res = await instance.get('/test').catch((e)=> console.log(e));
    const data = res.data;
    console.log(data);
    dispatch(loadingActions.setFalseLoading());

    return data;
})

export const deletePersonalPosting = createAsyncThunk('posting/deletePersonalPostings', async (information, { dispatch }) => {
    const {id} = information;
    dispatch(loadingActions.setTrueLoading());
    const res = await instance.delete(`/personalPosts/${id}`).catch((e)=> console.log(e));
    console.log(res);
    dispatch(loadingActions.setFalseLoading());
    
})

const postingSlice = createSlice({
    name:'posting',
    initialState,
    reducers: {
        setDefaultPosting:(state) => {
            state.postings = [];
        }
    },
    extraReducers: {
        [fetchPostingsFirst.fulfilled.type]: (state, action) => {
            state.postings = action.payload;
        },
        [fetchPersonalPostingsFirst.fulfilled.type]: (state, action) => {
            state.postings = action.payload;
        },
        [fetchBookmarkPostingsFirst.fulfilled.type]: (state, action)=> {
            state.postings = action.payload;
        }
    }
})

const postingActions = postingSlice.actions;
export { postingActions };
export default postingSlice.reducer;