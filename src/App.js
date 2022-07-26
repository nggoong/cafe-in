import React from 'react';
import styled from 'styled-components';
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


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Loading/>
      <Header></Header>
      <Contents>
          <Routes>
            <Route path="/" element={<Intro />}/>
            <Route path="/main" element={<PostingViewer isPersonal={false} target={'main'}/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/posting/add" element={<PostingInput/>}/>
            <Route path="/mypage" element={<PostingViewer isPersonal={true} target={'mypage'}/>}/>
            <Route path="/bookmark" element={<PostingViewer isPersonal={false} target={'bookmark'}/> }/>
        </Routes>
        <Footer></Footer>
      </Contents>

    </div>
  );
}

export default App;

const Contents =styled.div`
  width:90%;
  max-width:800px;
  padding-top:60px;
  margin:0 auto;
  padding-bottom:50px;
  background:white;
`


