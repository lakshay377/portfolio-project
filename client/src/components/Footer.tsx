import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold font-display">
            Lakshay<span className="text-primary"> Bhati</span>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://github.com/lakshay377" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/lakshay-bhati-377/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            {/* <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a> */}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-muted-foreground flex items-center justify-center gap-1 text-sm">
          <p>© {currentYear} Lakshay. All rights reserved.</p>
          <span className="hidden md:inline mx-2">|</span>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in React
          </p>
        </div>
      </div>
    </footer>
  );
}
