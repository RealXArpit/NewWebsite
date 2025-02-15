"use client";

import { Building2, Coins, Lock, TrendingUp, Shield, Users, ArrowRight, Percent, FileCheck, Wallet, BarChart4, Search, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const advantages = [
  {
    title: "Digital Real Estate Investment",
    description: "All major investment assets are available in digital form. RealX brings Real Estate investing on par with other digital investments like stocks and commodities.",
    icon: Building2,
    highlight: "Completely digital investment process",
    link: "Learn about ownership modes"
  },
  {
    title: "Digital Asset Tokens",
    description: "Move over baseless Cryptos. Buy Real Estate Digital Assets that give you real ownership of properties and real benefits - real assets, real ownership, real gains.",
    icon: Lock,
    highlight: "Real ownership with blockchain security",
    link: "Property tokens"
  },
  {
    title: "Best Performing Asset Class",
    description: "High quality properties are more expensive and beyond reach for most of us. But together we can. Start investing with as low as ₹5,000 and become a co-owner in premium properties.",
    icon: TrendingUp,
    highlight: "Start with just ₹5,000",
    link: "Registered Co-Ownership"
  },
  {
    title: "Community Investment",
    description: "RealX opens doors for everyone to monetize their Real Estate holdings. Join a large community of investors and participate in premium property investments.",
    icon: Users,
    highlight: "Monetize your real estate holdings",
    link: "property@realx.in"
  },
  {
    title: "Digital India Vision",
    description: "Built with a vision to enhance Digital India and Financial Inclusion goals, RealX uses blockchain technology to create a transparent and efficient real estate market.",
    icon: Shield,
    highlight: "Government-aligned innovation",
    link: "See what the government has been saying"
  },
  {
    title: "Pioneer in Real Estate Tokens",
    description: "RealX is a pioneer in creating a framework for property tokens with direct ownership claims. Built with best practices and robust investor protection.",
    icon: Coins,
    highlight: "Industry-leading security",
    link: "Learn more about our framework"
  }
];

const investorBenefits = [
  {
    title: "Direct Co-Ownership",
    description: "Direct registered co-ownership in the property – What you see is what you get",
    icon: Building2,
    highlight: "Legal ownership rights"
  },
  {
    title: "Immutable Records",
    description: "Co-ownership records maintained on an immutable BlockChain Registry (PropChain)",
    icon: FileCheck,
    highlight: "Blockchain security"
  },
  {
    title: "Tax Efficient",
    description: "RealX is at least 25% more Tax Efficient than its peers",
    icon: Percent,
    highlight: "25% more tax efficient"
  },
  {
    title: "Zero Compliance",
    description: "No Compliance burden as we don't hold the asset in an SPV",
    icon: Shield,
    highlight: "Hassle-free investment"
  },
  {
    title: "Full Transparency",
    description: "We are fully transparent in our deals to the extent we know",
    icon: Search,
    highlight: "Complete visibility"
  },
  {
    title: "Completely Digital Process",
    description: "Hassle free entry, benefits management (passive) and exit",
    icon: Wallet,
    highlight: "End-to-end digital"
  },
  {
    title: "Multiple Asset Classes",
    description: "Carefully curated properties across Residential, Commercial, Warehousing, Co-living and others",
    icon: Building,
    highlight: "Diverse portfolio options"
  },
  {
    title: "Professional Diligence",
    description: "Property Due Diligence and Commercial Reports from established empanelled 3rd party organisations",
    icon: BarChart4,
    highlight: "Expert verification"
  }
];

const regulatoryFeatures = [
  {
    title: "Separation of Ownership",
    description: "RealX created a separate Registered Trust to carry on the fiduciary functions related to property ownership. The trustee (generally a corporate trustee), will need to ensure they always act as per the Trust clauses and not on what RealX says.",
    icon: Building2,
    highlight: "Clear separation of functions, commitments, control and interest"
  },
  {
    title: "Maker-Checker System",
    description: "No major action can be unilaterally taken by any entity, be the Trustee, Asset Manager or even RealX. Most actions require one entity to initiate and another to approve before reaching investors.",
    icon: Shield,
    highlight: "Dual verification for all key actions"
  },
  {
    title: "DAO Structure",
    description: "All investors in a property become part of a DAO (Distributed Autonomous Organisation) wherein they together can take all key decisions regarding their collective ownership.",
    icon: Users,
    highlight: "Collective decision-making power"
  }
];

const developerAdvantages = [
  {
    title: "Increase Sales by 2-3X",
    description: "Adopting fractional ownership provides options for your customers to invest with smaller amounts. This can improve your sales conversion by 2-3X and reduce your sales cycle by approximately 30%.",
    icon: TrendingUp,
    highlight: "Faster conversions, shorter sales cycles"
  },
  {
    title: "Easy Property Onboarding",
    description: "Post your property with us in minutes with our simple Property Onboarding process. Quick and efficient listing process.",
    icon: Building2,
    highlight: "Simple onboarding process"
  },
  {
    title: "Your Property, Your Strategy",
    description: "Complete freedom to design your sales and marketing strategy. RealX offers its platform for you to design your fractional offerings with lot of flexible options.",
    icon: Building,
    highlight: "Flexible sales options"
  }
];

export default function WhyRealX() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 glow-text">
              Why Choose RealX
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Revolutionizing real estate investment through digital innovation and blockchain technology
            </p>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="advantage" className="space-y-8">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-4">
              <TabsTrigger 
                value="advantage"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                Advantage RealX
              </TabsTrigger>
              <TabsTrigger 
                value="investors"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                For Investors
              </TabsTrigger>
              <TabsTrigger 
                value="regulations"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                Regulations
              </TabsTrigger>
              <TabsTrigger 
                value="developers"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                For Developers
              </TabsTrigger>
            </TabsList>

            {/* Advantage RealX Content */}
            <TabsContent value="advantage" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="p-8 bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 group neon-glow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <advantage.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {advantage.title}
                        </h3>
                        <p className="text-muted-foreground/90">
                          {advantage.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-primary">
                          <span className="font-medium">{advantage.highlight}</span>
                        </div>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-primary hover:text-primary/80 group/btn"
                        >
                          {advantage.link}
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* For Investors Content */}
            <TabsContent value="investors" className="space-y-12">
              {/* Key Statistics */}
              <div className="bg-primary/5 rounded-lg p-8 text-center space-y-4">
                <h2 className="text-3xl font-bold text-primary glow-text">
                  90% of all millionaires made fortune with real estate investment
                </h2>
                <p className="text-xl text-muted-foreground">
                  And this did not stop even during the pandemic
                </p>
              </div>

              {/* Market Position */}
              <div className="bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm rounded-lg p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Real estate continues to be the first choice for investment with 57% respondents favoring it over other assets like equities & mutual funds, FDs and gold. Interestingly, the stock market – despite being volatile in nature – is the second preferred choice with 24% votes.
                </p>
              </div>

              {/* RealX Vision */}
              <div className="bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm rounded-lg p-8 space-y-6">
                <h3 className="text-2xl font-semibold mb-4">
                  RealX was built singularly with investors in mind
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  RealX was built singularly with investors in mind World's first and only platform to offer direct beneficial rights as property tokens. It follows a next generation legal and commercial model for Fractional Ownership that brings in unique advantages for the new generation property investors.
                </p>
              </div>

              {/* Investor Benefits */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                  Advantage of RealX
                </h3>
                <p className="text-muted-foreground">
                  Besides being one of the most innovative FinTech company in its space globally, RealX has <span className="text-primary font-semibold">investor first</span> approach at its core
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {investorBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 group neon-glow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {benefit.title}
                          </h4>
                          <p className="text-muted-foreground/90 text-sm">
                            {benefit.description}
                          </p>
                          <div className="text-sm text-primary font-medium">
                            {benefit.highlight}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm rounded-lg p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Investment Journey?</h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of investors who are already building their real estate portfolio with RealX
                </p>
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 group shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all"
                >
                  Start Investing Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </TabsContent>

            {/* Regulations Content */}
            <TabsContent value="regulations" className="space-y-12">
              {/* Current Regulatory Status */}
              <div className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-primary mb-6 glow-text">Current Regulatory Status</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We have taken care in building RealX within the ambit of the extant laws available to us. Being built on base established laws of today, the RealX structure is therefore compliant with all applicable laws.
                  </p>
                  <p>
                    The legal construct of RealX is unique to it and has taken us a couple of years of work to get there. At the moment there isn't any regulatory framework that we can be licensed under. However, we would be keen to get under active regulatory supervision once a framework is created for us.
                  </p>
                </div>
              </div>

              {/* Why No Direct Regulation */}
              <div className="bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Why don't we fall under regulation?</h2>
                <p className="text-muted-foreground mb-6">
                  Simply put, RealX does not fall under any extant regulations (until new ones are made for us) because of three reasons:
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">1</span>
                    </div>
                    <p className="text-muted-foreground">
                      You and only you decide where to invest your money. There is no blind investing or pooling as a fund or trusting any fund manager here. Your money, your choice, your decision and its your property.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">2</span>
                    </div>
                    <p className="text-muted-foreground">
                      The RealX structure creates a direct co-ownership on the property. So the ownership (or rights for it), rest solely in your hands. Everything else is a support function - essentially helping you with property administration.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">3</span>
                    </div>
                    <p className="text-muted-foreground">
                      All key decisions regarding the ownership and tenancy are taken by you. Just like shareholders in a company, the co-owners of the property are free to keep their stake or sell it at their will as well as vote to decide on all important matters.
                    </p>
                  </div>
                </div>
              </div>

              {/* Best Features */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Some of the best features of how we do things at RealX</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regulatoryFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 group neon-glow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {feature.title}
                          </h4>
                          <p className="text-muted-foreground/90 text-sm">
                            {feature.description}
                          </p>
                          <div className="text-sm text-primary font-medium">
                            {feature.highlight}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Future Regulation */}
              <div className="bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm rounded-lg p-8 space-y-6">
                <h2 className="text-2xl font-semibold">Will we be regulated?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Regulation is a good thing. It creates more confidence for investors and protects the interests of investors as well as every other participant in the market.
                  </p>
                  <p>
                    We are at an early stage of evolution of this product and we believe prudent regulations will follow once the market gains traction enough. We would only be too happy to work with the regulators and governments to support proper regulations for the industry.
                  </p>
                </div>
                <Button 
                  variant="link" 
                  className="text-primary hover:text-primary/80 group"
                >
                  See what the government has been saying on Blockchain uses
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm rounded-lg p-8">
                <p className="text-muted-foreground">
                  RealX and its ecosystem, have simply created a standard framework (of rights, responsibilities and platform rules), for all of you to come together and invest. This helps you invest with confidence knowing very well that the standard framework ensures you know what to expect from other investors who may co-invest with you as well as sets the expected behaviour from everyone else involved in the process.
                </p>
                <p className="text-muted-foreground mt-4">
                  And we do our best in terms of curation of such properties, oversight of all functional players and intermediaries as well as create efficient mechanisms for fund transfer etc.
                </p>
              </div>
            </TabsContent>

            {/* For Developers Content */}
            <TabsContent value="developers" className="space-y-12">
              {/* Market Challenge Section */}
              <div className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-primary mb-6 glow-text">Need to find new sales channels</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    "In absolute terms, as of 2020, total unsold inventory across the top 7 cities of the country currently stands at Rs 6.7 trillion, in which Mumbai and Thane region accounts for 49 percent of total unsold inventory (by value)". After undergoing a 5% decline, unsold inventory in the top eight markets stood at 705,344 as on March 31, 2021. The western markets of MMR and Pune contribute the most to this unsold stock, with a combined share of 54%.
                  </p>
                </div>
              </div>

              {/* New Investors Section */}
              <div className="bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm rounded-lg p-8 space-y-6">
                <h2 className="text-2xl font-semibold">The New Investors</h2>
                <h3 className="text-xl text-primary font-medium">Creating a product to sell to the digital savvy investor</h3>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Pandemic highlighted the role of technology and digital sales however, real estate now needs to attract a new class of "retail investors", the kind that has taken over the equities markets with several billion dollars invested via online and app based money managers and services. The average Indian investor has become more digitally savvy over the past few years and is ready to interact online.
                  </p>
                  
                  <p>
                    Millions of young Indians have taken to stock trading during the pandemic, raising hopes that the appetite for equities in the world's second-most-populated nation is finally growing. Active investor accounts rose by a record 10.4 million in 2020, according to the data from the country's two main depositories.
                  </p>
                  
                  <p>
                    RealX provides a "mutual fund" type approach to real estate on a per property basis, without the need for a fund manager, albeit with better transparency and more control for the property investor. This allows hassle free, affordable way to hold prime real estate digitally. Out of total assets held by Indians 48% is real estate making it the most invested asset class, much higher than equities, gold, cash or bank deposits.
                  </p>
                </div>
              </div>

              {/* Key Message */}
              <div className="bg-primary/5 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-primary glow-text">
                  Fractional Ownership must be an integral part of every new age Developer's Sales strategy
                </h2>
              </div>

              {/* Advantages Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Advantage RealX</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {developerAdvantages.map((advantage, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 group neon-glow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <advantage.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {advantage.title}
                          </h4>
                          <p className="text-muted-foreground/90 text-sm">
                            {advantage.description}
                          </p>
                          <div className="text-sm text-primary font-medium">
                            {advantage.highlight}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm rounded-lg p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">Ready to List Your Property?</h3>
                <p className="text-muted-foreground mb-6">
                  Join RealX and transform your property sales strategy with fractional ownership
                </p>
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 group shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all"
                >
                  Sign up as Developer
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm rounded-lg p-12">
            <h2 className="text-2xl font-semibold mb-4">Ready to Start Investing?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of investors who are already building their real estate portfolio with RealX.
            </p>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all"
            >
              Create Your Account
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}