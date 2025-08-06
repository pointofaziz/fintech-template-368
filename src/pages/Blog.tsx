import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const featuredPost = {
    title: "The Hidden Resume Killer That Blocks 97% of Applications",
    excerpt: "This one formatting mistake instantly disqualifies your resume. Here's the 30-second fix that gets you past ATS systems.",
    author: "Fyxor Team",
    date: "August 6, 2025",
    readTime: "5 min read",
    tag: "Must Read",
    tagColor: "bg-accent text-accent-foreground"
  };

  const blogPosts = [
    {
      title: "The ATS Hack That Tripled My Interview Rate",
      excerpt: "I reverse-engineered 500+ job postings to crack the ATS code. These 7 keywords get you noticed every time.",
      tag: "ATS Secrets",
      tagColor: "bg-muted text-muted-foreground",
      readTime: "4 min read",
      author: "Fyxor Team",
      date: "August 5, 2025"
    },
    {
      title: "LinkedIn Headlines That Made Recruiters DM Me",
      excerpt: "From 0 to 15 recruiter messages per week using this simple headline formula that works in any industry.",
      tag: "LinkedIn Gold",
      tagColor: "bg-muted text-muted-foreground",
      readTime: "3 min read",
      author: "Fyxor Team",
      date: "August 4, 2025"
    },
    {
      title: "How I Negotiated 47% More Without Experience",
      excerpt: "The exact email templates and conversation scripts I used to get $87k instead of $59k (as a junior developer).",
      tag: "Salary Hacks",
      tagColor: "bg-muted text-muted-foreground",
      readTime: "6 min read",
      author: "Fyxor Team",
      date: "August 3, 2025"
    },
    {
      title: "Google Interview Questions They Don't Want You to See",
      excerpt: "Former Google recruiter reveals the real questions they ask (and the answers they want to hear).",
      tag: "Insider Intel",
      tagColor: "bg-muted text-muted-foreground",
      readTime: "7 min read",
      author: "Fyxor Team",
      date: "August 2, 2025"
    },
    {
      title: "Remote Job Applications That Never Get Ignored",
      excerpt: "Why 90% of remote applications get deleted immediately (and the simple trick that gets yours read first).",
      tag: "Remote Secrets",
      tagColor: "bg-muted text-muted-foreground",
      readTime: "5 min read",
      author: "Fyxor Team",
      date: "August 1, 2025"
    },
    {
      title: "Career Pivot at 35: From $45K to $120K in 8 Months",
      excerpt: "My complete playbook for switching careers later in life without taking a pay cut or going back to school.",
      tag: "Success Story",
      tagColor: "bg-muted text-muted-foreground",
      readTime: "8 min read",
      author: "Fyxor Team",
      date: "July 31, 2025"
    }
  ];

  const categories = [
    { name: "Resume Secrets", count: 12, color: "bg-accent" },
    { name: "Interview Intel", count: 8, color: "bg-accent" },
    { name: "LinkedIn Gold", count: 6, color: "bg-accent" },
    { name: "Salary Hacks", count: 4, color: "bg-accent" },
    { name: "Career Pivots", count: 5, color: "bg-accent" },
    { name: "ATS Secrets", count: 7, color: "bg-accent" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 cosmic-gradient opacity-10" />
        <div className="absolute inset-0 cosmic-grid opacity-20" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 cosmic-glow text-balance">
            The Job Search Secrets
            <span className="block text-primary">Top 1% Use</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
            Insider strategies that helped 10,000+ professionals skip the queue and land dream offers faster
          </p>
          <Button size="lg" className="cosmic-glow">
            Get The Playbook Free
          </Button>
        </div>
      </section>

      <main className="flex-1 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
            {/* Featured Post */}
          <div className="mb-16">
            <Card className="cosmic-glass hover:border-accent/40 transition-all duration-500 blog-card featured-card hover-scale">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Badge className={featuredPost.tagColor}>
                      {featuredPost.tag}
                    </Badge>
                    <span className="text-sm text-muted-foreground">Featured</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button className="mt-4">
                    Read Full Article
                  </Button>
                </div>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-6xl opacity-20">📄</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="cosmic-glass hover:border-accent/40 transition-all duration-500 group cursor-pointer blog-card animate-fade-in hover-scale" style={{'--card-index': index} as React.CSSProperties}>
                    <CardHeader className="space-y-4">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                        <div className="text-4xl opacity-20">📄</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={`${post.tagColor} text-xs`}>
                          {post.tag}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-accent-foreground transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-sm">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {post.date}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <Card className="cosmic-glass">
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between hover:text-accent-foreground transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${category.color}`} />
                        <span className="text-sm">{category.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{category.count}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="cosmic-glass">
                <CardHeader>
                  <CardTitle className="text-lg">Get The Insider Playbook</CardTitle>
                  <CardDescription>
                    Join 25,000+ professionals getting weekly career hacks that actually work
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <Button className="w-full">
                    Subscribe
                  </Button>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card className="cosmic-glass">
                <CardHeader>
                  <CardTitle className="text-lg">Popular Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div key={index} className="hover:text-accent-foreground transition-colors cursor-pointer">
                      <h4 className="text-sm font-medium mb-1">{post.title}</h4>
                      <p className="text-xs text-muted-foreground">{post.readTime}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;