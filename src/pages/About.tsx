import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { TreePine, Users, Award, Globe, Recycle, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            <TreePine className="h-4 w-4 mr-2" />
            About EcoWaste
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Building a Sustainable Future Together
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're dedicated to revolutionizing waste management through innovative solutions, 
            environmental responsibility, and community partnership.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At EcoWaste, we believe that effective waste management is crucial for environmental 
                sustainability. Our mission is to provide comprehensive, reliable, and eco-friendly 
                waste management solutions that help communities reduce their environmental footprint.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're committed to making sustainable practices accessible and convenient for everyone, 
                from individual households to large corporations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="eco-card text-center p-6">
                <CardContent className="p-0">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Recycle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Sustainability</h3>
                  <p className="text-sm text-muted-foreground">
                    Protecting our planet for future generations
                  </p>
                </CardContent>
              </Card>
              <Card className="eco-card text-center p-6">
                <CardContent className="p-0">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Building stronger, cleaner communities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose EcoWaste?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine years of experience with cutting-edge technology to deliver 
              superior waste management solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="eco-card text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Expert Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our experienced professionals are trained in the latest waste management 
                  techniques and environmental best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="eco-card text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Proven Results</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Over 10 years of success in waste management with thousands of satisfied 
                  customers and numerous environmental awards.
                </p>
              </CardContent>
            </Card>

            <Card className="eco-card text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Globe className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Global Impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Contributing to global sustainability goals while serving local communities 
                  with personalized service and care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Impact in Numbers</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-lg font-medium text-foreground mb-1">Years Experience</div>
              <div className="text-sm text-muted-foreground">Serving communities nationwide</div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-lg font-medium text-foreground mb-1">Happy Customers</div>
              <div className="text-sm text-muted-foreground">Residential and commercial</div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg font-medium text-foreground mb-1">Tons Recycled</div>
              <div className="text-sm text-muted-foreground">Materials diverted from landfills</div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-lg font-medium text-foreground mb-1">Customer Satisfaction</div>
              <div className="text-sm text-muted-foreground">Based on customer reviews</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;