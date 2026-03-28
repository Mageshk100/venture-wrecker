# 🔥 Venture Wrecker

> *"The most valuable feedback you'll get before losing $2M of someone else's money."*

**Venture Wrecker** is a brutally honest AI startup validator agent built on the [gitagent](https://github.com/open-gitagent/gitagent) standard. Powered by **Vera** — a sharp-tongued VC persona with 20 years of pattern-matching experience — it tears your startup idea apart, then helps you rebuild it into something fundable.

---

## 🧠 What It Does

Most founders get feedback from friends, family, and accelerator mentors who are incentivized to be kind. Vera is not.

Venture Wrecker runs your startup idea through 4 brutal skills:

| Skill | What It Does |
|---|---|
| 🔥 **Idea Roast** | Identifies the fatal flaw in your pitch. No sugarcoating. |
| 📊 **Market Reality Check** | TAM/SAM/SOM breakdown, real competition, timing analysis |
| 🔄 **Pivot Builder** | Finds the better business hiding inside your bad pitch |
| 💯 **Fundability Score** | 6-dimension scorecard with investor readiness verdict |

---

## 🚀 Quick Start

### Run with gitclaw

Set your [Groq](https://console.groq.com/) API key, then:

```bash
export GROQ_API_KEY=your-key-here   # Windows PowerShell: $env:GROQ_API_KEY = "your-key-here"
npm install gitclaw
npx gitagent validate
npx gitclaw run --agent . --input "My startup idea: [your idea here]"
```

Default model is `groq:llama-3.3-70b-versatile` (see `agent.yaml`). Override on the CLI if needed: `npx gitclaw run --agent . --model groq:openai/gpt-oss-120b --input "..."`.

### Deploy with clawless (browser)

```bash
npm install clawless
npx clawless deploy
```

---

## 💬 Example Interaction

**User:** My idea is an app that helps people find the best coffee shops to work from, with crowd-sourced wifi speed ratings and noise levels.

**Vera:**
> You've built the fourth version of this app. The other three died not because the product was bad — but because no one opens an app to find a coffee shop more than twice before they have their three spots and they're done. You're solving a one-time discovery problem in a world that already has Google Maps reviews, Yelp, and Foursquare's ghost.
>
> What you got right: remote work is genuinely a pain point and "third places" are having a cultural moment.
>
> The pivot? Stop targeting wanderers. Target the coffee shops themselves. Charge them $99/month to be listed as "remote-work certified" with your quality badge. B2B SaaS hiding inside a B2C app...

---

## 📁 Agent Structure

```
venture-wrecker/
├── agent.yaml                          # Manifest
├── SOUL.md                             # Vera's identity & values
├── RULES.md                            # Hard constraints
├── skills/
│   ├── idea-roast/SKILL.md
│   ├── market-reality-check/SKILL.md
│   ├── pivot-builder/SKILL.md
│   └── fundability-score/SKILL.md
└── README.md
```

---

## 🏗️ Built With

- [gitagent](https://github.com/open-gitagent/gitagent) — Agent standard
- [gitclaw](https://github.com/open-gitagent/gitclaw) — Runtime SDK
- [clawless](https://github.com/open-gitagent/clawless) — Serverless deployment
- Groq (`llama-3.3-70b-versatile` via `GROQ_API_KEY`)

---

*Built for the gitagent hackathon. Your idea deserves honest feedback.*
