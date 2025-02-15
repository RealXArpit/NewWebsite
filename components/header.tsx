"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X, ChevronDown, Building2, Users } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DistributorSignupDialog } from "@/components/distributor-signup-dialog";
import { PartnerSignupDialog } from "@/components/partner-signup-dialog";
import { DeveloperSignupDialog } from "@/components/developer-signup-dialog";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  const navItems = [
    { label: "FAQs", href: "/faqs" },
    { 
      label: "Explore RealX",
      items: [
        { label: "How it Works", href: "/how-it-works" },
        { label: "Why RealX", href: "/why-realx" },
        { label: "About Us", href: "/about" },
      ]
    },
    { 
      label: "Work with us",
      items: [
        { 
          label: "Sign up as a Distributor", 
          component: DistributorSignupDialog,
          icon: Building2,
          description: "Join our network of property distributors"
        },
        { 
          label: "Sign up as a Channel Partner", 
          component: PartnerSignupDialog,
          icon: Users,
          description: "Become a RealX channel partner"
        },
        { 
          label: "Sign up as a Developer", 
          component: DeveloperSignupDialog,
          icon: Building2,
          description: "List your properties on RealX"
        }
      ]
    },
    { label: "Whatsup?", href: "/updates" },
  ];

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center space-x-2 text-2xl font-bold text-primary hover:scale-105 transition-transform"
          >
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent glow-text">
              RealX
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.items ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-md transition-colors hover:bg-primary/5 relative group inline-flex items-center gap-1">
                    {item.label}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="center"
                    className="w-[280px] animate-in fade-in-80 zoom-in-95 bg-card/70 backdrop-blur-md border-primary/10"
                  >
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem.label} asChild>
                        {subItem.component ? (
                          <subItem.component />
                        ) : (
                          <a
                            href={subItem.href}
                            className="flex items-start px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 cursor-pointer transition-colors relative group"
                          >
                            {subItem.icon && (
                              <subItem.icon className="w-5 h-5 mr-3 mt-0.5 text-primary/60 group-hover:text-primary transition-colors" />
                            )}
                            <div>
                              <div className="font-medium">{subItem.label}</div>
                              {subItem.description && (
                                <div className="text-xs text-muted-foreground mt-0.5">
                                  {subItem.description}
                                </div>
                              )}
                            </div>
                            <span className="absolute left-0 w-0.5 h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                          </a>
                        )}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-md transition-colors hover:bg-primary/5 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              )
            ))}

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="ml-2 flex items-center gap-2 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {languages.find(lang => lang.code === currentLang)?.name}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[140px] animate-in fade-in-80 zoom-in-95">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className="cursor-pointer hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login/Sign up Button */}
            <Button 
              className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-lg hover:scale-105 transition-all neon-glow"
            >
              Login / Sign up
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-primary/5 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-in slide-in-from-top-5">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                item.items ? (
                  <div key={item.label} className="space-y-1">
                    <div className="px-4 py-2 text-sm font-medium text-foreground/80">
                      {item.label}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.items.map((subItem) => (
                        subItem.component ? (
                          <subItem.component key={subItem.label} />
                        ) : (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="flex items-center px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                          >
                            {subItem.icon && (
                              <subItem.icon className="w-5 h-5 mr-3 text-primary/60" />
                            )}
                            <div>
                              <div>{subItem.label}</div>
                              {subItem.description && (
                                <div className="text-xs text-muted-foreground mt-0.5">
                                  {subItem.description}
                                </div>
                              )}
                            </div>
                          </a>
                        )
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                  >
                    {item.label}
                  </a>
                )
              ))}
              
              {/* Language Selector Mobile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-start mt-2 hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    {languages.find(lang => lang.code === currentLang)?.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[140px] animate-in fade-in-80 zoom-in-95">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setCurrentLang(lang.code)}
                      className="cursor-pointer hover:bg-primary/5 hover:text-primary transition-colors"
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Login/Sign up Button Mobile */}
              <Button 
                className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-lg transition-all neon-glow"
              >
                Login / Sign up
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}