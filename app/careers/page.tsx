"use client";

import { Building2, Code, Users, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const positions = [
  {
    title: "Senior Blockchain Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join us in building the future of real estate on blockchain. We're looking for an experienced blockchain developer to lead our smart contract development.",
    requirements: [
      "5+ years of experience in blockchain development",
      "Strong knowledge of Solidity and smart contracts",
      "Experience with real estate tokenization is a plus",
      "Excellent problem-solving skills"
    ],
    icon: Code
  },
  {
    title: "Real Estate Investment Analyst",
    department: "Investment",
    location: "Mumbai, India",
    type: "Full-time",
    description: "Help us identify and analyze premium real estate opportunities for our platform. You'll be working with our investment team to evaluate properties.",
    requirements: [
      "3+ years of real estate investment analysis experience",
      "Strong financial modeling skills",
      "Knowledge of Indian real estate market",
      "CFA or equivalent qualification preferred"
    ],
    icon: Building2
  },
  {
    title: "Customer Success Manager",
    department: "Operations",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Be the voice of RealX to our investors. You'll help our users navigate their investment journey and ensure their success on our platform.",
    requirements: [
      "3+ years in customer success or account management",
      "Experience in fintech or real estate",
      "Excellent communication skills",
      "Problem-solving mindset"
    ],
    icon: Users
  }
];

const perks = [
  {
    title: "Competitive Compensation",
    description: "Attractive salary package with equity options",
    icon: Briefcase
  },
  {
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours",
    icon: Building2
  },
  {
    title: "Learning & Growth",
    description: "Regular training and development opportunities",
    icon: Code
  },
  {
    title: "Health Benefits",
    description: "Comprehensive health insurance for you and family",
    icon: Users
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 glow-text">
              Join the Real Estate Revolution
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Help us democratize real estate investment and build the future of property ownership
            </p>
          </div>

          {/* Perks Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {perks.map((perk, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <perk.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{perk.title}</h3>
                <p className="text-muted-foreground text-sm">{perk.description}</p>
              </Card>
            ))}
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Open Positions</h2>
            <div className="grid gap-6">
              {positions.map((position, index) => (
                <Card
                  key={index}
                  className="p-6 bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <position.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-2 flex-wrap">
                        <h3 className="text-xl font-semibold">{position.title}</h3>
                        <div className="flex gap-2 text-sm">
                          <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                            {position.department}
                          </span>
                          <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                            {position.location}
                          </span>
                          <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                            {position.type}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{position.description}</p>
                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold">Requirements:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          {position.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <Button 
                        className="bg-primary text-primary-foreground hover:bg-primary/90 group shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-b from-card/40 via-card/30 to-card/20 backdrop-blur-sm rounded-lg p-12">
            <h2 className="text-2xl font-semibold mb-4">Don't see a perfect fit?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute to RealX's mission.
            </p>
            <Button 
              variant="outline"
              className="border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-colors"
            >
              Send Open Application
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}