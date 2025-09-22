import { Link } from 'react-router-dom';
import { TreePine, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-primary to-primary-hover p-2 rounded-lg">
                <TreePine className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">EcoWaste</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Leading the way in sustainable waste management and recycling solutions. 
              Together, we can create a cleaner, greener future for our planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/request" className="text-muted-foreground hover:text-primary transition-colors">
                  Request Pickup
                </Link>
              </li>
              <li>
                <Link to="/track" className="text-muted-foreground hover:text-primary transition-colors">
                  Track Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">info@ecowaste.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">123 Green Street, Eco City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 EcoWaste. All rights reserved. Building a sustainable future together.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;