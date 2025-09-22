import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Package, Clock, CheckCircle, AlertCircle, Truck, TreePine } from 'lucide-react';
import { getRequestById, getRequestByPhone } from '../lib/database';
import { WasteRequest } from '../types';

const Track = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState<'id' | 'phone'>('id');
  const [result, setResult] = useState<WasteRequest | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = () => {
    if (!searchValue.trim()) {
      setError('Please enter a request ID or phone number');
      return;
    }

    setIsSearching(true);
    setError(null);
    
    try {
      let foundRequest: WasteRequest | null = null;
      
      if (searchType === 'id') {
        foundRequest = getRequestById(searchValue.trim().toUpperCase());
      } else {
        foundRequest = getRequestByPhone(searchValue.trim());
      }

      if (foundRequest) {
        setResult(foundRequest);
      } else {
        setError('No request found. Please check your request ID or phone number.');
        setResult(null);
      }
    } catch (error) {
      setError('An error occurred while searching. Please try again.');
      setResult(null);
    } finally {
      setIsSearching(false);
    }
  };

  const getStatusIcon = (status: WasteRequest['status']) => {
    switch (status) {
      case 'Pending':
        return <Clock className="h-5 w-5" />;
      case 'Scheduled':
        return <Package className="h-5 w-5" />;
      case 'In Progress':
        return <Truck className="h-5 w-5" />;
      case 'Completed':
        return <CheckCircle className="h-5 w-5" />;
      case 'Cancelled':
        return <AlertCircle className="h-5 w-5" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: WasteRequest['status']) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'In Progress':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusMessage = (status: WasteRequest['status']) => {
    switch (status) {
      case 'Pending':
        return 'Your request has been received and is being processed. We will contact you soon to confirm details.';
      case 'Scheduled':
        return 'Your pickup has been scheduled. Our team will arrive at the specified time.';
      case 'In Progress':
        return 'Our team is currently handling your pickup request.';
      case 'Completed':
        return 'Your waste has been successfully collected and processed. Thank you for choosing EcoWaste!';
      case 'Cancelled':
        return 'This request has been cancelled. Contact us if you have any questions.';
      default:
        return 'Status information is being updated.';
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Search className="h-4 w-4 mr-2" />
            Track Status
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Track Your Pickup Request
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enter your request ID or phone number to check the status of your waste pickup request.
          </p>
        </div>

        {/* Search Form */}
        <Card className="eco-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Search className="h-6 w-6 mr-2 text-primary" />
              Search for Your Request
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Search Type Toggle */}
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={searchType === 'id' ? 'default' : 'outline'}
                  onClick={() => {
                    setSearchType('id');
                    setSearchValue('');
                    setResult(null);
                    setError(null);
                  }}
                  size="sm"
                >
                  Search by Request ID
                </Button>
                <Button
                  type="button"
                  variant={searchType === 'phone' ? 'default' : 'outline'}
                  onClick={() => {
                    setSearchType('phone');
                    setSearchValue('');
                    setResult(null);
                    setError(null);
                  }}
                  size="sm"
                >
                  Search by Phone Number
                </Button>
              </div>

              {/* Search Input */}
              <div className="space-y-2">
                <Label htmlFor="search">
                  {searchType === 'id' ? 'Request ID' : 'Phone Number'}
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="search"
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder={
                      searchType === 'id' 
                        ? 'Enter your request ID (e.g., ABC123DEF)' 
                        : 'Enter your phone number'
                    }
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <Button 
                    onClick={handleSearch} 
                    disabled={isSearching}
                    className="eco-button"
                  >
                    {isSearching ? 'Searching...' : 'Search'}
                  </Button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-destructive" />
                    <span className="text-destructive font-medium">{error}</span>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {result && (
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Package className="h-6 w-6 mr-2 text-primary" />
                  Request Details
                </span>
                <Badge className={`${getStatusColor(result.status)} flex items-center gap-1 px-3 py-1`}>
                  {getStatusIcon(result.status)}
                  {result.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Status Message */}
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-foreground">{getStatusMessage(result.status)}</p>
              </div>

              {/* Request Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Request ID</Label>
                    <p className="text-lg font-mono font-bold text-foreground">{result.id}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Customer Name</Label>
                    <p className="text-foreground">{result.name}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Waste Type</Label>
                    <p className="text-foreground capitalize">{result.wasteType.replace(/([A-Z])/g, ' $1').trim()}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Phone Number</Label>
                    <p className="text-foreground">{result.phone}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Scheduled Date</Label>
                    <p className="text-foreground">{new Date(result.scheduledDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Request Created</Label>
                    <p className="text-foreground">{new Date(result.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Pickup Address</Label>
                    <p className="text-foreground">{result.address}</p>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              {result.notes && (
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Additional Notes</Label>
                  <p className="text-foreground mt-1 p-3 bg-muted/30 rounded-lg">{result.notes}</p>
                </div>
              )}

              {/* Contact Information */}
              <div className="border-t border-border pt-6">
                <div className="flex items-center space-x-2 mb-2">
                  <TreePine className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">Need Help?</span>
                </div>
                <p className="text-muted-foreground mb-3">
                  If you have questions about your request, please contact our support team:
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" size="sm">
                    📞 Call (555) 123-4567
                  </Button>
                  <Button variant="outline" size="sm">
                    📧 Email Support
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Track;