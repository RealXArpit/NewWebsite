"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ChevronRight, Code, TrendingUp, Building2, ArrowUpRight } from "lucide-react";

const blogPosts = {
  tech: [
    {
      title: "Blockchain Revolution in Real Estate",
      excerpt: "How blockchain technology is transforming property ownership and transactions",
      date: "April 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800&h=400",
      category: "Technology"
    },
    {
      title: "Smart Contracts: The Future of Property Deals",
      excerpt: "Understanding how smart contracts are making property transactions more secure and efficient",
      date: "April 12, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?auto=format&fit=crop&q=80&w=800&h=400",
      category: "Technology"
    }
  ],
  market: [
    {
      title: "Commercial Real Estate Trends 2024",
      excerpt: "Analysis of emerging trends in commercial real estate investment",
      date: "April 14, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=400",
      category: "Market Analysis"
    },
    {
      title: "Real Estate Market Outlook",
      excerpt: "Expert predictions for the real estate market in the coming quarters",
      date: "April 11, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800&h=400",
      category: "Market Analysis"
    }
  ],
  realx: [
    {
      title: "RealX Crosses ₹100 Crore in Investments",
      excerpt: "A milestone achievement in democratizing real estate investment",
      date: "April 13, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800&h=400",
      category: "Company News"
    },
    {
      title: "New Features Launch: Enhanced Portfolio Analytics",
      excerpt: "Introducing advanced tools for better investment tracking and analysis",
      date: "April 10, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400",
      category: "Product Updates"
    }
  ]
};

const categories = [
  { id: "tech", label: "Whatsup with Tech", icon: Code },
  { id: "market", label: "Whatsup in the Market", icon: TrendingUp },
  { id: "realx", label: "More from RealX", icon: Building2 }
];

export default function Updates() {
  const [activeCategory, setActiveCategory] = useState("all");

  const allPosts = [
    ...blogPosts.tech,
    ...blogPosts.market,
    ...blogPosts.realx
  ];

  const displayPosts = activeCategory === "all" ? allPosts : blogPosts[activeCategory as keyof typeof blogPosts];

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 glow-text">
            Whatsup at RealX
          </h1>
          <p className="text-muted-foreground text-center mb-12 text-lg max-w-2xl mx-auto">
            Stay updated with the latest in real estate technology, market trends, and RealX news
          </p>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="relative overflow-hidden group">
              <div className="aspect-[21/9] relative">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000&h=800"
                  alt="Featured post"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <Code className="w-5 h-5" />
                      <span className="text-sm font-medium">Technology</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-foreground glow-text">
                      The Future of Real Estate: AI and Blockchain
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Exploring how artificial intelligence and blockchain technology are revolutionizing property investment and management.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>April 16, 2024</span>
                      <span>•</span>
                      <span>10 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-4 mb-12">
              <TabsTrigger 
                value="all"
                onClick={() => setActiveCategory("all")}
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                All Updates
              </TabsTrigger>
              {categories.map(category => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayPosts.map((post, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <Code className="w-4 h-4" />
                      <span className="text-sm font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}