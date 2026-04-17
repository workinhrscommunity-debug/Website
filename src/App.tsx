import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { FreelancerDashboard } from './pages/FreelancerDashboard';
import { ClientDashboard } from './pages/ClientDashboard';
import { ProjectPage } from './pages/ProjectPage';
import { HowItWorks } from './pages/HowItWorks';
import { BrowseProjects } from './pages/BrowseProjects';
import { PostProject } from './pages/PostProject';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/projects" element={<BrowseProjects />} />
              <Route path="/post-project" element={<PostProject />} />
              <Route path="/dashboard/freelancer" element={<FreelancerDashboard />} />
              <Route path="/dashboard/client" element={<ClientDashboard />} />
              <Route path="/project/:id" element={<ProjectPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

