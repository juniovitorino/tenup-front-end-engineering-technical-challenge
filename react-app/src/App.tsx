import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
