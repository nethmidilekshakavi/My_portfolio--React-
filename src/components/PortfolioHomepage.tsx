import React from 'react';
import {Facebook, Dribbble, Linkedin, ArrowRight, Github} from 'lucide-react';
import profile from '../images/32f9a197f5ec443550682f085a06feb0.jpg';

export default function PortfolioHomepage() {
    return (
        <div
            className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">

            {/* Navigation */}
            <nav className="flex items-center justify-between px-8 py-6 fixed w-full bg-transparent z-10">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold text-white">
                        D
                    </div>
                    <span className="text-xl font-bold">DILEKSHA</span>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="hover:text-blue-400 transition-colors border-b-2 border-blue-400 pb-1">HOME</a>
                    <a href="#about" className="hover:text-blue-400 transition-colors">ABOUT ME</a>
                    <a href="#projects" className="hover:text-blue-400 transition-colors">PROJECTS</a>
                    <a href="#services" className="hover:text-blue-400 transition-colors">SERVICES</a>
                    <a href="#contact" className="hover:text-blue-400 transition-colors">CONTACT</a>
                </div>

                <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-medium transition-colors">
                    LETS' TALK
                </button>
            </nav>

            {/* Hero Section */}
            <section
                id="home"
                className="h-screen flex flex-col md:flex-row items-center justify-between px-8 py-12 max-w-7xl mx-auto relative snap-start"
            >
                {/* Left Content */}
                <div className="flex-1 max-w-2xl mt-24 md:mt-0">
                    <div className="mb-8">
                        <p className="text-blue-300 text-sm tracking-wider mb-4">D I L E K S H A  K A V I N D I</p>
                        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                            HAY! I'M DILEKSHA
                        </h1>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-8">
                            FULLSTACK DEVELOPER
                        </h2>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                        Passionate about creating innovative web solutions with modern technologies.
                        I build scalable applications that deliver exceptional user experiences and
                        robust backend functionality.
                    </p>

                    <div className="flex items-center space-x-4">
                        <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full font-medium flex items-center space-x-2 transition-all hover:scale-105" >
                            <span>GET IN TOUCH</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>

                        <div className="flex space-x-3">
                            <a href="#" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 flex justify-center items-center relative mt-12 md:mt-0">
                    <div className="w-80 h-96 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl border border-slate-600 shadow-2xl overflow-hidden">
                        <img
                            src={profile}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="h-screen flex flex-col lg:flex-row items-center justify-between gap-16 px-8 max-w-7xl mx-auto snap-start"
            >
                {/* Left Image */}
                <div className="flex-1 flex justify-center mt-12 lg:mt-0">
                    <div className="relative w-96 h-[500px] bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl border border-slate-600 shadow-2xl overflow-hidden">
                        <img
                            src={profile}
                            alt="About Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 max-w-2xl mt-12 lg:mt-0">
                    <p className="text-blue-300 text-sm tracking-wider mb-4">A B O U T  M E</p>

                    <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                        I AM AVAILABLE FOR <span className="text-blue-400">FULL STACK DEVELOPMENT</span> PROJECTS
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed mb-12">
                        I'm a passionate Full Stack Developer with expertise in modern web technologies.
                        I create scalable, efficient, and user-friendly applications using cutting-edge
                        frameworks and tools.
                    </p>

                    <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full font-medium flex items-center space-x-2 transition-all hover:scale-105">
                        <span>GET IN TOUCH</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </section>
        </div>
    );
}
