import React from 'react';
import styled from 'styled-components';
import Header from './components/header/Header';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp';
import Footer from './components/header/Footer';
import GlobalStyle from './components/styled/GlobalStyle';
import { Routes, Route } from "react-router-dom";
import PostingViewer from './components/posting/PostingViewer';
import PostingInput from './components/posting/PostingInput';


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header></Header>
      <Contents>
          <Routes>
            <Route path="/" element={<PostingViewer/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/posting/add" element={<PostingInput/>}/>
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
`


