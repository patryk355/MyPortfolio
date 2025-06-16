import {MapPinIcon, MailIcon} from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <MapPinIcon size={24} className="text-indigo-600"/>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-gray-600">Olsztyn, Poland</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <MailIcon size={24} className="text-indigo-600"/>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-600">patrykkarasinski11@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-600 text-white rounded-lg shadow-sm p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              I'm currently available for freelance work and part-time
              positions. If you have a project that needs some creative touch,
              I'd love to help you with it.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/patryk-karasi%C5%84ski-a344b6214"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                View LinkedIn
              </a>
              <a
                href="mailto:patrykkarasinski11@gmail.com"
                className="px-6 py-2 border border-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
