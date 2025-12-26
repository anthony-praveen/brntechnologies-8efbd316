import { CheckCircle, Clock, Lock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const platforms = [
  {
    status: "live",
    statusLabel: "Live Product",
    statusColor: "bg-[#FF7033]/10 text-[#FF7033] border-[#FF7033]/20",
    cardStyle: "bg-gradient-to-br from-[#F8F7FF] to-white border-[#FF7033]/30 hover:border-[#FF7033]/60 hover:shadow-[0_10px_40px_-10px_rgba(255,112,51,0.3)]",
    icon: CheckCircle,
    iconColor: "text-[#FF7033]",
    name: "Service Geni",
    tagline: "Proof of Execution",
    description:
      "Service management platform built and operated by BRN Technologies. Demonstrates full product lifecycle ownership from idea to build to launch to operate.",
    link: "https://servicegeni.in",
    ctaText: "View Platform",
    ctaStyle: "bg-[#FF7033] hover:bg-[#E5632E] text-white border-none",
  },
  {
    status: "near-launch",
    statusLabel: "Near-Launch",
    statusColor: "bg-[#38b2ac]/10 text-[#38b2ac] border-[#38b2ac]/20",
    cardStyle: "bg-gradient-to-br from-[#f0fdfa] to-white border-[#38b2ac]/30 hover:border-[#38b2ac]/60 hover:shadow-[0_10px_40px_-10px_rgba(56,178,172,0.3)]",
    icon: Clock,
    iconColor: "text-[#38b2ac]",
    name: "Home Care Grid",
    tagline: "Healthcare & Trust Economy",
    description:
      "A digital platform connecting families with trusted caregivers, designed to simplify discovery, verification, and engagement in the home-care ecosystem.",
    link: "https://lucent-pothos-17fb1e.netlify.app/auth",
    ctaText: "Explore Platform",
    ctaStyle: "bg-[#38b2ac] hover:bg-[#319795] text-white border-none",
  },
  {
    status: "stealth",
    statusLabel: "Stealth Mode",
    statusColor: "bg-[#FFD700]/10 text-[#B8860B] border-[#FFD700]/30",
    cardStyle: "bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border-[#FFD700]/40 hover:border-[#FFD700]/70 hover:shadow-[0_10px_40px_-10px_rgba(255,215,0,0.35)]",
    icon: Lock,
    iconColor: "text-[#FFD700]",
    name: "Revolutionary Marketing Platform",
    tagline: "Next-Generation Product",
    taglineColor: "text-[#FFD700]",
    descriptionColor: "text-gray-400",
    titleColor: "text-white",
    description:
      "A proprietary marketing solution under development, designed to redefine how businesses approach growth, intelligence, and execution. Platform-first, data-driven architecture built for scale.",
    link: null,
    ctaText: "Connect for Details",
    ctaStyle: "bg-gradient-to-r from-[#B8860B] to-[#FFD700] hover:from-[#DAA520] hover:to-[#FFD700] text-black border-none font-semibold",
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
              className={`rounded-xl border p-8 transition-all duration-300 flex flex-col ${
                platform.cardStyle || "bg-background border-border hover:border-primary/30"
              }`}
            >
              <Badge
                variant="outline"
                className={`w-fit mb-4 ${platform.statusColor}`}
              >
                <platform.icon className={`w-3 h-3 mr-1 ${platform.iconColor || ""}`} />
                {platform.statusLabel}
              </Badge>

              <h3 className={`text-xl font-bold mb-2 ${platform.titleColor || "text-foreground"}`}>
                {platform.name}
              </h3>
              <p className={`font-medium text-sm mb-4 ${platform.taglineColor || platform.iconColor || "text-primary"}`}>
                {platform.tagline}
              </p>
              <p className={`text-sm leading-relaxed flex-grow mb-6 ${platform.descriptionColor || "text-muted-foreground"}`}>
                {platform.description}
              </p>

              {platform.link ? (
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button 
                    variant="outline" 
                    className={`gap-2 w-full ${platform.ctaStyle || ""}`}
                  >
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
