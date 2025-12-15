import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FinanceDashboard from './pages/FinanceDashboard';

// Use HashRouter for easier static hosting compatibility on Vercel/Netlify
// without complex rewrite configuration files.
const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/financas" element={<FinanceDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;