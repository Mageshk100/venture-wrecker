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
  const hasAi =
    /\b(ai|ml|llm|gpt|openai|chatgpt|neural|copilot|agentic|generative)\b/i.test(ideaRaw) ||
    /\b(ai|ml|llm|gpt|openai|chatgpt|neural|copilot|agentic|generative)\b/.test(ideaLower);
  const hasApp = /\b(app|mobile|ios|android|iphone|play store|app store)\b/.test(ideaLower);
  const hasStudents =
    /\b(student|students|campus|university|college|undergrad|dorm|school)\b/.test(ideaLower);
  const hasB2b =
    /\b(b2b|enterprise|sales team|procurement|workflow|saas|teams|slack|salesforce)\b/.test(ideaLower);
  const hasMarketplace = /\b(marketplace|two-sided|gig|freelance|uber for)\b/.test(ideaLower);
  const hasCrypto = /\b(crypto|web3|nft|token|defi|chain)\b/.test(ideaLower);
  const hasHealth = /\b(health|hipaa|clinical|patient|fda|diagnosis)\b/.test(ideaLower);
  const hasTradingFinance =
    /\b(trading|trader|day trade|daytrade|stocks?|options?|forex|broker|brokerage|portfolio|etf|fintech|wealth|hedge fund|robinhood|investing app)\b/i.test(
      ideaLower,
    );
  const isEmpty = !oneLine(ideaRaw);
  return {
    hasAi,
    hasApp,
    hasStudents,
    hasB2b,
    hasMarketplace,
    hasCrypto,
    hasHealth,
    hasTradingFinance,
    isEmpty,
  };
}

/** First line only: punchy, about the idea—not the founder. */
function openingPunch(ctx) {
  if (ctx.isEmpty) {
    return pick([
      "This is not a pitch—it’s a blank page with ambition.",
      "There’s no company here yet, only homework you didn’t type.",
      "You can’t fund whitespace—give me an idea worth dismantling.",
    ]);
  }
  if (ctx.hasTradingFinance && !ctx.hasB2b) {
    return pick([
      "This is a gamble in a trench coat, not a business.",
      "Retail attention is not the same as fiduciary trust—and regulators know the difference.",
      "You’re selling adrenaline; the market buys audited outcomes.",
    ]);
  }
  if (ctx.hasAi && ctx.hasApp) {
    return pick([
      "This is not a startup—it’s a bookmark between ChatGPT and the App Store.",
      "You built a thin client on someone else’s brain—commodity distribution, not power.",
      "Wrapping an API and calling it vision isn’t a round—it’s a side quest.",
    ]);
  }
  if (ctx.hasAi) {
    return pick([
      "This is a feature waiting for Microsoft’s roadmap—or ChatGPT’s next default.",
      "If the secret sauce is ‘we prompt better,’ you don’t have secrets—just screenshots.",
      "The model isn’t your moat; the workflow captivity is—and you haven’t shown it.",
    ]);
  }
  if (ctx.hasApp && !ctx.hasB2b) {
    return pick([
      "This is not a startup—it’s another icon competing for thumb real estate.",
      "Differentiation by shade of purple still dies at uninstall.",
      "Consumer apps don’t starve on code—they starve on habit and CAC.",
    ]);
  }
  if (ctx.hasStudents) {
    return pick([
      "This is enthusiasm with a .edu discount—not a revenue model.",
      "Students cheer for free; budgets live in bursars, parents, and employers.",
      "High signups, low wallets: the classic ‘traction’ mirage.",
    ]);
  }
  if (ctx.hasMarketplace) {
    return pick([
      "This is two spreadsheets flirting—liquidity is the product, and you don’t have it.",
      "Marketplaces don’t fail on vision; they die waiting for the first paid match.",
    ]);
  }
  if (ctx.hasCrypto) {
    return pick([
      "This is narrative trading with extra steps—not recurring revenue.",
      "Speculation scales fast; trust scales on lawyers and audits.",
    ]);
  }
  if (ctx.hasHealth) {
    return pick([
      "This is a deck, not a reimbursement strategy—and payers don’t buy vibes.",
      "Healthcare rewards evidence and liability control, not slick onboarding.",
    ]);
  }
  return pick([
    "This is not a startup—it’s a paragraph someone else will monetize first.",
    "Interesting problems aren’t interesting businesses until someone signs on cold terms.",
    "You’re selling possibility; I’m buying inevitability—show me the wedge.",
  ]);
}

