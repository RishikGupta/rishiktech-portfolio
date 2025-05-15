import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Beaded Muse */}
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">
                Beaded Muse (Capstone Project)
              </h3>
              <p className="text-gray-400 mb-4">
                Developed a complete Admin Panel for a MERN stack-based
                e-commerce platform. Implemented secure Stripe payments, GST
                calculation, responsive UI/UX, and real-time order/product
                management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Stripe",
                  "Jira",
                  "Figma",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
          hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col space-y-2 text-sm text-blue-400">
                <a
                  href="https://beadedmuseadmin.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300"
                >
                  🔗 Admin Panel (Live)
                </a>
                <a
                  href="https://beaded-muse-w32x.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300"
                >
                  🔗 Customer Panel (Live)
                </a>
              </div>
            </div>

            {/* Length of Stay Classification */}
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
              hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">
                Length of Stay Classification
              </h3>
              <p className="text-gray-400 mb-4">
                Built a predictive system to classify patient hospital stay
                duration using a dataset of 300,000 records. Handled data
                cleaning, pre-processing, and model training for performance
                optimization.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Pandas", "Scikit-learn", "Jupyter", "ML"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex flex-col space-y-2 text-sm text-blue-400">
                <a
                  href="https://github.com/RishikGupta/Classification-Of-LOS-Of-Patients"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300"
                >
                  💻 GitHub - Jupyter Notebook
                </a>
              </div>
            </div>

            {/* Hepatitis A Predictor */}
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
              hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">Hepatitis A Predictor</h3>
              <p className="text-gray-400 mb-4">
                Engineered an ensemble machine learning model by combining
                Linear Regression, SVR, and ARIMA based on error metrics to
                improve predictive accuracy for medical datasets.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Python",
                  "Scikit-learn",
                  "Pandas",
                  "Regression Models",
                  "ARIMA",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col space-y-2 text-sm text-blue-400">
                <a
                  href="https://github.com/RishikGupta/Hepatitis-A-Prediction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300"
                >
                  💻 GitHub - Jupyter Notebook
                </a>
              </div>
            </div>

            {/* Motor Skills Analysis */}
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
              hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">Motor Skills Analysis</h3>
              <p className="text-gray-400 mb-4">
                Conducted ML-based motor skill analysis using Python libraries
                like NumPy, pandas, Matplotlib, and Seaborn. Collaborated with a
                team to analyze and visualize patterns.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "NumPy", "Seaborn", "Data Analysis", "ML"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex flex-col space-y-2 text-sm text-blue-400">
                <a
                  href="https://github.com/RishikGupta/Analysis-of-Motor-Skills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300"
                >
                  💻 GitHub - Jupyter Notebooks
                </a>
              </div>
            </div>

            {/* Road Crack Detection */}
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
              hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">Road Crack Detection</h3>
              <p className="text-gray-400 mb-4">
                Built a deep learning model for detecting road cracks using
                MATLAB and image processing techniques. Achieved 96%
                classification accuracy through object detection and feature
                extraction.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "MATLAB",
                  "Image Processing",
                  "Object Detection",
                  "Deep Learning",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col space-y-2 text-sm text-blue-400">
                <a
                  href="https://github.com/RishikGupta/Road-Crack-Detection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300"
                >
                  💻 GitHub - Machine Learning Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
