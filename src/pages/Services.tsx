import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import { ArrowRight, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '../types';
import wasteCollection from '@/assets/waste-collection.jpg';
import recyclingBins from '@/assets/recycling-bins.jpg';
import trackingStatus from '@/assets/tracking-status.jpg';

const Services = () => {
  const services: Service[] = [
    {
      id: '1',
      title: 'Residential Waste Collection',
      description: 'Comprehensive waste pickup service for homes and apartments with flexible scheduling options.',
      icon: '🏠',
      image: wasteCollection,
      features: [
        'Weekly or bi-weekly pickup',
        'Curbside collection service',
        'Multiple waste stream handling',
        'Holiday schedule adjustments',
        'Emergency pickup available'
      ]
    },
    {
      id: '2',
      title: 'Commercial Waste Services',
      description: 'Tailored waste management solutions for businesses of all sizes with reliable service.',
      icon: '🏢',
      image: wasteCollection,
      features: [
        'Customized pickup schedules',
        'Volume-based pricing',
        'Compliance documentation',
        'Dedicated account management',
        'Waste audit services'
      ]
    },
    {
      id: '3',
      title: 'Recycling Programs',
      description: 'Complete recycling services for paper, plastic, glass, and metal with proper sorting.',
      icon: '♻️',
      image: recyclingBins,
      features: [
        'Multi-stream recycling',
        'Contamination prevention',
        'Educational resources',
        'Impact reporting',
        'Special material handling'
      ]
    },
    {
      id: '4',
      title: 'Organic Waste Composting',
      description: 'Sustainable organic waste processing that turns food scraps into valuable compost.',
      icon: '🌱',
      image: recyclingBins,
      features: [
        'Food waste collection',
        'Yard waste processing',
        'Compost production',
        'Nutrient-rich soil amendment',
        'Methane reduction'
      ]
    },
    {
      id: '5',
      title: 'Hazardous Waste Disposal',
      description: 'Safe and compliant disposal of hazardous materials following all regulatory requirements.',
      icon: '⚠️',
      image: wasteCollection,
      features: [
        'Chemical waste handling',
        'Electronic waste (e-waste)',
        'Battery recycling',
        'Paint and solvent disposal',
        'Certified destruction'
      ]
    },
    {
      id: '6',
      title: 'Smart Tracking System',
      description: 'Real-time monitoring and tracking of all waste management activities with digital reports.',
      icon: '📱',
      image: trackingStatus,
      features: [
        'Real-time GPS tracking',
        'Digital service confirmations',
        'Environmental impact reports',
        'Mobile app access',
        'Customer notifications'
      ]
    }
  ];

  const handleLearnMore = (service: Service) => {
    // Could open a modal or navigate to detailed service page
    console.log('Learn more about:', service.title);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            <TreePine className="h-4 w-4 mr-2" />
            Our Services
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Complete Waste Management Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From residential pickup to commercial waste management, we provide comprehensive 
            services that meet all your environmental needs with reliability and care.
          </p>
          <Button asChild size="lg" className="eco-button">
            <Link to="/request">
              Request Service Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onLearnMore={handleLearnMore}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Service Areas</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            We proudly serve communities across the region with reliable, 
            professional waste management services.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Metro Area</div>
              <div className="text-muted-foreground">Downtown & Suburbs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Industrial</div>
              <div className="text-muted-foreground">Manufacturing Districts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Residential</div>
              <div className="text-muted-foreground">Neighborhoods & HOAs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Commercial</div>
              <div className="text-muted-foreground">Business Districts</div>
            </div>
          </div>

          <Button asChild variant="outline" size="lg">
            <Link to="/request">
              Check Service Availability
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-hover text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Contact us today to discuss your waste management needs and receive 
            a customized service plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-green-50"
            >
              <Link to="/request">
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Link to="/track">
                Track Existing Service
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;