import React from "react";
import styled from "styled-components";

import Global from "./styles/Global";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Global />
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;

const Wrapper = styled.div`
  flex: 1 0 auto;
`;
