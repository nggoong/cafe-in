import React from 'react';
import styled from 'styled-components';
import Header from './components/header/Header';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp';
import GlobalStyle from './components/styled/GlobalStyle';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      {/* <Header></Header> */}
      {/* <Contents>
        <Routes>
          <Route element={<Home/>}></Route>
        </Routes>
      </Contents> */}
      <Header></Header>
      <Contents>
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
          </Routes>
      </Contents>

    </div>
  );
}

export default App;

const Contents =styled.div`
  width:90%;
  // background:yellow;
  max-width:1000px;
  padding-top:60px;
  margin:0 auto;
  h1 {
    margin:0;
    padding:0;
  }
`


