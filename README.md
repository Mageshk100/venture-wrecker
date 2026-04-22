# 🚀 Venture Wrecker

> Kill bad ideas before they kill your startup.

Venture Wrecker is an AI agent that thinks like a venture capitalist — not a chatbot. It evaluates startup ideas by identifying what will fail, why it fails, and how to turn it into something fundable.

---

##  Overview

Most startup ideas don’t fail because of execution. They fail because they were weak from the start.

Venture Wrecker provides direct, structured, and realistic feedback — similar to real investor conversations, but much earlier.

---

##  What It Does

Given any startup idea, the agent:

* 🔍 Identifies the core flaw in the concept
* 🌍 Evaluates real-world viability (market, competition, user behavior)
* 🔄 Suggests a clear and actionable pivot
* 📊 Provides a fundability score with reasoning

The goal is not to validate ideas — it is to **challenge them**.

---

##  How It Works

The agent is designed using the gitagent standard:

* `agent.yaml` → identity and capabilities
* `SOUL.md` → personality (Vera — a direct, experienced VC)
* `RULES.md` → strict behavioral constraints
* `skills/` → modular reasoning steps

To ensure reliability in an online hackathon environment, the project includes a local Node.js runner:

```bash
npm install
npm start
```

This allows anyone to run the project instantly without API keys or external dependencies.

---

## 💬 Example Output

**Input:**
My idea is an app that helps people find the best coffee shops to work from

**Output:**

🔥 The Problem
This is not a startup — it’s a one-time utility.

You’re solving a discovery problem that users face once, not repeatedly. After finding a few reliable places, they stop using your app entirely.

What works: remote work is growing, and flexible workspaces are in demand.

Why it fails: platforms like Google Maps already dominate discovery, and your product does not create ongoing engagement or defensibility.

The pivot: stop targeting users. Target coffee shops. Offer a “remote-work certified” listing and charge a monthly subscription.

📊 Fundability Score: 4.2 / 10
Verdict: weak as a consumer app, but viable as a niche B2B product.

---

## 📁 Project Structure

```
venture-wrecker/
├── agent.yaml
├── SOUL.md
├── RULES.md
├── skills/
│   ├── idea-roast/
│   ├── market-reality-check/
│   ├── pivot-builder/
│   └── fundability-score/
├── run.js
├── package.json
└── README.md
```

---

## 🌟 Why It Stands Out

* 🧠 Focuses on decision-making, not generic responses
* 💼 Simulates how real investors evaluate ideas
* 🎯 Provides specific, actionable feedback
* ⚡ Combines structured reasoning with strong personality

---

## 🎯 Use Cases

* Startup idea validation
* Hackathon project refinement
* Early-stage product direction
* Learning how investors think

---

## 🏁 Summary

Venture Wrecker helps founders avoid building bad startups by exposing weaknesses early and forcing clarity.

---

Built for the gitagent hackathon.
