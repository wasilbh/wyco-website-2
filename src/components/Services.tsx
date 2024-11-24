import { Cpu, Globe, Shield, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: 'AI Integration',
    description: 'Leverage artificial intelligence to automate and optimize your business.',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with enterprise-grade security solutions.',
  },
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital era.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}