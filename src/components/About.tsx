import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            } as any,
        },
    };

    return (
        <motion.div
            className="w-full max-w-7xl mx-auto p-8 pt-12 pb-32 flex flex-col justify-center min-h-[80vh]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Header / Name Section */}
            <motion.div variants={itemVariants} className="mb-12 text-right">
                <p className="text-lg text-gray-500 font-mono mb-2">Full-Stack Engineer | SaaS & AI Builder</p>
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 tracking-tighter font-syne uppercase leading-[0.9]">
                    Malhar<br />
                    <span className="italic font-light">Mahanwar</span>
                </h1>
                <p className="mt-6 text-xl text-gray-700 max-w-2xl ml-auto font-syne">
                    I build production-ready web apps, AI tools, and scalable systems — fast.
                </p>

                <div className="mt-8 flex gap-4 justify-end flex-wrap">

                    <a href="mailto:malharmahanor@gmail.com" className="px-6 py-3 border border-gray-300 rounded-full font-medium hover:bg-gray-100 transition-colors text-gray-800">
                        Contact Me
                    </a>
                    <a href="https://github.com/mxm-1x" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-300 rounded-full font-medium hover:bg-gray-100 transition-colors text-gray-800">
                        GitHub
                    </a>
                </div>
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* Left Column: Image Placeholder / About Me */}
                <motion.div variants={itemVariants} className="lg:col-span-5 space-y-12">
                    <div className="aspect-[3/4] bg-gray-200 rounded-sm w-full relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                        <img
                            src="/mm.jpg"
                            alt="Malhar Mahanwar"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    <section className="pt-4">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-2xl">👋</span>
                            <h2 className="text-xl font-mono text-gray-500 uppercase tracking-widest">About Me</h2>
                        </div>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            I’m a full-stack engineer who enjoys building fast, scalable, and meaningful products.
                            I’ve worked on SaaS tools, AI automation, and real-time systems.
                            I care about clean architecture, good UX, and shipping things that actually work.
                        </p>
                    </section>
                </motion.div>

                {/* Right Column: Skills & Experience */}
                <motion.div variants={itemVariants} className="lg:col-span-7 space-y-12 pt-8">

                    {/* Skills Section */}
                    <section className="border-t border-gray-300 pt-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-2xl">⚡</span>
                            <h2 className="text-xl font-mono text-gray-500 uppercase tracking-widest">Tech Stack</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Frontend</h3>
                                <p className="text-gray-700">React, Next.js, Tailwind CSS</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Backend</h3>
                                <p className="text-gray-700">Node.js, Express, REST APIs</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Databases</h3>
                                <p className="text-gray-700">PostgreSQL, MongoDB, Firebase</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Auth & Infra</h3>
                                <p className="text-gray-700">JWT, OAuth, Prisma, Firebase Auth</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Tools</h3>
                                <p className="text-gray-700">Git, GitHub, VS Code, Postman</p>
                            </div>
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section className="border-t border-gray-300 pt-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-2xl">🏆</span>
                            <h2 className="text-xl font-mono text-gray-500 uppercase tracking-widest">Experience / Wins</h2>
                        </div>

                        <ul className="space-y-6">
                            <li>
                                <div className="flex justify-between items-baseline">
                                    <strong className="text-xl font-syne text-gray-900">Hackathon – 1st Place</strong>
                                    <span className="text-sm text-gray-500 font-mono">2024</span>
                                </div>
                                <p className="text-gray-700 mt-1">Built, designed, and pitched a working product in 12 hours.</p>
                                <ul className="list-disc list-inside text-gray-600 mt-2 text-sm ml-2">
                                    <li>Frontend development</li>
                                </ul>
                            </li>
                            {/* Add more experience items here if needed */}
                        </ul>
                    </section>

                    {/* Resume & Links */}
                    <section className="border-t border-gray-300 pt-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-2xl">🔗</span>
                            <h2 className="text-xl font-mono text-gray-500 uppercase tracking-widest">Connect</h2>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <a href="/resume.pdf" target="_blank" className="text-lg font-bold text-gray-900 border-b-2 border-transparent hover:border-black transition-colors">
                                📄 Resume
                            </a>
                            <a href="https://github.com/mxm-1x" target="_blank" className="text-lg font-bold text-gray-900 border-b-2 border-transparent hover:border-black transition-colors">
                                🐙 GitHub
                            </a>
                            <a href="https://linkedin.com/in/malharmahanwar" target="_blank" className="text-lg font-bold text-gray-900 border-b-2 border-transparent hover:border-black transition-colors">
                                💼 LinkedIn
                            </a>
                            <a href="mailto:malharmahanor@gmail.com" className="text-lg font-bold text-gray-900 border-b-2 border-transparent hover:border-black transition-colors">
                                📧 Email
                            </a>
                        </div>
                    </section>

                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
