import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Projects from './views/Projects/Projects';
import TechStack from './views/TechStack/TechStack';
import Resume from './views/Resume/Resume';
import About from './views/About/About';
import Header from './views/Header/Header';
import Footer from './views/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/tech-stack" element={<TechStack />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
