import { Mail, Github, Linkedin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile.jpg";

const Index = () => {
  const links = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:anjali.das@columbia.edu",
      display: "anjali.das@columbia.edu"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anjali-das-629869169/",
      display: "LinkedIn"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/adas-7",
      display: "GitHub"
    },
    {
      icon: GraduationCap,
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=2jVsJ30AAAAJ&hl=en&authuser=2",
      display: "Google Scholar"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-20">
      <main className="max-w-2xl w-full animate-in fade-in duration-700">
        {/* Profile Photo */}
        <img 
          src={profilePhoto} 
          alt="Anjali Das" 
          className="w-32 h-32 rounded-full object-cover mb-8 border-2 border-border"
        />
        
        {/* Name */}
        <h1 className="font-display font-bold text-5xl md:text-7xl text-foreground mb-8 tracking-tight">
          Anjali Das
        </h1>

        {/* Bio */}
        <div className="space-y-4 mb-12 text-foreground/80 font-body font-light text-lg md:text-xl leading-relaxed">
          <p>
            Currently a 5th year CS PhD student at Columbia University and the New York Genome Center working in the{" "}
            <a 
              href="https://daklab.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-all"
            >
              Knowles lab
            </a>.
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap gap-3" aria-label="Contact and social links">
          {links.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              size="sm"
              asChild
              className="group border-border hover:border-foreground hover:bg-transparent transition-all duration-300"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <link.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-body font-normal">{link.display}</span>
              </a>
            </Button>
          ))}
        </nav>
      </main>
    </div>
  );
};

export default Index;
