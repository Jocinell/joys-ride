import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RatingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  rideDetails: {
    driverName: string;
    driverAvatar?: string;
    pickup: string;
    destination: string;
    fare: string;
  };
}

const RatingDialog = ({ isOpen, onClose, rideDetails }: RatingDialogProps) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a rating before submitting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank you!",
      description: "Your rating has been submitted successfully.",
    });
    
    // Reset form
    setRating(0);
    setFeedback("");
    onClose();
  };

  const getRatingText = (stars: number) => {
    switch (stars) {
      case 1: return "Poor";
      case 2: return "Fair";
      case 3: return "Good";
      case 4: return "Very Good";
      case 5: return "Excellent";
      default: return "";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-primary">Rate Your Ride</DialogTitle>
          <DialogDescription className="text-center">
            How was your experience with Joy's Ride?
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Driver Info */}
          <div className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
            <Avatar className="h-12 w-12">
              <AvatarImage src={rideDetails.driverAvatar} alt={rideDetails.driverName} />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {rideDetails.driverName.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold">{rideDetails.driverName}</h3>
              <p className="text-sm text-muted-foreground">{rideDetails.fare}</p>
            </div>
          </div>

          {/* Trip Details */}
          <div className="space-y-2 text-sm">
            <div className="flex items-start space-x-2">
              <div className="h-2 w-2 bg-success rounded-full mt-2" />
              <span className="text-muted-foreground">From: {rideDetails.pickup}</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="h-2 w-2 bg-destructive rounded-full mt-2" />
              <span className="text-muted-foreground">To: {rideDetails.destination}</span>
            </div>
          </div>

          {/* Star Rating */}
          <div className="text-center space-y-2">
            <div className="flex justify-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="p-1 transition-transform hover:scale-110"
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(star)}
                >
                  <Star
                    className={`h-8 w-8 transition-colors ${
                      star <= (hoveredRating || rating)
                        ? "fill-current text-accent-foreground"
                        : "text-muted"
                    }`}
                  />
                </button>
              ))}
            </div>
            {(hoveredRating || rating) > 0 && (
              <p className="text-sm font-medium text-primary">
                {getRatingText(hoveredRating || rating)}
              </p>
            )}
          </div>

          {/* Feedback */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Additional feedback (optional)
            </label>
            <Textarea
              placeholder="Tell us about your experience..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={3}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Skip
          </Button>
          <Button onClick={handleSubmit} className="bg-gradient-primary">
            Submit Rating
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RatingDialog;