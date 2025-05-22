import { RevealOnScroll } from "../RevealOnScroll";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import {
  FaReact,
  FaVuejs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaNodeJs,
  FaJava,
  FaPhp,
  FaDatabase,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiFigma,
  SiCplusplus,
  SiPostgresql,
  SiStripe,
} from "react-icons/si";

export const About = () => {
  const frontendSkills = [
    { label: "React", icon: <FaReact /> },
    { label: "Vue", icon: <FaVuejs /> },
    { label: "Typescript", icon: <SiTypescript /> },
    { label: "TailwindCSS", icon: <SiTailwindcss /> },
    { label: "Figma", icon: <SiFigma /> },
    { label: "Bootstrap", icon: <FaBootstrap /> },
    { label: "Jest", icon: <SiJest /> },
    { label: "Py-Qt" },
    { label: "SSR" },
    { label: "JavaScript", icon: <FaJs /> },
    { label: "HTML", icon: <FaHtml5 /> },
    { label: "CSS", icon: <FaCss3Alt /> },
    { label: "Data Structures & Algorithms" },
    { label: "GUI Development" },
  ];

  const backendSkills = [
    { label: "Node.js", icon: <FaNodeJs /> },
    { label: "MongoDB", icon: <SiMongodb /> },
    { label: "GraphQL", icon: <SiGraphql /> },
    { label: "REST APIs" },
    { label: "Express.js" },
    { label: "Java", icon: <FaJava /> },
    { label: "Python", icon: <FaPython /> },
    { label: "C/C#/C++", icon: <SiCplusplus /> },
    { label: "PHP", icon: <FaPhp /> },
    { label: "Stripe", icon: <SiStripe /> },
    { label: "SQL", icon: <FaDatabase /> },
    { label: "Machine Learning" },
    { label: "Selenium" },
    { label: "Android Studio" },
    { label: "OOPS" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-theme text-theme"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all shadow-lg bg-section text-center">
            <p className="text-muted text-lg mb-6 leading-relaxed">
              My journey includes leading the Admin Panel development for{" "}
              <strong>Beaded Muse</strong>, a full-stack e-commerce platform
              built as my <strong>capstone project at Conestoga College</strong>
              . In parallel, I've taught over 400 students, covering both
              front-end technologies like HTML, CSS, JavaScript, React, and
              MongoDB, as well as core programming languages such as Java, C,
              C++, and Python.
            </p>
            <p className="text-muted text-lg mb-6 leading-relaxed">
              I've also guided many through mastering Data Structures and
              Algorithms (DSA) for academic and technical interview success.
              Whether it's building dynamic Stripe-integrated systems, crafting
              responsive UI/UX, or mentoring learners with patience and clarity,
              I bring precision, creativity, and empathy into everything I
              build.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="rounded-xl p-6 border hover:border-blue-500 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-theme">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map(({ label, icon }, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 bg-badge text-badge py-1.5 px-4 rounded-full transition duration-200 
    hover:bg-badge-hover hover:text-white hover:shadow-accent shadow-sm"
                    >
                      {icon && <span className="text-lg">{icon}</span>}
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 border hover:border-blue-500 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-theme">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map(({ label, icon }, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 bg-badge text-badge py-1.5 px-4 rounded-full transition duration-200 
    hover:bg-badge-hover hover:text-white hover:shadow-accent shadow-sm"
                    >
                      {icon && <span className="text-lg">{icon}</span>}
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition bg-section">
              <h3 className="text-3xl font-bold mb-4 text-theme flex justify-center items-center gap-2">
                <FaGraduationCap className="text-accent" /> Education
              </h3>
              <ul className="list-inside text-theme space-y-2">
                <li>
                  <h4 className="font-semibold text-theme">
                    <strong>Post Graduate Degree in Web Development</strong> -
                    Conestoga College
                    <span className="block text-accent italic">
                      January 2024 - April 2025
                    </span>
                  </h4>

                  <p>
                    <strong>GPA - 3.77 / 4.00</strong>
                  </p>
                  <p className="ml-5 mt-1 text-muted font-bold">
                    Relevant Coursework:
                  </p>
                  <ul className="list-disc list-inside ml-5 mt-1 text-muted font-medium italic">
                    <li>Web Development Foundations (HTML, CSS, JavaScript)</li>
                    <li>JavaScript Frameworks (React, Vue)</li>
                    <li>
                      Back-End Technologies (Node.js, Express.js, PHP, MongoDB,
                      REST APIs)
                    </li>
                    <li>Database Design (SQL & NoSQL)</li>
                    <li>UI/UX Design Principles (Figma, responsive design)</li>
                    <li>Content Management Systems (WordPress)</li>
                    <li>Server-Side Rendering</li>
                    <li>Mobile Web Development</li>
                    <li>Full-Stack Project Work (Capstone)</li>
                    <li>Version Control (Git/GitHub)</li>
                    <li>Web Security</li>
                    <li>Agile & Project Management</li>
                    <li>Career & Communication Skills</li>
                  </ul>
                </li>
                <li>
                  <h4 className="font-semibold text-theme">
                    <strong>B.Tech in Computer Science</strong> - Bharati
                    Vidyapeeth's College of Engineering
                    <span className="block text-accent italic">
                      Aug 2017 - Sep 2021
                    </span>
                  </h4>
                  <p>
                    <strong>CGPA - 7.46 / 10.00</strong>
                  </p>
                  <p className="ml-5 mt-1 text-muted font-bold">
                    Relevant Coursework:
                  </p>
                  <ul className="list-disc list-inside ml-5 mt-1 font-medium text-muted italic">
                    <li>Data Structures and Algorithms</li>
                    <li>Object Oriented Programming</li>
                    <li>Web Technology</li>
                    <li>Java Programming</li>
                    <li>Database Management Systems</li>
                    <li>Advanced DBMS</li>
                    <li>Software Engineering</li>
                    <li>Operating Systems</li>
                    <li>Computer Networks</li>
                    <li>Compiler Design</li>
                    <li>Microprocessor and Microcontroller</li>
                    <li>Software Testing and Quality Assurance</li>
                    <li>Mobile Computing</li>
                    <li>Machine Learning</li>
                    <li>Switching Theory and Logic Design</li>
                    <li>Computer Graphics and Multimedia</li>
                  </ul>
                </li>
                <li>
                  <h4 className="font-semibold text-theme">
                    <strong>Senior Secondary School Certificate</strong> -
                    Springdales School
                    <span className="block text-accent italic">
                      April 2004 - May 2017
                    </span>
                  </h4>

                  <p>
                    <strong>Percentage - 88.00% / 100.00</strong>
                  </p>
                  <p className="ml-5 mt-1 text-muted font-bold">
                    Relevant Coursework:
                  </p>
                  <ul className="list-disc list-inside ml-5 mt-1 text-muted font-medium italic">
                    <li>Computer Science Fundamentals</li>
                    <li>Mathematics</li>
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>English</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition bg-section"
            >
              <h3 className="text-3xl font-bold mb-4 text-theme flex items-center justify-center gap-2">
                <FaBriefcase className="text-accent" /> Work Experience
              </h3>
              <div className="space-y-4 text-muted">
                <div>
                  <h4 className="font-semibold text-theme">
                    Full Stack Tutor & Technical Mentor - Super Prof & Varsity
                    Tutors (Part-Time)
                    <span className="block text-accent italic">
                      January 2024 - Present
                    </span>
                  </h4>
                  <p>
                    • Delivered <strong>90+ hours</strong> of personalized
                    instruction in <strong>full-stack development</strong> and
                    programming (<strong>JavaScript, HTML/CSS, DSA</strong>),
                    using real-time tools like <strong>VS Code</strong>,{" "}
                    <strong>GitHub</strong>, and collaborative coding platforms.
                    <br />• Mentored diverse learners, including students with
                    disabilities, through <strong>
                      academic projects
                    </strong> and <strong>real-world challenges</strong>.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-theme">
                    Technical Trainer - Cantilever Labs
                    <span className="block text-accent italic">
                      January 2023 - October 2023
                    </span>
                  </h4>
                  <p>
                    • Instructed over <strong>400 students</strong> in
                    foundational and advanced technologies using a structured{" "}
                    <strong>180-hour curriculum</strong> covering{" "}
                    <strong>React, Node.js, MongoDB</strong>, and advanced{" "}
                    <strong>JavaScript frameworks</strong>, simulating
                    full-stack problem-solving scenarios.
                    <br />• Delivered <strong>50+ project-based labs</strong>,
                    including food ordering apps, schedulers, and dynamic
                    dashboards with <strong>REST APIs</strong>,{" "}
                    <strong>Redux</strong>, and <strong>Tailwind CSS</strong>.
                    <br />• Mentored students in{" "}
                    <strong>core programming (C++, Java)</strong> and{" "}
                    <strong>system design</strong>, aligning instruction with
                    industry workflows, <strong>CI/CD</strong>, and{" "}
                    <strong>deployment best practices</strong>.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-theme">
                    Software Trainer - Edslash Robotics Services
                    <span className="block text-accent italic">
                      October 2022 - October 2023
                    </span>
                  </h4>
                  <p>
                    • Delivered structured training in <strong>C/C++</strong>,{" "}
                    <strong>Python</strong>, and{" "}
                    <strong>web technologies</strong> to{" "}
                    <strong>100+ students</strong>.<br />• Guided learners
                    through building <strong>front-end</strong> and{" "}
                    <strong>back-end applications</strong>, focusing on
                    real-world application of programming concepts.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-theme">
                    Technology Trainer - Hematite Infotech Pvt. Ltd.
                    <span className="block text-accent italic">
                      April 2022 - September 2022
                    </span>
                  </h4>
                  <p>
                    • Created and delivered <strong>Python</strong> and{" "}
                    <strong>Machine Learning</strong> curriculum for college
                    students across India.
                    <br />• Collaborated with <strong>two teams</strong> to
                    design and upload recorded technical content, enabling
                    asynchronous learning in{" "}
                    <strong>full-stack fundamentals</strong> and{" "}
                    <strong>data-driven applications</strong>.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-theme">
                    Software Developer - ULaunch
                    <span className="block text-accent italic">
                      October 2021 - March 2022
                    </span>
                  </h4>
                  <p>
                    • Spearheaded the <strong>frontend revamp</strong> of the
                    company website using <strong>WordPress</strong> and{" "}
                    <strong>WooCommerce</strong>, enhancing visual appeal and
                    responsiveness across devices.
                    <br />• Developed dynamic UI components using{" "}
                    <strong>Custom Themes</strong> and{" "}
                    <strong>Advanced Custom Fields (ACF)</strong>, improving
                    content management efficiency by <strong>40%</strong>.<br />
                    • Ensured clean, modular <strong>PHP</strong> code and
                    seamless integration with <strong>MySQL</strong>, resulting
                    in a <strong>25% boost</strong> in page load performance and
                    customer experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
