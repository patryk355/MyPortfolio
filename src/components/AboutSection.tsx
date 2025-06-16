export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              I'm a passionate frontend developer with 3+ years of experience
              creating responsive, user-friendly web applications.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I specialize in React, Next.js and React Native, with a strong focus
              on creating performant, accessible, and visually appealing
              interfaces. I believe that great code should not only work well
              but also be maintainable and readable.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-indigo-50 rounded-lg p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Experience Highlights
                </h3>
                <div className="space-y-6">
                  <div className="relative pl-8 border-l-2 border-indigo-200 pb-6">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-indigo-600"></div>
                    <h4 className="text-xl font-semibold">
                      Front-End Developer
                    </h4>
                    <p className="text-indigo-600">
                      Treesat • 2022 - Present
                    </p>
                    <p className="mt-2 text-gray-700">
                      Built web and mobile applications in Automotive and Smart Home industries.
                    </p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-indigo-200 pb-6">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-indigo-600"></div>
                    <h4 className="text-xl font-semibold">
                      Full-Stack Developer
                    </h4>
                    <p className="text-indigo-600">
                      Freelancer • 2021 - Present
                    </p>
                    <p className="mt-2 text-gray-700">
                      Built responsive web applications for various clients using React and Next.js.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
