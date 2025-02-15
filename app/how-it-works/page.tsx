"use client";

import { useState } from "react";
import { Building2, Wallet, FileCheck, Landmark, Users, ArrowRight, Lock, Coins, BarChart4, DollarSign, ArrowUpRight, Repeat, CheckCircle2, Search, ExternalLink, Eye, Filter, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    title: "Choose Property",
    description: "Browse through our curated selection of premium properties and choose the one that matches your investment goals.",
    icon: Building2,
    details: "Users can browse through the range of properties listed on RealX post login. And decide to invest in the property of their choice."
  },
  {
    title: "Select Investment",
    description: "Choose your investment amount starting from ₹5,000 and complete the payment process.",
    icon: Wallet,
    details: "User can choose the amount they want to invest, mention the name of their nominee and then choose the payment mode for Property Tokens"
  },
  {
    title: "Complete Payment",
    description: "Make a secure payment using your preferred payment method.",
    icon: Landmark,
    details: "Complete payment for subscription. Similarly, other buyers also commit until full purchase amount is achieved"
  },
  {
    title: "Due Diligence",
    description: "Our team conducts thorough legal and technical due diligence.",
    icon: FileCheck,
    details: "Legal Due Diligence by third party law firms and property registry by the Custodian."
  },
  {
    title: "Token Minting",
    description: "Receive your property tokens representing your ownership share.",
    icon: Users,
    details: "Post registry co-ownership records are created and FRAX tokens are minted. Co-ownership is reflected in Customer accounts and tokens in respective Customer Wallets."
  }
];

const postInvestmentSteps = [
  {
    title: "Asset Manager Assignment",
    description: "Professional property manager is appointed",
    icon: Building2
  },
  {
    title: "Tenant Management",
    description: "Asset Manager finds and manages tenants",
    icon: Users
  },
  {
    title: "Rent Collection",
    description: "Rent deposited in escrow account",
    icon: Landmark
  },
  {
    title: "Distribution",
    description: "Proportionate rent share transferred to co-owners",
    icon: Wallet
  }
];

const ownershipModes = [
  {
    title: "Property Tokens",
    description: "A pioneering new product enabling investment in smaller amounts with enhanced control and transparency",
    features: [
      "Digital Asset",
      "Token Trust Acts as sole Co-Owner in Sale Deed",
      "Beneficial Co-Ownership right in property",
      "Transfer does not require registration",
      "Property based taxes applicable (Crypto tax does not apply)",
      "Stamp Duty not applicable (on Token sale)",
      "Easier to Sell/Transfer",
      "Token Holder KYC mandatory",
      "Can be held by Indians as well as foreigners"
    ],
    icon: Coins
  },
  {
    title: "Registered Co-Ownership",
    description: "Traditional model offering direct rights of co-ownership through registered property deeds",
    features: [
      "Not a digital Asset",
      "Co-Owners' name directly included in Sale deed",
      "Direct Co-Ownership right in property",
      "Transfer requires registration",
      "Property based taxes applicable",
      "Stamp duty applicable on sale",
      "Difficult to Sell/Transfer",
      "KYC mandatory for all RCO investors",
      "Only Indians can become co-owner by RCO"
    ],
    icon: Building2
  }
];

const propertyTokenAdvantages = [
  {
    title: "Immutability & Security",
    description: "Benefit from the natural advantages of distributed ledger technology with enhanced safety and security for investors",
    icon: Lock
  },
  {
    title: "Small Investment Amounts",
    description: "Invest in high-value properties with amounts as low as ₹5000, making premium real estate accessible to everyone",
    icon: Wallet
  },
  {
    title: "Enhanced Liquidity",
    description: "Property Tokens can be listed on Token Exchanges for better investment and liquidity options",
    icon: BarChart4
  }
];

const exitOptions = [
  {
    title: "Full Sale",
    description: "Complete property sale with proportionate distribution",
    details: "RealX will entertain bonafide proposals of full and outright purchase of property. Such deals will be duly negotiated deals presented to the co-owners for their consent by voting. If the negotiated deal is approved by the co-owners, then the deal is executed and all realizations from the sale are distributed proportionately to the respective co-owners.",
    icon: DollarSign,
    benefits: [
      "Collective decision making",
      "Proportionate distribution",
      "Professional deal negotiation",
      "Transparent voting process"
    ]
  },
  {
    title: "Token Exchange Listing",
    description: "Enhanced liquidity through token exchanges",
    details: "One of the core benefits of holding the property asset in the tokenized form is that they will enjoy much more liquidity options as Tokens than with Registered Co-Ownership. RealX will enable RealX Secondary Market for token holders to sell their tokens and Exit. The Tokens can also be traded on alternate exchanges, and this opens up a wide market for investors to liquidate (sell) and exit as and when they may want.",
    icon: ArrowUpRight,
    benefits: [
      "Multiple exchange listings",
      "Higher liquidity options",
      "Flexible exit timing",
      "Wider market access"
    ]
  },
  {
    title: "Fractional Sale",
    description: "Transfer of registered co-ownership",
    details: "If a registered Co-owner wants to sell to someone who would like to hold it as Registered Co-owner (and not property token), then RealX will facilitate such transfer of registered co-ownership to a new Co-owner. Alternately, RealX Secondary Market shall also enable for registered co-owners to exit to new investors who can hold it as property tokens",
    icon: Repeat,
    benefits: [
      "Flexible ownership transfer",
      "Multiple buyer options",
      "Seamless conversion process",
      "Professional facilitation"
    ]
  }
];

