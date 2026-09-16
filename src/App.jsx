import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Writing from './components/Writing';
import Book from './components/Book';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Seo from './components/Seo';
import Events from './components/Events';
import DataDiplomats from './components/DataDiplomats';
import Portfolio from './components/Portfolio';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Seo
                title="NYC x DSSG — Career-Ready Tech Training for Nonprofits"
                description="Early-career young talent is facing a higher risk of prolonged unemployment as entry-level jobs have significantly plummeted recently. The Data Diplomats Training Program matches job-seeking technologists and recent grads to the nonprofit sector wth the mission to enable social workers and NGOs to solve real grassroots challenges using human-centered AI."
                type="website"
                name="NYC x DSSG"
              />
              <Home />
              <Projects />
              <Writing />
              <Book />
            </>
          } />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/diplomats" element={<DataDiplomats />} />
          <Route path="/events" element={<Events />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
