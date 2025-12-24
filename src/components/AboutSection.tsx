import { Code2, Cloud, TestTube, Lightbulb, Linkedin } from "lucide-react";
import founderPortrait from "@/assets/founder-portrait.jpg";

const capabilities = [
  {
    icon: Code2,
    title: "Custom Software Platforms",
    description: "Enterprise-grade solutions built for scale",
  },
  {
    icon: Cloud,
    title: "Cloud-Hosted Applications",
    description: "Secure, scalable infrastructure",
  },
  {
    icon: TestTube,
    title: "Quality Engineering",
    description: "Automation, performance & reliability",
  },
  {
    icon: Lightbulb,
    title: "Product Incubation",
    description: "IP development & innovation",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Company Overview */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Technology Company with a Vision
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            BRN Technologies is a Chennai-based technology company combining deep domain understanding, engineering discipline, and structured delivery—enabling both client success and venture-scale product creation.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Leadership Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Leadership
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-4 mb-4">
                Maria Zita Anthony
              </h3>
              <div className="flex items-center gap-3 mb-2">
                <p className="text-primary font-medium">Founder & CEO</p>
                <a
                  href="https://www.linkedin.com/in/maria-zita-anthony/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A66C2] hover:text-[#004182] transition-colors"
                  aria-label="Maria Zita Anthony on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <a
                href="mailto:zita@brn.co.in"
                className="text-muted-foreground hover:text-primary transition-colors text-sm mb-4 inline-block"
              >
                zita@brn.co.in
              </a>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Entrepreneur and technology leader with strong expertise in software engineering, product delivery, and quality assurance.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Building durable, scalable technology
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Solving real-world business problems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Creating long-term enterprise value
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl -z-10" />
                <img
                  src={founderPortrait}
                  alt="Maria Zita Anthony - Founder & CEO"
                  className="w-full max-w-sm mx-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
