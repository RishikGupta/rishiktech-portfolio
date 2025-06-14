import { FaLinkedin, FaDownload } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      aria-label="Rishik Gupta Portfolio Introduction"
      id="home"
      className="min-h-screen flex items-center justify-center bg-theme text-theme mt-20 py-20"
    >
      <header className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-accent leading-tight">
          Hi, I'm Rishik Gupta
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto text-muted">
          I'm a Full Stack Developer with{" "}
          <strong>3+ years of experience</strong> building end-to-end web
          applications using the <strong>MERN stack</strong>. I specialize in
          scalable systems with <strong>React, Next.js</strong>, and{" "}
          <strong>Node.js</strong>, with an eye for UI/UX through{" "}
          <strong>Tailwind CSS</strong> and <strong>Figma</strong>.
          <br />
          <br />
          Whether it's deploying secure <strong>REST APIs</strong>, integrating{" "}
          <strong>Stripe payments</strong>, or mentoring{" "}
          <strong>400+ learners</strong> in full-stack development and system
          design — I bring a unique mix of hands-on engineering, teaching
          acumen, and product thinking.
          <br />
          <br />
          From fast-paced startups to enterprise teams, I thrive on turning
          complex ideas into robust, intuitive digital experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="border border-blue-500 text-blue-50
 py-3 px-6 rounded font-medium flex items-center gap-2 text-theme hover:bg-blue-500 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-blue-500 text-blue-50
 py-3 px-6 rounded font-medium flex items-center gap-2 text-theme hover:bg-blue-500 transition"
          >
            Contact Me
          </a>

          <a
            href="https://www.linkedin.com/in/rishikgupta7619/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-500 text-blue-50
 py-3 px-6 rounded font-medium flex items-center gap-2 text-theme hover:bg-blue-500 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="/Rishik_Gupta_Developer_Resume.pdf"
            download
            className="border border-blue-500 text-blue-50
 py-3 px-6 rounded font-medium flex items-center gap-2 text-theme hover:bg-blue-500 transition"
          >
            <FaDownload /> Resume
          </a>
        </div>
      </header>
    </section>
  );
};
