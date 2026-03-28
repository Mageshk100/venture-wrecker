import readline from "readline";

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, n));
}

function oneLine(s) {
  return String(s ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

function excerpt(idea, max) {
  const t = oneLine(idea);
  if (!t) return "your pitch";
  return t.length > max ? t.slice(0, max - 1) + "…" : t;
}

function ctxFrom(ideaLower, ideaRaw) {
  const hasAi = /\b(ai|ml|nlp|chatbot|llm|genai|automation|neural|copilot|agentic|generative|gpt|openai|model|transformer|learning|deep)\b/i.test(ideaLower);
  const hasHealthcare = /\b(health|medical|hospital|patient|diagnosis|clinic|doctor|pharma|telemedicine|wellness|therapy|clinical)\b/i.test(ideaLower);
  const hasBlockchain = /\b(blockchain|crypto|web3|token|defi|nft|wallet|smart contract|degen|ethereum|bitcoin)\b/i.test(ideaLower);
  const hasEdTech = /\b(student|learning|education|course|exam|school|college|university|edtech|training|bootcamp|tutor)\b/i.test(ideaLower);
  const hasEcommerce = /\b(shop|ecommerce|marketplace|delivery|cart|product|store|goods|buy|sell|vendor|ecomm)\b/i.test(ideaLower);
  const hasSaaS = /\b(app|platform|website|dashboard|tool|software|saas|solution|service|subscription)\b/i.test(ideaLower);
  const hasFinTech = /\b(finance|payment|bank|trading|investment|loan|upi|wallet|money|transact|fintech|stock|portfolio)\b/i.test(ideaLower);
  const hasIoT = /\b(iot|device|sensor|hardware|embedded|robot|drone|wearable|connected|smart)\b/i.test(ideaLower);
  const hasCybersecurity = /\b(security|cyber|privacy|hack|encryption|threat|firewall|vulnerability|protected|defense)\b/i.test(ideaLower);
  const hasArVr = /\b(ar|vr|metaverse|virtual|augmented|3d|immersive|xr|mixed)\b/i.test(ideaLower);
  const hasLogistics = /\b(logistics|supply|warehouse|shipping|fleet|transport|courier|inventory|route|last mile)\b/i.test(ideaLower);
  const hasFood = /\b(food|grocery|restaurant|delivery|kitchen|dining|meal|catering|cafe|diner)\b/i.test(ideaLower);
  const hasSocial = /\b(social|community|network|chat|messaging|creator|influencer|forum|feed|connection)\b/i.test(ideaLower);
  const hasGaming = /\b(game|gaming|esports|multiplayer|stream|twitch|player|tournament|playtime)\b/i.test(ideaLower);
  const hasTravel = /\b(travel|trip|booking|ride|taxi|tour|hotel|flight|vacation|journey|destination)\b/i.test(ideaLower);
  const hasFitness = /\b(fitness|gym|workout|wellness|trainer|exercise|yoga|sport|athletic)\b/i.test(ideaLower);
  const hasHR = /\b(job|hiring|recruitment|resume|hr|talent|recruit|employ|interview)\b/i.test(ideaLower);
  const hasRealEstate = /\b(real estate|property|rent|housing|broker|apartment|lease|land|realtor)\b/i.test(ideaLower);
  const hasClimate = /\b(climate|energy|solar|sustainability|carbon|green|renewable|environment|emissions)\b/i.test(ideaLower);
  const hasFashion = /\b(fashion|clothing|apparel|outfit|style|wear|dress|thread|luxury)\b/i.test(ideaLower);
  const hasDeveloperTools = /\b(developer|api|sdk|code|programming|devtool|library|package|framework)\b/i.test(ideaLower);
  
  const hasB2b = /\b(b2b|enterprise|sales team|procurement|workflow|teams|slack|salesforce|corporate)\b/.test(ideaLower);
  const hasMarketplace = /\b(marketplace|two-sided|gig|freelance|uber for|connect|matching|provider)\b/.test(ideaLower);
  const isEmpty = !oneLine(ideaRaw);
  
  return {
    hasAi, hasHealthcare, hasBlockchain, hasEdTech, hasEcommerce, hasSaaS, hasFinTech,
    hasIoT, hasCybersecurity, hasArVr, hasLogistics, hasFood, hasSocial, hasGaming,
    hasTravel, hasFitness, hasHR, hasRealEstate, hasClimate, hasFashion, hasDeveloperTools,
    hasB2b, hasMarketplace, isEmpty,
  };
}

function openingPunch(ctx) {
  if (ctx.isEmpty) {
    return pick([
      "This is not a pitch—it's a blank page with ambition.",
      "You forgot to type the idea and emailed whitespace instead.",
      "Can't roast nothing. Type an actual idea.",
    ]);
  }
  if (ctx.hasBlockchain) {
    return pick([
      "Token economics is not a business model—it's a Ponzi with a blockchain.",
      "One SEC comment and your narrative burns.",
      "This is speculation, not revenue.",
    ]);
  }
  if (ctx.hasHealthcare) {
    return pick([
      "You have a deck, not a reimbursement strategy—payers don't buy vibes.",
      "FDA, HIPAA, liability. You haven't touched any of them.",
      "Healthcare waits for evidence, not disruption.",
    ]);
  }
  if (ctx.hasFinTech && !ctx.hasB2b) {
    return pick([
      "This dies the moment the portfolio goes red.",
      "You're selling adrenaline to kids with grocery money.",
      "Retail churn velocity in fintech makes SaaS look sticky.",
    ]);
  }
  if (ctx.hasAi && ctx.hasSaaS) {
    return pick([
      "You wrapped an API and called it a startup.",
      "Users toggle between your app and the free chatbot ninety seconds from now.",
      "This is a hackathon project priced like a Series A.",
    ]);
  }
  if (ctx.hasAi) {
    return pick([
      "If your moat is prompts, your moat is gone in the next release.",
      "The next GPT version ships tomorrow; your secret sauce expires the same day.",
      "You're betting you'll outrun Anthropic. You won't.",
    ]);
  }
  if (ctx.hasEdTech) {
    return pick([
      "Students don't buy—parents and employers do. You're chasing applause.",
      "Free tier popularity is not traction; it's a dorm pyramid scheme.",
      "One summer break and your entire cohort evaporates.",
    ]);
  }
  if (ctx.hasIoT) {
    return pick([
      "Hardware scaling is not software scaling—you hemorrhage on manufacturing.",
      "One supply chain hiccup and your margins collapse.",
      "You're 36 months from profitability, 24 from running out of cash.",
    ]);
  }
  if (ctx.hasCybersecurity) {
    return pick([
      "Enterprise won't buy unknown brands during audits.",
      "One zero-day turns you into a liability.",
      "Trust costs $500M in brand spend to earn. You don't have it.",
    ]);
  }
  if (ctx.hasArVr) {
    return pick([
      "VR adoption is hardware-limited, not software-limited.",
      "AR is still a phone screen—one iOS update ends your product.",
      "Users churn the moment novelty fades.",
    ]);
  }
  if (ctx.hasLogistics) {
    return pick([
      "Logistics margins are brutal. You're 5% better but 10x more capital-intensive.",
      "Every player in this space burns unit economics like cigarettes.",
      "Incumbents have 30 years and 50% lower costs.",
    ]);
  }
  if (ctx.hasFood) {
    return pick([
      "Food delivery has single-digit margins and no venture math.",
      "Regulation, logistics, and competition kill margins.",
      "Restaurants already use Zomato. You're a slow feature.",
    ]);
  }
  if (ctx.hasSocial) {
    return pick([
      "Network effects exist only after you have a network.",
      "Every social app competes with TikTok's algorithm—you don't have one.",
      "Retention is measured in days; your runway in months.",
    ]);
  }
  if (ctx.hasGaming) {
    return pick([
      "Games are hit-driven. You're gambling on culture.",
      "UA costs more than game development.",
      "One competitor's $2M spend kills your unit economics.",
    ]);
  }
  if (ctx.hasTravel) {
    return pick([
      "Travel is an aggregation problem. Kayak, Expedia, Google already won.",
      "Your differentiation is: you exist separately from a browser.",
      "Switching cost is a price drop away.",
    ]);
  }
  if (ctx.hasFitness) {
    return pick([
      "Fitness apps have 80% uninstall rates within 90 days.",
      "Your competitive advantage is notifications. It's not.",
      "Peloton almost survived. You won't.",
    ]);
  }
  if (ctx.hasHR) {
    return pick([
      "Enterprise sales cycles are 9–18 months. Your runway is 12.",
      "LinkedIn already owns talent. You're selling a feature.",
      "Workday commoditized this space.",
    ]);
  }
  if (ctx.hasRealEstate) {
    return pick([
      "Real estate moves at geological time.",
      "Agents have 20 years and a 5% lock. You're a discount.",
      "Regulation changes every election and breaks your model.",
    ]);
  }
  if (ctx.hasClimate) {
    return pick([
      "Climate solutions are policy-dependent, not market-dependent.",
      "Policy changes every election. You're gone.",
      "You need subsidies to pencil. Subsidies change.",
    ]);
  }
  if (ctx.hasFashion) {
    return pick([
      "Fashion is supply chain and brand. You're behind on both.",
      "Your inventory goes out of style faster than capital burns.",
      "Fast fashion won. You're the slow corpse.",
    ]);
  }
  if (ctx.hasDeveloperTools) {
    return pick([
      "Developers use free open-source or internal tools.",
      "Your integration is six months behind competitors.",
      "Switching cost is deleting one line of code.",
    ]);
  }
  if (ctx.hasEcommerce && ctx.hasMarketplace) {
    return pick([
      "Two-sided marketplaces live or die on liquidity day one.",
      "You need buyers and sellers. You have a domain.",
    ]);
  }
  if (ctx.hasEcommerce) {
    return pick([
      "E-commerce is logistics, not innovation.",
      "Your margins die under shipping and returns.",
      "Amazon is older than your idea.",
    ]);
  }
  return pick([
    "This is not a startup—it's a paragraph someone else will execute first.",
    "You found a problem the incumbent hit three years ago.",
    "Show me the wedge. All I see is direction.",
  ]);
}

function buildRoastBody(idea, ctx, ideaLower) {
  const e = excerpt(idea, 220);
  const chunks = [];

  if (ctx.hasBlockchain) {
    chunks.push(
      pick([
        `Token holders are not customers—they're speculation. Once the narrative shifts, liquidity evaporates.`,
        `Your business model is "bigger fool theory with smart contracts."`,
      ]),
    );
  }
  if (ctx.hasHealthcare) {
    chunks.push(
      pick([
        `Reimbursement cycles are 18+ months. Clinical evidence takes 3–5 years. You're priced for SaaS.`,
        `One FDA letter and you need trials. You're burned.`,
      ]),
    );
  }
  if (ctx.hasAi) {
    chunks.push(
      pick([
        `Against ChatGPT and Google's free tier, your ${e} survives only if locked-in data beats free. It won't.`,
        `Models commoditize faster than you ship. Your edge is 14 days old.`,
        `Enterprises won't let vendor AI touch data without legal cover. You sell prompts; they need compliance.`,
      ]),
    );
  }
  if (ctx.hasFinTech && !ctx.hasB2b) {
    chunks.push(
      pick([
        `Retail traders abandon you the moment PnL goes red. Churn is criminal.`,
        `One wrong advice claim and you're a regulatory problem.`,
      ]),
    );
  }
  if (ctx.hasSaaS) {
    chunks.push(
      pick([
        `The App Store is a graveyard of polished apps with retention cliffs. Yours will be too.`,
        `One native OS feature kills your category.`,
      ]),
    );
  }
  if (ctx.hasEdTech) {
    chunks.push(
      pick([
        `Students refund everything. Payment friction at 3am kills cohorts.`,
        `Willingness-to-pay follows graduation. Until then, you're free.`,
      ]),
    );
  }
  if (ctx.hasIoT) {
    chunks.push(
      pick([
        `Manufacturing scales in quarters, not sprints. One supply chain hiccup eats your margin.`,
        `Hardware return rates are 15–25%. Support costs scale with revenue, not profit.`,
      ]),
    );
  }
  if (ctx.hasCybersecurity) {
    chunks.push(
      pick([
        `Enterprise buys brands, not startups, during audits. You're liability.`,
        `One zero-day and trust burns in 48 hours.`,
      ]),
    );
  }
  if (ctx.hasArVr) {
    chunks.push(
      pick([
        `Hardware adoption is your ceiling. You can't outship a $299 headset shortage.`,
        `One iOS update deprecates your entire feature set.`,
      ]),
    );
  }
  if (ctx.hasLogistics) {
    chunks.push(
      pick([
        `Logistics is capital-intensive and margin-poor. Incumbents have density you won't match for 5 years.`,
        `Operations scale. Margins don't. Every efficient player bleeds cash.`,
      ]),
    );
  }
  if (ctx.hasFood) {
    chunks.push(
      pick([
        `Delivery margins are 3–5% after platforming. Regulation adds layers.`,
        `Restaurants already pay Zomato, Swiggy, Uber Eats. You're cut #4.`,
      ]),
    );
  }
  if (ctx.hasSocial) {
    chunks.push(
      pick([
        `Network effects require critical mass. You don't have it. TikTok has a better algorithm.`,
        `User acquisition scales; retention drops. Most apps die at the adoption cliff.`,
      ]),
    );
  }
  if (ctx.hasGaming) {
    chunks.push(
      pick([
        `Games are hit-driven. You're building a coin flip.`,
        `Engagement without monetization is a cost center. Most apps tank on revenue.`,
      ]),
    );
  }
  if (ctx.hasTravel) {
    chunks.push(
      pick([
        `You're competing with a browser tab. Google Flights killed margins.`,
        `Inventory is commoditized. Your margin lives in discounting.`,
      ]),
    );
  }
  if (ctx.hasFitness) {
    chunks.push(
      pick([
        `Fitness retention is abysmal. 80% uninstall by month three.`,
        `Peloton proved even "proven" models collapse on unit economics.`,
      ]),
    );
  }
  if (ctx.hasHR) {
    chunks.push(
      pick([
        `Enterprise sales are 9–18 months. You're Series A with 18 months of runway. You lose.`,
        `Procurement won't risk unknowns when Workday exists.`,
      ]),
    );
  }
  if (ctx.hasRealEstate) {
    chunks.push(
      pick([
        `Transaction velocity in real estate is weeks. Your sales cycle adds months.`,
        `Agents own the network. You're selling a discount they ignore.`,
      ]),
    );
  }
  if (ctx.hasClimate) {
    chunks.push(
      pick([
        `Your revenue depends on subsidies. Your margin depends on policy. Change either and you're toast.`,
        `Sales cycles are 3–5 years. Your fund assumes 7-year exits.`,
      ]),
    );
  }
  if (ctx.hasFashion) {
    chunks.push(
      pick([
        `Fashion is 50% supply chain and 50% brand. You're weak on both.`,
        `Inventory scales faster than sales. One miss sends you to bankruptcy.`,
      ]),
    );
  }
  if (ctx.hasDeveloperTools) {
    chunks.push(
      pick([
        `Developers use free open-source. Your integration lags competitors.`,
        `Switching cost is one line of code.`,
      ]),
    );
  }
  if (ctx.hasEcommerce) {
    chunks.push(
      pick([
        `E-commerce margins are single-digit. Logistics scales with volume.`,
        `Amazon owns distribution. You own nothing.`,
      ]),
    );
  }

  if (!chunks.length) {
    chunks.push(
      pick([
        `Your ${e} hides the actual buyer. Who loses money if this stays unsolved?`,
        `The hard part isn't the idea. It's why the incumbent doesn't copy you.`,
      ]),
    );
  }

  chunks.push(
    pick([
      `Name one customer who paid. Name one metric that moved. Name one reason they don't go back in 60 days.`,
      `What result in 30 days proves you're not fooling yourself?`,
    ]),
  );

  return chunks.join("\n\n");
}

function buildMarket(idea, ctx) {
  const e = excerpt(idea, 180);
  let comp = "";
  let risks = "";

  if (ctx.hasBlockchain) {
    comp = "Bitcoin, Ethereum, Layer 2s, a thousand failed tokens.";
    risks = "SEC enforcement, regulatory whiplash, custody disasters, token holders exiting on narrative shifts.";
  } else if (ctx.hasHealthcare) {
    comp = "Established players with reimbursement, FDA pathways, clinical evidence. Incumbents in EHRs.";
    risks = "FDA classification, HIPAA violations, malpractice liability, slow payer cycles (18–36mo).";
  } else if (ctx.hasAi) {
    comp = "ChatGPT, Copilot, Gemini in every app. SaaS vendors bundling AI. Free open-source models.";
    risks = "Model drift, hallucinations, customer fear, vendors bundling you into irrelevance.";
  } else if (ctx.hasFinTech) {
    comp = "Fidelity, Schwab, Robinhood, every bank app with custody and regulatory trust.";
    risks = "Broker-dealer regulation, FINRA compliance, fraud, market contagion, retail churn.";
  } else if (ctx.hasSaaS) {
    comp = "Category leaders with moats, native OS features. Free alternatives for 80%.";
    risks = "One OS feature kills you. UA costs rise. Retention cliffs are common.";
  } else if (ctx.hasEdTech) {
    comp = "Free campus tools, Quizlet, Chegg, LMS licenses, Discord, employer programs.";
    risks = "Low willingness-to-pay, cohort churn, payment friction, refunds.";
  } else if (ctx.hasIoT) {
    comp = "Incumbents with supply chains. DIY Arduino. Open-source alternatives.";
    risks = "Manufacturing delays, supply fragility, 15–25% return rates, support scaling.";
  } else if (ctx.hasCybersecurity) {
    comp = "Palo Alto, CrowdStrike, Cloudflare. Enterprise won't risk unknowns.";
    risks = "One zero-day kills trust. Brand trust takes $1B and 20 years.";
  } else if (ctx.hasArVr) {
    comp = "Apple, Meta, Microsoft platforms. Limited headset adoption ceiling.";
    risks = "Hardware dependency. One iOS update ends you. Adoption is glacial.";
  } else if (ctx.hasLogistics) {
    comp = "FedEx, UPS, Amazon with 30-year density. You're 5 years away from scale.";
    risks = "Capital intensity, thin margins, ops complexity, incumbents pricing you out.";
  } else if (ctx.hasFood) {
    comp = "Zomato, Swiggy, Uber Eats, DoorDash. Restaurants use all simultaneously.";
    risks = "Single-digit margins, regulatory overhead, logistics costs, price wars.";
  } else if (ctx.hasSocial) {
    comp = "TikTok, Instagram, Discord, Twitter. Every app with community features.";
    risks = "Network effects need mass. Retention cliffs are standard. Incumbents have better algos.";
  } else if (ctx.hasGaming) {
    comp = "Riot, Epic, Take-Two, Tencent. Free games on Steam.";
    risks = "Hit-driven, expensive UA, high churn, monetization struggles.";
  } else if (ctx.hasTravel) {
    comp = "Google Flights, Expedia, Booking, Skyscanner. A browser tab.";
    risks = "Commoditized inventory, low switching costs, solved aggregation problem.";
  } else if (ctx.hasFitness) {
    comp = "Peloton, Apple Fitness, Nike Training, Planet Fitness, YouTube.";
    risks = "80% uninstall by month three. Retention is the blocker.";
  } else if (ctx.hasHR) {
    comp = "LinkedIn, Workday, ServiceNow, Greenhouse, internal recruiters.";
    risks = "Enterprise sales 9–18mo. Procurement won't risk unknowns.";
  } else if (ctx.hasRealEstate) {
    comp = "Zillow, Redfin, licensed agents with 20 years and 3–5% locks.";
    risks = "Slow transaction velocity, regulation changes, agents own the network.";
  } else if (ctx.hasClimate) {
    comp = "Oil, renewables, legacy utilities with lobbying. Policy-dependent.";
    risks = "Policy-dependent revenue, 3–5 year sales cycles, subsidy cliffs.";
  } else if (ctx.hasFashion) {
    comp = "H&M, Inditex, LVMH, Amazon Fashion. Supply chain and brand moats.";
    risks = "Inventory obsolescence, thin markdown margins, supply chain complexity.";
  } else if (ctx.hasDeveloperTools) {
    comp = "GitHub, VS Code, Vercel, AWS, free open-source, internal tools.";
    risks = "Free alternatives, six-month adoption lag, zero switching costs.";
  } else if (ctx.hasEcommerce && ctx.hasMarketplace) {
    comp = "Amazon, Shopify, Alibaba. Liquidity where scale exists.";
    risks = "Liquidity chicken-and-egg, unit economics collapse at scale.";
  } else if (ctx.hasEcommerce) {
    comp = "Amazon, Shopify, brand DTC, every marketplace in your category.";
    risks = "Single-digit margins, logistics, returns, Amazon pricing you out.";
  } else {
    comp = "Inertia: spreadsheets, email, manual processes. Incumbents own procurement.";
    risks = "Market risk: crowded with fast copycats. CAC risk: you're pre-traction.";
  }

  return `🎯 What You're Up Against:\n${comp}\n\n⚠️ Real Risks:\n${risks}`;
}

function buildPivot(idea, ctx, ideaLower) {
  const e = excerpt(idea, 150);
  let pivot = "";

  if (ctx.hasBlockchain) {
    pivot = `Target: Compliance heads at crypto exchanges ($500M–$2B volume) paying $2M/year to dodge regulators.\nProduct: Custodial audit tool. OFAC-ready exception reports. Zero token issuance.\nMonetization: $25k–$80k/mo + $12k onboarding.`;
  } else if (ctx.hasHealthcare) {
    pivot = `Target: Single-state clinic chains (50–200 locations) with shared EHR and billing pain.\nProduct: Pre-visit intake: consent + insurance verification. Zero diagnosis claims.\nMonetization: $2–$4/patient visit + $15k annual audit.`;
  } else if (ctx.hasAi) {
    pivot = `Target: Legal ops at Series B SaaS billing time on contract RFPs.\nProduct: Private clause assistant. 100% signed contracts + playbooks. Cited output only.\nMonetization: $899/seat/mo (6 min) + $0.04/page archival yearly.`;
  } else if (ctx.hasFinTech) {
    pivot = `Target: Compliance at small RIAs ($200M–$3B AUM) paying $80k/year to avoid SEC.\nProduct: Post-trade audit. FINRA-ready reports. Slippage, venue quality tracking.\nMonetization: $3.5k–$9k/mo + $7k onboarding.`;
  } else if (ctx.hasSaaS) {
    pivot = `Target: One department head in one vertical with a weekly escalation.\nProduct: Ingest → AI-assist → audit log. One KPI screenshot for their CEO.\nMonetization: $18k pilot + go/no-go gate, then $8k–$16k/mo.`;
  } else if (ctx.hasEdTech) {
    pivot = `Target: Placement offices at 20–50 colleges + bootcamps needing signal.\nProduct: Employer-funded assessments + auto-rubric + ATS export. Hiring SAAS, not toys.\nMonetization: $22/candidate billed to employer + $18k/year per campus.`;
  } else if (ctx.hasIoT) {
    pivot = `Target: Facilities at 100–500-location retail chains optimizing HVAC/lighting.\nProduct: Edge sensors + dashboard. Local mesh, no LTE. Plug-and-play.\nMonetization: $1.2k install + $89/mo per site for 36mo.`;
  } else if (ctx.hasCybersecurity) {
    pivot = `Target: Compliance heads at mid-market healthcare/finance filing SOC2.\nProduct: Custom SAST scanner for your exact stack. Not generic CVE spray.\nMonetization: $15k–$40k/year + $0.50/scan above 50/mo.`;
  } else if (ctx.hasArVr) {
    pivot = `Target: Internal training at global manufacturers (10k+ compliance staff).\nProduct: VR module builder. Record SOP → auto-track → audit trail.\nMonetization: $8k/module + $3k/mo hosting + $120/certificate.`;
  } else if (ctx.hasLogistics) {
    pivot = `Target: Last-mile in one city (15–50 stops/day) using WhatsApp for routes.\nProduct: GPS + sequencing + photo proof-of-delivery.\nMonetization: $199/mo + $0.40/delivery above 100/day.`;
  } else if (ctx.hasFood) {
    pivot = `Target: Independent restaurants in one neighborhood ($500k+/year).\nProduct: Delivery markup + menu management + SMS. One neighborhood first.\nMonetization: 12% take rate + $49/mo SMS + $0.015/msg.`;
  } else if (ctx.hasSocial) {
    pivot = `Target: Existing niche communities (3D artists, indie devs, gaming). 5–50k Discord.\nProduct: Creator monetization: tips + paid content + subs. Add-on, not replacement.\nMonetization: 8% take + optional $99/creator/mo verified badge.`;
  } else if (ctx.hasGaming) {
    pivot = `Target: Esports teams and streamers (100k–1M Twitch followers).\nProduct: Bracket hosting + prize distribution + sponsorship matching.\nMonetization: $499/tournament + 2% on prize pools.`;
  } else if (ctx.hasTravel) {
    pivot = `Target: Niche segment: budget backpackers OR luxury safari OR business travelers.\nProduct: Locked recommendations (50 hotels/city) + offline maps + visa tracking.\nMonetization: 15% hotel commission + $49/mo premium.`;
  } else if (ctx.hasFitness) {
    pivot = `Target: Corp wellness programs (5k–10k employees) needing challenges.\nProduct: Employee fitness challenges + leaderboards + Fitbit/Apple sync.\nMonetization: $1.50/employee/mo + optional merch revenue share.`;
  } else if (ctx.hasHR) {
    pivot = `Target: Plant managers (100–500 employees) doing manual shift scheduling.\nProduct: Shift scheduling + time clock integration + wage & hour compliance.\nMonetization: $4/employee/mo + $299 onboarding + $0.10/overtime alert.`;
  } else if (ctx.hasRealEstate) {
    pivot = `Target: Property managers (50–200 units) handling maintenance via email.\nProduct: Tenant portal + work order routing + contractor payments.\nMonetization: $2–$3/unit/mo + $35/mo contractor app seats.`;
  } else if (ctx.hasClimate) {
    pivot = `Target: Corporate sustainability officers at Fortune 500 (50–100 facilities).\nProduct: Meter aggregation + Scope 1/2 auto-calc + board dashboard.\nMonetization: $15k–$40k/year + $0.08/meter/mo.`;
  } else if (ctx.hasFashion) {
    pivot = `Target: DTC fashion ($500k–$5M ARR) with repeat SKU orders.\nProduct: Inventory forecasting from Shopify + local manufacturer integrations.\nMonetization: $799/mo + 1% commission on shipped inventory.`;
  } else if (ctx.hasDeveloperTools) {
    pivot = `Target: Engineering teams (10–50 people) at startups <$500M adding security to CI/CD.\nProduct: SAST scanner (JavaScript/Python) as npm package. Self-hosted.\nMonetization: $99/team/mo + $0.05/line above 1M lines/mo.`;
  } else if (ctx.hasEcommerce && ctx.hasMarketplace) {
    pivot = `Target: Independent services in one neighborhood: groomers, barbers, HVAC.\nProduct: Booking + deposits + SMS + chargebacks. Own payment spine.\nMonetization: 11% take rate + $59/mo multi-staff + SMS.`;
  } else if (ctx.hasEcommerce) {
    pivot = `Target: Niche products: fitness supplements, hobby gear, home goods.\nProduct: Dropship co-packing + Shopify integration + bulk fulfillment.\nMonetization: $399/mo + 4–6% commission.`;
  } else {
    pivot = `Target: One department head in one vertical where ${e} kills their weekly headache.\nProduct: One workflow: ingest → process → audit log. One screenshot shows ROI.\nMonetization: $18k pilot + success gate, then $7k–$15k/mo.`;
  }

  return `🚀 If You Were Smart:\n${pivot}`;
}

function buildScores(ctx) {
  const jitter = () => pick([-1, 0, 0, 0, 1]);
  let pain = 3, diff = 3, mkt = 3, biz = 3, exe = 3;

  if (ctx.isEmpty) {
    pain = diff = mkt = biz = 1;
    exe = 2;
  } else {
    if (ctx.hasBlockchain || ctx.hasFinTech) { diff -= 1; mkt -= 1; biz -= 2; }
    if (ctx.hasEdTech) { pain -= 1; biz -= 1; }
    if (ctx.hasAi) { diff -= 1; mkt -= 1; }
    if (ctx.hasSaaS) diff -= 1;
    if (ctx.hasEcommerce) biz -= 1;
    if (ctx.hasFood || ctx.hasLogistics) { biz -= 2; exe -= 1; }
    if (ctx.hasIoT) { exe -= 1; biz -= 1; }
    if (ctx.hasClimate) { mkt -= 1; pain += 1; biz -= 1; }
    if (ctx.hasCybersecurity) { pain += 1; biz += 1; }
    if (ctx.hasB2b || ctx.hasHR) { biz += 1; exe += 1; }
    
    pain += jitter();
    diff += jitter();
    mkt += jitter();
    biz += jitter();
    exe += jitter();
  }

  pain = clamp(pain, 1, 5);
  diff = clamp(diff, 1, 5);
  mkt = clamp(mkt, 1, 5);
  biz = clamp(biz, 1, 5);
  exe = clamp(exe, 1, 5);

  const overall = Number(((pain + diff + mkt + biz + exe) / 5).toFixed(1));
  return { pain, diff, mkt, biz, exe, overall };
}

function verdictLine(ctx, overall) {
  if (ctx.isEmpty) {
    return pick([
      "Paste an idea. We can't fund imagination.",
      "Blank slides are not minimalism; they're laziness.",
      "Come back with a sentence to defend.",
    ]);
  }
  if (overall >= 3.8) {
    return pick([
      "Early, but the wedge is there. Go get two paid invoices.",
      "You're asking the right questions. Commit to 90 days and hit it.",
      "Second meeting only if one customer signs twice.",
    ]);
  }
  if (overall >= 2.9) {
    return pick([
      "Not yet. Go prove one customer pays twice.",
      "Interesting becomes fundable with receipts.",
      "Come back when invoices match slides.",
    ]);
  }
  return pick([
    "Hard no until I see repeat customers.",
    "Your problem is real. Your solution is generic. Unit economics untested.",
    "Pass. Come back with one paying customer.",
  ]);
}

async function readIdea() {
  const argv = process.argv.slice(2).join(" ").trim();
  if (argv) return argv;
  if (!process.stdin.isTTY) return "";
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  try {
    return await new Promise((resolve) => {
      rl.question("Pitch your startup (one messy paragraph is fine):\n> ", resolve);
    });
  } finally {
    rl.close();
  }
}

async function main() {
  let ideaRaw = "";
  try {
    ideaRaw = await readIdea();
  } catch {
    ideaRaw = "";
  }

  const idea = oneLine(ideaRaw) || "(nothing submitted yet)";
  const ideaLower = idea.toLowerCase();
  const ctx = ctxFrom(ideaLower, ideaRaw);

  const opener = openingPunch(ctx);
  const roastBody = buildRoastBody(idea, ctx, ideaLower);
  const market = buildMarket(idea, ctx);
  const pivot = buildPivot(idea, ctx, ideaLower);
  const scores = buildScores(ctx);
  const verdict = verdictLine(ctx, scores.overall);

  console.log(`${opener}

${roastBody}

${market}

${pivot}

📊 Fundability Meter:
• Problem clarity: ${scores.pain}/5
• Differentiation: ${scores.diff}/5
• Market understanding: ${scores.mkt}/5
• Business model: ${scores.biz}/5
• Execution potential: ${scores.exe}/5

Overall: ${scores.overall}/5

🔔 Verdict:
${verdict}
`);
}

process.on("SIGINT", () => {
  process.stdout.write("\n");
  process.exit(0);
});

main().catch(() => {
  console.log(`Infrastructure failed, not your idea—but you forgot to paste the pitch.

📌 What Happened:
System couldn't read input. Error on our end.

🎯 What You're Up Against:
Everyone who solved this at scale, faster, with more capital.

⚠️ Real Risks:
Your idea might be solid. Execution risk: try again.

🚀 If You Were Smart:
Target: Your problem in one sentence.
Product: Your hypothesis in two sentences.
Monetization: Who pays and how much?

📊 Fundability Meter:
• Problem clarity: N/A/5
• Differentiation: N/A/5
• Market understanding: N/A/5
• Business model: N/A/5
• Execution potential: N/A/5

Overall: N/A/5

🔔 Verdict:
Paste a real idea. We'll shred it properly next time.
`);
});
