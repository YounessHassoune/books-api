import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { BookDetails, Books, NotFound } from 'src/pages';

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Books />} />
        <Route path='/book/:id' element={<BookDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
