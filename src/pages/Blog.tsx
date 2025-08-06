import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const featuredPost = {
    title: "Why 97% of Resumes Get Rejected (And How to Fix Yours)",
    excerpt: "Most job seekers make these critical mistakes that guarantee rejection. Here's how AI can help you avoid them.",
    author: "Fyxor Team",
    date: "August 6, 2025",
    readTime: "5 min read",
    tag: "Resume Tips",
    tagColor: "bg-blue-500"
  };

  const blogPosts = [
    {
      title: "How to Beat ATS Systems in 2025",
      excerpt: "The ultimate guide to getting past applicant tracking systems with AI optimization.",
      tag: "ATS Strategy",
      tagColor: "bg-teal-500",
      readTime: "4 min read",
      author: "Fyxor Team",
      date: "August 5, 2025"
    },
    {
      title: "LinkedIn Headlines That Get Recruiters' Attention",
      excerpt: "Transform your LinkedIn profile with headlines that make recruiters stop scrolling.",
      tag: "LinkedIn Tips",
      tagColor: "bg-green-500",
      readTime: "3 min read",
      author: "Fyxor Team",
      date: "August 4, 2025"
    },
    {
      title: "Salary Negotiation Scripts That Actually Work",
      excerpt: "Word-for-word scripts to negotiate 20%+ salary increases, even for remote roles.",
      tag: "Salary Tips",
      tagColor: "bg-orange-500",
      readTime: "6 min read",
      author: "Fyxor Team",
      date: "August 3, 2025"
    },
    {
      title: "Interview Questions for Tech Roles in 2025",
      excerpt: "Prepare for the most common questions at Google, Meta, Apple, and other top companies.",
      tag: "Interview Prep",
      tagColor: "bg-purple-500",
      readTime: "7 min read",
      author: "Fyxor Team",
      date: "August 2, 2025"
    },
    {
      title: "Remote Work Resume Optimization Guide",
      excerpt: "How to position yourself as the perfect remote candidate in any industry.",
      tag: "Remote Jobs",
      tagColor: "bg-indigo-500",
      readTime: "5 min read",
      author: "Fyxor Team",
      date: "August 1, 2025"
    },
    {
      title: "Career Change at 30+: Complete Roadmap",
      excerpt: "Step-by-step guide to successfully switching careers later in your professional life.",
      tag: "Career Change",
      tagColor: "bg-red-500",
      readTime: "8 min read",
      author: "Fyxor Team",
      date: "July 31, 2025"
    }
  ];

  const categories = [
    { name: "Resume Tips", count: 12, color: "bg-blue-500" },
    { name: "Interview Prep", count: 8, color: "bg-purple-500" },
    { name: "LinkedIn Strategy", count: 6, color: "bg-green-500" },
    { name: "Salary Negotiation", count: 4, color: "bg-orange-500" },
    { name: "Career Change", count: 5, color: "bg-red-500" },
    { name: "ATS Strategy", count: 7, color: "bg-teal-500" }
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
            Career Insights &
            <span className="block text-primary">Job Search Tips</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
            Expert advice to accelerate your career and land better offers
          </p>
          <Button size="lg" className="cosmic-glow">
            Get Weekly Tips
          </Button>
        </div>
      </section>

      <main className="flex-1 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Featured Post */}
          <div className="mb-16">
            <Card className="glassmorphism border-primary/20 hover:border-primary/40 transition-all duration-300 cosmic-glow-subtle">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Badge className={`${featuredPost.tagColor} text-white`}>
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
                  <Card key={index} className="glassmorphism border-primary/20 hover:border-primary/40 transition-all duration-300 cosmic-glow-subtle group cursor-pointer">
                    <CardHeader className="space-y-4">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                        <div className="text-4xl opacity-20">📄</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={`${post.tagColor} text-white text-xs`}>
                          {post.tag}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
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
              <Card className="glassmorphism border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between hover:text-primary transition-colors cursor-pointer">
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
              <Card className="glassmorphism border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Stay Updated</CardTitle>
                  <CardDescription>
                    Get weekly career tips and job search strategies delivered to your inbox.
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
              <Card className="glassmorphism border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Popular Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div key={index} className="hover:text-primary transition-colors cursor-pointer">
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