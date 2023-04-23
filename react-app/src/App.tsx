import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components'

import Home from './pages/Home';
import GlobalStyle from './GlobalStyle';

const RootApp = styled.div`
  display: grid;
`

const App = () => {
  return (
    <RootApp>
      <GlobalStyle />
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </RootApp>
  );
}

export default App;
