import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import { useToast } from '@/hooks/use-toast';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
      {/* Header with Logo */}
      <header className="w-full py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Logo variant="navbar" />
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="cosmic-grid opacity-20"></div>
            <div className="cosmic-glow"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Join the{' '}
                <span className="cosmic-gradient bg-clip-text text-transparent">
                  Waitlist
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Be the first to access smarter job applications powered by AI.
              </p>
            </div>

            {/* Waitlist Form */}
            <div className="max-w-md mx-auto space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12 text-base"
                    required
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="h-12 px-8 whitespace-nowrap"
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </Button>
                </div>
              </form>
              
              <p className="text-sm text-muted-foreground">
                We'll notify you as soon as early access is available.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Waitlist;