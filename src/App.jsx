import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import Resume from './components/resume';
import Projects from './components/projects';
import Blog from './components/blog';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route index element={<Home />} />      {/* Default route */}
            <Route path="resume" element={<Resume />} />
            <Route path="projects" element={<Projects />} />
            <Route path="blog" element={<Blog />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;