"use client";

export function WatchHimGrowSection() {
  return (
    <section id="growth" className="relative w-full py-24 md:py-32 bg-[#ffff00] flex flex-col items-center justify-center overflow-hidden relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full z-30 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[10vh] md:h-[15vh] text-[#050505] fill-current"
        >
          <path d="M0,20 Q150,30 250,60 T500,90 T750,40 T1000,70 T1200,50 V0 H0 Z" />
        </svg>
      </div>

      {/* Paint spill transition from the black/yellow grid section */}
      <div 
        className="absolute top-0 left-0 w-full z-30 pointer-events-none h-[10vh] md:h-[15vh] overflow-hidden bg-black"
        style={{
          maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 120\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M0,20 Q150,30 250,60 T500,90 T750,40 T1000,70 T1200,50 V0 H0 Z\' fill=\'black\'/%3E%3C/svg%3E")',
          WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 120\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M0,20 Q150,30 250,60 T500,90 T750,40 T1000,70 T1200,50 V0 H0 Z\' fill=\'black\'/%3E%3C/svg%3E")',
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat'
        }}
      >
        <div 
          className="absolute inset-0 opacity-50 animate-[moveGrid_5s_linear_infinite]"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffff00 1px, transparent 1px), linear-gradient(to bottom, #ffff00 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-6 mt-16 md:mt-24">
        
        {/* The video wrapper */}
        <div 
          className="relative z-0 overflow-hidden shadow-2xl bg-gray-100 rounded-3xl"
          style={{ width: "100%", maxWidth: "400px", aspectRatio: "9/16" }}
          suppressHydrationWarning
        >
          <video 
            src="/win.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover scale-[1.01]" 
            suppressHydrationWarning
          />
        </div>

        {/* The text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
          <h2 className="font-sans font-black tracking-tight text-5xl md:text-7xl lg:text-8xl leading-[1.0] uppercase flex flex-col text-black [text-shadow:5px_5px_0_#fff,10px_10px_0_rgba(0,0,0,0.2)]">
            <span className="block">WATCH YOURSELF</span>
            <span className="block">GROW WITH US</span>
          </h2>
          <p className="mt-6 md:mt-8 text-lg md:text-2xl lg:text-3xl font-bold text-black drop-shadow-sm max-w-2xl">
            Your growth starts with one decision.<br/>
            Watch your vision become reality.
          </p>
        </div>
      </div>
    </section>
  );
}
