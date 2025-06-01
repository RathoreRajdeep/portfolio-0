import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const webDevelopmentSkills = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "GraphQL",
    "Firebase",
    "REST APIs",
    "PostgreSQL",
  ];

  const mobileDevelopmentSkills = [
    "Flutter",
    "Dart",
    "Firebase",
    "Android Studio",
    "Android SDK",
    "Material Design",
    "Gradle",
  ];

  const aiMlDataScienceSkills = [
    "Python",
    "TensorFlow",
    "scikit-learn",
    "PyTorch",
    "Keras",
    "OpenCV",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "CNNs",
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
              I’m a passionate full-stack developer with hands-on experience building scalable web applications using the MERN stack, as well as cross-platform mobile apps with Flutter and native Android development. I enjoy combining clean, maintainable code with modern technologies including machine learning to create innovative solutions that solve real problems. My goal is to deliver seamless, high-performance user experiences across platforms, whether it’s a responsive website or a mobile app. I’m constantly learning and experimenting to stay ahead of the curve, and I love collaborating with teams to turn ideas into polished, impactful products.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            </div>
          </div>

          {/* Education and Work Experience sections as before */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>MCA <br /> (Masters of Computer Applications)</strong> <br /> NIT Warangal (2023-2026)
                </li>
                <li>Relevant Coursework: Data Structures, Web Development, Android Development, Operating System, Database Management, Computer Networks, Cloud Computing</li>
              </ul>
            </div>
            
            {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Software Engineer at ABC Corp (2020 - Present)</h4>
                  <p>Developed and maintained microservices for cloud-based applications.</p>
                </div>

                <div>
                  <h4 className="font-semibold">Intern at DEF Startups (2019)</h4>
                  <p>Assisted in building front-end components and integration REST APIs</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
