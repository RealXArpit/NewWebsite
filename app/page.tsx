"use client";

import { Building2, ChartBar, Lock, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useMemo, useState, useEffect, useRef } from "react";

const partners = [
  {
    name: "IREF",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    name: "Algorand",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    name: "eMudhra",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    name: "Seracle",
    logo: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    name: "Amicorp",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    name: "FundBezzie",
    logo: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=300&h=200",
  }
];

const newsLogos = [
  { 
    name: "TechCrunch",
    logo: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=800&h=400",
    url: "https://techcrunch.com"
  },
  { 
    name: "Forbes",
    logo: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=800&h=400",
    url: "https://forbes.com"
  },
  { 
    name: "Bloomberg",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=400",
    url: "https://bloomberg.com"
  },
  { 
    name: "Reuters",
    logo: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800&h=400",
    url: "https://reuters.com"
  },
  { 
    name: "CNBC",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=400",
    url: "https://cnbc.com"
  },
  { 
    name: "Financial Times",
    logo: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800&h=400",
    url: "https://ft.com"
  }
];

const videos = [
  {
    id: 0,
    title: "What is RealX",
    description: "Learn how RealX is revolutionizing real estate investment through fractional ownership.",
    thumbnail: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800&h=450",
  },
  {
    id: 1,
    title: "How to buy property on RealX",
    description: "A step-by-step guide to investing in premium properties through our platform.",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800&h=450",
  },
  {
    id: 2,
    title: "Investing through Property Tokens",
    description: "Understand how property tokens work and their benefits for investors.",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=450",
  },
];

const fallbackImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=450";

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [videoSectionLoaded, setVideoSectionLoaded] = useState(false);
  const [videoThumbnailsLoaded, setVideoThumbnailsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [partnersLoaded, setPartnersLoaded] = useState(false);
  const [newsLoaded, setNewsLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const sliderRef = useRef<HTMLDivElement>(null);
  const partnersSliderRef = useRef<HTMLDivElement>(null);

  const buildingFractions = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => ({
      id: i,
      delay: (i % 10) + (Math.floor(i / 10) * 0.1),
      xOffset: ((i % 10) - 4.5) / 4.5,
      yOffset: ((Math.floor(i / 10) - 4.5) / 4.5)
    }));
  }, []);

  const handleVideoChange = (index: number) => {
    if (index === activeVideo || isAnimating) return;
    setIsAnimating(true);
    setActiveVideo(index);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleImageLoad = (url: string) => {
    setLoadedImages(prev => new Set([...prev, url]));
  };

  const handleImageError = (url: string) => {
    console.warn('Image failed to load:', url);
    const imgElements = document.querySelectorAll(`img[src="${url}"]`);
    imgElements.forEach(img => {
      (img as HTMLImageElement).src = fallbackImage;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoSectionLoaded(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPartnersLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewsLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const preloadImages = async () => {
    const loadImage = (url: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          handleImageLoad(url);
          resolve(url);
        };
        img.onerror = () => {
          handleImageError(url);
          resolve(fallbackImage);
        };
        img.src = url;
      });
    };

    const imageUrls = [
      ...partners.map(partner => partner.logo),
      ...newsLogos.map(news => news.logo),
      ...videos.map(video => video.thumbnail)
    ];

    try {
      await Promise.all(imageUrls.map(loadImage));
      setImagesLoaded(true);
      setVideoThumbnailsLoaded(true);
    } catch (error) {
      console.warn('Some images failed to load:', error);
      setImagesLoaded(true);
      setVideoThumbnailsLoaded(true);
    }
  };

  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-shine" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="max-w-xl animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
                Invest in Premium Real Estate
                <span className="text-primary animate-pulse block mt-2"> Fractionally</span>
              </h1>
              <div className="relative inline-block mb-6">
                <p className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide">
                  Start as low as{" "}
                  <span className="relative inline-flex items-center font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
                    <span className="mr-1 text-2xl sm:text-3xl md:text-4xl">₹</span>
                    <span className="text-3xl sm:text-4xl md:text-5xl">5,000</span>
                  </span>
                </p>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 blur-lg opacity-50 -z-10" />
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                Access institutional-grade real estate investments. 
                Own a piece of premium properties and earn passive income.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all">
                  Start Investing
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-colors">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Building Visualization */}
            <div className="flex justify-center items-center">
              <div className="building-container w-full aspect-[4/5] max-w-[400px] mx-auto shadow-2xl">
                <div className="building-overlay" />
                <div className="building-grid">
                  {buildingFractions.map((fraction) => (
                    <div
                      key={fraction.id}
                      className="building-fraction"
                      style={{
                        '--delay': fraction.delay,
                        '--x-offset': fraction.xOffset,
                        '--y-offset': fraction.yOffset
                      } as any}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Learn About RealX</h2>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Watch our comprehensive guides to understand how RealX works and start your investment journey.
            </p>

            {!videoSectionLoaded ? (
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="space-y-4 lg:col-span-1">
                  {Array(3).fill(0).map((_, index) => (
                    <div
                      key={index}
                      className="w-full p-4 rounded-xl bg-white/50 flex gap-4 items-center"
                    >
                      <Skeleton className="w-24 h-[3.5rem] rounded-lg flex-shrink-0" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-3 w-full" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-2">
                  <div className="aspect-video rounded-2xl overflow-hidden">
                    <Skeleton className="w-full h-full" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8 items-start animate-fade-in">
                <div className="space-y-4 lg:col-span-1">
                  {videos.map((video, index) => (
                    <button
                      key={video.id}
                      onClick={() => handleVideoChange(index)}
                      className={`video-thumbnail-button w-full p-4 rounded-xl flex gap-4 items-center transition-all ${
                        activeVideo === index
                          ? "active bg-primary/10 shadow-lg"
                          : "bg-white/50 hover:bg-white hover:shadow-md"
                      }`}
                      disabled={isAnimating || !videoThumbnailsLoaded}
                    >
                      <div className="relative w-24 aspect-video rounded-lg overflow-hidden flex-shrink-0">
                        {!videoThumbnailsLoaded ? (
                          <Skeleton className="w-full h-full" />
                        ) : (
                          <>
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                            {activeVideo === index && (
                              <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                                <Play className="w-4 h-4 text-white" />
                              </div>
                            )}
                          </>
                        )}
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className={`font-semibold mb-1 ${
                          activeVideo === index ? "text-primary" : "text-foreground"
                        }`}>
                          {video.title}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="lg:col-span-2 video-container">
                  {videos.map((video, index) => (
                    <div
                      key={video.id}
                      className={`video-slide rounded-2xl overflow-hidden ${
                        activeVideo === index ? 'active' : ''
                      } ${isAnimating ? (activeVideo === index ? 'enter' : 'exit') : ''}`}
                    >
                      {!videoThumbnailsLoaded ? (
                        <Skeleton className="w-full h-full" />
                      ) : (
                        <div className="relative aspect-video group">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <button className="video-play-button w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center neon-glow">
                              <Play className="w-8 h-8 ml-1" />
                            </button>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                            <h3 className="text-2xl font-semibold text-white mb-3 glow-text">
                              {video.title}
                            </h3>
                            <p className="text-lg text-white/80">
                              {video.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">RealX in News</h2>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Leading publications covering our journey in revolutionizing real estate investment
            </p>

            <div className="relative">
              {!newsLoaded ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {Array(8).fill(0).map((_, index) => (
                    <div key={index} className="flex flex-col items-center space-y-4">
                      <Skeleton className="w-[280px] h-[380px] rounded-lg" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="news-slider-container">
                  <div className="slider-edge-left" />
                  <div className="slider-edge-right" />
                  <div className="news-slider-track">
                    {[...newsLogos, ...newsLogos].map((logo, index) => (
                      <a
                        key={`${logo.name}-${index}`}
                        href={logo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="magazine-cover group"
                      >
                        <div className="magazine-cover-inner">
                          <img
                            src={logo.logo}
                            alt={`${logo.name} Magazine Cover`}
                            className="magazine-image"
                            onError={() => handleImageError(logo.logo)}
                          />
                          <div className="magazine-overlay" />
                          <div className="magazine-content">
                            <div className="magazine-title">{logo.name}</div>
                            <div className="magazine-date">
                              {new Date().toLocaleDateString('en-US', {
                                month: 'long',
                                year: 'numeric'
                              })}
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
        <div className="absolute inset-0 geometric-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground glow-text">
            Why Choose RealX
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Low Entry Barrier",
                description: "Start investing in High Performing Real Estate properties at prices as low as ₹5,000",
                delay: "stagger-delay-1",
                highlight: "₹5,000"
              },
              {
                icon: Lock,
                title: "No Special Purpose Vehicle",
                description: "Investors will get Legally enforceable Direct Co-ownership rights of the properties, without any Companies in between.",
                delay: "stagger-delay-2",
                highlight: "Direct Co-ownership"
              },
              {
                icon: ChartBar,
                title: "Secured with Blockchain",
                description: "With Property Tokens, get the security of Blockchain and liquidity in Real Estate like never before. And with Registered Co-ownership, your name will be mentioned on the Sale Deed of the Property.",
                delay: "stagger-delay-3",
                highlight: "Property Tokens"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className={`border-none bg-card/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105 ${feature.delay} group overflow-hidden neon-glow`}
              >
                <CardContent className="pt-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500 ease-out" />
                  
                  <div className="rounded-full bg-secondary/50 w-12 h-12 flex items-center justify-center mb-6 animate-float group-hover:bg-primary/20 transition-colors relative">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 relative text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground/90 relative">
                    {feature.description.split(feature.highlight).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="font-semibold text-primary glow-text">
                            {feature.highlight}
                          </span>
                        )}
                      </span>
                    ))}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary/50 to-accent w-0 group-hover:w-full transition-all duration-500 ease-out" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-secondary via-accent to-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "$100M+", label: "Assets Under Management" },
              { value: "15K+", label: "Active Investors" },
              { value: "50+", label: "Premium Properties" },
              { value: "12%", label: "Avg. Annual Returns" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in hover:scale-105 transition-transform" style={{ animationDelay: `${index * 0.1}s` }}>
                <h4 className="text-4xl font-bold mb-2 text-primary">{stat.value}</h4>
                <p className="text-secondary-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-shine">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Join thousands of investors who are already building their real estate portfolio with RealX.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all">
            Create Your Account
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
}