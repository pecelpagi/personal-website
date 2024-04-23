import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import Navigation from './routes/Navigation';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
