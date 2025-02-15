"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 glow-text">About RealX</h1>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Transforming real estate investment through technology and innovation
          </p>

          <div className="space-y-12">
            {/* Mission Section */}
            <section className="bg-card/30 backdrop-blur-sm rounded-lg p-8 neon-glow">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
              <p className="text-muted-foreground/90 text-lg leading-relaxed">
                At RealX, we're on a mission to democratize real estate investment. We believe everyone should have the opportunity to invest in premium properties, regardless of their financial capacity. Through innovative technology and fractional ownership, we're making this vision a reality.
              </p>
            </section>

            {/* Vision Section */}
            <section className="bg-card/30 backdrop-blur-sm rounded-lg p-8 neon-glow">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h2>
              <p className="text-muted-foreground/90 text-lg leading-relaxed">
                We envision a future where real estate investment is accessible, transparent, and efficient. By leveraging blockchain technology and smart contracts, we're creating a platform that provides investors with security, liquidity, and unprecedented access to premium real estate opportunities.
              </p>
            </section>

            {/* Values Section */}
            <section className="bg-card/30 backdrop-blur-sm rounded-lg p-8 neon-glow">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Transparency", desc: "Clear, honest communication in all our operations" },
                  { title: "Innovation", desc: "Continuously improving through technology" },
                  { title: "Security", desc: "Protecting our investors' interests above all" },
                  { title: "Community", desc: "Building a strong network of informed investors" }
                ].map((value, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground/90">{value.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all"
              >
                Join Our Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}