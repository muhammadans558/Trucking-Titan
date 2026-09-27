import os
import re

files = [
    "src/data/truckingData.ts",
    "src/components/AboutSection.tsx",
    "src/components/CarrierOnboarding.tsx",
    "src/components/ContactForm.tsx",
    "src/components/FaqSection.tsx",
    "src/components/FinalCta.tsx",
    "src/components/Footer.tsx",
    "src/components/Header.tsx",
    "src/components/Hero.tsx",
    "src/components/HowItWorks.tsx",
    "src/components/LoadSelection.tsx",
    "src/components/PainPointsComparison.tsx",
    "src/components/Services.tsx",
    "src/components/UsaCoverage.tsx",
    "src/components/ValueProposition.tsx",
    "src/components/WhoWeSupport.tsx",
    "src/components/WhyTruckingTitan.tsx"
]

for path in files:
    with open(path, "r", encoding="utf-8") as f:
        lines = f.readlines()
    for idx, line in enumerate(lines):
        line_clean = line.strip()
        # Look for em-dash, en-dash, or hyphen used as punctuation
        if any(c in line for c in ["—", "–"]):
            print(f"[DASH] {path}:{idx+1}: {line_clean}")
        # Look for " - " or "- " or " -" in visible text (not in comments or imports or calculations)
        elif " - " in line or " – " in line or " — " in line:
            print(f"[SPACE-DASH] {path}:{idx+1}: {line_clean}")
        elif re.search(r"[a-zA-Z]-so\b", line):
            print(f"[-SO] {path}:{idx+1}: {line_clean}")
        elif re.search(r"[a-zA-Z]-[A-Z]", line) and not any(k in line for k in ["Drop-and", "Over-height", "Temperature-Controlled", "Dock-height", "Time-critical"]):
            print(f"[CAP-HYPHEN] {path}:{idx+1}: {line_clean}")
