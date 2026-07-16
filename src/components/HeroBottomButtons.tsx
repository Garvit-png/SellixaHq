export function HeroBottomButtons() {
  return (
    <div className="absolute bottom-16 left-0 right-0 w-full flex items-center justify-center gap-4 z-20">
      
      {/* Primary Button */}
      <button className="bg-black text-white hover:bg-white hover:text-black border-2 border-transparent px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
        Book a meet <span className="ml-2">→</span>
      </button>

      {/* Secondary Button */}
      <button className="bg-black text-white hover:bg-white hover:text-black border-2 border-white/20 hover:border-transparent px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
        See how it works
      </button>

    </div>
  );
}
