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
          I'm a <strong>Full Stack Developer & Technical Lead</strong> with{" "}
          <strong>3+ years of experience</strong> building scalable,
          high-performance applications. Currently leading the development of{" "}
          <strong>TheHomeTaste</strong>, a curated food-tech marketplace
          supported by
          <strong> <a href="https://research.conestogac.on.ca/conestoga-entrepreneurship-collective/programs/venture-lab-for-tech"><u>Conestoga College's Venture Lab</u></a></strong>, where I work with
          coaches to align technical growth with startup success.
          <br />
          <br />I specialize in{" "}
          <strong>React Native, React, Next.js, Node.js, and MongoDB</strong>,
          with cloud expertise across{" "}
          <strong>AWS (Amplify, Cognito, S3, CloudFront, EC2, SNS)</strong>
          and caching with <strong>Redis/Valkey</strong>. My focus is on
          building reliable systems, secure APIs, and intuitive UIs with{" "}
          <strong>Tailwind CSS</strong> and <strong>Figma</strong>.
          <br />
          <br />
          Whether it's designing full-stack architectures, deploying secure{" "}
          <strong>REST APIs</strong>, integrating payments, or mentoring
          developers, I bring a unique mix of engineering leadership, hands-on
          coding, and product-driven thinking. From startups to enterprise
          teams, I thrive on turning complex ideas into robust, impactful
          digital experiences.
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
