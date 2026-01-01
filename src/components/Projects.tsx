import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
    id: number;
    title: string;
    problem: string;
    solution: string;
    tags: string[];
    emoji: string;
    link: string;
    github: string;
    color: string;
}

const projects: Project[] = [

    {
        id: 1,
        title: "Laundry Link",
        problem: "Inefficient communication between 200+ students and staff caused delays in laundry pickups.",
        solution: "A management system streamlining requests & issue reporting using React, Node.js, & PostgreSQL.",
        tags: ["React TS", "Node.js", "PostgreSQL", "Prisma", "JWT"],
        emoji: "🧺",
        link: "https://laundrylinkk.netlify.app/",
        github: "https://github.com/mxm-1x/frontend",
        color: "#3b82f6" // Blue
    },
    {
        id: 2,
        title: "Formiqa",
        problem: "Presentations often lack interactivity, making it hard to gauge audience engagement in real-time.",
        solution: "Real-time engagement platform for live Q&A, polling, and sentiment-analyzed feedback.",
        tags: ["React", "Socket.io", "Node.js", "PostgreSQL"],
        emoji: "💬",
        link: "https://formiqa.vercel.app/",
        github: "https://github.com/mxm-1x/formiqa.git",
        color: "#8b5cf6" // Violet
    },
    {
        id: 3,
        title: "Get Notey",
        problem: "Users struggle to organize 'brain-dumped' notes and retrieve meaningful insights later.",
        solution: "AI-powered note-taking app with personalized AI to organize and surface relevant information.",
        tags: ["Next.js", "Convex", "Clerk", "Langchain", "Gemini API"],
        emoji: "🧠",
        link: "https://get-notey.vercel.app/",
        github: "https://github.com/mxm-1x/get-notey.git",
        color: "#f59e0b" // Amber
    },
];


const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: 0,
                backgroundColor: isHovered ? project.color : "#161616"
            }}
            transition={{
                duration: 0.3,
                delay: index * 0.1,
                backgroundColor: { duration: 0.3 }
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)}
            className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
        >
            {/* Inner Card (Sticker Area) */}
            <div className="absolute inset-0 z-0">
                {/* Floating Sticker (Emoji) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="text-9xl filter drop-shadow-2xl"
                    >
                        {project.emoji}
                    </motion.div>
                </div>
            </div>

            {/* Expanding Overlay Wrapper - Handles Hover & Hit Area */}
            <motion.div
                className="absolute bottom-0 left-0 w-full z-10 overflow-hidden flex flex-col justify-end"
                initial={{ height: "80px", padding: "12px" }}
                animate={{
                    height: isHovered ? "100%" : "80px",
                    padding: "12px"
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
                {/* Inner Black Card Content */}
                <motion.div
                    className="w-full h-full bg-[#050505] flex flex-col justify-between overflow-hidden border border-white/10"
                    style={{ borderRadius: "20px" }}
                    animate={{
                        padding: isHovered ? "24px" : "12px"
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    {/* Header (Always visible) */}
                    <div className="flex justify-between items-center w-full shrink-0 h-[32px]">
                        <h3 className="text-2xl font-bold text-white font-syne truncate pr-4">{project.title}</h3>
                        <span className="text-white/50 text-2xl">↗</span>
                    </div>

                    {/* Content (Revealed on hover) */}
                    <motion.div
                        className="space-y-6 mt-4"
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <div className="space-y-2">
                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Problem</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {project.problem}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Solution</p>
                            <p className="text-gray-300 text-sm leading-relaxed font-medium">
                                {project.solution}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-full text-xs uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-2 flex gap-4">
                            <a href={project.link} onClick={(e) => e.stopPropagation()} className="text-sm font-medium text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors">Live Demo</a>
                            <a href={project.github} onClick={(e) => e.stopPropagation()} className="text-sm font-medium text-gray-400 border-b border-gray-400 pb-1 hover:text-white hover:border-white transition-colors">GitHub</a>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const Projects: React.FC = () => {
    return (
        <div className="w-full max-w-7xl mx-auto p-8 pt-24 pb-32">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl font-bold text-white mb-16 text-center font-syne uppercase tracking-tighter"
            >
                Selected Works
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
