import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onLearnMore?: (service: Service) => void;
}

const ServiceCard = ({ service, onLearnMore }: ServiceCardProps) => {
  return (
    <Card className="eco-card h-full flex flex-col overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {service.title}
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            {service.icon}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.description}
        </p>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1">
          <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
          <ul className="space-y-1 mb-6">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button
          onClick={() => onLearnMore?.(service)}
          className="w-full eco-button group"
          size="sm"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;