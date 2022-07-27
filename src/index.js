import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import instance from './shared/axios';
import store from './redux/configStore';

const loadingLoginInfo = () => {
  try {
    const userInfo = localStorage.getItem('access_token');
    if(!userInfo) return;
    else {
      // const res = instance.get('') // 토큰 하나 보내주면 유저 정보 받아오는 api 이용해서 로그인 정보 받아오기
      // const data = res.data;
      // store.dispatch(setUserInfo({email:data.email, nickname:data.user_nickname}))  // 로그인 정보 넣어주는 리덕스 액션 생성 함수 실행 
    }
  }
  catch(e) {
    console.log('web storage error!!');
  }
  finally {
    console.log('reload됨');
  }
}

loadingLoginInfo();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
