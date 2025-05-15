import { RevealOnScroll } from "../RevealOnScroll";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "Typescript",
    "TailwindCSS",
    "Figma",
    "Bootstrap",
    "Jest",
    "Py-Qt",
    "SSR",
    "JavaScript",
    "HTML",
    "CSS",
    "Data Structures & Algorithms",
    "GUI Development",
  ];

  const backendSkills = [
    "Node.js",
    "MongoDB",
    "GraphQL",
    "REST APIs",
    "Express.js",
    "Java",
    "Python",
    "C/C#/C++",
    "PHP",
    "Stripe",
    "SQL",
    "Machine Learning",
    "Selenium",
    "Android Studio",
    "OOPS",
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

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all shadow-lg bg-section">
            <p className="text-muted mb-6 leading-relaxed text-base">
              My journey includes leading the Admin Panel development for{" "}
              <strong>Beaded Muse</strong>, a full-stack e-commerce platform
              built as my <strong>capstone project at Conestoga College</strong>
              . In parallel, I've taught over 500 students, covering both
              front-end technologies like HTML, CSS, JavaScript, React, and
              MongoDB, as well as core programming languages such as Java, C,
              C++, and Python.
            </p>
            <p className="text-muted mb-6 leading-relaxed text-base">
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
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-badge text-badge py-1.5 px-4 rounded-full text-sm transition duration-200 
             hover:bg-badge-hover hover:text-white hover:shadow-accent shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 border hover:border-blue-500 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-theme">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-badge text-badge py-1.5 px-4 rounded-full text-sm transition duration-200 
             hover:bg-badge-hover hover:text-white hover:shadow-accent shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition bg-section">
              <h3 className="text-xl font-bold mb-4 text-theme flex items-center gap-2">
                <FaGraduationCap className="text-accent" /> Education
              </h3>
              <ul className="list-disc list-inside text-theme space-y-2 text-sm">
                <li>
                  <strong>Post Graduate Degree in Web Development</strong> -
                  Conestoga College (January 2024 - April 2025)
                  <p className="ml-5 mt-1 text-muted font-bold text-xs">
                    Relevant Coursework:
                  </p>
                  <ul className="list-disc list-inside ml-5 mt-1 text-muted font-medium text-xs italic">
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
                  <strong>B.Tech in Computer Science</strong> - Bharati
                  Vidyapeeth's College of Engineering (Aug 2017 – Sep 2021)
                  <p className="ml-5 mt-1 text-muted font-bold text-xs">
                    Relevant Coursework:
                  </p>
                  <ul className="list-disc list-inside ml-5 mt-1 font-medium text-muted text-xs italic">
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
              </ul>
            </div>

            {/* Work Experience */}
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition bg-section"
            >
              <h3 className="text-xl font-bold mb-4 text-theme flex items-center gap-2">
                <FaBriefcase className="text-accent" /> Work Experience
              </h3>
              <div className="space-y-4 text-muted text-sm">
                <div>
                  <h4 className="font-semibold text-theme">
                    Full Stack Tutor & Technical Mentor - Super Prof & Varsity
                    Tutors (Part-Time)
                    <span className="block text-accent text-xs italic">
                      January 2024 - Present
                    </span>
                  </h4>
                  <p>
                    Taught 50+ students across 90+ hours via online platforms,
                    delivering customized lessons in full-stack web development
                    and core programming (JavaScript, React, Node.js, Java,
                    Python, etc.). Supported learners through academic projects,
                    technical interview prep, and real-world problem-solving
                    using the MERN stack.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-theme">
                    Technical Trainer - Cantilever Labs
                    <span className="block text-accent text-xs italic">
                      January 2023 - October 2023
                    </span>
                  </h4>
                  <p>
                    Instructed over 400 students in C/C++, HTML, CSS, Java, and
                    Linux System Architecture. Led 50+ live project-based
                    learning sessions that emphasized real-time problem solving
                    and foundational full stack development skills.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-theme">
                    Software Trainer - Edslash Robotics Services
                    <span className="block text-accent text-xs italic">
                      October 2022 - October 2023
                    </span>
                  </h4>
                  <p>
                    Delivered structured training in C/C++, Python, and web
                    technologies to 100+ students. Guided learners through
                    building front-end and back-end applications, focusing on
                    the application of programming concepts in real-world
                    development.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-theme">
                    Technology Trainer - Hematite Infotech Pvt. Ltd.
                    <span className="block text-accent text-xs italic">
                      April 2022 - September 2022
                    </span>
                  </h4>
                  <p>
                    Created and delivered Python and Machine Learning curriculum
                    for college students across India. Collaborated with two
                    teams to design and upload recorded technical content,
                    enabling asynchronous learning for full stack fundamentals
                    and data-driven applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-theme">
                    Software Developer - ULaunch
                    <span className="block text-accent text-xs italic">
                      October 2021 - March 2022
                    </span>
                  </h4>
                  <p>
                    Led front-end development for the company website using
                    WordPress and WooCommerce. Implemented custom themes,
                    interactive UI elements, and clean responsive layouts with a
                    focus on usability and business goals.
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
