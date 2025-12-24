import brnLogo from "@/assets/brn-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={brnLogo} alt="BRN Technologies" className="h-8 w-auto" />
            <span className="font-medium text-secondary-foreground">Technologies</span>
          </div>

          <p className="text-sm text-muted text-center">
            © {currentYear} BRN Technologies. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-sm text-muted hover:text-secondary-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#platforms"
              className="text-sm text-muted hover:text-secondary-foreground transition-colors"
            >
              Platforms
            </a>
            <a
              href="#contact"
              className="text-sm text-muted hover:text-secondary-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
