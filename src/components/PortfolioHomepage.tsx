import {Facebook, Linkedin, ArrowRight, Github, Download} from 'lucide-react';
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
                        <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-medium flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transform-gpu">
                            <span className="relative z-10">GET IN TOUCH</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                        </button>

                        <a href="/path/to/your-cv.pdf" download>
                            <button className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 hover:bg-slate-700/70 hover:border-blue-400/50 px-8 py-4 rounded-full font-medium flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105">
                                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                                <span>DOWNLOAD CV</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </a>

                    </div>
                </div>

                {/* Custom Styles */}
                <style jsx>{`
        @keyframes gradient-border {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-text {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-reverse {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(20px) rotate(-180deg); }
        }
        
        @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient-border {
            background-size: 200% 200%;
            animation: gradient-border 3s ease infinite;
        }
        
        .animate-gradient-text {
            background-size: 200% 200%;
            animation: gradient-text 3s ease infinite;
        }
        
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
            animation: float-reverse 8s ease-in-out infinite;
        }
        
        .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-slow {
            animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
        }
    `}</style>
            </section>

        </div>
    );
}
