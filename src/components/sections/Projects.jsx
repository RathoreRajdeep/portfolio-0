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

            {/* Hostel Complaint App */}
            <div className="group p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-left relative">
              <h3 className="text-xl font-bold mb-2 text-center">Hostel Complaint Registration App</h3>
              <ul className="text-gray-400 mb-4 list-disc list-inside text-sm space-y-1">
                <li>Flutter, Firebase</li>
                <li>Seamless UI, handled 100+ concurrent users</li>
                <li>Real-time updates and authentication</li>
              </ul>
              <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://github.com/RathoreRajdeep/hostel-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 mt-2 rounded-md border border-white/30 bg-white/10 text-gray-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-sm font-semibold transition"
                >
                  🌐 Visit
                </a>
              </div>
            </div>

            {/* Rupilo - UPI Based Fintech Platform */}
            <div className="group p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-left relative">
              <h3 className="text-xl font-bold mb-2 text-center">Rupilo - UPI Based Fintech Platform</h3>
              <ul className="text-gray-400 mb-4 list-disc list-inside text-sm space-y-1">
                <li>MERN Stack: MongoDB, Express.js, React, Node.js</li>
                <li>JWT Auth, Role-based Views, Admin/User Dashboards</li>
                <li>Live transactions: Top-up, Send Money, Track History</li>
              </ul>
              <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://rupilo.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 mt-2 rounded-md border border-white/30 bg-white/10 text-gray-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-sm font-semibold transition"
                >
                  🌐 Visit
                </a>
              </div>
            </div>


            {/* Lung Cancer Prediction */}
            <div className="group p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-left relative">
              <h3 className="text-xl font-bold mb-2 text-center">Lung Cancer Prediction</h3>
              <ul className="text-gray-400 mb-4 list-disc list-inside text-sm space-y-1">
                <li>Python, TensorFlow, Keras, GridSearchCV, Matplotlib</li>
                <li>Used 5 CNNs on CT scans, 98% accuracy</li>
                <li>Weighted ensemble model using grid search</li>
              </ul>
              <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://www.kaggle.com/code/lakshyaraj123/notebooka54b91228e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 mt-2 rounded-md border border-white/30 bg-white/10 text-gray-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-sm font-semibold transition"
                >
                  🌐 Visit
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
              <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://stockanalysis-5uk1.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 mt-2 rounded-md border border-white/30 bg-white/10 text-gray-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-sm font-semibold transition"
                >
                  🌐 Visit
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
              <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://rathorerajdeep.github.io/GAMExPUNK/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 mt-2 rounded-md border border-white/30 bg-white/10 text-gray-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-sm font-semibold transition"
                >
                  🌐 Visit
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
              <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://rathorerajdeep.github.io/FRONT-LEARN/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 mt-2 rounded-md border border-white/30 bg-white/10 text-gray-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-sm font-semibold transition"
                >
                  🌐 Visit
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
              <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://portfolio-0-neon.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 mt-2 rounded-md border border-white/30 bg-white/10 text-gray-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-sm font-semibold transition"
                >
                  🌐 Visit
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
