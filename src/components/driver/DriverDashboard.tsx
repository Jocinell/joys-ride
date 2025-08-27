import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Car, 
  DollarSign, 
  MapPin, 
  Clock, 
  Star, 
  Navigation,
  Phone,
  MessageCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DriverDashboard = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [hasActiveRide, setHasActiveRide] = useState(false);
  const { toast } = useToast();

  const handleGoOnline = (online: boolean) => {
    setIsOnline(online);
    toast({
      title: online ? "You're Online!" : "You're Offline",
      description: online 
        ? "You can now receive ride requests" 
        : "You won't receive new ride requests",
    });
  };

  const handleAcceptRide = () => {
    setHasActiveRide(true);
    toast({
      title: "Ride Accepted!",
      description: "Navigate to pickup location",
    });
  };

  const todayStats = {
    earnings: 156.50,
    trips: 12,
    rating: 4.8,
    onlineTime: "6h 30m"
  };

  const activeRideRequest = {
    passenger: "Sarah Johnson",
    pickup: "123 Main Street",
    destination: "Downtown Mall",
    fare: "$18.75",
    distance: "2.3 km",
    rating: 4.9
  };

  return (
    <div className="space-y-6">
      {/* Online/Offline Toggle */}
      <Card className="shadow-card">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`h-3 w-3 rounded-full ${isOnline ? 'bg-success animate-pulse-primary' : 'bg-muted'}`} />
              <span className="font-semibold text-lg">
                {isOnline ? 'Online' : 'Offline'}
              </span>
            </div>
            <Switch
              checked={isOnline}
              onCheckedChange={handleGoOnline}
              className="data-[state=checked]:bg-success"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {isOnline 
              ? "You're available to receive ride requests" 
              : "Go online to start receiving ride requests"
            }
          </p>
        </CardContent>
      </Card>

      {/* Today's Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardContent className="pt-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-success" />
              <div>
                <p className="text-sm text-muted-foreground">Earnings</p>
                <p className="text-xl font-bold text-success">${todayStats.earnings}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="pt-4">
            <div className="flex items-center space-x-2">
              <Car className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Trips</p>
                <p className="text-xl font-bold">{todayStats.trips}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="pt-4">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-accent-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Rating</p>
                <p className="text-xl font-bold">{todayStats.rating}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="pt-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-info" />
              <div>
                <p className="text-sm text-muted-foreground">Online</p>
                <p className="text-xl font-bold">{todayStats.onlineTime}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Ride or Ride Request */}
      {isOnline && (
        <Card className="shadow-card border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="text-primary">
                {hasActiveRide ? 'Active Ride' : 'New Ride Request'}
              </span>
              {!hasActiveRide && (
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  $18.75
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold">{activeRideRequest.passenger}</p>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Star className="h-3 w-3 fill-current text-accent-foreground" />
                  <span>{activeRideRequest.rating}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <div className="h-2 w-2 bg-success rounded-full mt-2" />
                <div>
                  <p className="text-sm text-muted-foreground">Pickup</p>
                  <p className="font-medium">{activeRideRequest.pickup}</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="h-2 w-2 bg-destructive rounded-full mt-2" />
                <div>
                  <p className="text-sm text-muted-foreground">Destination</p>
                  <p className="font-medium">{activeRideRequest.destination}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Distance: {activeRideRequest.distance}</span>
              <span className="font-semibold text-primary">{activeRideRequest.fare}</span>
            </div>

            {hasActiveRide ? (
              <div className="flex space-x-2">
                <Button className="flex-1" variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                <Button className="flex-1" variant="outline">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message
                </Button>
                <Button className="flex-1 bg-gradient-primary">
                  <Navigation className="h-4 w-4 mr-2" />
                  Navigate
                </Button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1">
                  Decline
                </Button>
                <Button 
                  onClick={handleAcceptRide}
                  className="flex-1 bg-gradient-primary"
                >
                  Accept Ride
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* No Active Requests */}
      {isOnline && !hasActiveRide && (
        <Card className="shadow-card">
          <CardContent className="pt-6 text-center">
            <div className="bg-muted/50 rounded-full p-8 w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <Car className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="font-semibold mb-2">Looking for ride requests...</h3>
            <p className="text-sm text-muted-foreground">
              Stay in a busy area to receive more ride requests
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DriverDashboard;