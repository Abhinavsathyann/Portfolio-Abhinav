import React, { useState, useEffect, useCallback } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Briefcase, User, Send, Moon, Sun } from 'lucide-react';
import abhinavPhoto from '../src/assets/photo/AbhinavPhoto.jpg';
import brandMusiq from '../src/assets/photo/BrandMusiq.png';
import chat from '../src/assets/photo/Chat.png';
import marketkite from '../src/assets/photo/Marketkit.png';
import pacMan from '../src/assets/photo/PacMan.png';
import paymentGateway from '../src/assets/photo/PaymentGateway.png';
import riskMinder from '../src/assets/photo/RiskMinder.png';
import sparkle from '../src/assets/photo/Sparkle.png';
import ticTacToe from '../src/assets/photo/TicTacToe.png';
import expence from '../src/assets/photo/expence.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Magnetic button effect with smooth animation
  const handleMagneticMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const { left, top, width, height } = target.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = Math.floor((e.clientX - centerX) * 0.3);
    const deltaY = Math.floor((e.clientY - centerY) * 0.3);
    
    requestAnimationFrame(() => {
      target.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });
  }, []);

  const handleMagneticLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    requestAnimationFrame(() => {
      target.style.transform = 'translate(0, 0)';
    });
  }, []);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);

    // Handle scroll progress
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);

      // Update active section
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme toggling
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Progress bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-indigo-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-40 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-2xl font-bold text-indigo-600 link-hover">Abhinav K</a>
            <div className="flex items-center gap-8">
              <div className="hidden md:flex gap-6">
                {['home', 'about', 'projects', 'contact'].map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className={`capitalize link-hover ${
                      activeSection === section
                        ? 'text-indigo-600'
                        : 'text-gray-600 dark:text-gray-300'
                    } hover:text-indigo-600 transition-colors`}
                  >
                    {section}
                  </a>
                ))}
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors magnetic-button"
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center justify-center pt-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 to-purple-600/90 dark:from-indigo-900/90 dark:to-purple-900/90 mix-blend-multiply"></div>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 [text-shadow:_0_4px_12px_rgb(0_0_0_/_20%)] animate-float">
              Abhinav K
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Web Developer
            </p>
            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: 'https://github.com/Abhinavsathyann' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/abhinavksathyan/' },
                { icon: Mail, href: 'mailto:abhinavksathyann@gmail.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300 magnetic-button animate-glow"
                  style={{ animationDelay: `${index * 200}ms` }}
                  onMouseMove={handleMagneticMove}
                  onMouseLeave={handleMagneticLeave}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 justify-center mb-12">
            <User     className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-center">About Me</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <img
                src={abhinavPhoto}
                alt="Profile"
                className="relative w-48 h-48 rounded-full object-cover transform transition duration-500 group-hover:scale-105 animate-glow"
              />
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              "I am an aspiring web developer with a strong interest in building dynamic web applications.
               Currently focusing on learning and developing with React, Node.js, and cloud technologies to enhance
                my skills and deliver impactful solutions."
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'Docker'].map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 magnetic-button"
                    onMouseMove={handleMagneticMove}
                    onMouseLeave={handleMagneticLeave}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 justify-center mb-12">
            <Code className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 magnetic-button"
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 transition-colors link-hover"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center gap-2 justify-center mb-12">
            <Send className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold">Get In Touch</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors group magnetic-button animate-glow"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
            >
              <Mail className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
              Send Email
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors group magnetic-button animate-glow"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
            >
              <Briefcase className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p> 2025 Abhinav K. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const projects = [
  {
    title: "Tic Tac Toe Game",
    description: "A full-featured e-commerce platform built with React and Node.js",
    image: ticTacToe,
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://tic-tac-toe-game-rho-one.vercel.app/"
  },
  {
    title: "Pac Man Game",
    description: "A collaborative task management application with real-time updates",
    image: pacMan,
    technologies: ["React", "Firebase", "Tailwind"],
    link: "https://pac-man-game-two.vercel.app/"
  },
  {
    title: "MarketKit",
    description: "A beautiful weather dashboard with detailed forecasts and maps",
    image: marketkite,
    technologies: ["React", "TypeScript", "APIs"],
    link: "https://marketkit.vercel.app/"
  },
  {
    title: "RiskMinder",
    description: "A modern blog platform with rich text editing and user authentication",
    image: riskMinder,
    technologies: ["React", "Node.js", "GraphQL"],
    link: "https://risk-minder-rho.vercel.app/"
  },
  {
    title: "RealTime chatting App",
    description: "A fitness tracking app that helps users monitor their workouts and progress",
    image: chat,
    technologies: ["React Native", "Firebase", "Redux"],
    link: "https://chatting-app-jet.vercel.app/"
  },
  {
    title: "expense-tracker",
    description: "An app that helps users find recipes based on ingredients they have at home",
    image: expence,
    technologies: ["React", "TypeScript", "Spoonacular API"],
    link: "expense-tracker-five-rust.vercel.app"
  },
  {
    title: "payment gateway",
    description: "A personal portfolio website showcasing projects and skills",
    image: paymentGateway,
    technologies: ["React", "Tailwind CSS", "Vite"],
    link: "https://payment-gateway-silk-beta.vercel.app/"
  },
  {
    title: "Brand Mussiq clone",
    description: "A real-time chat application with user authentication and message history",
    image: brandMusiq,
    technologies: ["React", "Socket.io", "MongoDB"],
    link: "https://brand-musiq.vercel.app/"
  },
  {
    title: "Sparkle clone",
    description: "An app to track and manage personal expenses with visual analytics",
    image: sparkle,
    technologies: ["React", "Chart.js", "Firebase"],
    link: "https://sparkle-clone-nj2o.vercel.app/"
  }
];

export default App;