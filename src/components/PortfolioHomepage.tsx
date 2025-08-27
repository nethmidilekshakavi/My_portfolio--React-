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
    Star, Palette, Search, Code, Send, Instagram, Phone, Mail,
    MapPin, Heart, ArrowUp
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
import emailjs from 'emailjs-com';


import {useEffect, useState} from "react";

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

    const services = [
        {
            id: 1,
            icon: <Code className="w-8 h-8" />,
            title: "Frontend Development",
            description: "Build interactive, responsive, and modern front-end interfaces using React, HTML, CSS, and JavaScript for an engaging user experience.",
            rating: 5,
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            icon: <Code className="w-8 h-8" />,
            title: "Backend Development",
            description: "Develop robust server-side applications using Node.js, Spring Boot, JavaEE, and database integration for secure and scalable solutions.",
            rating: 5,
            color: "from-purple-500 to-blue-500"
        },
        {
            id: 3,
            icon: <Palette className="w-8 h-8" />,
            title: "UI/UX Design",
            description: "Design visually appealing and user-friendly interfaces with seamless user experiences, wireframes, and prototypes.",
            rating: 5,
            color: "from-pink-500 to-purple-500"
        },
        {
            id: 4,
            icon: <Code className="w-8 h-8" />,
            title: "Web Development",
            description: "End-to-end web development solutions, from website design to full-stack implementation, optimized for performance and scalability.",
            rating: 5,
            color: "from-green-500 to-cyan-500"
        },
    ];

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <span key={i} className="text-yellow-400 text-lg">★</span>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <span key="half" className="text-yellow-400 text-lg">☆</span>
            );
        }

        return stars;
    };

    const scrollToHome = () => {
        const homeSection = document.getElementById("home");
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleForSubimted = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Please fill all required fields.');
            return;
        }

        emailjs.send(
            'service_7qb9vsf',        // Service ID
            'template_0cy7ra2',       // Template ID
            formData,                 // Form data
            'w8fwoqZKlq0TGX-T9'       // Public key / User ID
        )
            .then((result) => {
                console.log('Email sent:', result.text);
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
            })
            .catch((error) => {
                console.log('Email failed:', error.text);
                alert('Failed to send message.');
            });
    };


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


            {/*projects section*/}
            <section id="projects"
                     className="relative min-h-screen py-20 px-8 max-w-7xl mx-auto snap-start overflow-hidden mt-[-90px]">
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
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20 rounded-3xl blur-xl" />
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


            {/*services section*/}
            <section
                id="services"
                className="relative min-h-screen flex flex-col items-center justify-center gap-16 px-8 py-20 max-w-7xl mx-auto snap-start overflow-hidden mt-[-90px]"
            >
                {/* Animated Background */}
                <div className="absolute inset-0 -z-10">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0">
                        {[...Array(25)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
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
                    <div className="absolute top-32 left-16 w-24 h-24 border border-blue-500/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                    <div className="absolute bottom-32 right-16 w-32 h-32 border border-purple-500/20 rotate-45 animate-pulse"></div>
                    <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-cyan-500/20 rounded-lg animate-bounce" style={{animationDuration: '3s'}}></div>

                    {/* Glowing Orbs */}
                    <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                {/* Header */}
                <div className="text-center relative z-10 mb-8">
                    <p className="text-blue-300 text-sm tracking-[0.3em] mb-4 font-light animate-fade-in-up">
                        S E R V I C E S
                    </p>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                        DESIGN{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-pulse">
                        SERVICES
                    </span>{' '}
                        I AM PROVIDING
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full relative z-10">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-600/50 hover:border-blue-400/50 p-6 transition-all duration-500 hover:scale-105 hover:bg-slate-700/70"
                            style={{
                                animationDelay: `${index * 0.2}s`
                            }}
                        >
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-500`}></div>

                            {/* Animated Border */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} p-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500`}>
                                <div className="w-full h-full bg-slate-800 rounded-2xl"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="text-white">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                                    {service.description}
                                </p>

                                {/* Rating */}
                                <div className="flex items-center gap-1">
                                    {renderStars(service.rating)}
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                            <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom Decorative Elements */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 opacity-30">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
            </section>


            {/*contact section*/}
            <section
                id="contact"
                className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between gap-16 px-8 py-20 max-w-7xl mx-auto snap-start overflow-hidden"
            >
                {/* Animated Background */}
                <div className="absolute inset-0 -z-10">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0">
                        {[...Array(25)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
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
                    <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                    <div className="absolute bottom-20 right-10 w-24 h-24 border border-purple-500/20 rotate-45 animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-cyan-500/20 rounded-lg animate-bounce" style={{animationDuration: '3s'}}></div>

                    {/* Glowing Orbs */}
                    <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                {/* Left Side - Profile and Contact Info */}
                <div className="flex-1 flex flex-col items-center lg:items-start space-y-8 relative z-10">
                    {/* Profile Image */}
                    <div className="relative w-80 h-96 group">
                        {/* Glow Effect Behind Image */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl transform scale-110 group-hover:scale-125 transition-transform duration-700"></div>

                        {/* Main Image Container */}
                        <div className="relative w-full h-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-3xl border border-slate-600/50 shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-blue-500/20">
                            {/* Animated Border */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-cyan-500/50 p-[2px] animate-pulse">
                                <div className="w-full h-full bg-slate-800 rounded-3xl"></div>
                            </div>

                            {/* Placeholder for Profile Image */}
                            <div className="relative z-10 w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl">
                                <div className="text-6xl text-blue-400 opacity-50">👤</div>
                            </div>

                            {/* Overlay Effects */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Floating Elements */}
                            <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                            <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6 w-full max-w-sm">
                        {/* Email */}
                        <div className="group">
                            <p className="text-blue-300 text-sm tracking-[0.2em] mb-2 font-light">
                                WRITE AN E-MAIL
                            </p>
                            <div className="flex items-center space-x-3 text-white text-lg font-medium group-hover:text-blue-300 transition-colors duration-300">
                                <Mail className="w-5 h-5 text-blue-400" />
                                <span>nethmidileksha6@gmail.com</span>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="group">
                            <p className="text-blue-300 text-sm tracking-[0.2em] mb-2 font-light">
                                MAKE A CALL
                            </p>
                            <div className="flex items-center space-x-3 text-white text-lg font-medium group-hover:text-blue-300 transition-colors duration-300">
                                <Phone className="w-5 h-5 text-blue-400" />
                                <span>+94 77 272 8738</span>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="flex-1 max-w-2xl w-full relative z-10">
                    <div className="mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                            Let's Discuss Your Project
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Always available for freelancing if the right project comes along.
                            Feel free to contact me.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="space-y-6">
                        {/* Name and Email Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-blue-300 text-sm tracking-[0.1em] mb-2 block font-light">
                                    YOUR NAME
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Name *"
                                    className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 focus:bg-slate-700/70 transition-all duration-300"
                                />
                            </div>
                            <div>
                                <label className="text-blue-300 text-sm tracking-[0.1em] mb-2 block font-light">
                                    YOUR EMAIL
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email *"
                                    className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 focus:bg-slate-700/70 transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="text-blue-300 text-sm tracking-[0.1em] mb-2 block font-light">
                                SUBJECT
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder="Subject *"
                                className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 focus:bg-slate-700/70 transition-all duration-300"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-blue-300 text-sm tracking-[0.1em] mb-2 block font-light">
                                YOUR MESSAGE
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Your message *"
                                rows="6"
                                className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 focus:bg-slate-700/70 transition-all duration-300 resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleForSubimted}
                            className="group relative w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-medium flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transform-gpu"
                        >
                            <span className="relative z-10">SEND MESSAGE</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div>

                {/* Bottom Decorative Dot */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                </div>
            </section>

            {/*footer section*/}

            <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden snap-start h-110 ">
                {/* Animated Background */}
                <div className="absolute inset-0 -z-10">
                    {/* Floating Particles */}
                    <div className="absolute inset-0">
                        {[...Array(15)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${3 + Math.random() * 2}s`
                                }}
                            ></div>
                        ))}
                    </div>

                    {/* Geometric Shapes */}
                    <div className="absolute top-10 left-10 w-20 h-20 border border-blue-500/10 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
                    <div className="absolute bottom-20 right-20 w-16 h-16 border border-purple-500/10 rotate-45 animate-pulse"></div>

                    {/* Glowing Orbs */}
                    <div className="absolute top-0 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl"></div>
                </div>

                {/* Main Footer Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* About Column */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Nethmi Dileksha
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Full-stack developer passionate about creating innovative web solutions.
                                Turning ideas into digital reality with modern technologies.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="group relative w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                                    <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                    <div className="absolute inset-0 bg-blue-400/20 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                                </a>
                                <a href="#" className="group relative w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:scale-110">
                                    <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                    <div className="absolute inset-0 bg-pink-400/20 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                                </a>
                                <a href="#" className="group relative w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110">
                                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                    <div className="absolute inset-0 bg-blue-400/20 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                                </a>
                                <a href="#" className="group relative w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-all duration-300 hover:scale-110">
                                    <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                    <div className="absolute inset-0 bg-gray-400/20 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                            <ul className="space-y-3">
                                {['About', 'Services', 'Projects', 'Contact', 'Blog'].map((link, index) => (
                                    <li key={index}>
                                        <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-semibold text-white">Services</h4>
                            <ul className="space-y-3">
                                {['Web Design', 'Web Development', 'Mobile Apps', 'SEO Marketing', 'Graphic Design'].map((service, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3 group">
                                    <Mail className="w-5 h-5 text-blue-400 mt-1 group-hover:text-blue-300" />
                                    <div>
                                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                            nethmidileksha6@gmail.com                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3 group">
                                    <Phone className="w-5 h-5 text-purple-400 mt-1 group-hover:text-purple-300" />
                                    <div>
                                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                            +94 77 272 8738
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3 group">
                                    <MapPin className="w-5 h-5 text-cyan-400 mt-1 group-hover:text-cyan-300" />
                                    <div>
                                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                            Colombo, Sri Lanka
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="relative mb-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gradient-to-r from-transparent via-slate-600/50 to-transparent"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2 text-gray-400">
                            <span>Made with</span>
                            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                            <span>by Nethmi Dileksha © 2025. All rights reserved.</span>
                        </div>

                        {/* Back to Top Button */}
                        <button
                            onClick={scrollToHome}
                            className="group relative bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 hover:bg-slate-600/70 hover:border-blue-400/50 p-3 rounded-full transition-all duration-300 hover:scale-110"
                        >
                            <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:-translate-y-1 transition-all duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div>

                {/* Animated Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-50"></div>
            </footer>
        </div>
    );
}
