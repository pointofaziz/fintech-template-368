import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useToast } from '@/hooks/use-toast';
import { Loader } from 'lucide-react';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "You're on the waitlist!",
        description: "We'll notify you as soon as early access is available.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background min-h-[80vh]">
          {/* Cosmic particle effect (background dots) */}
          <div className="absolute inset-0 cosmic-grid opacity-30"></div>
          
          {/* Gradient glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
            <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
          </div>
          
          <div className={`relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                🚀 Early access launching soon
                <Loader className="h-3 w-3 animate-spin text-primary" />
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">
              Join the{' '}
              <span className="cosmic-gradient bg-clip-text text-transparent">
                Waitlist
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Be the first to access smarter job applications powered by AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-base bg-background border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px] whitespace-nowrap"
                >
                  {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                </Button>
              </form>
            </div>
            
            <div className="pt-6 text-sm text-muted-foreground">
              We'll notify you as soon as early access is available.
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Waitlist;