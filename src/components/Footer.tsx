export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 backdrop-blur-md py-12 mt-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
          <img 
            src={`${import.meta.env.BASE_URL}images/logo-mark.png`} 
            alt="UGGFY.VISION Logo" 
            className="w-6 h-6 grayscale opacity-70"
          />
          <span className="font-display font-bold text-lg tracking-wider text-muted-foreground">
            UGGFY.VISION
          </span>
        </div>
        
        <p className="text-muted-foreground text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Aman Kumar. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a>
        </div>
        
      </div>
    </footer>
  );
}
