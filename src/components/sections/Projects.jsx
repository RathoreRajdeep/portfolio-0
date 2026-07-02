import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 text-center">            
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Personal Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Rupilo - Digital Wallet Platform */}
            <div className="group p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-left relative">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">Rupilo - Digital Wallet Platform</h3>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Jun 2025</span>
              </div>
              <ul className="text-gray-400 mb-4 list-disc list-inside text-sm space-y-1">
                <li>Full-stack digital wallet platform for top-ups, P2P transfers, and transaction history</li>
                <li>React, Node.js, Express.js, MongoDB, and JWT authentication</li>
                <li>10+ RESTful APIs with role-based access control for users and admins</li>
                <li>Handles 500+ simulated transactions per day</li>
              </ul>
              <div className="text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://rupilo.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 mt-2 rounded-md border border-white/30 bg-white/10 text-gray-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-sm font-semibold transition"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/RathoreRajdeep/rupilo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 mt-2 ml-2 rounded-md border border-white/30 bg-white/10 text-gray-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-sm font-semibold transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Lung Cancer Prediction */}
            <div className="group p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-left relative">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">Lung Cancer Prediction</h3>
                <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Apr 2025</span>
              </div>
              <ul className="text-gray-400 mb-4 list-disc list-inside text-sm space-y-1">
                <li>Ensemble deep learning model for CT scan classification</li>
                <li>Python, TensorFlow, Keras, and Matplotlib</li>
                <li>Base models: DenseNet201, EfficientNetB7, VGG16, MobileNet, VGG19</li>
                <li>98% prediction accuracy on IQ-OTHNCCD dataset</li>
                <li>Weighted ensemble model optimized via grid search</li>
              </ul>
              <div className="text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://github.com/RathoreRajdeep/lung-cancer-prediction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 mt-2 rounded-md border border-white/30 bg-white/10 text-gray-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-sm font-semibold transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Hostel Complaint App */}
            <div className="group p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-left relative">
              <h3 className="text-xl font-bold mb-2 text-center">Hostel Complaint Registration App</h3>
              <ul className="text-gray-400 mb-4 list-disc list-inside text-sm space-y-1">
                <li>Flutter, Firebase</li>
                <li>Seamless UI, handled 100+ concurrent users</li>
                <li>Real-time updates and authentication</li>
              </ul>
              <div className="text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://github.com/RathoreRajdeep/hostel-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 mt-2 rounded-md border border-white/30 bg-white/10 text-gray-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-sm font-semibold transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Stock Dashboard */}
            <div className="group p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-left relative">
              <h3 className="text-xl font-bold mb-2 text-center">Stock Price Prediction & Analysis Dashboard</h3>
              <ul className="text-gray-400 mb-4 list-disc list-inside text-sm space-y-1">
                <li>Python, Keras, LSTM, Dash, Plotly</li>
                <li>85% prediction accuracy on price trends</li>
                <li>Interactive visualizations for investors</li>
              </ul>
              <div className="text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://stockanalysis-5uk1.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 mt-2 rounded-md border border-white/30 bg-white/10 text-gray-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-sm font-semibold transition"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* CyberPunk Website */}
            <div className="group p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-left relative">
              <h3 className="text-xl font-bold mb-2 text-center">CyberPunk Website</h3>
              <ul className="text-gray-400 mb-4 list-disc list-inside text-sm space-y-1">
                <li>HTML, CSS, JavaScript</li>
                <li>Immersive gaming hub with responsive UI</li>
                <li>Great user feedback, cross-browser support</li>
              </ul>
              <div className="text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://rathorerajdeep.github.io/GAMExPUNK/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 mt-2 rounded-md border border-white/30 bg-white/10 text-gray-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-sm font-semibold transition"
                >
                  Visit
                </a>
              </div>
            </div>

            {/* FrontLearn */}
            <div className="group p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-left relative">
              <h3 className="text-xl font-bold mb-2 text-center">FrontLearn</h3>
              <ul className="text-gray-400 mb-4 list-disc list-inside text-sm space-y-1">
                <li>HTML, CSS, JavaScript</li>
                <li>Interactive frontend learning modules</li>
                <li>Live code demos, 90% user satisfaction</li>
              </ul>
              <div className="text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://rathorerajdeep.github.io/FRONT-LEARN/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 mt-2 rounded-md border border-white/30 bg-white/10 text-gray-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-sm font-semibold transition"
                >
                  Visit
                </a>
              </div>
            </div>

            {/* Portfolio Website */}
            <div className="group p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-left relative">
              <h3 className="text-xl font-bold mb-2 text-center">Portfolio Website</h3>
              <ul className="text-gray-400 mb-4 list-disc list-inside text-sm space-y-1">
                <li>React, Tailwind CSS, Framer Motion</li>
                <li>Personal website to showcase skills, projects, and resume</li>
                <li>Fully responsive with smooth scroll animations and dark mode</li>
              </ul>
              <div className="text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://portfolio-0-neon.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 mt-2 rounded-md border border-white/30 bg-white/10 text-gray-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-sm font-semibold transition"
                >
                  Visit
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
