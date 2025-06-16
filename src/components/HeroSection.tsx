import {
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
} from 'lucide-react';
import avatar from '../assets/me.jpg';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="text-sm font-semibold text-indigo-600 mb-2">
              Frontend Developer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-indigo-600">Patryk Karasiński</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              I build exceptional and accessible digital experiences for the web.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:border-indigo-600 hover:text-indigo-600 transition-colors"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-8 flex space-x-4">
              <a
                href="https://github.com/patryk355"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <GithubIcon size={24}/>
              </a>
              <a
                href="https://www.linkedin.com/in/patryk-karasi%C5%84ski-a344b6214"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <LinkedinIcon size={24}/>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={avatar}
                  alt="Patryk Karasiński"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-md">
                <div className="bg-indigo-600 text-white p-2 rounded-full">
                  <code className="text-sm">{'<coder/>'}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a
            href="#about"
            className="animate-bounce bg-white p-2 rounded-full shadow-md"
          >
            <ArrowDownIcon size={24} className="text-indigo-600"/>
          </a>
        </div>
      </div>
    </section>
  );
};
