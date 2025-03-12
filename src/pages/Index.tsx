
import { Shield, Server, Network, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const Index = () => {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-secondary" />,
      title: "Security Consulting",
      description: "Expert guidance on cybersecurity strategy and implementation"
    },
    {
      icon: <Server className="w-12 h-12 text-secondary" />,
      title: "Infrastructure Solutions",
      description: "Robust and scalable infrastructure design and management"
    },
    {
      icon: <Network className="w-12 h-12 text-secondary" />,
      title: "Network Security",
      description: "Comprehensive network protection and monitoring"
    },
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      title: "Security Training",
      description: "Employee security awareness and best practices training"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-up opacity-0 [animation-delay:200ms]">
            Secure Your Digital Future
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 animate-fade-up opacity-0 [animation-delay:400ms]">
            Expert security and infrastructure consulting for businesses that demand excellence
          </p>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 animate-fade-up opacity-0 [animation-delay:600ms]"
          >
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">About Us</h2>
            <p className="text-lg text-muted mb-6">
              We are a leading security and infrastructure consultancy, dedicated to protecting businesses 
              in an ever-evolving digital landscape. Our expert team brings years of experience in 
              cybersecurity and infrastructure management.
            </p>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-primary border-primary hover:bg-primary hover:text-white"
            >
              Learn More About Our Expertise
            </Button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Security Assessment</h3>
              <p className="text-gray-200">Comprehensive security audits and vulnerability assessments</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Infrastructure Design</h3>
              <p className="text-gray-200">Scalable and secure infrastructure solutions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Continuous Monitoring</h3>
              <p className="text-gray-200">24/7 security monitoring and incident response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                ></textarea>
              </div>
              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
