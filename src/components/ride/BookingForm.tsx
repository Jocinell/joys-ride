import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation, Clock, DollarSign, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [rideType, setRideType] = useState("standard");
  const { toast } = useToast();

  const handleBookRide = () => {
    if (!pickup || !destination) {
      toast({
        title: "Missing Information",
        description: "Please enter both pickup and destination locations",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Ride Requested!",
      description: "Looking for nearby drivers...",
    });
  };

  const rideTypes = [
    {
      id: "standard",
      name: "Joy Standard",
      price: "$12.50",
      time: "5 min",
      description: "Affordable rides for everyday trips",
      icon: Car,
    },
    {
      id: "premium",
      name: "Joy Premium", 
      price: "$18.75",
      time: "3 min",
      description: "Premium cars with extra comfort",
      icon: Zap,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Location Inputs */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center text-primary">
            <MapPin className="h-5 w-5 mr-2" />
            Where to?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <div className="absolute left-3 top-3 h-2 w-2 bg-success rounded-full"></div>
            <Input
              placeholder="Enter pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="pl-8"
            />
          </div>
          <div className="relative">
            <div className="absolute left-3 top-3 h-2 w-2 bg-destructive rounded-full"></div>
            <Input
              placeholder="Enter destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-8"
            />
          </div>
          <Button variant="outline" className="w-full">
            <Navigation className="h-4 w-4 mr-2" />
            Use Current Location
          </Button>
        </CardContent>
      </Card>

      {/* Ride Type Selection */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-primary">Choose Your Ride</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {rideTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              <div
                key={type.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  rideType === type.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setRideType(type.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{type.name}</h3>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {type.time}
                    </div>
                    <div className="flex items-center font-semibold text-primary">
                      <DollarSign className="h-4 w-4" />
                      {type.price}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Book Ride Button */}
      <Button
        onClick={handleBookRide}
        className="w-full h-12 text-lg font-semibold shadow-button bg-gradient-primary hover:opacity-90"
      >
        Book Joy's Ride
      </Button>
    </div>
  );
};

const Car = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 11l1.5-4.5h11L19 11m-1.5 5a1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5 1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5m-11 0A1.5 1.5 0 0 1 5 14.5 1.5 1.5 0 0 1 6.5 13 1.5 1.5 0 0 1 8 14.5 1.5 1.5 0 0 1 6.5 16M18.92 6c-.2-.58-.76-1-1.42-1H6.5c-.66 0-1.22.42-1.42 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8l-2.08-6Z"/>
  </svg>
);

export default BookingForm;