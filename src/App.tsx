import React from 'react';
import { Github, Linkedin, Mail, Youtube, ExternalLink, BookOpen, Award, Briefcase, Code2, Database, LineChart, School, Download } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Divyasri Jegan
              </h1>
              <p className="text-2xl md:text-3xl text-gray-200 mb-8">
                Student 
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded-lg text-lg font-semibold"
                >
                  Get in Touch
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 transition-colors duration-300 rounded-lg text-lg font-semibold"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">JD</span>
            </div>
            <div className="flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 font-medium">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 font-medium">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Section */}
        <section id="about" className="mb-24">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                Hello! I am a passionate Data Analyst with a strong background in data processing, visualization, and insights generation. 
                With over 1 year of experience working with real-world datasets, I specialize in uncovering meaningful patterns and translating complex data into actionable business insights.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <School className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                </div>
                <p className="text-gray-700">Computer Science and Technology(AI&DS)</p>
                <p className="text-gray-600 text-sm">Vivekanandha College of Engineering for Women</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Experience</h3>
                </div>
                <p className="text-gray-700">Data Analyst Trainee</p>
                <p className="text-gray-600 text-sm">Virtual Internship</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Expertise</h3>
                </div>
                <p className="text-gray-700">Data Analytics & ML</p>
                <p className="text-gray-600 text-sm">Certified Professional</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24">
          <div className="flex items-center mb-12">
            <Code2 className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Skills & Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard 
              icon={<Code2 className="w-6 h-6" />}
              title="Programming & Analysis"
              skills={[
                "Python (Pandas, NumPy)",
                "Statistical Analysis",
                "Machine Learning",
                "Data Processing","Natural Language Processing"
              ]}
            />
            <SkillCard 
              icon={<Database className="w-6 h-6" />}
              title="Database Management"
              skills={[
                "SQL (Advanced)",
                "Database Design",
                "ETL Pipelines",
                "Data Warehousing"
              ]}
            />
            <SkillCard 
              icon={<LineChart className="w-6 h-6" />}
              title="Visualization & BI"
              skills={[
                "Tableau",
                "Power BI",
                "Data Storytelling",
                "Dashboard Design"
              ]}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24">
          <div className="flex items-center mb-12">
            <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Amazon Sales Data analysis"
              description="Developed a comprehensive analytics dashboard that increased sales performance  through data-driven insights."
              tools={["Python", "PowerBI", "SQL"]}
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              link=""
            />
            <ProjectCard 
              title="Customer Segmentation Engine"
              description="Built a machine learning model that improved marketing ROI by 40% through precise customer segmentation and targeted campaign optimization."
              tools={["Python", "Scikit-learn", "Power BI"]}
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              link="#"
            />
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mb-24">
          <div className="flex items-center mb-12">
            <Award className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <Award className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Google Data Analytics</h3>
              <p className="text-gray-600">Professional Certificate</p>
              <p className="text-gray-500 text-sm mt-2">Completed 2023</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <Award className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">IBM Data Science</h3>
              <p className="text-gray-600">What is DataScience</p>
              <p className="text-gray-500 text-sm mt-2">Completed 2022</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <Award className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced SQL</h3>
              <p className="text-gray-600">Database Management</p>
              <p className="text-gray-500 text-sm mt-2">Completed 2022</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-24">
          <div className="flex items-center mb-12">
            <Mail className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Let's Connect</h3>
                <p className="text-gray-700 mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <div className="space-y-4">
                  <a href="mailto:devadhivyavv11@gmail.com" className="flex items-center text-gray-700 hover:text-blue-600">
                    <Mail className="w-5 h-5 mr-3" />
                    contact@divyasrijegan.com
                  </a>
                  <a href="www.linkedin.com/in/divyasri-jegan" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600">
                    <Linkedin className="w-5 h-5 mr-3" />
                    LinkedIn Profile
                  </a>
                  <a href="https://github.com/divyasri-jegan-11" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600">
                    <Github className="w-5 h-5 mr-3" />
                    GitHub Profile
                  </a>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Divyasri Jegan</h3>
              <p className="text-gray-400">Student & Data Analyst </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-white">Skills</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><Github className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Mail className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Youtube className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">© 2024 Divyasri Jegan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center mb-6">
        <span className="text-blue-600 mr-3">{icon}</span>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-700 flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, tools, image, link }: { 
  title: string, 
  description: string, 
  tools: string[], 
  image: string,
  link: string 
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tools.map((tool, index) => (
            <span 
              key={index} 
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
        <a 
          href={link}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          View Project <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
}

export default App;