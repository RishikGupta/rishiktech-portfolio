import { RevealOnScroll } from "../RevealOnScroll";
export const Home = () => {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <RevealOnScroll>
          <div className="p-6 bg-white text-black dark:bg-black dark:text-white">
  This will change color with dark mode toggle.
</div>

          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
              Hi, I'm Rishik Gupta
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              I'm a Full Stack Web Developer with hands-on experience building
              scalable web applications using the MERN stack, REST APIs, and
              modern UI frameworks. I craft responsive front-ends with React.js
              and develop secure, feature-rich backends with Node.js and
              Express. I bring both technical depth and real-world
              problem-solving to every project.
            </p>

            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded 
                font-medium transition relative overflow-hidden 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 
                rounded font-medium transition-all duration-200 hover:-translate-y-0.5 
                hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    );
} 