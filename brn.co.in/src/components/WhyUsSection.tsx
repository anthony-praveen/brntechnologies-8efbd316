import { Lightbulb, Layers, Dna, User, Handshake, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Product-First Mindset",
    description: "We think like founders, not just developers",
  },
  {
    icon: Layers,
    title: "Multi-Domain Platforms",
    description: "Service, Healthcare, Marketing verticals",
  },
  {
    icon: Dna,
    title: "Strong Engineering DNA",
    description: "Quality assurance is in our core",
  },
  {
    icon: User,
    title: "Founder-Led Execution",
    description: "Direct accountability at every stage",
  },
  {
    icon: Handshake,
    title: "Transparent Engagement",
    description: "Milestone-based, trust-driven model",
  },
  {
    icon: TrendingUp,
    title: "Services → IP Evolution",
    description: "Clear path from consulting to products",
  },
];

const industries = [
  "Service Businesses",
  "Healthcare & Home Care",
  "Automotive Services",
  "Hotels & Resorts",
  "Travel & Hospitality",
  "SaaS & Enterprise",
];

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Why BRN */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Advantage
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Why BRN Technologies
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">
                {reason.title}
              </h3>
              <p className="text-xs text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold text-foreground mb-8">
            Industries & Use Cases
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
