import re

files_to_update = {
    "WatchHimGrowSection": "text-[#050505]",
    "PitchSection": "text-[#ffff00]",
    "MarqueeSection": "text-[#050505]",
    "AboutSection": "text-[#ffff00]",
    "StairsScrollSection": "text-[#050505]",
    "HandScrollSection": "text-[#ffff00]",
    "WhyChooseUsSection": "text-[#050505]",
    "PortfolioSection": "text-[#ffff00]",
    "TheDealSection": "text-[#050505]",
    "FinalCtaSection": "text-[#ffff00]"
}

curve_html = """
      <div className="absolute top-0 left-0 w-full z-30 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[10vh] md:h-[15vh] {COLOR} fill-current"
        >
          <path d="M0,20 Q150,30 250,60 T500,90 T750,40 T1000,70 T1200,50 V0 H0 Z" />
        </svg>
      </div>
"""

for section, color in files_to_update.items():
    path = f"src/components/{section}.tsx"
    with open(path, "r") as f:
        content = f.read()
    
    if "preserveAspectRatio=\"none\"" in content:
        print(f"Skipping {section}, curve already exists")
        continue

    # Ensure section tag has relative overflow-hidden if not already
    content = re.sub(r'(<section[^>]*className="[^"]*)(")', r'\1 relative overflow-hidden\2', content)

    # Inject curve right after the first <section> or <div id="something"> if it's the main container
    # Most components start with <section
    
    curve = curve_html.replace("{COLOR}", color)
    new_content = re.sub(r'(<section[^>]*>)', r'\1\n' + curve, content, count=1)
    
    # If no <section, try <div that wraps it
    if "<section" not in content:
        # Just inject after the first return ( 
        new_content = re.sub(r'(return\s*\(\s*<div[^>]*>)', r'\1\n' + curve, content, count=1)
        
    with open(path, "w") as f:
        f.write(new_content)
    print(f"Updated {section}")

