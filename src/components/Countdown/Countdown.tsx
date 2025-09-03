"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {

  Medal,
  Share2,
  Trophy,

} from "lucide-react";
import { CrossLines } from "../Lines/CrossLines";
import { Line } from "../Doodles/Line";
import Link from "next/link";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const themes = [
  "Cybersecurity",
  "Education and Technology",
  "Smart Cities",
  "Transportation Management",
  "Sustainability and Environment",
  "Fintech Innovation",
];

export function Countdown() {
  // Set event date to 30 days from now for demo purposes
  const eventDate = new Date("2025-09-18");
  eventDate.setDate(eventDate.getDate());
  eventDate.setHours(19, 0, 0, 0); // 7:00 PM

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const difference = eventDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Ascol Hackfest 2025 - Don't Miss Out!",
        text: "Join us for the biggest event of the year!",
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      console.log("[v0] Event link copied to clipboard");
    }
  };

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div id="schedule" className="relative bg-background py-16 lg:py-36">
      <CrossLines />
      {/* Hero Section with Countdown */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-tech-conference-background.png')] opacity-5 bg-cover bg-center" />

        <div className="relative max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="relative text-center mb-12">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4 tracking-tight">
              ASCOL HACKFEST <span className="text-primary">2025</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The Future of Technology Starts Here. Join industry leaders,
              innovators, and visionaries.
            </p>
            <Line
              size={100}
              className="hidden lg:block absolute rotate-[29deg] top-[80px] right-[200px] dark:text-white text-foreground"
            />
          </div>

          {/* Countdown Display */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <Card
                key={item.label}
                className="bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card transition-colors"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 font-mono">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    {item.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeWfX81syG9qM2ITpHlgLVZQJNELwFqZO077QGz0VTun6V7cA/viewform"
              target="blank"
            >
              <Button size="lg">Register Now</Button>
            </Link>
            <Button variant="outline" size="lg" onClick={handleShare}>
              <Share2 className="w-5 h-5 mr-2" />
              Share Event
            </Button>
          </div>
        </div>
      </div>

      {/* Event Details */}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-10">
          🏆 Prize Pool
        </h2>

        {/* Prize Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Trophy className="w-10 h-10 text-yellow-500 mr-3" />
                <div>
                  <h3 className="font-semibold text-card-foreground">Winner</h3>
                  <p className="text-muted-foreground text-lg font-medium">
                    Rs 1,00,000
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Medal className="w-10 h-10 text-orange-500 mr-3" />
                <div>
                  <h3 className="font-semibold text-card-foreground">
                    1st Runner-up
                  </h3>
                  <p className="text-muted-foreground text-lg font-medium">
                    Rs 50,000
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hackathon Themes */}
        <h3 className="text-2xl font-semibold text-foreground mb-6">
          Hackathon Themes
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {themes.map((theme, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {theme}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
