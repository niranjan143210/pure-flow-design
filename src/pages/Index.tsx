import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Trust />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-surface-dark text-surface-dark-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">ND</span>
                </div>
                <h3 className="text-2xl font-bold">NO DROP</h3>
              </div>
              <p className="text-surface-dark-foreground/80 mb-4 leading-relaxed">
                Premium water solutions delivering purity, reliability, and innovation. 
                Experience the NO DROP difference with zero waste and maximum efficiency.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-surface-dark-foreground/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors cursor-pointer" />
                <div className="w-10 h-10 bg-surface-dark-foreground/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors cursor-pointer" />
                <div className="w-10 h-10 bg-surface-dark-foreground/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-surface-dark-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Home Supply</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Business Solutions</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Emergency Reserve</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Custom Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-surface-dark-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-surface-dark-foreground/20 mt-8 pt-8 text-center">
            <p className="text-surface-dark-foreground/60">
              © 2024 NO DROP. All rights reserved. | Premium Water Solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
