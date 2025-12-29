import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  const [activeTab, setActiveTab] = useState<'about' | 'projects'>('about');

  return (
    <>
      <motion.div
        className="fixed inset-0 z-[-1] transition-colors duration-500"
        animate={{ backgroundColor: activeTab === 'projects' ? '#050505' : '#f4f4f4' }}
      />

      <div className="bg-grid"></div>
      <motion.div
        className="border-gradient"
        animate={{ opacity: activeTab === 'projects' ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      />

      <main className="relative z-10 min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          {activeTab === 'about' ? (
            <motion.div
              key="about"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="flex-grow"
            >
              <About setActiveTab={setActiveTab} />
            </motion.div>
          ) : (
            <motion.div
              key="projects"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-grow"
            >
              <Projects />
            </motion.div>
          )}
        </AnimatePresence>

        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>
    </>
  );
}

export default App;
