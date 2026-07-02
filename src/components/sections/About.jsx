import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const programmingLanguages = [
    "C++",
    "Java",
    "Python",
    "SQL",
    "JavaScript",
    "HTML/CSS",
  ];

  const webDevelopmentSkills = [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Oracle SQL",
    "REST APIs",
    "JWT Authentication",
    "TailwindCSS",
  ];

  const mobileDevelopmentSkills = [
    "Flutter",
    "Dart",
    "Firebase",
    "Android Development",
    "Material Design",
  ];

  const aiMlDataScienceSkills = [
    "TensorFlow",
    "Keras",
    "NumPy",
    "Pandas",
    "scikit-learn",
    "CNN Models",
    "Ensemble Learning",
    "MLP Models",
  ];

  const devTools = [
    "Git & GitHub",
    "Linux",
    "CI/CD Pipelines",
    "Docker",
    "AWS",
    "VS Code",
  ];

  const coreCompetencies = [
    "Backend Systems",
    "Distributed Systems",
    "API Development",
    "Database Systems",
    "Full-Stack Development",
    "System Design",
    "DSA",
    "DBMS",
    "OOP",
    "Operating Systems",
    "Computer Networks",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I&apos;m a full-stack developer and ML enthusiast with hands-on experience at AWS, where I worked on automated upgrade validation pipelines and production-quality Aurora MySQL features. I build scalable web applications, backend APIs, and ML models using React, Node.js, Express.js, MongoDB, TensorFlow, and Flutter. With a strong foundation in system design, DSA, distributed systems, and database systems, I focus on reliable engineering and practical product impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Programming Languages */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-center">Languages</h3>
                <div className="flex flex-col gap-3">
                  {programmingLanguages.map((tech, key) => (
                    <span
                      key={key}
                      className="block w-full bg-red-500/10 text-red-500 py-2 px-4 rounded-full text-sm hover:bg-red-500/20 
                        hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition text-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Web Development */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-center">Web Development</h3>
                <div className="flex flex-col gap-3">
                  {webDevelopmentSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="block w-full bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile Development */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-center">Mobile Development</h3>
                <div className="flex flex-col gap-3">
                  {mobileDevelopmentSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="block w-full bg-green-500/10 text-green-500 py-2 px-4 rounded-full text-sm hover:bg-green-500/20 
                        hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition text-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI / ML & Data Science */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-center">AI / ML & Data Science</h3>
                <div className="flex flex-col gap-3">
                  {aiMlDataScienceSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="block w-full bg-purple-500/10 text-purple-500 py-2 px-4 rounded-full text-sm hover:bg-purple-500/20 
                        hover:shadow-[0_2px_8px_rgba(139,92,246,0.2)] transition text-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Developer Tools */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-center">Developer Tools</h3>
                <div className="flex flex-col gap-3">
                  {devTools.map((tech, key) => (
                    <span
                      key={key}
                      className="block w-full bg-yellow-500/10 text-yellow-500 py-2 px-4 rounded-full text-sm hover:bg-yellow-500/20 
                        hover:shadow-[0_2px_8px_rgba(234,179,8,0.2)] transition text-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Competencies */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-center">Core Competencies</h3>
                <div className="flex flex-col gap-3">
                  {coreCompetencies.map((tech, key) => (
                    <span
                      key={key}
                      className="block w-full bg-cyan-500/10 text-cyan-500 py-2 px-4 rounded-full text-sm hover:bg-cyan-500/20 
                        hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)] transition text-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
            {/* Work Experience */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <div>
                      <h4 className="font-bold text-blue-400">Software Development Engineer</h4>
                      <p className="text-sm text-gray-400">Amazon | AWS | Aurora Open Source Engines Team</p>
                      <p className="text-xs text-gray-500 mt-1">Bengaluru, India</p>
                    </div>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded w-fit">Jan 2026 - Present</span>
                  </div>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2 text-gray-400">
                    <li>Designed an automated upgrade validation pipeline triggered by Shell package updates for Aurora MySQL upgrades</li>
                    <li>Reduced upgrade validation time from multiple days to 3-4 hours through end-to-end automation</li>
                    <li>Integrated MySQL Shell log generation and email notifications for detailed execution visibility</li>
                    <li>Implemented JSON output support for SHOW ENGINE INNODB STATUS in Aurora MySQL using C++</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <div>
                      <h4 className="font-bold text-green-400">Machine Learning Intern</h4>
                      <p className="text-sm text-gray-400">Neel Initiative | IoT-Enabled Smart Agriculture System</p>
                      <p className="text-xs text-gray-500 mt-1">Jaipur, India</p>
                    </div>
                    <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded w-fit">May 2025 - Jul 2025</span>
                  </div>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2 text-gray-400">
                    <li>Developed an MLP-based model for soil analysis, crop recommendation, and fertilizer usage guidance</li>
                    <li>Trained and evaluated the model on 50,000+ records using TensorFlow, Python, NumPy, and pandas</li>
                    <li>Achieved 98% prediction accuracy across 52 crop varieties using 10 soil and environmental features</li>
                    <li>Built preprocessing, normalization, tuning, and integration workflows for the soil analysis system</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <h4 className="font-bold text-blue-400">Master of Computer Application</h4>
                      <p className="text-sm text-gray-400">National Institute of Technology, Warangal</p>
                    </div>
                    <div className="sm:text-right">
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded block">Jul 2023 - Present</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <h4 className="font-bold text-green-400">B.Sc in Mathematics</h4>
                      <p className="text-sm text-gray-400">SS Jain Subodh PG College, Jaipur</p>
                    </div>
                    <div className="sm:text-right">
                      <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded block">Jul 2020 - Jun 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Achievements & Coding Profiles</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>AIR 197 in NIMCET 2023</strong> among 25,000+ candidates nationwide</li>
                <li><strong>Semi-Finalist in Flipkart GRID 7.0</strong> after competitive technical evaluation rounds</li>
                <li><strong>2nd Place in Code for Clash</strong>, a competitive programming contest by CSES, NIT Warangal</li>
                <li><strong>Finalist at Noobathon 4.0</strong>, leading the team through multiple institute-level hackathon rounds</li>
                <li><strong>LeetCode:</strong> 350+ Problems Solved | 1750+ Contest Rating</li>
                <li><strong>GeeksforGeeks:</strong> 150+ Problems Solved</li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
