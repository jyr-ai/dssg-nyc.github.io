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
                description="Global entry-level tech jobs have significantly plummeted since 2022, putting early-career young talent at historic risk of prolonged unemployment. The Data Diplomats shifts the paradigm by providing training program that matches job-seeking technologists to the nonprofit sector, enabling social workers and NGOs to solve real grassroots social challenges through human-centered AI."
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
