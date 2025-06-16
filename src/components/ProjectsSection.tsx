import {ExternalLinkIcon, GithubIcon} from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Health App',
      description: 'Web application for healthy eating.',
      image: 'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'TypeScript', 'TanStack', 'NodeJS', 'Express', 'MySQL', 'Web'],
      liveLink: 'https://health-app-theta-liart.vercel.app',
      githubLink: 'https://github.com/patryk355/health-app',
    },
    {
      id: 2,
      title: 'Veterinary Clinic',
      description: 'Web application for doctors and clients to use in the clinic.',
      image: 'https://images.unsplash.com/photo-1654895716780-b4664497420d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'JavaScript', 'Axios', 'NodeJS', 'Express', 'MySQL', 'Web'],
      liveLink: 'https://patryk355.github.io/lecznica_frontend',
      githubLink: 'https://github.com/patryk355/lecznica_frontend',
    },
    {
      id: 3,
      title: 'Alert System',
      description: 'Web application to supervise life-saving alarms.',
      image: 'https://images.unsplash.com/photo-1716380703770-c3dd70781e82?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'TypeScript', 'Web'],
      liveLink: 'https://smart-alert.pl',
    },
    {
      id: 4,
      title: 'Pins',
      description: 'Mobile application for tracking vehicle location.',
      image: 'https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React Native', 'TypeScript', 'Google Maps API', 'FCM', 'Android', 'iOS'],
      liveLink: 'https://play.google.com/store/apps/details?id=io.treesat.pins_v2',
    },
    {
      id: 5,
      title: 'Ferguson Home Panel',
      description: 'An application dedicated to tablets for managing Smart Home devices..',
      image: 'https://images.unsplash.com/photo-1650682009477-52fd77302b78?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React Native', 'TypeScript', 'Android', 'Tablet'],
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Check out some of my recent work. These projects showcase my skills and experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium bg-indigo-50 text-indigo-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
                  >
                    <ExternalLinkIcon size={16}/>
                    <span>Live Demo</span>
                  </a>
                  {project.githubLink && <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1"
                  >
                      <GithubIcon size={16}/>
                      <span>Source Code</span>
                  </a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
