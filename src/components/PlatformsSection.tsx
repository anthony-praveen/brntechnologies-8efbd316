import { CheckCircle, Clock, Lock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const platforms = [
  {
    status: "live",
    statusLabel: "Live Product",
    statusColor: "bg-green-500/10 text-green-600 border-green-500/20",
    icon: CheckCircle,
    name: "Service Geni",
    tagline: "Proof of Execution",
    description:
      "Service management platform built and operated by BRN Technologies. Demonstrates full product lifecycle ownership—from idea to build to launch to operate.",
    link: "https://servicegeni.in",
    ctaText: "View Platform",
  },
  {
    status: "near-launch",
    statusLabel: "Near-Launch",
    statusColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    icon: Clock,
    name: "Home Care Grid",
    tagline: "Healthcare & Trust Economy",
    description:
      "A digital platform connecting families with trusted caregivers, designed to simplify discovery, verification, and engagement in the home-care ecosystem.",
    link: "https://lucent-pothos-17fb1e.netlify.app/auth",
    ctaText: "Explore Platform",
  },
  {
    status: "stealth",
    statusLabel: "Stealth Mode",
    statusColor: "bg-primary/10 text-primary border-primary/20",
    icon: Lock,
    name: "Revolutionary Marketing Platform",
    tagline: "Next-Generation Product",
    description:
      "A proprietary marketing solution under development, designed to redefine how businesses approach growth, intelligence, and execution. Platform-first, data-driven architecture built for scale.",
    link: null,
    ctaText: "Connect for Details",
  },
];

const PlatformsSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="platforms" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Platforms & Products
          </h2>
          <p className="text-muted-foreground text-lg">
            From live products to stealth innovations—a clear evolution from services to IP-led platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-background rounded-xl border border-border p-8 hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <Badge
                variant="outline"
                className={`w-fit mb-4 ${platform.statusColor}`}
              >
                <platform.icon className="w-3 h-3 mr-1" />
                {platform.statusLabel}
              </Badge>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {platform.name}
              </h3>
              <p className="text-primary font-medium text-sm mb-4">
                {platform.tagline}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
                {platform.description}
              </p>

              {platform.link ? (
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="outline" className="gap-2 w-full">
                    {platform.ctaText}
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              ) : (
                <Button onClick={scrollToContact} className="gap-2">
                  {platform.ctaText}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Investor Callout */}
        <div className="mt-16 max-w-2xl mx-auto text-center p-8 rounded-xl bg-primary/5 border border-primary/20">
          <Lock className="w-8 h-8 text-primary mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-foreground mb-2">
            Investor Interest
          </h4>
          <p className="text-muted-foreground mb-4">
            Strategic investors are invited to connect with us to learn more about our stealth products and pipeline.
          </p>
          <Button onClick={scrollToContact} size="sm">
            Request Access
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
