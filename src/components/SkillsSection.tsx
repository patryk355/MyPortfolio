export const SkillsSection = () => {
  const skills = [
    {
      category: 'Frontend',
      items: [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'TypeScript',
        'React',
        'React Native',
        'Next.js',
        'Redux',
        'TanStack',
        'zustand',
        'SASS/SCSS',
      ],
    },
    {
      category: 'Tools & Platforms',
      items: [
        'Xcode',
        'Android Studio',
        'Git',
        'GitHub',
        'Bitbucket',
        'Sourcetree',
        'WebStorm',
        'VS Code',
        'Webpack',
        'Vite',
        'Figma',
        'Adobe XD',
        'Vercel',
        'Netlify',
        'Render',
        'Supabase',
        'Railway',
        'Docker',
        'Postman',
      ],
    },
  ];

  const SkillBadge = ({skill}: { skill: string }) => (
    <div
      className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-indigo-100 hover:text-indigo-700 transition-colors cursor-default">
      {skill}
    </div>
  );

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools in the web and mobile
            development ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <SkillBadge key={skillIndex} skill={skill}/>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
