import {
  GithubIcon,
  LinkedinIcon,
  ArrowUpIcon,
} from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-indigo-400">
              Patryk <span className="text-white">Karasiński</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Creating exceptional digital experiences with clean, efficient,
              and maintainable code.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full transition-colors mb-4"
              aria-label="Scroll to top"
            >
              <ArrowUpIcon size={20}/>
            </button>
            <div className="flex space-x-2">
              <a
                href="https://github.com/patryk355"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <GithubIcon size={20}/>
              </a>
              <a
                href="https://www.linkedin.com/in/patryk-karasi%C5%84ski-a344b6214"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <LinkedinIcon size={20}/>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Patryk Karasiński. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
