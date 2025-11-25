import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Work from './pages/work/Work';
import Projects from './pages/work/projects/projects';
import ProjectPage from './pages/work/project/ProjectPage';
import About from './pages/about/About';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work/project/:id" element={<ProjectPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
