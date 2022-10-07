import { Routes, Route, Link } from 'react-router-dom';
import Feedback from './pages/Feedback';
import Home from './pages/Home';
import PageNotFound from './error-page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='feedback' element={<Feedback />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
