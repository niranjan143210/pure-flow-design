import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Droplets } from "lucide-react";
import heroImage from "@/assets/hero-water-drops.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium water drops creating ripples in crystal clear blue water"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Floating Water Drops */}
      <div className="absolute top-20 left-20">
        <Droplets className="h-12 w-12 text-secondary/30 water-drop" />
      </div>
      <div className="absolute top-32 right-32">
        <Droplets className="h-8 w-8 text-accent/40 water-drop" />
      </div>
      <div className="absolute bottom-40 left-1/4">
        <Droplets className="h-10 w-10 text-primary/20 water-drop" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full mb-8">
            <CheckCircle className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-foreground">Zero Waste • Maximum Efficiency</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Premium</span>{" "}
            <span className="text-glow text-secondary">Water</span>{" "}
            <span className="text-white">Solutions</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the purest, most reliable water supply with cutting-edge technology. 
            <span className="text-accent font-semibold"> NO DROP</span> delivers trust, innovation, and sophistication.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              "99.9% Pure Water",
              "24/7 Reliable Supply",
              "Eco-Friendly Solutions",
              "Premium Quality Guaranteed"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-white">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Start Your Order
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="mt-12 text-center">
            <p className="text-white/70 text-sm mb-4">Trusted by 10,000+ customers worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="h-8 w-24 bg-white/20 rounded glass-card" />
              <div className="h-8 w-24 bg-white/20 rounded glass-card" />
              <div className="h-8 w-24 bg-white/20 rounded glass-card" />
              <div className="h-8 w-24 bg-white/20 rounded glass-card" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;