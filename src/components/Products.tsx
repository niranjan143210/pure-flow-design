import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Droplets, Shield, Truck, Zap } from "lucide-react";
import productImage from "@/assets/premium-water-bottle.jpg";
import deliveryImage from "@/assets/water-delivery-truck.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Home Supply",
      description: "Crystal-clear water delivered directly to your home with our state-of-the-art filtration system.",
      price: "From $29/month",
      image: productImage,
      features: ["24/7 Supply", "Smart Monitoring", "Premium Filtration", "Emergency Backup"],
      icon: <Droplets className="h-6 w-6" />,
      popular: true
    },
    {
      id: 2,
      name: "Business Solutions",
      description: "Scalable water solutions for offices, restaurants, and commercial facilities.",
      price: "Custom Pricing",
      image: deliveryImage,
      features: ["Bulk Supply", "Scheduled Delivery", "Quality Assurance", "24/7 Support"],
      icon: <Truck className="h-6 w-6" />,
      popular: false
    },
    {
      id: 3,
      name: "Emergency Reserve",
      description: "Reliable backup water systems for critical situations and emergency preparedness.",
      price: "From $199",
      image: productImage,
      features: ["Emergency Ready", "Long-term Storage", "Quick Access", "Quality Preserved"],
      icon: <Shield className="h-6 w-6" />,
      popular: false
    }
  ];

  return (
    <section id="products" className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full mb-6">
            <Zap className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-foreground">Our Products</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Premium</span>{" "}
            <span className="text-foreground">Water</span>{" "}
            <span className="text-secondary">Solutions</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our range of cutting-edge water supply solutions designed for homes, 
            businesses, and emergency preparedness. Experience the NO DROP difference.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="relative group glass-card border-0 overflow-hidden hover:shadow-[0_20px_60px_-10px_hsla(217,100%,33%,0.3)] transition-all duration-500">
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Icon Overlay */}
                <div className="absolute top-4 left-4">
                  <div className="glass-card p-3 rounded-full text-primary">
                    {product.icon}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Product Info */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="text-2xl font-bold text-primary">{product.price}</div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant={product.popular ? "hero" : "premium"} 
                  className="w-full"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Need a custom solution for your specific requirements?</p>
          <Button variant="outline" size="lg" className="ripple-effect">
            Contact Our Specialists
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;