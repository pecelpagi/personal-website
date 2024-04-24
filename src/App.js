import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import Navigation from './routes/Navigation';
import { useEffect } from 'react';

const Redirect = ({ to }) => {
  useEffect(() => {
    window.location.href = to
  }, [to]);

  return <h5>redirecting ...</h5>;
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
        <Route path="kebunbib" element={<Redirect to="https://github.com/pecelpagi/kebunbibit-rest-api-demo" />} />
        <Route path="laundria" element={<Redirect to="https://github.com/pecelpagi/rest-api-laundria" />} />
        <Route path="simpeg" element={<Redirect to="https://github.com/pecelpagi/simpeg-rest-api-spring" />} />
      </Route>
    </Routes>
  );
}

export default App;
