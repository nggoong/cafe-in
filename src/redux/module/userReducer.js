import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import instance from "../../shared/axios";
//User data를 관리하는 리덕스를 툴킷을 사용하여 덕스 구조로 만들자!


//회원가입
export const addUser = createAsyncThunk('user/addUser', async (information) => {
//createAsyncThunk는 비동기로 처리하는 인자는 1개만 가능
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/signup`,information.user_data);
    const data = res.data;
    console.log(res);
    console.log(data);
    if (data.status === true) {
        alert ("회원가입 성공")
    } else {
        alert ("회원가입 실패")
    }
    // console.log(res);
})


//로그인
export const loginUser = createAsyncThunk('user/loginUser', async (information, { dispatch }) => {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`,information.login_data);
        const token = res.headers.authorization;
        
        localStorage.setItem("Authorization", token);
        
        const getUserResult = await instance.post('/user/info');
        const userdata = getUserResult.data;
        dispatch(userActions.createUser(userdata));

        // if (data.token !== undefined) {
        //     localStorage.setItem("access_token", data.token);
        //     localStorage.setItem(" ", data.nickname);
        //     //닉네임은 어떻게ㅠㅠ?? 따로 받아와도 되는지,,? 헤더 컴포넌트에서 useSelector 써서?
        // } else {
        //     alert ("아이디 또는 패스워드를 확인해주세요!")
        // }
        // return data
    })


const userSlice = createSlice({
    name : "user",
    initialState : {
        email : "",
        nickname : "",
    },
    reducers : {
        createUser : (state, action) => {
            state.email = action.payload.email;
            state.nickname = action.payload.nickname;
        },

        // loginUser : (state,action) => {
        //     state.login_list.push(action.login_data)
        //     console.log(state.login_list);
        // },
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

// export const {createUser, , loginUser} = userSlice.actions;
const userActions = userSlice.actions;
export { userActions };
export default userSlice.reducer;