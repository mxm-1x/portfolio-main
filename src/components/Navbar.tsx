import React from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
    activeTab: 'about' | 'projects';
    setActiveTab: (tab: 'about' | 'projects') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-2 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                <button
                    onClick={() => setActiveTab('about')}
                    className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeTab === 'about' ? 'text-white' : 'text-gray-500 hover:text-gray-700'
                        }`}
                >
                    {activeTab === 'about' && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-black rounded-full"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10 mix-blend-difference">About Me</span>
                </button>

                <button
                    onClick={() => setActiveTab('projects')}
                    className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeTab === 'projects' ? 'text-white' : 'text-gray-500 hover:text-gray-700'
                        }`}
                >
                    {activeTab === 'projects' && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-black rounded-full"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10 mix-blend-difference">Projects</span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