const portfolioSteps = [
  {
    title: "Visit any Algorand Explorer",
    description: "Go to any Algorand Explorer website/wallet that provides real-time insights into the Algorand blockchain network.",
    explorers: [
      { name: "Pera Wallet", url: "#" },
      { name: "Allo Explorer", url: "#" },
      { name: "DappFlow Explorer", url: "#" }
    ],
    note: "Just make sure you're on the Mainnet, and not Testnet or Betonet",
    icon: Search
  },
  {
    title: "Input your wallet address",
    description: "Upon reaching the homepage, identify the search bar, usually positioned towards the top of the page. This is where you will input your Algorand wallet address.",
    details: "Type in your unique Algorand wallet public address into the search bar.",
    note: "You can find your public address in the registration mail from RealX. Ensure there are no typos, as this could lead to incorrect or missing information.",
    icon: Wallet
  },
  {
    title: "Review your digital account information",
    description: "Following the search, Algorand Explorer will display various details about your account.",
    details: "This includes your asset portfolio, current balance of ALGO tokens, transaction history, and other related information such as transaction fees paid and received.",
    icon: FileText
  }
];

const portfolioFeatures = [
  {
    title: "View your assets details",
    description: "On Asset's dashboard page, you will see information like name of the asset, asset id, unit name, creation date, liquidity, creator's address etc.",
    checkpoints: [
      "Make sure you're on a Mainnet network",
      "Unit name should always be 'FRAX'",
      "Asset must have a working ASA Url"
    ],
    icon: Eye
  },
  {
    title: "Explore transaction history",
    description: "Delve deeper into your transaction history to see all incoming and outgoing transactions associated with your wallet address.",
    details: "This can provide valuable insights into your trading activity and interactions within the Algorand blockchain.",
    icon: BarChart4
  },
  {
    title: "Check transaction details",
    description: "Clicking on individual transactions will reveal more detailed information, including the timestamp, transaction ID, sender and receiver addresses, and the amount of ALGO transferred.",
    icon: FileText
  },
  {
    title: "Use filters for specific insights",
    description: "Utilize the available filters on the Algorand Explorer to narrow down your search. You can filter by transaction type, status, or time period to focus on specific aspects of your portfolio.",
    icon: Filter
  },
  {
    title: "Explore IPFS documents of the digital asset",
    description: "Click on the ASA URL to open IPFS gateway in the new tab. You'll get two important documents there: Index II of the real estate asset and Digitally signed legal note by eMudhra",
    note: "Both documents will be encrypted by a secure keyphrase for security reasons.",
    link: "What is IPFS",
    icon: ExternalLink
  },
  {
    title: "Check current holders of the asset",
    description: "Go back to asset's dashboard page and click on the 'holders' tab. All the accounts listed here are Co-owners with you in the particular digital asset. You can also cross check your own public address and number of FRAX in the table",
    icon: Users
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 glow-text">
            How It Works
          </h1>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Understand the simple process of investing in premium real estate through RealX
          </p>

          <Tabs defaultValue="process" className="mb-12">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-5 mb-12">
              <TabsTrigger 
                value="process"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                Process
              </TabsTrigger>
              <TabsTrigger 
                value="ownership"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                Ownership Modes
              </TabsTrigger>
              <TabsTrigger 
                value="exit"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                Exit
              </TabsTrigger>
              <TabsTrigger 
                value="comparison"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                RealX Vs Other Models
              </TabsTrigger>
              <TabsTrigger 
                value="portfolio"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                View Portfolio
              </TabsTrigger>
            </TabsList>

            <TabsContent value="process">
              <div className="space-y-16">
                {/* Investment Process */}
                <section>
                  <h2 className="text-2xl font-semibold mb-8">Investment Process</h2>
                  <div className="relative">
                    {/* Process Steps */}
                    <div className="grid gap-8">
                      {processSteps.map((step, index) => (
                        <div
                          key={index}
                          className={`relative flex items-start gap-6 p-8 bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] ${
                            activeStep === index ? 'ring-2 ring-primary/50' : ''
                          }`}
                          onClick={() => setActiveStep(index)}
                        >
                          <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                            <step.icon className="w-8 h-8 text-primary" />
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-primary text-sm font-medium">Step {index + 1}</span>
                              <ArrowRight className="w-4 h-4 text-primary/50" />
                              <h3 className="text-xl font-semibold text-foreground">
                                {step.title}
                              </h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                              {step.description}
                            </p>
                            <p className="text-sm text-muted-foreground/80">
                              {step.details}
                            </p>
                          </div>

                          {/* Neon glow effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/2 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-primary/5" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Post Investment */}
                <section>
                  <h2 className="text-2xl font-semibold mb-8">Post Investment</h2>
                  <div className="bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm rounded-lg p-8">
                    <p className="text-muted-foreground mb-8">
                      Post-investment, professional Property Managers are assigned to the property, with the consent of the Co-owners, who manage the day-to-day operations of the property. All rents are collected and processed through RealX, and all co-owners and Token holders can simply enjoy the proportionate share of rental income (after suitable deductions).
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {postInvestmentSteps.map((step, index) => (
                        <div
                          key={index}
                          className="p-6 bg-card/20 rounded-lg hover:bg-card/30 transition-colors"
                        >
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <step.icon className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="font-semibold mb-2">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </TabsContent>

            {/* Add other TabsContent components for ownership, exit, comparison, and portfolio */}
          </Tabs>
        </div>
      </div>
    </div>
  );
}