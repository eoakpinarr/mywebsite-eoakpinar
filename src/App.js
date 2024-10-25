import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Layout from './components/Layout'; // Layout bileşenini içe aktarın

export const App = () => {
  return (
    <Router basename='/mywebsite-eoakpinar'>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimda" element={<About />} />
          <Route path="/hizmetler" element={<Services />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
