import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Receipt } from "lucide-react";

const RideHistory = () => {
  const rides = [
    {
      id: 1,
      date: "2024-01-15",
      time: "2:30 PM",
      pickup: "123 Main Street",
      destination: "Downtown Mall",
      fare: "$18.75",
      status: "completed",
      driver: "Mike Johnson",
      rating: 5,
      duration: "15 min"
    },
    {
      id: 2,
      date: "2024-01-14",
      time: "9:15 AM",
      pickup: "Home",
      destination: "Office Building",
      fare: "$12.50",
      status: "completed",
      driver: "Sarah Wilson",
      rating: 4,
      duration: "12 min"
    },
    {
      id: 3,
      date: "2024-01-13",
      time: "6:45 PM",
      pickup: "Airport Terminal",
      destination: "Hotel Grand",
      fare: "$35.20",
      status: "completed",
      driver: "David Chen",
      rating: 5,
      duration: "28 min"
    },
    {
      id: 4,
      date: "2024-01-12",
      time: "11:30 AM",
      pickup: "Coffee Shop",
      destination: "City Park",
      fare: "$8.90",
      status: "cancelled",
      driver: null,
      rating: null,
      duration: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success text-success-foreground";
      case "cancelled":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-primary">Trip History</h2>
        <Button variant="outline" size="sm">
          <Receipt className="h-4 w-4 mr-2" />
          Download Receipt
        </Button>
      </div>

      {rides.map((ride) => (
        <Card key={ride.id} className="shadow-card">
          <CardContent className="pt-4">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="text-sm text-muted-foreground">
                  {ride.date} • {ride.time}
                </div>
                <Badge className={getStatusColor(ride.status)}>
                  {ride.status}
                </Badge>
              </div>
              <div className="text-right">
                <div className="font-semibold text-lg text-primary">{ride.fare}</div>
                {ride.duration && (
                  <div className="text-sm text-muted-foreground flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {ride.duration}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="h-2 w-2 bg-success rounded-full mt-2" />
                <div>
                  <p className="text-sm text-muted-foreground">From</p>
                  <p className="font-medium">{ride.pickup}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-2 w-2 bg-destructive rounded-full mt-2" />
                <div>
                  <p className="text-sm text-muted-foreground">To</p>
                  <p className="font-medium">{ride.destination}</p>
                </div>
              </div>
            </div>

            {ride.driver && ride.status === "completed" && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Driver</p>
                    <p className="font-medium">{ride.driver}</p>
                  </div>
                  {ride.rating && (
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < ride.rating
                              ? "fill-current text-accent-foreground"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      {rides.length === 0 && (
        <Card className="shadow-card">
          <CardContent className="pt-6 text-center py-12">
            <div className="bg-muted/50 rounded-full p-8 w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <MapPin className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="font-semibold mb-2">No trips yet</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your ride history will appear here after you take your first trip
            </p>
            <Button className="bg-gradient-primary">
              Book Your First Ride
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default RideHistory;