import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Droplets, Leaf, Shield, Users } from "lucide-react";

const Trust = () => {
  const stats = [
    {
      number: "10,000+",
      label: "Happy Customers",
      icon: <Users className="h-8 w-8" />,
      color: "text-primary"
    },
    {
      number: "99.9%",
      label: "Water Purity",
      icon: <Droplets className="h-8 w-8" />,
      color: "text-secondary"
    },
    {
      number: "24/7",
      label: "Service Available",
      icon: <Clock className="h-8 w-8" />,
      color: "text-accent"
    },
    {
      number: "100%",
      label: "Eco-Friendly",
      icon: <Leaf className="h-8 w-8" />,
      color: "text-primary"
    }
  ];

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "FDA Approved",
      description: "Food & Drug Administration",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "EPA Certified",
      description: "Environmental Protection",
      icon: <Leaf className="h-6 w-6" />
    },
    {
      title: "NSF International",
      description: "Water Quality Assurance",
      icon: <Droplets className="h-6 w-6" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card border-0 text-center group hover:shadow-[0_10px_30px_-10px_hsla(0,0%,0%,0.1)] transition-all duration-300">
              <CardContent className="p-6">
                <div className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust & Quality Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full mb-6">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-foreground">Trust & Quality</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Certified</span>{" "}
              <span className="text-foreground">Excellence</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At NO DROP, quality isn't just a promise—it's our guarantee. Our water undergoes 
              rigorous testing and meets the highest industry standards to ensure every drop 
              delivers pure, clean, and safe hydration.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Droplets className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Advanced Filtration</h3>
                  <p className="text-muted-foreground">Multi-stage purification process removes 99.9% of contaminants while preserving essential minerals.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Quality Assurance</h3>
                  <p className="text-muted-foreground">Every batch is tested by certified laboratories and meets strict quality control standards.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Eco-Friendly Process</h3>
                  <p className="text-muted-foreground">Sustainable sourcing and zero-waste delivery systems protect our environment.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Industry Certifications
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="glass-card border-0 group hover:shadow-[0_10px_30px_-10px_hsla(0,0%,0%,0.1)] transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {cert.icon}
                    </div>
                    <h4 className="font-bold text-foreground mb-2">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Message */}
            <div className="mt-8 p-6 bg-gradient-primary rounded-2xl text-center">
              <h4 className="text-xl font-bold text-primary-foreground mb-2">
                Your Trust, Our Commitment
              </h4>
              <p className="text-primary-foreground/90">
                Every drop delivered is a testament to our unwavering commitment to quality, 
                purity, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;