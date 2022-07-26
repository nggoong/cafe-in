import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Header from './components/header/Header';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp';
import Intro from './components/user/Intro';
import Footer from './components/header/Footer';
import GlobalStyle from './components/styled/GlobalStyle';
import { Routes, Route } from "react-router-dom";
import PostingViewer from './components/posting/PostingViewer';
import PostingInput from './components/posting/PostingInput';
import Loading from './components/loading/Loading'
import NoData from './components/posting/NoData';


function App() {
  const userNickname = useSelector(state => state.user.nickname);
  console.log(userNickname);

  return (
    <div className="App">
      <GlobalStyle/>
      <Loading/>
      {/* <NoData/> */}
      <Header></Header>
      <Contents>
          <Routes>
            <Route path="/" element={!userNickname?<Intro />:<PostingViewer isPersonal={false} target={'main'}/>}/>
            {/* <Route path="/main" element={<PostingViewer isPersonal={false} target={'main'}/>}/> 로그인 반영 뒤에는 '/'으로 조건부 렌더링*/ } 
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/posting/add" element={<PostingInput isEdit={false}/>}/>
            <Route path="/mypage" element={<PostingViewer isPersonal={true} target={'mypage'}/>}/>
            <Route path="/bookmark" element={<PostingViewer isPersonal={false} target={'bookmark'}/> }/>
            <Route path="/posting/edit/:postingId" element={<PostingInput isEdit={true}/>}/>
        </Routes>
        <Footer></Footer>
      </Contents>

    </div>
  );
}

export default App;

const Contents =styled.div`
  width:90%;
  max-width:500px;
  padding-top:60px;
  margin:0 auto;
  padding-bottom:50px;
  background:white;
`


