import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-white/5 border-t border-white/10 py-10 mt-20">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-lg text-gray-300 mb-6 font-medium">
            ✨ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Code whispers behind the pixels – RAJDEEP
            </span>
          </h2>

          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://github.com/RathoreRajdeep"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rajdeep-singh-rathore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:rajdeeprathore92@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition text-2xl"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Rajdeep Singh Rathore. All rights reserved.
          </p>
        </div>
      </RevealOnScroll>
    </footer>
  );
};
