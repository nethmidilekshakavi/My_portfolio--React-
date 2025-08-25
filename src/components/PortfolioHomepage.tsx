import {Facebook, Linkedin, ArrowRight, Github, Download, ArrowLeft} from 'lucide-react';
import profile from '../images/32f9a197f5ec443550682f085a06feb0.jpg';

export default function PortfolioHomepage() {



    const skills = [
        {
            name: "Java",
            color: "from-red-500 to-orange-500",
            icon: "☕",
            category: "Backend"
        },
        {
            name: "MySQL",
            color: "from-blue-600 to-blue-400",
            icon: "🗃️", // Database icon
            category: "Database"
        },
        {
            name: "MongoDB",
            color: "from-green-600 to-green-400",
            icon: "🍃", // Leaf icon for MongoDB
            category: "Database"
        },
        {
            name: "Python",
            color: "from-yellow-500 to-blue-500",
            icon: "🐍", // Snake icon for Python
            category: "Backend"
        },
        {
            name: "HTML",
            color: "from-orange-600 to-red-500",
            icon: "🌐", // Web icon
            category: "Frontend"
        },
        {
            name: "CSS",
            color: "from-blue-500 to-purple-500",
            icon: "🎨", // Art palette icon
            category: "Frontend"
        },
        {
            name: "JavaScript",
            color: "from-yellow-400 to-yellow-600",
            icon: "⚡", // Lightning for JS
            category: "Frontend"
        },
        {
            name: "Node.js",
            color: "from-green-500 to-green-700",
            icon: "⚙️", // Gear icon for Node
            category: "Backend"
        },
        {
            name: "React",
            color: "from-cyan-400 to-blue-500",
            icon: "⚛️", // Atom icon for React
            category: "Frontend"
        },
        {
            name: "Figma",
            color: "from-purple-500 to-pink-500",
            icon: "🎯", // Target icon for design
            category: "Design"
        }
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
                                            <div className={`text-3xl lg:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300`}>
                                                {skill.icon}
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
        </div>
    );
}
