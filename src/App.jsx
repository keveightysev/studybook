import React from 'react';

import Global from './styles/Global';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Global />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
