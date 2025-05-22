import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaStripe,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJupyter,
  SiScikitlearn,
  SiPandas,
  SiTailwindcss,
} from "react-icons/si";

const techIcons = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  MongoDB: <SiMongodb />,
  Python: <FaPython />,
  Stripe: <FaStripe />,
  Figma: <FaFigma />,
  Jupyter: <SiJupyter />,
  Pandas: <SiPandas />,
  "Scikit-learn": <SiScikitlearn />,
  TailwindCSS: <SiTailwindcss />,
};

export const Projects = () => {
  const projects = [
    {
      title: "Beaded Muse (Capstone Project)",
      description:
        "Developed a complete Admin Panel for a MERN stack-based e-commerce platform. Implemented secure Stripe payments, GST calculation, responsive UI/UX, and real-time order/product management.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "Jira",
        "Figma",
      ],
      links: [
        {
          label: "🔗 Admin Panel (Live)",
          href: "https://beadedmuseadmin.netlify.app/",
        },
        {
          label: "🔗 Customer Panel (Live)",
          href: "https://beaded-muse-w32x.vercel.app/",
        },
      ],
    },
    {
      title: "Length of Stay Classification",
      description:
        "Built a predictive system to classify patient hospital stay duration using a dataset of 300,000 records. Handled data cleaning, pre-processing, and model training for performance optimization.",
      tech: ["Python", "Pandas", "Scikit-learn", "Jupyter", "ML"],
      links: [
        {
          label: "💻 GitHub - Jupyter Notebook",
          href: "https://github.com/RishikGupta/Classification-Of-LOS-Of-Patients",
        },
      ],
    },
    {
      title: "Hepatitis A Predictor",
      description:
        "Engineered an ensemble machine learning model by combining Linear Regression, SVR, and ARIMA based on error metrics to improve predictive accuracy for medical datasets.",
      tech: ["Python", "Scikit-learn", "Pandas", "Regression Models", "ARIMA"],
      links: [
        {
          label: "💻 GitHub - Jupyter Notebook",
          href: "https://github.com/RishikGupta/Hepatitis-A-Prediction",
        },
      ],
    },
    {
      title: "Motor Skills Analysis",
      description:
        "Conducted ML-based motor skill analysis using Python libraries like NumPy, pandas, Matplotlib, and Seaborn. Collaborated with a team to analyze and visualize patterns.",
      tech: ["Python", "NumPy", "Seaborn", "Data Analysis", "ML"],
      links: [
        {
          label: "💻 GitHub - Jupyter Notebooks",
          href: "https://github.com/RishikGupta/Analysis-of-Motor-Skills",
        },
      ],
    },
    {
      title: "Road Crack Detection",
      description:
        "Built a deep learning model for detecting road cracks using MATLAB and image processing techniques. Achieved 96% classification accuracy through object detection and feature extraction.",
      tech: ["MATLAB", "Image Processing", "Object Detection", "Deep Learning"],
      links: [
        {
          label: "💻 GitHub - Machine Learning Code",
          href: "https://github.com/RishikGupta/Road-Crack-Detection",
        },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-theme text-theme"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 gradient-accent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-theme hover:-translate-y-1 transition hover:border-[var(--accent-color)]/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] bg-card"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 bg-badge text-badge py-1.5 px-4 rounded-full transition duration-200 
    hover:bg-badge-hover hover:text-white hover:shadow-accent shadow-sm"
                    >
                      {techIcons[tech] && (
                        <span className="text-inherit text-lg">
                          {techIcons[tech]}
                        </span>
                      )}
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col space-y-2">
                  {project.links.map((link, key) => (
                    <a
                      key={key}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-[var(--link-hover)]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
