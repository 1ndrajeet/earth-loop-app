import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle, Truck, TreePine } from 'lucide-react';
import { saveRequest } from '../lib/database';
import { useToast } from '@/hooks/use-toast';

const Request = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    wasteType: '',
    scheduledDate: '',
    notes: ''
  });

  const wasteTypes = [
    { value: 'general', label: 'General Waste' },
    { value: 'recycling', label: 'Recycling Materials' },
    { value: 'organic', label: 'Organic/Compost' },
    { value: 'hazardous', label: 'Hazardous Materials' },
    { value: 'electronic', label: 'Electronic Waste' },
    { value: 'bulky', label: 'Bulky Items' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.wasteType || !formData.scheduledDate) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in all required fields.",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const requestId = saveRequest({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        wasteType: formData.wasteType,
        scheduledDate: formData.scheduledDate,
        notes: formData.notes
      });

      toast({
        title: "Request Submitted Successfully!",
        description: `Your request ID is: ${requestId}. We'll contact you soon to confirm the details.`,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        wasteType: '',
        scheduledDate: '',
        notes: ''
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Truck className="h-4 w-4 mr-2" />
            Request Pickup
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Schedule Your Waste Pickup
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll schedule a convenient pickup time 
            for your waste management needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Calendar className="h-6 w-6 mr-2 text-primary" />
                  Pickup Request Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="scheduledDate">Preferred Pickup Date *</Label>
                      <Input
                        id="scheduledDate"
                        type="date"
                        value={formData.scheduledDate}
                        onChange={(e) => handleInputChange('scheduledDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <Label htmlFor="address">Pickup Address *</Label>
                    <Input
                      id="address"
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Enter complete pickup address"
                      required
                    />
                  </div>

                  {/* Waste Type */}
                  <div className="space-y-2">
                    <Label htmlFor="wasteType">Waste Type *</Label>
                    <Select value={formData.wasteType} onValueChange={(value) => handleInputChange('wasteType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select waste type" />
                      </SelectTrigger>
                      <SelectContent>
                        {wasteTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      placeholder="Any special instructions or additional information..."
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full eco-button" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Submitting Request...</>
                    ) : (
                      <>
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Submit Pickup Request
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <TreePine className="h-5 w-5 mr-2 text-primary" />
                  Service Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 2-4 hours and schedule pickups within 24-48 hours.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Service Areas</h4>
                  <p className="text-sm text-muted-foreground">
                    Currently serving the metro area and surrounding suburbs. 
                    Call for availability in remote areas.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Emergency Pickup</h4>
                  <p className="text-sm text-muted-foreground">
                    Need urgent pickup? Call our 24/7 hotline: (555) 123-4567
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="text-lg">Pricing Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">General Waste</span>
                  <span className="font-medium">$25-45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Recycling</span>
                  <span className="font-medium">$15-30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Bulky Items</span>
                  <span className="font-medium">$50-100</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    * Prices vary based on volume and location
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;