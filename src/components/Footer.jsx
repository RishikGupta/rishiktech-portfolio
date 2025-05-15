import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="w-full z-40 bg-navbar-bg backdrop-blur-lg border-t border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 font-mono">
            
                <div className="mb-4 md:mb-0 text-white font-bold text-xl">
                    Rishik<span className="text-blue-500">.dev</span>
                </div>

                
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-4 md:mb-0">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                </div>

                
                <div className="flex items-center gap-4 text-xl">
                    <a
                        href="https://github.com/RishikGupta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rishikgupta7619/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};
