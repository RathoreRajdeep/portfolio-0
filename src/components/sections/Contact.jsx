import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t2whwto",
        "template_9s2iakg",
        e.target,
        "j3TZ99xbKTEOHvL0H"
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Phone */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-center">
              <FaPhone className="text-3xl text-blue-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-gray-300">Phone</h3>
              <a href="tel:+918952939495" className="text-blue-400 hover:text-blue-300 transition">
                +91-8952939495
              </a>
            </div>

            {/* Email */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-center">
              <FaEnvelope className="text-3xl text-blue-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-gray-300">Email</h3>
              <a href="mailto:rajdeeprathore0902@gmail.com" className="text-blue-400 hover:text-blue-300 transition">
                rajdeeprathore0902@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-center">
              <FaLinkedin className="text-3xl text-blue-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-gray-300">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/rajdeep-singh-rathore" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">
                Rajdeep Singh Rathore
              </a>
            </div>

            {/* GitHub */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-center">
              <FaGithub className="text-3xl text-blue-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-gray-300">GitHub</h3>
              <a href="https://github.com/RathoreRajdeep" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">
                RathoreRajdeep
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-black text-gray-400">or send me a message</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-md mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
