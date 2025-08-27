import {
    Facebook,
    Linkedin,
    ArrowRight,
    Github,
    Download,
    ArrowLeft,
    Calendar,
    Tag,
    ExternalLink,
    Star
} from 'lucide-react';
import profile from '../images/32f9a197f5ec443550682f085a06feb0.jpg';
import java from '../images/language-logos/java.png'
import react from '../images/language-logos/react.png'
import mysql from '../images/language-logos/icons8-mysql-48.png'
import mongodb from '../images/language-logos/icons8-mongo-db-48.png'
import python from '../images/language-logos/icons8-python-48.png'
import nodejs from '../images/language-logos/icons8-nodejs-48.png'
import html from '../images/language-logos/icons8-html-48.png'
import css from '../images/language-logos/icons8-css-48.png'
import js from '../images/language-logos/icons8-js-48.png'
import figma from '../images/language-logos/icons8-figma-48.png'
import rtrasnspotSsystem from '../images/projects images/smart-tasnsport-system.png'
import engishTeacher from '../images/projects images/engish-teacher.png'
import jsp from '../images/projects images/jsp.png'
import lib from '../images/projects images/lib.png'
import dne from '../images/projects images/DNE.png'

import {useState} from "react";

export default function PortfolioHomepage() {

    const skills = [
        {
            name: "Java",
            color: "from-red-500 to-orange-500",
            icon: java,
            category: "Backend"
        },
        {
            name: "MySQL",
            color: "from-blue-600 to-blue-400",
            icon: mysql,
            category: "Database"
        },
        {
            name: "MongoDB",
            color: "from-green-600 to-green-400",
            icon: mongodb,
            category: "Database"
        },
        {
            name: "Python",
            color: "from-yellow-500 to-blue-500",
            icon: python,
            category: "Backend"
        },
        {
            name: "HTML",
            color: "from-orange-600 to-red-500",
            icon: html,
            category: "Frontend"
        },
        {
            name: "React",
            color: "from-cyan-400 to-blue-500",
            icon: react, // Atom icon for React
            category: "Frontend"
        },
        {
            name: "CSS",
            color: "from-blue-500 to-purple-500",
            icon: css,
            category: "Frontend"
        },
        {
            name: "JavaScript",
            color: "from-yellow-400 to-yellow-600",
            icon: js,
            category: "Frontend"
        },
        {
            name: "Node.js",
            color: "from-green-500 to-green-700",
            icon: nodejs,
            category: "Backend"
        },
        {
            name: "Figma",
            color: "from-purple-500 to-pink-500",
            icon: figma,
            category: "Design"
        }
    ];

    const [activeProject, setActiveProject] = useState(0);

    // Sample projects data - replace with your actual projects
    const projects = [
        {
            id: 1,
            title: "Smart Private Transport Booking System",
            description:
                "Full-stack transport booking system with a Spring Boot REST API backend and a vanilla HTML/CSS/JavaScript frontend. Includes user authentication, payment gateway integration, and an admin dashboard.",
            image: rtrasnspotSsystem,
            technologies: ["Spring Boot", "Java", "REST API", "HTML", "CSS", "JavaScript", "Payment Gateway"],
            category: "Full Stack",
            status: "Completed",
            year: "2024",
            githubBackendUrl: "https://github.com/nethmidilekshakavi/Spring-Boot-Final-Backend.git",
            githubFrontendUrl: "https://github.com/nethmidilekshakavi/2nd-FinalProject-Frontend.git",
            highlights: ["API-driven frontend", "Secure payment processing", "Admin dashboard", "Responsive design"]
        },
        {
            id: 2,
            title: "English Teacher Website (Freelance)",
            description: "A freelance English teaching website with an interactive, responsive design and an email contact form for booking lessons and enquiries. Built using plain HTML, CSS and JavaScript.",
            image: engishTeacher,
            technologies: ["HTML", "CSS", "JavaScript", "Form handling", "Responsive Design"],
            category: "Frontend",
            status: "Completed",
            year: "2025",
            liveUrl: "www.ceetcenglishacademy.com",
            highlights: [
                "Interactive UI (lesson sections, FAQs)",
                "Email contact form with client-side validation",
                "Responsive for mobile and desktop",
                "Lightweight and SEO-friendly",
                "Accessible (ARIA, semantic HTML)"
            ]
        },
        {
            id: 3,
            title: "E-commerce Web Application",
            description:
                "Full-stack e-commerce web application developed using JavaEE, JSP, and JDBC connection pooling. Includes product management, user authentication, cart functionality, and order processing. Built with a layered architecture for scalability and maintainability.",
            image: jsp,
            technologies: ["JavaEE", "JSP", "Servlets", "JDBC", "Connection Pooling", "MySQL"],
            category: "Full Stack",
            status: "Completed",
            year: "2024",
            githubUrl: "https://github.com/your-username/ecommerce-app", // replace with actual repo
            liveUrl: "#",
            highlights: [
                "Layered architecture (DAO, Service, Controller)",
                "User authentication & session management",
                "Product catalog & cart system",
                "Order processing with database transactions",
                "Scalable JDBC connection pooling"
            ]
        },
        {
            id: 4,
            title: "Library Management System",
            description: "Full-stack Library Management System with React frontend and Node.js/Express backend.",
            image:lib,
            technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
            category: "Full Stack",
            status: "Completed",
            year: "2024",
            githubBackendUrl: "https://github.com/nethmidilekshakavi/book-club-library-backend.git",
            githubFrontendUrl: "https://github.com/nethmidilekshakavi/book-club-library-frontend.git",
            liveUrl: "#",
            highlights: [
                "Role-based auth (Admin, Librarian, Member)",
                "Book CRUD with cover uploads",
                "Borrowing/return workflow",
                "Reservation system",
                "Responsive UI"
            ]
        },
        {
            id: 5,
            title: "Daffodil Holidays Tourism Website (Freelance)",
            description:
                "Developed the front-end UI for a Sri Lankan tourism company website using React.js. Implemented an email-based booking functionality to allow customers to make inquiries and reservations online. Contribution included designing and building the complete responsive user interface.",
            image: dne,
            technologies: ["React.js", "JavaScript", "HTML", "CSS", "EmailJS"],
            category: "UI UX",
            status: "Completed",
            year: "2024",
            githubUrl: "https://www.figma.com/design/jF0veGq8hxp5w12X9USybR/DNE-CAFE-MANAGEMENT?node-id=0-1&p=f&t=Iwe74qCKG6WQUUiQ-0",
            liveUrl: "#",
            highlights: [
                "Responsive React-based front-end",
                "Email-based booking form integration",
                "Tourism-focused modern UI design",
                "Optimized for desktop and mobile devices"
            ]
        },
    ];

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
                    <a href="#skills" className="hover:text-blue-400 transition-colors">SKILLS</a>
                    <a href="#projects" className="hover:text-blue-400 transition-colors">PROJECTS</a>
                    <a href="#services" className="hover:text-blue-400 transition-colors">SERVICES</a>
                    <a href="#contact" className="hover:text-blue-400 transition-colors">CONTACT</a>
                </div>

                <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-medium transition-colors">
                    LETS' TALK
                </button>
            </nav>

            <br/><br/> <br/><br/>

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
                        <a href="#about">
                            <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-medium flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transform-gpu">
                                <span className="relative z-10">GET IN TOUCH</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                            </button>
                        </a>
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

            {/*--------------------------------------------------------------------------------------------------------*/}
            {/* About Section */}

            <section
                id="about"
                className="relative h-screen flex flex-col lg:flex-row items-center justify-between gap-16 px-8 max-w-7xl mx-auto snap-start overflow-hidden"
            >
                {/* Animated Background */}
                <div className="absolute inset-0 -z-10">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className={`absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse`}
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${2 + Math.random() * 2}s`
                                }}
                            ></div>
                        ))}
                    </div>

                    {/* Geometric Shapes */}
                    <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 rounded-full animate-spin-slow"></div>
                    <div className="absolute bottom-20 right-10 w-24 h-24 border border-purple-500/20 rotate-45 animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-cyan-500/20 rounded-lg animate-bounce-slow"></div>

                    {/* Glowing Orbs */}
                    <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-float-reverse"></div>
                </div>

                {/* Left Image */}
                <div
                    className="flex-1 flex justify-center mt-12 lg:mt-0 relative z-10"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                >
                    <div className="relative w-96 h-[500px] group">
                        {/* Glow Effect Behind Image */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl transform scale-110 group-hover:scale-125 transition-transform duration-700"></div>

                        {/* Main Image Container */}
                        <div className="relative w-full h-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-3xl border border-slate-600/50 shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-blue-500/20">
                            {/* Animated Border */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-cyan-500/50 p-[2px] animate-gradient-border">
                                <div className="w-full h-full bg-slate-800 rounded-3xl"></div>
                            </div>

                            {/* Profile Image */}
                            <img
                                src={profile}
                                alt="About Profile"
                                className="relative z-10 w-full h-full object-cover rounded-3xl"
                            />

                            {/* Overlay Effects */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Floating Elements */}
                            <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                            <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div
                    className="flex-1 max-w-2xl mt-12 lg:mt-0 relative z-10"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                >
                    <p className="text-blue-300 text-sm tracking-[0.3em] mb-4 font-light animate-fade-in-up">
                        A B O U T  M E
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                        I AM AVAILABLE FOR{' '}
                        <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient-text">
                    FULL STACK DEVELOPMENT
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </span>{' '}
                        PROJECTS
                    </h2>

                    {/* Content Cards */}
                    <div className="space-y-6 mb-8">
                        <div className="p-6 rounded-2xl hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:translateX-2">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                My name is <span className="text-blue-400 font-semibold">Nethmi Dileksha Kavindi</span>, full-stack developer from Sri Lanka, studying Software Engineering at IJSE.
                            </p>
                            <br/>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                At IJSE, I gained a strong foundation in software engineering and programming.
                                I developed web applications, including a site for a local business that improved their online presence and sales,
                                teaching me the value of teamwork, communication, and attention to detail.
                            </p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#skills">
                            <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-medium flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transform-gpu">
                                <span className="relative z-10">GET IN TOUCH</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                            </button>
                        </a>

                        <a href="../pdf/Dileksha_Kavindi_Professional_CV.pdf" download="Dileksha_Kavindi_Professional_CV.pdf">
                            <button className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 hover:bg-slate-700/70 hover:border-blue-400/50 px-8 py-4 rounded-full font-medium flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105">
                                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                                <span>DOWNLOAD CV</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </a>


                    </div>
                </div>

            </section>

            {/*my skills*/}
            <section
                id="skills"
                className="relative min-h-screen py-20 px-8 max-w-7xl mx-auto snap-start overflow-hidden"
            >
                {/* Animated Background */}
                <div className="absolute inset-0 -z-10">
                    {/* Main Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/20 to-purple-900/30"></div>

                    {/* Moving Geometric Shapes */}
                    <div className="absolute inset-0">
                        {[...Array(15)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute opacity-10"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 5}s`
                                }}
                            >
                                <div className={`w-8 h-8 bg-gradient-to-r ${skills[i % skills.length]?.color} rounded-lg animate-float-${i % 3}`}></div>
                            </div>
                        ))}
                    </div>

                    {/* Glowing Orbs */}
                    <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                    <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full blur-2xl animate-float"></div>
                </div>

                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-blue-300 text-sm tracking-[0.3em] mb-4 font-light">
                        M Y  S K I L L S
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          <span className="bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-text">
            TECHNICAL EXPERTISE
          </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Crafting digital solutions with modern technologies and creative problem-solving
                    </p>
                </div>

                <div className="relative mb-20">
                    {/* Center Skills Display */}
                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className="group relative"
                                data-aos="zoom-in"
                                data-aos-delay={index * 80}
                            >
                                {/* Hexagon Container */}
                                <div className="relative w-32 h-32 lg:w-40 lg:lg:h-40">
                                    {/* Background Glow */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700 scale-150`}></div>

                                    {/* Main Hexagon */}
                                    <div className="relative w-full h-full">
                                        {/* Outer Ring */}
                                        <div className="absolute inset-0 rounded-full border-2 border-slate-700/50 bg-slate-800/30 backdrop-blur-sm group-hover:border-blue-400/50 transition-all duration-500"></div>

                                        {/* Progress Ring */}
                                        <div className="absolute inset-2">
                                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                                <circle
                                                    cx="50"
                                                    cy="50"
                                                    r="40"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    fill="none"
                                                    className="text-slate-700/30"
                                                />
                                                <circle
                                                    cx="50"
                                                    cy="50"
                                                    r="40"
                                                    stroke="url(#gradient)"
                                                    strokeWidth="3"
                                                    fill="none"
                                                    strokeDasharray={`${2 * Math.PI * 40}`}
                                                    className="transition-all duration-1000 ease-out"
                                                    style={{ animationDelay: `${index * 200}ms` }}
                                                />
                                                <defs>
                                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#3B82F6" />
                                                        <stop offset="100%" stopColor="#8B5CF6" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>

                                        {/* Inner Content */}
                                        <div className="absolute inset-6 flex flex-col items-center justify-center">
                                            <div className={`mb-2 group-hover:scale-110 transition-transform duration-300`}>
                                                {/* Image icon */}
                                                <img src={skill.icon} alt={skill.name} className="w-12 h-12 lg:w-16 lg:h-16" />
                                            </div>
                                            <div className="text-xs lg:text-sm font-semibold text-white/80 text-center leading-tight">
                                                {skill.name}
                                            </div>
                                        </div>


                                        {/* Floating Indicators */}
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                                    </div>
                                </div>

                                {/* Skill Name Label */}
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${skill.color} text-white shadow-lg`}>
                                        {skill.category}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <a href="#about">
                            <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-medium flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transform-gpu">
                                <span className="relative z-10">GET IN TOUCH</span>
                                <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            <section id="projects"
                     className="relative min-h-screen py-20 px-8 max-w-7xl mx-auto snap-start overflow-hidden">
                {/* Right: Projects Showcase */}
                <div className="space-y-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <p className="text-blue-300 text-sm tracking-[0.3em] mb-4 font-light">
                            M Y  P R O J E C T S
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">

            <span className="bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-text">
            TECHNICAL EXPERTISE
            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Crafting digital solutions with modern technologies and creative problem-solving
                        </p>
                    </div>

                    {/* Project Navigation */}
                    <div className="flex space-x-2 mb-8">
                        {projects.map((project, index) => (
                            <button
                                key={project.id}
                                onClick={() => setActiveProject(index)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeProject === index
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                                }`}
                            >
                                {String(index + 1).padStart(2, '0')}
                            </button>
                        ))}
                    </div>

                    {/* Active Project Display */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl" />
                        <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-600/50 rounded-3xl overflow-hidden group hover:border-blue-400/50 transition-all duration-500">
                            {/* Project Image */}
                            <div className="relative h-90 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                                <img
                                    src={projects[activeProject].image}
                                    alt={projects[activeProject].title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />


                                {/* Project Year */}
                                <div className="absolute top-4 right-4 flex items-center space-x-1 text-blue-300 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    <span>{projects[activeProject].year}</span>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Tag className="w-4 h-4 text-purple-400" />
                                            <span className="text-purple-300 text-sm">{projects[activeProject].category}</span>
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-2">{projects[activeProject].title}</h4>
                                    </div>
                                    <div className="flex space-x-2">
                                        <div className="flex gap-3">
                                            {/* Backend Repo */}
                                            <a
                                                href={projects[activeProject].githubBackendUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-slate-700/50 rounded-full hover:bg-slate-600/50 transition-colors duration-300"
                                            >
                                                <Github className="w-5 h-5 text-gray-300" />
                                                <span className="ml-2 text-sm text-gray-300">Backend</span>
                                            </a>

                                            {/* Frontend Repo */}
                                            <a
                                                href={projects[activeProject].githubFrontendUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-slate-700/50 rounded-full hover:bg-slate-600/50 transition-colors duration-300"
                                            >
                                                <Github className="w-5 h-5 text-gray-300" />
                                                <span className="ml-2 text-sm text-gray-300">Frontend</span>
                                            </a>
                                            {/* Frontend Repo */}

                                        </div>

                                        <a
                                            href={projects[activeProject].liveUrl}
                                            className="p-2 bg-slate-700/50 rounded-full hover:bg-slate-600/50 transition-colors duration-300"
                                        >
                                            <ExternalLink className="w-5 h-5 text-gray-300" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {projects[activeProject].description}
                                </p>

                                {/* Key Highlights */}
                                <div className="mb-6">
                                    <h5 className="text-sm font-medium text-blue-300 mb-3">Key Features</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {projects[activeProject].highlights.map((highlight, index) => (
                                            <span key={index} className="flex items-center space-x-1 bg-slate-700/30 px-3 py-1 rounded-full text-sm text-gray-300">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span>{highlight}</span>
                        </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h5 className="text-sm font-medium text-blue-300 mb-3">Technologies Used</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {projects[activeProject].technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg text-sm text-blue-300 font-medium hover:scale-105 transition-transform duration-300"
                                            >
                          {tech}
                        </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Navigation Dots */}
                    <div className="flex justify-center space-x-3">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveProject(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    activeProject === index
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-125'
                                        : 'bg-slate-600 hover:bg-slate-500'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
