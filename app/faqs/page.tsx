"use client";

import { useState } from "react";
import { Search, ExternalLink, TrendingUp, Building2, Landmark } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "General Questions",
    questions: [
      {
        q: "What is Fractional Ownership?",
        a: "Fractional ownership allows multiple investors to become co-owners in property. Through RealX, you can purchase tokens that represent ownership in specific properties, receiving legal co-ownership rights and potential returns from both property appreciation and rental income."
      },
      {
        q: "Who will do the due diligence of the property?",
        a: "RealX conducts comprehensive due diligence on all properties, covering legal, technical, and financial aspects to ensure transparency and security for investors."
      },
      {
        q: "Will I get to view the due diligence report?",
        a: "Yes, detailed due diligence reports are available for all properties listed on RealX, allowing you to make informed investment decisions."
      },
      {
        q: "Can foreign nationals become co-owners in property?",
        a: "Yes, foreign nationals can invest and become co-owners in properties through RealX, subject to applicable regulations."
      }
    ]
  },
  {
    title: "Investment Process",
    questions: [
      {
        q: "What is the minimum investment required?",
        a: "You can start investing in premium properties with as little as ₹5,000, making real estate investment accessible to a wider range of investors."
      },
      {
        q: "Will my name reflect when the property is registered?",
        a: "Yes, your name will be included on the Sale Deed as a co-owner of the property, ensuring legal recognition of your ownership."
      },
      {
        q: "How will the property be registered?",
        a: "Properties are registered with all co-owners' names on the Sale Deed, providing legal ownership rights to all investors."
      }
    ]
  },
  {
    title: "Returns & Payments",
    questions: [
      {
        q: "How do I earn returns?",
        a: "You can earn returns through two channels: property appreciation when the property value increases, and regular rental income from leased properties. Returns are distributed proportionally based on your ownership share."
      },
      {
        q: "Will the rent be taxable?",
        a: "Yes, rental income is taxable as per applicable tax laws. We recommend consulting with your tax advisor for specific guidance."
      },
      {
        q: "Where will I see my holdings?",
        a: "You can view your complete portfolio, including all property holdings and their performance, in your RealX dashboard."
      }
    ]
  },
  {
    title: "Property Tokens",
    questions: [
      {
        q: "What are Property Tokens?",
        a: "Property Tokens are digital representations of your ownership share in a property, secured by blockchain technology. Each token represents a specific ownership percentage and comes with legal co-ownership rights."
      },
      {
        q: "Can I purchase the Tokens with other Cryptos like ETH or Bitcoin?",
        a: "No, property tokens can only be purchased using Indian Rupees through approved payment methods like UPI, net banking, or other standard payment options."
      },
      {
        q: "Do the Property Tokens carry any legal rights?",
        a: "Yes, Property Tokens are backed by legal documentation and registered co-ownership rights in the property, providing you with real ownership benefits and protections."
      }
    ]
  }
];

const marketUpdates = {
  government: [
    {
      title: "India intends to facilitate blockchain tech, not hurt it: FM",
      link: "#",
      icon: Landmark,
    },
    {
      title: "India aims at developing tech-driven regulatory framework for cryptocurrency: FM Nirmala Sitharaman",
      link: "#",
      icon: TrendingUp,
    },
    {
      title: "FM Sitharaman flags anonimity as 'inherent risk' in blockchain tech",
      link: "#",
      icon: Landmark,
    },
    {
      title: "RealEstate 3.0 : The ownership revolution",
      link: "#",
      icon: Building2,
    }
  ]
};

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter questions based on search query
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 glow-text">
            Knowledge Base
          </h1>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Stay informed about RealX, market updates, and fractional real estate investment
          </p>

          <Tabs defaultValue="faqs" className="mb-12">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-12">
              <TabsTrigger 
                value="faqs"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                FAQs
              </TabsTrigger>
              <TabsTrigger 
                value="market"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                Market Update
              </TabsTrigger>
            </TabsList>

            <TabsContent value="faqs">
              {/* Search Bar */}
              <div className="relative mb-12 max-w-xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search questions..."
                    className="pl-10 pr-4 py-6 w-full bg-card/30 backdrop-blur-sm border-primary/20 focus:border-primary/40 transition-colors rounded-xl"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {faqCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(
                      activeCategory === category.title ? null : category.title
                    )}
                    className={`p-6 text-left bg-gradient-to-b from-card/40 to-card/20 backdrop-blur-sm rounded-lg transition-all hover:scale-[1.02] hover:-translate-y-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] ${
                      activeCategory === category.title ? 'ring-2 ring-primary/50' : ''
                    }`}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground/90 text-sm">
                      {category.questions.length} questions
                    </p>
                  </button>
                ))}
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-8">
                {filteredCategories.map((category, index) => (
                  <div
                    key={index}
                    className={`${
                      activeCategory && activeCategory !== category.title
                        ? 'hidden'
                        : ''
                    }`}
                  >
                    <h2 className="text-2xl font-semibold mb-6 text-foreground">
                      {category.title}
                    </h2>
                    <Accordion type="single" collapsible className="space-y-6">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem
                          key={faqIndex}
                          value={`${category.title}-${faqIndex}`}
                          className="bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm rounded-lg px-6 overflow-hidden group border-0 shadow-[0_4px_20px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-0.5"
                        >
                          <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors py-4 group-hover:text-primary border-0">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground/90 pb-4 border-0">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/10 pointer-events-none" />
                              <div className="relative z-10">
                                {faq.a}
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>

              {/* No Results Message */}
              {filteredCategories.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No questions found matching your search. Try different keywords or browse categories above.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="market">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <Landmark className="w-6 h-6 text-primary" />
                    Government updates
                  </h2>
                  <div className="grid gap-6">
                    {marketUpdates.government.map((update, index) => (
                      <a
                        key={index}
                        href={update.link}
                        className="group relative flex items-start gap-4 p-6 bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)]"
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <update.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                            {update.title}
                          </h3>
                        </div>
                        <ExternalLink className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                        
                        {/* Neon glow effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/2 to-transparent" />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-primary/5" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}