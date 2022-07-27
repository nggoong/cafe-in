import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
//User data를 관리하는 리덕스를 툴킷을 사용하여 덕스 구조로 만들자!


//회원가입
export const adduser = createAsyncThunk('addUser/addUser', async (information) => {
//createAsyncThunk는 비동기로 처리하는 인자는 1개만 가능
    const res = await axios.post("http://localhost:5001/user_data",information.user_data);
    const data = res.data;
    if (data.status === true) {
        alert ("회원가입 성공")
    } else {
        alert ("회원가입 실패")
    }
    return data;
    // console.log(res);
})


//로그인
export const loginuser = createAsyncThunk('loginUser/loginUser', async (information) => {
        const res = await axios.post("http://localhost:5001/user_data",information.login_data);
        const data = res.data;
        if (data.token !== undefined) {
            localStorage.setItem("access_token", data.token);
            localStorage.setItem(" ", data.nickname);
            //닉네임은 어떻게ㅠㅠ?? 따로 받아와도 되는지,,? 헤더 컴포넌트에서 useSelector 써서?
        } else {
            alert ("아이디 또는 패스워드를 확인해주세요!")
        }
        return data;
    })


const userSlice = createSlice({
    name : "user",
    initialState : {
        email : "dyhh12@naver.com",
        nickname : "달구",
    },
    reducers : {
        createUser : (state,action) => {
            state.email = action.email;
            state.nickname = action.nickname;
            state.password = action.password;
        },

        loginUser : (state,action) => {
            state.login_list.push(action.login_data)
            console.log(state.login_list);
        },
    },
    // extraReducers :
    // 미들웨어 넣는 곳

    // extraReducers: {
    //     [adduser.fulfilled.type]: (state, action) => {
    //         // state.postings = action.payload;
    //         state.user = action.payload;
    //     }
    // }
});

export const {createUser, addUser, loginUser} = userSlice.actions;
export default userSlice.reducer;