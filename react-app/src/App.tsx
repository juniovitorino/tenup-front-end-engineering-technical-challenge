import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
