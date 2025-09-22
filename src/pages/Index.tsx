import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ServiceCard from '@/components/ServiceCard';
import { ArrowRight, Recycle, TreePine, Truck, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '../types';
import heroImage from '@/assets/hero-image.jpg';
import wasteCollection from '@/assets/waste-collection.jpg';
import recyclingBins from '@/assets/recycling-bins.jpg';
import trackingStatus from '@/assets/tracking-status.jpg';

const Index = () => {
  const services: Service[] = [
    {
      id: '1',
      title: 'Waste Collection',
      description: 'Professional waste pickup service for residential and commercial properties with flexible scheduling.',
      icon: '🚛',
      image: wasteCollection,
      features: [
        'Scheduled pickup service',
        'Residential & commercial',
        'Flexible timing options',
        'Professional crew'
      ]
    },
    {
      id: '2',
      title: 'Recycling Services',
      description: 'Comprehensive recycling solutions for all types of materials to reduce environmental impact.',
      icon: '♻️',
      image: recyclingBins,
      features: [
        'Multi-material recycling',
        'Proper sorting guidance',
        'Environmental compliance',
        'Impact reporting'
      ]
    },
    {
      id: '3',
      title: 'Status Tracking',
      description: 'Real-time tracking of your waste management requests with instant updates and notifications.',
      icon: '📱',
      image: trackingStatus,
      features: [
        'Real-time updates',
        'Mobile notifications',
        'Digital receipts',
        '24/7 support access'
      ]
    }
  ];

  const handleLearnMore = (service: Service) => {
    // Navigate to services page or show modal
    console.log('Learn more about:', service.title);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="hero-overlay" />
        <img 
          src={heroImage} 
          alt="Eco-friendly waste management" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            🌱 Sustainable Future
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Smart Waste Management
            <br />
            <span className="text-green-200">for a Greener Tomorrow</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-green-50">
            Professional waste collection, recycling services, and environmental solutions 
            that make sustainability simple and effective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="eco-button text-lg px-8 py-3">
              <Link to="/request">
                Request Pickup
                <Truck className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
            >
              <Link to="/services">
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-light to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Tons Recycled</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <TreePine className="h-4 w-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Complete Waste Management Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From collection to recycling, we provide comprehensive services 
              that help protect our environment while meeting your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onLearnMore={handleLearnMore}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-hover text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Join thousands of customers who are already contributing to a sustainable future. 
            Schedule your first pickup today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-green-50 text-lg px-8 py-3"
            >
              <Link to="/request">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
            >
              <Link to="/track">
                <Smartphone className="mr-2 h-5 w-5" />
                Track Your Request
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;