function buildRoastBody(idea, ctx, ideaLower) {
  const e = excerpt(idea, 240);
  const chunks = [];

  if (ctx.hasAi) {
    chunks.push(
      pick([
        `Against ChatGPT, Copilot, and Gemini in-product defaults, your ${e} has to win on locked-in data, evaluation rigor, or compliance—not “smarter chat.” Otherwise users bounce back to the free default the moment your trial ends.`,
        `Incumbents bundle assistants where work already happens; you’re asking users to detour into your island. Cost to switch is zero, cost to abort is zero—so your growth curve is mostly curiosity, not commitment.`,
      ]),
    );
  }

  if (ctx.hasApp) {
    chunks.push(
      pick([
        `The App Store is a hoarder’s attic—people download, use once, and vanish. Without a weekly job-to-be-done and proof you beat Apple/Google shortcuts, you’re undifferentiated inventory.`,
        `Paid UA and App Store Optimization burn accelerates for everyone; if retention week four looks like a cliff, you built churn with polish.`,
      ]),
    );
  }

  if (ctx.hasStudents) {
    chunks.push(
      pick([
        `Students ship DMs and screenshots, not purchase orders. Willingness-to-pay is thin unless the cardholder is a parent, employer, or institution with a contract path.`,
        `You’re optimizing for applause in lecture halls while CFOs optimize burn—those are different scoreboards.`,
      ]),
    );
  }

  if (ctx.hasTradingFinance) {
    chunks.push(
      pick([
        `Robinhood, Interactive Brokers, Fidelity, and bank apps already own trust rails and regulatory muscle. “Better UX” doesn’t beat custody, SIPC narratives, and compliance teams users never see.`,
        `Retail users churn the moment PnL turns red; B2C fintech retention is a blood sport of incentives, disclosures, and support SLAs you haven’t priced.`,
      ]),
    );
  }

  if (!chunks.length) {
    chunks.push(
      pick([
        `Your ${e} hides the buyer: who loses money if this stays unsolved next quarter? Without that name, you’re brainstorming.`,
        `The hard part isn’t the idea—it’s why the incumbent doesn’t squash you with distribution they already paid for.`,
      ]),
    );
  }

  if (ctx.hasB2b) {
    chunks.push(
      pick([
        `Enterprise buys risk reduction and a champion who survives the rollout. If SOC2, SSO, and procurement aren’t in the same sentence as ${e}, you’re pitching theater tickets to a security review board.`,
        `The budget owner signs when a metric they’re paid on moves—not when “AI” appears in the slide title.`,
      ]),
    );
  }

  chunks.push(
    pick([
      `Ground your story in what you actually claim: “${e}” — name one customer who paid, one metric that moved, and one reason they can’t revert to Excel next month.`,
      `Translate that paragraph into a falsifiable test: what result in 30 days would prove you’re not fooling yourself?`,
    ]),
  );

  return chunks.join("\n\n");
}

