import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-theme text-theme mt-20"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-accent leading-right">
            Hi, I'm Rishik Gupta
          </h1>

          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto text-muted">
            I'm a Full Stack Web Developer with hands-on experience building
            scalable web applications using the MERN stack, REST APIs, and
            modern UI frameworks. I craft responsive front-ends with React.js
            and develop secure, feature-rich backends with Node.js and Express.
            I bring both technical depth and real-world problem-solving to every
            project.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 py-3 px-6 rounded 
                font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="py-3 px-6 rounded font-medium button-outline"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
