import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "24/7 Customer Support"],
      color: "text-primary"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["info@nodrop.com", "support@nodrop.com"],
      color: "text-secondary"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: ["123 Water Street", "Premium District, PD 12345"],
      color: "text-accent"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 6:00 AM - 10:00 PM", "Sat - Sun: 8:00 AM - 8:00 PM"],
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full mb-6">
            <Mail className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-foreground">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Contact</span>{" "}
            <span className="text-foreground">Us</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to experience premium water solutions? Get in touch with our team 
            for personalized service and expert consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="glass-card border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input 
                      placeholder="John" 
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors" 
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors" 
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+1 (555) 123-4567" 
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors" 
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Service Interested In
                  </label>
                  <select className="w-full h-10 px-3 py-2 rounded-xl border border-border/50 bg-background/50 focus:border-primary transition-colors">
                    <option>Home Water Supply</option>
                    <option>Business Solutions</option>
                    <option>Emergency Reserve</option>
                    <option>Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your water supply needs..." 
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors min-h-[120px]" 
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of water experts is ready to help you find the perfect solution. 
                Whether you need a quote, have questions, or want to schedule a consultation, 
                we're here to assist you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass-card border-0 group hover:shadow-[0_10px_30px_-10px_hsla(0,0%,0%,0.1)] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`${info.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <h4 className="font-bold text-foreground mb-2">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Contact */}
            <Card className="bg-gradient-primary border-0">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold text-primary-foreground mb-2">
                  Emergency Water Service
                </h4>
                <p className="text-primary-foreground/90 mb-4">
                  Need immediate water supply? Our emergency service is available 24/7.
                </p>
                <Button variant="glass" size="lg">
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;