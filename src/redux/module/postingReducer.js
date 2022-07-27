import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/axios";
import axios from 'axios';
import { loadingActions } from "./loadingReducer";

const initialState = {
    postings:[]
}


// 한번에 넣기 기능 테스트 완료되면 변경하기 >> PostingViewer.jsx에서 useEffect안의 dispatch() 사용할 때 target값 넣어서 보내기
// export const fetchPostingsFirst = createAsyncThunk('posting/fetchPostingFirst', async (information, { dispatch }) => {
//     const { target } = information;
//     let res;
//     dispatch(loadingActions.setTrueLoading());
//     dispatch(postingActions.setDefaultPosting());

//     if(target === 'main') {
//         res = await instance.get('posts').catch((e) => console.log(e));
//     }
//     else if(target === 'mypage') {
//         res = await instance.get('/personalPosts').catch((e) => console.log(e));
//     }

//     else if(target === 'bookmark') {
//         res = await instance.get('/test').catch((e) => console.log(e));
//     }
//     const data = res.data;
//     console.log(data);
//     dispatch(loadingActions.setTrueLoading());

//     return data;
    
// })

export const fetchPostingsFirst = createAsyncThunk('posting/fetchPostingFirst', async (_, {dispatch}) => {
    dispatch(loadingActions.setTrueLoading());
    dispatch(postingActions.setDefaultPosting());
    // const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts`, {
    //     headers:{
    //         "Authorization":`${localStorage.getItem('Authorization')}`
    //     }
    // }).catch((e) => console.log(e));
    const res = await instance.get('/api/posts').catch((e)=>console.log(e));
    const data = res.data;
    console.log(res);
    dispatch(loadingActions.setFalseLoading());

    return data; 
})

export const fetchPersonalPostingsFirst = createAsyncThunk('posting/fetchPostingFirst', async (_, { dispatch }) => {
    dispatch(loadingActions.setTrueLoading());
    dispatch(postingActions.setDefaultPosting());
    const res = await instance.get('/api/post/myposts').catch((e)=> console.log(e));
    const data = res.data;
    console.log(data);
    dispatch(loadingActions.setFalseLoading());

    return data;
})

export const fetchBookmarkPostingsFirst = createAsyncThunk('posting/fetchBookmarkFirst', async (information, { dispatch }) => {
    dispatch(loadingActions.setTrueLoading());
    dispatch(postingActions.setDefaultPosting());
    const { userId } = information;
    const res = await instance.get(`/api/bookmark/${userId}`).catch((e)=> console.log(e));
    const data = res.data;
    console.log(data);
    dispatch(loadingActions.setFalseLoading());

    return data;
})

export const deletePersonalPosting = createAsyncThunk('posting/deletePersonalPostings', async (information, { dispatch }) => {
    const { bookmarkId } = information;
    dispatch(loadingActions.setTrueLoading());
    const res = await instance.delete(`/api/bookmark/${bookmarkId}`).catch((e)=> console.log(e));
    console.log(res);
    dispatch(loadingActions.setFalseLoading());
})

// export const addPosting = createAsyncThunk('posting/addPosting', async(information, { dispatch }) => {

// })


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