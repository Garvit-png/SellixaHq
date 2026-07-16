import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# Replace GlowyWaves import with HeroWebGL
content = content.replace(
    'import { GlowyWaves } from "@/components/GlowyWaves";',
    'import { GlowyWaves } from "@/components/GlowyWaves";\nimport HeroWebGL from "@/components/HeroWebGL";'
)

# Remove the old intro sequence completely up to main-scroll-container
intro_pattern = re.compile(r'\{\/\* GLOBAL NOISE OVERLAY \*\/\}.*?id="main-scroll-container".*?\{/\* HERO SECTION \(100vh\) \*/\}', re.DOTALL)

replacement = """{/* GLOBAL NOISE OVERLAY */}
      <svg className="pointer-events-none fixed inset-0 z-[100] w-full h-full opacity-[0.15] mix-blend-overlay">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <div 
        id="main-scroll-container"
        className="relative z-40 w-full flex flex-col text-text-primary"
      >
        {/* HERO SECTION (100vh) */}"""

content = intro_pattern.sub(replacement, content)

# Remove the old hero content
hero_content_pattern = re.compile(r'\{/\* HERO SECTION \(100vh\) \*/\}.*?\{/\* BUILD SECTION \(100vh\) \*/\}', re.DOTALL)
hero_replacement = """{/* HERO SECTION (100vh) */}
        <div id="intro" className="relative min-h-screen flex flex-col w-full">
          <HeroWebGL />
        </div>

        {/* BUILD SECTION (100vh) */}"""

content = hero_content_pattern.sub(hero_replacement, content)

# Remove the sticky footer navbar since they wanted a clean page
footer_pattern = re.compile(r'\{/\* Minimal Gold Navigation Strip.*?</AnimatePresence>', re.DOTALL)
content = footer_pattern.sub('', content)

with open('src/app/page.tsx', 'w') as f:
    f.write(content)

print("Updated page.tsx successfully")
