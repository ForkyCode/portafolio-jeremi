import React, { useEffect, useState } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Server,
  Database,
  Cloud,
  Cpu,
  Globe,
  ChevronRight,
  User,
  Languages,
  Trophy
} from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll.jsx';

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('simplycodia');
  const [typingText, setTypingText] = useState('');
  const fullText = "FullStack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypingText(() => fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const skills = {
    programming: {
      title: "Programming & Frameworks",
      icon: <Code size={24} />,
      items: ["JavaScript", "Java", "PHP", "React", "Vue.js", "Nest.js", "Quasar", "Node.js", "Express", "Android Studio"]
    },
    frontend: {
      title: "Frontend",
      icon: <Globe size={24} />,
      items: ["HTML5", "CSS3", "Tailwind", "SASS"]
    },
    backend: {
      title: "Backend & APIs",
      icon: <Server size={24} />,
      items: ["REST", "GraphQL", "Apigee", "Kafka", "Integration Hub"]
    },
    database: {
      title: "Databases",
      icon: <Database size={24} />,
      items: ["MySQL", "PostgreSQL", "MariaDB"]
    },
    cloud: {
      title: "Cloud & Tools",
      icon: <Cloud size={24} />,
      items: ["AWS Cloud", "Git/GitHub", "CI/CD", "Strapi", "Figma", "Excel"]
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-[#FDFBFD] selection:bg-[#7A1CAC] selection:text-white overflow-x-hidden">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#2E073F]/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white tracking-wider">
            JEREMI<span className="text-[#EBD3F8]">.DEV</span>
          </a>

          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#EBD3F8] text-sm font-medium transition-colors uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#2E073F] absolute w-full border-t border-[#7A1CAC]">
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#EBD3F8]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center bg-[#2E073F] pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#7A1CAC] rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EBD3F8] rounded-full filter blur-[150px] opacity-10"></div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-8 lg:gap-12 items-center relative z-10">
          <div className="text-center md:text-left">
            <RevealOnScroll direction="left">
              <h2 className="text-[#EBD3F8]/80 font-medium text-lg mb-1">Hello, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight">
                Jeremi <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EBD3F8] to-[#7A1CAC]">Chacón</span>
              </h1>

              <div className="h-8 mb-6">
                <p className="text-[#EBD3F8] font-mono text-xl md:text-2xl border-r-4 border-[#7A1CAC] pr-2 inline-block animate-pulse font-bold tracking-widest">
                  {typingText}
                </p>
              </div>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-8">
                <p>
                  I’m a developer who enjoys creating solutions that make life easier for people and businesses.
                  From backend architectures to high-level integrations, I specialize in turning complex needs
                  into clear, stable, and scalable digital platforms.
                </p>
                <p>
                  I work with a results-driven mindset: APIs that respond fast, processes that become automated,
                  and products that grow without breaking. Technology is my tool, but what truly motivates me is
                  building solutions that create real impact.
                </p>
              </div>

              <div className="hidden md:flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="/CVH-Jeremi%20Chac%C3%B3n(Ingles).pdf"
                  download
                  className="px-8 py-3 bg-[#7A1CAC] text-white rounded-full font-semibold hover:bg-[#651590] transition-all hover:scale-105 shadow-lg shadow-[#7A1CAC]/30 flex items-center justify-center gap-2"
                >
                  <Download size={20} /> Download CV
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 border-2 border-[#EBD3F8] text-[#EBD3F8] rounded-full font-semibold hover:bg-[#EBD3F8] hover:text-[#2E073F] transition-all hover:scale-105"
                >
                  View Projects
                </a>
              </div>
            </RevealOnScroll>
          </div>

          <div className="flex justify-center md:justify-end">
            <RevealOnScroll direction="right" delay={200}>
              <div className="relative w-72 h-72 md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] rounded-3xl p-2 border-2 border-[#7A1CAC]/30 backdrop-blur-sm bg-white/5">
                <img
                  src="/Imagenes/Jeremi-Chacon.jpg"
                  alt="Jeremi Chacón"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 md:bottom-2 md:left-2 lg:-bottom-6 lg:-left-6 bg-white p-5 rounded-2xl shadow-lg flex items-center gap-3 animate-bounce">
                  <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-[#2E073F] font-bold text-sm leading-tight">
                      Building Scalable<br />Solutions
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="flex md:hidden flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/CVH-Jeremi%20Chac%C3%B3n(Ingles).pdf"
              download
              className="px-8 py-3 bg-[#7A1CAC] text-white rounded-full font-semibold hover:bg-[#651590] transition-all hover:scale-105 shadow-lg shadow-[#7A1CAC]/30 flex items-center justify-center gap-2"
            >
              <Download size={20} /> Download CV
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto text-center px-8 py-3 border-2 border-[#EBD3F8] text-[#EBD3F8] rounded-full font-semibold hover:bg-[#EBD3F8] hover:text-[#2E073F] transition-all hover:scale-105"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 bg-[#EBD3F8]/30">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-4xl font-bold text-[#2E073F] mb-16 text-center">Technical Arsenal</h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(skills).map((category, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100} direction="up">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border-b-4 border-transparent hover:border-[#7A1CAC] hover:-translate-y-2 transition-all duration-300 h-full group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-[#EBD3F8] text-[#7A1CAC] rounded-lg group-hover:bg-[#7A1CAC] group-hover:text-white transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#2E073F]">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span key={item} className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full border border-gray-100 font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-4xl font-bold text-[#2E073F] mb-12 text-center">Featured Projects</h2>
          </RevealOnScroll>

          <div className="flex justify-center mb-12 flex-wrap gap-4">
            {['simplycodia', 'birding', 'itravelly'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-semibold transition-all capitalize ${
                  activeTab === tab
                    ? 'bg-[#7A1CAC] text-white shadow-lg scale-105'
                    : 'bg-[#EBD3F8] text-[#2E073F] hover:bg-[#dcbff0]'
                }`}
              >
                {tab === 'birding' ? 'Birding In Panama' : tab}
              </button>
            ))}
          </div>

          <div className="min-h-[500px]">
            {activeTab === 'simplycodia' && (
              <RevealOnScroll key="simplycodia">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-[#2E073F]">SimplyCodia</h3>
                    <p className="text-gray-600 text-lg">
                      A corporate landing page and digital transformation service platform.
                      Focused on clean UI/UX and performance to convert visitors into clients.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-[#2E073F] text-white text-xs rounded-full">Express & Node.js</span>
                      <span className="px-3 py-1 bg-[#2E073F] text-white text-xs rounded-full">React.js</span>
                      <span className="px-3 py-1 bg-[#2E073F] text-white text-xs rounded-full">MySQL / MariaDB</span>
                    </div>
                    <div className="p-4 bg-[#FDFBFD] rounded-xl border-l-4 border-[#7A1CAC]">
                      <h4 className="font-bold text-[#2E073F] mb-2">Key Features</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>High-performance Landing Page</li>
                        <li>Fully Responsive Design</li>
                        <li>Optimized for SEO and Conversion</li>
                      </ul>
                    </div>
                    <a href="https://simplycodia.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#7A1CAC] font-bold hover:underline">
                      View Live Site <ExternalLink size={18} />
                    </a>
                  </div>
                  <div className="relative flex flex-col items-center gap-6 lg:gap-8">
                    <img
                      src="/Imagenes/Simplycodia.com%20desktop.png"
                      alt="SimplyCodia Desktop"
                      className="w-full max-w-[520px] rounded-xl shadow-2xl border border-gray-200 hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="flex justify-center md:absolute md:bottom-[-24px] md:right-6 md:w-[180px] lg:w-[200px]">
                      <img
                        src="/Imagenes/simplycodia.com%20mobile.png"
                        alt="SimplyCodia Mobile"
                        className="w-1/3 md:w-full rounded-[2rem] shadow-xl border-4 border-gray-800"
                      />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            )}

            {activeTab === 'birding' && (
              <RevealOnScroll key="birding">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-[#2E073F]">Birding In Panama</h3>
                    <p className="text-gray-600 text-lg">
                      A comprehensive tourism platform for birdwatching enthusiasts.
                      Includes complex booking logic and tour package management.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-[#2E073F] text-white text-xs rounded-full">Vue.js</span>
                      <span className="px-3 py-1 bg-[#2E073F] text-white text-xs rounded-full">Node.js / Express</span>
                      <span className="px-3 py-1 bg-[#2E073F] text-white text-xs rounded-full">PostgreSQL</span>
                    </div>
                    <div className="p-4 bg-[#FDFBFD] rounded-xl border-l-4 border-[#7A1CAC]">
                      <h4 className="font-bold text-[#2E073F] mb-2">Key Features</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Dynamic Tour Package Creator</li>
                        <li>Advanced Booking System</li>
                        <li>Real-time Availability Checks</li>
                      </ul>
                    </div>
                    <a href="https://birdinginpanama.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#7A1CAC] font-bold hover:underline">
                      View Live Site <ExternalLink size={18} />
                    </a>
                  </div>
                  <div className="relative flex flex-col items-center gap-6 lg:gap-8">
                    <img
                      src="/Imagenes/Birdinginpanama%20Desktop.jfif"
                      alt="Birding Desktop"
                      className="w-full max-w-[520px] rounded-xl shadow-2xl border border-gray-200 hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="flex justify-center md:absolute md:bottom-[-24px] md:right-6 md:w-[180px] lg:w-[200px]">
                      <img
                        src="/Imagenes/BirdingInpanama%20Mobile.jfif"
                        alt="Birding Mobile"
                        className="w-1/3 md:w-full rounded-[2rem] shadow-xl border-4 border-gray-800"
                      />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            )}

            {activeTab === 'itravelly' && (
              <RevealOnScroll key="itravelly">
                <div className="flex flex-col items-center justify-center h-64 text-center bg-[#FDFBFD] rounded-2xl border-2 border-dashed border-[#7A1CAC]/30">
                  <div className="p-4 bg-[#EBD3F8] rounded-full text-[#2E073F] mb-4">
                    <Cpu size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2E073F]">Itravelly</h3>
                  <p className="text-gray-500 mt-2">Project under development. Coming Soon.</p>
                </div>
              </RevealOnScroll>
            )}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-[#2E073F] text-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <RevealOnScroll>
            <h2 className="text-4xl font-bold mb-16 text-center">Professional Experience</h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up">
            <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 hover:border-[#7A1CAC]/50 transition-colors max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#EBD3F8]">SimplyCodia – Panama City, Panama</h3>
                  <h4 className="text-xl font-semibold">FullStack Developer</h4>
                </div>
                <span className="mt-2 md:mt-0 px-4 py-1 bg-[#7A1CAC] rounded-full text-sm font-bold">Nov 2022 – Aug 2025</span>
              </div>

              <div className="space-y-4 text-gray-300">
                <div className="flex gap-3">
                  <ChevronRight className="text-[#7A1CAC] flex-shrink-0" />
                  <p>Developed RESTful APIs using <strong className="text-white">Node.js, Express, and Spring Boot</strong> for efficient data management and web service integration.</p>
                </div>
                <div className="flex gap-3">
                  <ChevronRight className="text-[#7A1CAC] flex-shrink-0" />
                  <p>Designed and documented API endpoints for external consumption by clients and frontend teams.</p>
                </div>
                <div className="flex gap-3">
                  <ChevronRight className="text-[#7A1CAC] flex-shrink-0" />
                  <p>Collaborated in agile environments to ensure continuous delivery and quality assurance through functional testing.</p>
                </div>
                <div className="flex gap-3">
                  <ChevronRight className="text-[#7A1CAC] flex-shrink-0" />
                  <p>Worked on API management and data flow optimization using <strong className="text-white">Apigee and Kafka</strong> for transaction processing.</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <RevealOnScroll direction="left">
              <h2 className="text-3xl font-bold text-[#2E073F] mb-8 flex items-center gap-3">
                <div className="p-2 bg-[#7A1CAC] rounded-lg text-white"><Globe size={24} /></div>
                Education
              </h2>
              <div className="space-y-6 border-l-2 border-[#EBD3F8] pl-8 relative">
                <div className="relative">
                  <div className="absolute -left-[39px] top-1 w-5 h-5 bg-[#7A1CAC] rounded-full border-4 border-white"></div>
                  <h3 className="text-xl font-bold text-[#2E073F]">Bachelor’s Degree Software Development</h3>
                  <p className="text-[#7A1CAC] font-medium">Universidad Tecnológica de Panamá</p>
                  <p className="text-gray-500 text-sm">2019 – 2025</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[39px] top-1 w-5 h-5 bg-[#EBD3F8] rounded-full border-4 border-white"></div>
                  <h3 className="text-xl font-bold text-[#2E073F]">Technology and Computing</h3>
                  <p className="text-[#7A1CAC] font-medium">Instituto Comercial Panamá</p>
                  <p className="text-gray-500 text-sm">2017 – 2018</p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-[#2E073F] mb-6 flex items-center gap-3">
                  <Languages size={24} className="text-[#7A1CAC]" /> Languages
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="p-5 bg-[#FDFBFD] border border-gray-100 rounded-xl hover:border-[#7A1CAC] hover:shadow-md transition-all flex items-center gap-4">
                    <div className="w-2 h-2 bg-[#7A1CAC] rounded-full shrink-0"></div>
                    <div>
                      <span className="text-[#2E073F] font-bold block text-lg">Spanish</span>
                      <span className="text-sm text-gray-500">Native Speaker</span>
                    </div>
                  </div>
                  <div className="p-5 bg-[#FDFBFD] border border-gray-100 rounded-xl hover:border-[#7A1CAC] hover:shadow-md transition-all flex items-center gap-4">
                    <div className="w-2 h-2 bg-[#7A1CAC] rounded-full shrink-0"></div>
                    <div>
                      <span className="text-[#2E073F] font-bold block text-lg">English</span>
                      <span className="text-sm text-gray-500">B2 Professional</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={200}>
              <h2 className="text-3xl font-bold text-[#2E073F] mb-8 flex items-center gap-3">
                <div className="p-2 bg-[#7A1CAC] rounded-lg text-white"><Cpu size={24} /></div>
                Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {[
                  "AWS Cloud Practitioner",
                  "AWS Technical Essentials",
                  "AWS Essentials for Leaders",
                  "Introduction to FinOps",
                  "Java Masterclass (Udemy)",
                  "English B2 Certification"
                ].map((cert, i) => (
                  <div key={i} className="p-4 bg-[#FDFBFD] border border-gray-100 rounded-xl hover:border-[#7A1CAC] hover:shadow-md transition-all flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#7A1CAC] rounded-full shrink-0"></div>
                    <span className="text-[#2E073F] font-medium text-sm leading-tight">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-[#2E073F] mb-6 flex items-center gap-3">
                  <Trophy size={24} className="text-[#7A1CAC]" /> Achievements & Competitions
                </h3>
                <div className="space-y-4">
                  <div className="p-5 bg-[#FDFBFD] border border-gray-100 rounded-xl hover:border-[#7A1CAC] hover:shadow-md transition-all">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                      <h4 className="text-[#2E073F] font-bold text-lg">World Robot Olympiad (WRO Panamá)</h4>
                      <span className="text-xs font-bold text-[#7A1CAC] bg-[#7A1CAC]/10 px-3 py-1 rounded-full whitespace-nowrap">Robotics Instructor</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">Coached and mentored students in robotics competitions at an international level.</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                      <div className="w-1.5 h-1.5 bg-[#7A1CAC] rounded-full"></div>
                      <span>Achieved 4th, 5th, and 9th place rankings with student teams at WRO Panama.</span>
                    </div>
                  </div>

                  <div className="p-5 bg-[#FDFBFD] border border-gray-100 rounded-xl hover:border-[#7A1CAC] hover:shadow-md transition-all">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                      <h4 className="text-[#2E073F] font-bold text-lg leading-tight">Copa Airlines Hackathon</h4>
                      <span className="text-xs font-bold text-[#7A1CAC] bg-[#7A1CAC]/10 px-3 py-1 rounded-full whitespace-nowrap">Participant</span>
                    </div>
                    <p className="text-xs text-[#7A1CAC] font-semibold mb-2">Data Analytics & Artificial Intelligence (2025)</p>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">Competed in a hackathon focused on data analytics and artificial intelligence.</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                      <div className="w-1.5 h-1.5 bg-[#7A1CAC] rounded-full"></div>
                      <span>Achieved 6th place out of 250 teams, reaching the podium among participating teams.</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll direction="up" delay={300}>
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold text-[#2E073F] mb-6">Core Competencies</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["Collaboration", "Conflict Resolution", "Public Speaking", "Adaptability", "Problem Solving", "Organization"].map((skill) => (
                  <span key={skill} className="px-6 py-2 bg-[#EBD3F8] text-[#2E073F] rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#7A1CAC] hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section id="contact" className="py-24 bg-[#FDFBFD]">
        <div className="container mx-auto px-6 max-w-5xl">
          <RevealOnScroll direction="up">
            <div className="rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]">
              <div className="bg-[#1a0424] p-10 md:w-3/5 flex flex-col justify-center text-white relative">
                <div className="absolute top-0 right-0 p-10 opacity-10">
                  <Mail size={120} />
                </div>
                <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>
                <p className="text-gray-400 mb-10 text-lg">
                  I'm currently available for new projects and full-time roles.
                  Specialized in backend architectures, API design and scalable integrations.
                </p>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-[#7A1CAC]/20 rounded-lg text-[#7A1CAC]"><User size={20} /></div>
                    <span className="text-lg">FullStack Developer</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-[#7A1CAC]/20 rounded-lg text-[#7A1CAC]"><Mail size={20} /></div>
                    <a href="mailto:jeremichacon2000@gmail.com" className="hover:text-[#EBD3F8] text-lg">jeremichacon2000@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-[#7A1CAC]/20 rounded-lg text-[#7A1CAC]"><MapPin size={20} /></div>
                    <span className="text-lg">Panama, Panama City</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-[#7A1CAC]/20 rounded-lg text-[#7A1CAC]"><Github size={20} /></div>
                    <span className="text-lg">/ForkyCode</span>
                  </div>
                </div>
              </div>

              <div className="md:w-2/5 bg-[#7A1CAC] p-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="z-10 relative">
                  <h3 className="text-white font-bold text-3xl mb-2">Connect</h3>
                  <p className="text-[#EBD3F8] mb-8">Find me on LinkedIn</p>
                  <a href="https://www.linkedin.com/in/jeremi-chacon-4737a3312/?locale=en_US" target="_blank" rel="noreferrer" className="p-6 bg-white text-[#7A1CAC] rounded-full hover:scale-110 transition-transform inline-block shadow-2xl">
                    <Linkedin size={48} />
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <footer className="bg-[#1a0424] text-gray-400 py-10 text-center border-t border-white/5">
        <div className="container mx-auto px-6">
          <p className="mb-2 font-medium text-white">© 2025 Jeremi Chacón – Software Developer</p>
          <p className="text-sm text-gray-500 mb-6">Creado por SimplyCodia 2025</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/ForkyCode" target="_blank" rel="noreferrer" className="hover:text-[#7A1CAC] transition-colors"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/jeremi-chacon-4737a3312/?locale=en_US" className="hover:text-[#7A1CAC] transition-colors"><Linkedin size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
