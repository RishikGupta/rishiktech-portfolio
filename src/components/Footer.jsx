import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="w-full bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-t border-white/10 shadow-inner">
            <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm font-mono">
                {/* Name / Branding */}
                <div className="mb-4 md:mb-0 text-white font-bold text-lg">
                    Rishik<span className="text-blue-500">.dev</span>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-4 md:mb-0">
                    <a href="#home" className="hover:text-white transition-colors">Home</a>
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </div>

                {/* Social Links */}
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
