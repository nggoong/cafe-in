import React from 'react';
import styled from 'styled-components';
import Header from './components/header/Header';
import GlobalStyle from './components/styled/GlobalStyle';

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
          <h1>dafsfdasdf</h1>
      </Contents>

    </div>
  );
}

export default App;

const Contents =styled.div`
  width:90%;
  background:yellow;
  max-width:1000px;
  padding-top:60px;
  margin:0 auto;
  h1 {
    margin:0;
    padding:0;
  }
`