function buildMarket(idea, ctx) {
  const e = excerpt(idea, 200);
  let comp = "";
  let trust = "";
  let risks = "";

  if (ctx.hasTradingFinance) {
    comp = pick([
      `Incumbents: Fidelity/Schwab-scale brokers, Robinhood-style retail apps, Bloomberg/Reuters terminals in pro workflows, plus bank wealth desks already compliant with FINRA/SEC expectations.`,
      `You’re not competing with “no one”—you’re competing with custody, execution quality, and regulatory storytelling baked into brands people already trust with their net worth.`,
    ]);
    if (ctx.hasAi) {
      comp += ` ${pick([
        `Layer in ChatGPT/Copilot defaults for “explain this trade,” mean-reversion “ideas,” and vendor bots—your AI layer is adjacent commodity noise unless grounded in audited data feeds and compliance.`,
      ])}`;
    }
  } else if (ctx.hasAi) {
    comp = pick([
      `ChatGPT plus Copilot/Gemini in the apps people already pay for; vertical SaaS vendors stapling assistants onto logged-in data; plus a graveyard of seed-stage wrappers with identical screenshots.`,
      `OpenAI/Microsoft distribution deals—not your “UX breakthrough”—set the floor on what “good enough AI” means to buyers.`,
    ]);
  } else if (ctx.hasApp) {
    comp = pick([
      `Category leaders with ASO scale, built-in OS features, and network effects (Notion-style suites, habit apps with years of hooks).`,
      `“No competitor” usually means ChatGPT-as-Google plus a Notes app already solved the job badly but free.`,
    ]);
  } else if (ctx.hasStudents) {
    comp = pick([
      `Free campus tools, Chegg/Quizlet-style incumbents, LMS contracts, Discord/GroupMe “good enough,” and employer programs that bypass your UX entirely.`,
    ]);
  } else if (ctx.hasB2b) {
    comp = pick([
      `Salesforce/ServiceNow/SAP-adjacent stacks, internal “we’ll build it in 3 sprints” teams, and service firms selling humans with better margins than your license.`,
    ]);
  } else {
    comp = pick([
      `Inertia: spreadsheets, email approvals, Amazon for parts, Stripe for payments—boring systems that already cleared procurement.`,
    ]);
  }

  if (ctx.hasTradingFinance) {
    trust = pick([
      `People won’t park money—or take risk on a stranger’s “alpha”—without custody clarity, regulatory posture, and a brand that survives one ugly tape day. One outage or ambiguous disclosure torches trust faster than you can A/B test UI.`,
    ]);
    if (ctx.hasStudents) {
      trust += ` ${pick([
        `Students amplify social proof when it’s free and vanish when margin calls arrive—your trust surface is thinner than a dining hall Wi-Fi login.`,
      ])}`;
    }
  } else if (ctx.hasStudents) {
    trust = pick([
      `Students try everything and subscribe to almost nothing; card failure rates and refunds make cohort economics look fake until a real bill-payer shows up.`,
    ]);
  } else if (ctx.hasAi) {
    trust = pick([
      `Teams won’t ship vendor AI on customer data without audit logs, citations, and a story for legal; “we’re careful” isn’t a controls narrative.`,
    ]);
  } else if (ctx.hasApp) {
    trust = pick([
      `Consumer apps fight “login once, forget forever”; notifications fatigue users into uninstalls—your trust budget is thinner than your design system.`,
    ]);
  } else {
    trust = pick([
      `Buyers default to safe incumbents when your security story, references, and uptime promises aren’t concrete—novelty is suspicion in procurement.`,
    ]);
  }

  if (ctx.hasTradingFinance) {
    risks = pick([
      `Regulatory/registrant risk (broker-dealer vs. “education,” suitability, marketing claims), fraud and account takeover, market-event reputational hits, and model/execution risk if you touch routing or advice semantics.`,
    ]);
  } else if (ctx.hasHealth) {
    risks = pick([
      `HIPAA/FDA pathways, liability, slow sales cycles, payer reimbursement reality—any one of these turns a sprint into a two-year hallway.`,
    ]);
  } else if (ctx.hasCrypto) {
    risks = pick([
      `Enforcement noise, custody headaches, treasury volatility, and the moment retail interest snaps shut—your runway doesn’t pause for “narrative seasons.”`,
    ]);
  } else if (ctx.hasAi) {
    risks = pick([
      `Model drift, privacy incidents, customer fear of “wrong answers in production,” and incumbents bundling you into irrelevance next contract renewal.`,
    ]);
  } else {
    risks = pick([
      `Market risk: crowded category with faster copycats; trust risk: weak references; execution risk: you’re pre-product but pitching scale (“${e}”) like it ships tomorrow.`,
    ]);
  }

  return [
    `- Real-world competition: ${comp}`,
    `- Why users won’t pay or trust it yet: ${trust}`,
    `- Risks: ${risks}`,
  ].join("\n");
}

