import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const InvestorCTA = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              Investment Opportunity
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Partner With Us as We Build the{" "}
            <span className="text-primary">Next Generation of Platforms</span>
          </h2>

          <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
            We invite strategic investors, early-stage product partners, and enterprise collaborators to join us on this journey.
          </p>

          <Button size="lg" onClick={scrollToContact}>
            Connect With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestorCTA;
