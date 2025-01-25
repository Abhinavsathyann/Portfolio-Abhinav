import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Briefcase, User, Send, Moon, Sun, Award, GraduationCap, Trophy } from 'lucide-react';
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

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);

      const sections = ['home', 'about', 'experience', 'achievements', 'certificates', 'projects', 'contact'];
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
            <a href="#home" className="text-2xl font-bold text-indigo-600 link-hover">ABHINAV K</a>
            <div className="flex items-center gap-8">
              <div className="hidden md:flex gap-6">
                {['home', 'about', 'experience', 'achievements', 'certificates', 'projects', 'contact'].map((section) => (
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
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-indigo-600">Abhinav</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Web Developer
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get in Touch !
              </a>
              <a
                href="#projects"
                className="px-8 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="mt-12 animate-bounce">
            <a href="#about" className="inline-block">
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 justify-center mb-12">
            <User className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-center">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img
                src={abhinavPhoto}
                alt="Profile"
                className="w-full h-[550px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6 animate-slide-in-right">
              <p className="text-lg text-gray-600 dark:text-gray-300">
              I’m a passionate web developer focused on building scalable web applications and cloud solutions.
               I love creating efficient, user-friendly digital experiences that solve real-world problems.
                Constantly learning and exploring new technologies, I strive to write clean, optimized code that brings ideas to life
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold mb-2">Skills</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Tailwind css & Bootstrap</li>
                    <li>• TypeScript & JavaScript</li>
                    <li>• Python & Django</li>
                    <li>• React & Next.js</li>
                    <li>• Php & Laravel</li>
                    <li>• Java & Sql</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Interests</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• UI/UX Design & Prototyping</li>
                    <li>• Open Source Contributions</li>
                    <li>• Mobile App Development</li>
                    <li>• AI & Machine Learning</li>
                    <li>• Web Development</li>
                    <li>• Cyber Security</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Abhinavsathyann"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/abhinavksathyan/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keep all existing sections: Experience, Achievements, Certificates, Projects, Contact */}
      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 justify-center mb-12">
            <Briefcase className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-center">Work Experience</h2>
          </div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-indigo-600 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute left-0 top-0 w-2 h-2 bg-indigo-600 rounded-full transform -translate-x-[3px]" />
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-indigo-600">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 justify-center mb-12">
            <Trophy className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-center">Achievements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-scale"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-indigo-600 mb-4">
                  <achievement.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 justify-center mb-12">
            <Award className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-center">Certificates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-indigo-600">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-gray-500">{cert.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{cert.description}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      View Certificate <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 justify-center mb-12">
            <Code className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-scale"
                style={{ animationDelay: `${index * 200}ms` }}
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
                    className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 transition-colors"
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
      <section id="contact" className="py-20 px-4">
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
              href="mailto:Abhinavksathyann@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors group animate-scale"
            >
              <Mail className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
              Send Email
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors group animate-scale animate-delay-100"
            >
              <Briefcase className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
              Download CV
            </a>
          </div>
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="https://github.com/Abhinavsathyann"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors animate-scale animate-delay-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinavksathyann/"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors animate-scale animate-delay-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:Abhinavksathyann@gmail.com"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors animate-scale animate-delay-400"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Abhinav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Keep all existing constants
const experiences = [
  {
    role: "Web Developer Intern", 
    company: "Sperkerbox Media.",
    period: "2024 - Present",
    achievements: [
      "Building and optimizing web applications.",
      "Enhancing UI/UX, improving performance, and working with modern web technologies.",
      "Gaining hands-on exposure to real-world projects and development workflows."
    ]
  },
 
];

const achievements = [
  {
    icon: Trophy,
    title: "Participated in E-Summit 2025 at IIT Bombay",
    description: "Engaged in networking, startup mentorship, and discussions on entrepreneurship and technology innovation."
  },
  {
    icon: Code,
    title: "Participated in Multiple Online Hackathons on Devfolio",
    description: "Developed innovative projects, collaborated with global developers, and enhanced problem-solving skills in Web3 and software development."
  },
  {
    icon: GraduationCap,
    title: "Attended Numerous Certificates, Bootcamps, and Webinars",
    description: "Gained hands-on experience and industry insights through various educational events, enhancing skills in web development, cloud technologies, and emerging trends."
  },
  {
    icon: Award,
    title: "Participated in Web3 Hackathon at NIT Calicut",
    description: "Collaborated on blockchain-based solutions, gained hands-on experience with Web3 technologies, and engaged with industry experts and fellow developers."
  },
  {
    icon: Github,
    title: "Active Contributor on GitHub",
    description: "Engaging in open-source projects, collaborating with developers, and continuously improving code quality and functionality."
  },
  {
    icon: Trophy,
    title: "Participated in E-Summit 2024 at NIT Calicut",
    description: "Explored emerging startup trends, attended insightful sessions, and connected with industry experts and fellow entrepreneurs."
  }
];

const certificates = [
  {
    title: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Advanced certification for designing distributed systems on AWS",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google",
    date: "2024",
    description: "Expert-level certification for cloud application development",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    title: "Microsoft Azure Expert",
    issuer: "Microsoft",
    date: "2024",
    description: "Advanced certification for Azure cloud solutions",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    title: "Advanced React Development",
    issuer: "Meta",
    date: "2024",
    description: "Specialized certification in advanced React patterns and practices",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    title: "Internship Completion Certificate – CodeSoft",
    issuer: "CodeSoft",
    date: "2024",
    description: "Completed a 1-month internship in Web Development, gaining hands-on experience in building and optimizing web applications.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    title: "Internship Completion Certificate – OIB",
    issuer: "Oasis Infobyt",
    date: "2024",
    description: "Completed a 1-month internship in Web Development & Designing, focusing on front-end development, UI/UX enhancements, and responsive web design.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    title: "Internship Completion Certificate – Keltron",
    issuer: "Keltron",
    date: "2024",
    description: "Completed a 1-month internship in Artificial Intelligence and Machine Learning, gaining hands-on experience in AI models, data analysis, and machine learning algorithms using Python.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    title: "Certificate of Completion – RedTeam Hacker Academy",
    issuer: "Oasis Infobyt",
    date: "2024",
    description: "Completed a 1-month internship in Web Development & Designing, focusing on front-end development, UI/UX enhancements, and responsive web design.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    title: "Certificate of Completion – Creators of Metaverse Program",
    issuer: "Meta",
    date: "2023",
    description: "Successfully completed a 2-day workshop in Phase 1 of the Creators of Metaverse Program in partnership with AICTE, supported by Meta Platforms Inc., and managed by 1M1B. The program focused on exploring metaverse technologies, immersive experiences, and future digital innovations.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    title: "Certificate of Participation – Creators of Metaverse Student Program",
    issuer: "Meta",
    date: "2024",
    description: "Presented for successfully participating in Phase 2 of the Creators of Metaverse Student Program. This month-long Augmented Reality (AR) learning and workplace experience in the academic year 2023-24 focused on developing basic to advanced AR projects using Meta Spark Studio, inspiring the next generation of AR creators in India.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80",
    link: "#"
  }
];

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