function buildPivot(idea, ctx, ideaLower) {
  const e = excerpt(idea, 150);
  let target = "";
  let product = "";
  let money = "";

  if (ctx.hasTradingFinance) {
    target = `Heads of trading operations at small RIAs ($150M–$2B AUM) who already pay for OMS/EMS and get sued if tools overpromise retail “signals.”`;
    product = `Post-trade analytics that ingest fills from brokers CSV/API-only—no custody, no order routing—outputs compliance-ready tear sheets: slippage, venue quality, and fat-finger alerts with audit trails.`;
    money = `$2.5k–$8k/mo per firm (tiered by seats) + $5k onboarding for historical ETL; no retail app, no “investment advice” positioning—software for professionals only.`;
  } else if (ctx.hasStudents && /code|coding|developer|programming|leetcode|hackathon/i.test(ideaLower)) {
    target = `University placement offices + bootcamp hiring partners needing signal beyond GitHub stars.`;
    product = `Employer-paid “build bench”: timed assessments + recorded rubric + ATS export—your ${e} reframed as hiring infrastructure, not student edutainment.`;
    money = `$15–$35 per assessed candidate invoiced to employer + $12k/yr campus license.`;
  } else if (ctx.hasStudents && /analytics|data|dashboard|metrics/i.test(ideaLower)) {
    target = `Accredited STEM departments that invoice employers for co-op reporting—not students as buyers.`;
    product = `Outcome dashboard: verified project artifacts + employer rubric scores + SSO—one “read-only truth” for coordinators, not another student login toy.`;
    money = `$7–$11 per student-term (institution) + $450/mo employer analytics portal.`;
  } else if (ctx.hasStudents && /exam|test prep|sat|gre|jee|quiz/i.test(ideaLower)) {
    target = `Parents paying for a named exam outcome in one metro—not national spray.`;
    product = `Locked diagnostic → sprint curriculum with proctoring hooks + parent report PDF; white-label for 2–3 local tutor centers first.`;
    money = `$69/mo parent-paid + $349 score-guarantee tier; centers rev-share 20% on digital upsell.`;
  } else if (ctx.hasStudents) {
    target = `Career services directors with employer SLAs and budget lines, not “campus ambassadors.”`;
    product = `Verified portfolio feed (single rubric, audit trail) consumed by partner employers—kills PDF theater without chasing student wallets.`;
    money = `$9–$14/student-term + $399/mo per employer partner seat.`;
  } else if (ctx.hasAi && ctx.hasB2b) {
    target = `VP Support at B2B SaaS with noisy onboarding tickets and public SLAs (sub-$50M ARR but painful CSAT).`;
    product = `Private answer desk: cites only macros + help center + CRM fields; blocks uncited generations; logs every escalation path for audit.`;
    money = `$55–$110/agent/mo + $4k implementation + overages on token audit packs.`;
  } else if (ctx.hasAi) {
    target = `Legal ops at Series B–C with vendor-security questionnaire hell—people who bill time on RFP drudgery.`;
    product = `Clause library assistant grounded in signed contract PDFs + playbooks; export with citations for in-house review—no “creative law.”`;
    money = `$750/seat/mo (minimum 8) + $0.03/page archival indexing yearly commit.`;
  } else if (ctx.hasApp && ctx.hasMarketplace) {
    target = `Single vertical mobile bookers (barbers, pet groomers) in one city until density shows.`;
    product = `Deposits + scheduling + SMS reminders + chargeback tooling—own the payment spine, not “discovery.”`;
    money = `9–11% take rate + $59/mo multi-staff tier.`;
  } else if (ctx.hasApp) {
    target = `Independent trades in one geography (HVAC, dental) where missed calls = lost revenue.`;
    product = `Missed-call text-back + review capture + same-day estimates—one workflow, not ten tabs.`;
    money = `$149/mo flat + metered SMS blocks.`;
  } else if (ctx.hasB2b) {
    target = `Plant managers reconciling supplier PDF invoices into an ERP someone already hates.`;
    product = `Inbox → structured rows with HITL queue; SLA-backed accuracy metric in the contract.`;
    money = `$3k/mo + $120/new supplier template.`;
  } else {
    target = `One department head in one industry where your ${e} kills a weekly escalation meeting—name them on slide one next time.`;
    product = `Single integration workflow: ingest → rule assist → signed audit log; screenshot-friendly KPI for their boss.`;
    money = `$18k 90-day pilot with go/no-go metric, then $7k–$15k/mo with seat-based expansion.`;
  }

  return [
    `- Target user: ${target}`,
    `- Product: ${product}`,
    `- Monetization: ${money}`,
  ].join("\n");
}

