import React from 'react';

import HeaderComponent from './components/Header';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <HeaderComponent />
    </>
  );
}

export default App;
