export interface AiMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export const SAMPLE_QUERIES = [
  'Which is the best project in Pune for ROI?',
  'Show low-risk projects in Hinjewadi',
  'Which projects are ready to move?',
  'Best project under ₹80L in Pune?',
  'Compare Baner vs Kharadi for investment',
];

function getTimeString(): string {
  const now = new Date();
  return now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
}

export function generateAiResponse(query: string): string {
  const q = query.toLowerCase();

  if (q.includes('roi') || q.includes('return') || q.includes('investment') || q.includes('best project')) {
    return `📈 **Top ROI Projects in Pune (April 2026):**

1. **Godrej Woodsville, Hinjewadi** — Projected 18–22% appreciation by possession (Dec 2026). IT corridor demand remains strong.

2. **Kolte Patil iTowers Exente, Wakad** — Smart home premium commands 12–15% rental premium. Wakad prices up 9.4% YoY.

3. **Nyati Eternity, Kharadi** — EON IT Park proximity + proposed Metro station = solid 15–18% 3-year outlook.

**Key insight:** Hinjewadi and Kharadi micro-markets consistently outperform Pune average by 4–6% annually. Pre-launch prices in these zones historically see 20–25% appreciation by possession.`;
  }

  if (q.includes('low risk') || q.includes('safe') || q.includes('risk')) {
    return `🛡️ **Low-Risk Projects in Pune:**

**Tier 1 Safety (Highest Confidence):**
• **Gera World of Joy, Keshav Nagar** — Ready to Move, OC received, 96% sold. Zero delivery risk.
• **Rohan Upavan, Baner** — Delivered, CC received, luxury segment with proven resale liquidity.

**Tier 2 Safety (Under Construction — Low Risk):**
• **Shapoorji Pallonji Joyville, Hinjewadi** — 72% construction complete, SP's 150-year track record, June 2026 possession.
• **Birla Vanya, Manjri** — Birla brand assurance, clear title, PMC-approved layout.

**Risk factors I check:** RERA registration status, builder on-time delivery history, % units sold, construction progress, and legal title clarity.`;
  }

  if (q.includes('ready to move') || q.includes('immediate') || q.includes('possession now') || q.includes('available')) {
    return `🏠 **Ready-to-Move Projects in Pune:**

**Available for Immediate Possession:**

1. **Rohan Upavan, Baner** — 3 & 4 BHK luxury, ₹1.1–1.85Cr. Completion Certificate received. Only 6 units remaining.

2. **Gera World of Joy, Keshav Nagar** — 1/2/3 BHK, ₹55–88L. Occupation Certificate issued. Township with school + hospital on-site.

3. **Paranjape Athashri, Bavdhan** — 2 & 3 BHK senior living, ₹78L–1.22Cr. OC issued, medical facilities active.

**Tip:** Ready-to-move properties eliminate construction risk and allow immediate rental income. Current Pune rental yield: 3.5–5% annually.`;
  }

  if (q.includes('hinjewadi')) {
    return `📍 **Hinjewadi Projects Analysis:**

**Godrej Woodsville (Phase 2)** — ₹82L–1.45Cr, Dec 2026 possession, 48% complete. Best brand in the corridor.

**Shapoorji Pallonji Joyville (Phase 1)** — ₹58–95L, Jun 2026 possession, 72% complete. Best value for money.

**Hinjewadi Market Snapshot:**
• Average price appreciation YoY: +9.4%
• Avg rental yield: 4.2–5.1%
• Upcoming Metro Line 3 station: 2027
• Major employers: Infosys, Wipro, TCS, Cognizant

**My recommendation:** Joyville for budget buyers (₹60–80L range), Woodsville for premium buyers seeking better appreciation.`;
  }

  if (q.includes('baner') || q.includes('wakad') || q.includes('compare') || q.includes('vs')) {
    return `⚖️ **Baner vs Kharadi — Investment Comparison:**

| Parameter | Baner | Kharadi |
|---|---|---|
| Avg Price/sqft | ₹9,800–12,000 | ₹7,500–9,000 |
| YoY Appreciation | 8.2% | 11.4% |
| Rental Yield | 3.2% | 4.6% |
| Metro Connectivity | Planned 2028 | Planned 2027 |
| IT Hub Distance | 8km to Hinjewadi | 1.5km EON IT Park |

**Verdict:** Kharadi offers better ROI potential at lower entry price. Baner is better for luxury end-use with superior social infrastructure (malls, restaurants, schools).`;
  }

  if (q.includes('under 80') || q.includes('80l') || q.includes('budget') || q.includes('affordable') || q.includes('cheap')) {
    return `💰 **Best Projects Under ₹80L in Pune:**

1. **Shapoorji Pallonji Joyville** — From ₹58L (1 BHK), Hinjewadi Phase 1. Strongest brand at this price point.

2. **Gera World of Joy** — From ₹55L (1 BHK), Keshav Nagar. Ready to move, integrated township.

3. **Birla Vanya** — From ₹62L (2 BHK), Manjri. Birla quality + future metro upside.

**Home loan tip:** For ₹75L property, with 20% down payment (₹15L), EMI at 8.75% for 20 years ≈ ₹52,800/month. Most Pune IT professionals qualify with ₹80K+ monthly income.`;
  }

  if (q.includes('luxury') || q.includes('premium') || q.includes('high end')) {
    return `💎 **Premium & Luxury Projects in Pune:**

1. **Panchshil Eon Waterfront, Kharadi** — ₹1.6–3.2Cr. Ultra-premium waterfront. Private elevator lobbies, 5-star clubhouse, helipad access.

2. **Rohan Upavan, Baner** — ₹1.1–1.85Cr. Sahyadri views, infinity pool, sky lounge. Ready to move — rare.

3. **VTP Celestia, Mahalunge** — ₹88L–1.35Cr. Pre-launch pricing. Sky gardens on every floor, 35F sky deck.

**Luxury market insight:** Pune's ₹1.5Cr+ segment grew 34% in volume in FY2025-26. Baner and Kharadi waterfront command the highest price premiums.`;
  }

  if (q.includes('rera') || q.includes('legal') || q.includes('verified') || q.includes('safe to buy')) {
    return `✅ **RERA Verification Guide for Pune:**

**All 10 projects on PuneRealty are MahaRERA registered.** Here's the status breakdown:

🟢 **Registered + OC/CC Issued (Safest):**
• Gera World of Joy — P52100029834
• Paranjape Athashri — P52100041276
• Rohan Upavan — P52100038742

🟡 **Registered + Under Construction:**
• Godrej Woodsville, Nyati Eternity, Shapoorji Joyville, Kolte Patil iTowers, Birla Vanya

🔵 **Applied/Under Review:**
• VTP Celestia — P52100061847 (Pre-launch)

**How to verify:** Visit maharera.mahaonline.gov.in and enter the RERA ID. Always verify before paying any token amount.`;
  }

  if (q.includes('kharadi')) {
    return `📍 **Kharadi Projects Analysis:**

**Nyati Eternity** — ₹72L–1.08Cr, Sep 2026 possession, 62% complete. Best value in Kharadi.

**Panchshil Eon Waterfront** — ₹1.6–3.2Cr, Dec 2027 possession. Ultra-premium waterfront.

**Kharadi Market Snapshot:**
• India's fastest appreciating Pune micro-market in 2025
• YoY price growth: +11.4%
• EON IT Park: 50,000+ daily workforce
• Proposed Metro Station: within 800m of Nyati Eternity
• Major employers: Infosys BPO, Wipro, Cognizant

**My pick:** Nyati Eternity for investors. Panchshil Waterfront for ultra-premium end-use.`;
  }

  return `🤖 I'm PuneRealty AI, your Pune property guide!

I can help you with:
• **ROI analysis** — "Which project has best ROI?" • **Risk assessment** —"Show low-risk projects" • **Location comparison** —"Baner vs Kharadi?" • **Budget filtering** —"Best project under ₹80L"
• **RERA verification** — "Is this project RERA verified?" • **Ready inventory** —"Which projects are ready to move?"

Try one of the sample queries below, or ask me anything about Pune real estate!`;
}