function buildScores(ctx) {
  const jitter = () => pick([-1, 0, 0, 0, 1]);
  let pain = 3;
  let diff = 3;
  let mkt = 3;
  let biz = 3;
  let exe = 3;

  if (ctx.isEmpty) {
    pain = 1;
    diff = 1;
    mkt = 1;
    biz = 1;
    exe = 2;
  } else {
    if (ctx.hasStudents) {
      pain -= 1;
      biz -= 1;
    }
    if (ctx.hasAi) {
      diff -= 1;
      mkt -= 1;
    }
    if (ctx.hasApp) diff -= 1;
    if (ctx.hasTradingFinance) {
      mkt -= 1;
      biz -= 1;
      exe -= 1;
    }
    if (ctx.hasB2b) {
      biz += 1;
      exe += 1;
    }
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
      "Paste a real idea—then we can talk like adults about markets.",
      "Bring a pitch next time; blank decks don’t clear IC.",
    ]);
  }
  if (overall >= 3.6) {
    return pick([
      "Early, but the questions you’re dodging are the right ones—answer them with revenue, not rhetoric.",
      "I’d take a second meeting only if you show me density in one pocket no one can copy overnight.",
    ]);
  }
  if (overall >= 2.8) {
    return pick([
      "Not a check—yet—because the story is half buyer, half hope; shrink the promise until it hurts.",
      "Interesting becomes fundable when one customer defends you in a renewal conversation—go earn that.",
    ]);
  }
  return pick([
    "Hard no until invoices and repeat behavior say what your slides won’t.",
    "Come back when you can point to who paid twice—not who liked the demo.",
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

  console.log(`[idea-roast]
🔥 The Problem
${opener}

${roastBody}

[market-reality-check]
${market}

[pivot-builder]
${pivot}

[fundability-score]
• Pain clarity: ${scores.pain}/5  
• Differentiation: ${scores.diff}/5  
• Market understanding: ${scores.mkt}/5  
• Business model: ${scores.biz}/5  
• Execution potential: ${scores.exe}/5  

Overall: ${scores.overall} / 5  

Verdict:
${verdict}
`);
}

process.on("SIGINT", () => {
  process.stdout.write("\n");
  process.exit(0);
});

main().catch(() => {
  console.log(`[idea-roast]
🔥 The Problem
Still running—your environment hiccuped, not the thesis.

Nothing usable landed—paste a concrete idea next run.

[market-reality-check]
- Real-world competition: Everyone already paying a vendor for “good enough.”
- Why users won’t pay or trust it yet: No proof, no budget line, no reason to risk switching.
- Risks: Time-to-copy beats time-to-traction unless you tighten the wedge.

[pivot-builder]
- Target user: One buyer title in one vertical with a quantified pain metric.
- Product: One workflow integrated where work already happens—no science fair.
- Monetization: Paid pilot with a termination clause tied to a measurable outcome.

[fundability-score]
• Pain clarity: 1/5  
• Differentiation: 1/5  
• Market understanding: 2/5  
• Business model: 1/5  
• Execution potential: 2/5  

Overall: 1.4 / 5  

Verdict:
No thesis, no term sheet—try again with receipts.
`);
});
