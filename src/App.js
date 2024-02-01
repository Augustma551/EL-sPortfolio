import './App.scss';
import Navbar from './Layouts/Navbar/Navbar';
import Hero from './Layouts/Hero/Hero';
import Work from './Layouts/Work/Work';
import Footer from './Layouts/Footer/Footer';
import About from './Layouts/About/About';
import { Route, Routes,Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Work" element={<Work />} />
      </Routes>
      <Hero />
      <Work />
      <Footer />
    </div>
    
  );
}

export default App;

