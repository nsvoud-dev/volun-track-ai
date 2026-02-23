# VolunTrack AI

## Autonomous Treasury Agent for Ukrainian Volunteers

> **Mission-driven. AI-native. Built for the Solana Foundation Ukraine ecosystem.**

VolunTrack AI gives volunteer organizations in Ukraine a **transparent, automated treasury** on Solana—combining real-time monitoring, AI-powered reporting (Gemini), and intelligent swap simulation (Jupiter) so donors trust the numbers and treasurers stay in control.

*We ship with **Speed > Perfection**: a working MVP first, then iterate with the community.*

---

## 🔍 The Problem: Trust & Volatility

Crypto donations have become critical for Ukrainian volunteers, but two gaps block wider adoption:

1. **Trust** — Donors and auditors need clear, human-readable answers: *Where did the funds go? What’s the current position?* Raw chain data alone isn’t enough.
2. **Volatility** — Donations arrive in SOL, USDT, and other tokens. Treasuries need predictable, stable reporting (e.g. USDC) without manual conversion and opaque spreadsheets.

Without transparency and stability, volunteer treasuries struggle to scale donor trust and operational clarity.

---

## 💡 The Solution: AI + DeFi, Built for Volunteers

VolunTrack AI closes both gaps:

- **AI (Gemini)** turns on-chain history into short, donor-friendly financial summaries in Ukrainian—a “Volunteer’s Treasury Assistant” that explains activity in plain language.
- **PayFi / Jupiter** provides swap infrastructure: we simulate SOL→USDC conversion (MVP) and will enable real mainnet swaps so treasuries can stabilize donations at the best rates.

By combining **Solana’s speed and low fees**, **Jupiter’s liquidity**, and **Gemini’s language model**, we keep volunteer treasuries transparent, auditable, and ready for real-world use.

---

## ✨ Key Features

| Feature | Description |
|--------|-------------|
| **Real-time Wallet Monitoring** | Connect any Wallet Standard–compatible wallet (Phantom, Solflare). View live SOL balance on **Devnet** (Mainnet-ready). Refresh balance on demand; track incoming and outgoing flows. |
| **AI-Driven Financial Reporting** | One-click **“Generate Report”** sends the last 5 transactions (and optional swap value) to **Gemini 1.5 Flash**. Get a 2–3 sentence treasury summary in Ukrainian. Works with mock data when the API is unavailable so demos and judges always see a result. |
| **Intelligent Treasury Management** | **“Check Best Swap”** uses the **Jupiter V6** quote API (via a local proxy) to show *Estimated Swap Value (MVP Simulation)*: how much USDC the current SOL balance could convert to. Real mainnet swaps planned for Phase 2. |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | Next.js 14 (App Router), Tailwind CSS, Lucide React, Shadcn/UI |
| **Blockchain** | Solana (`@solana/web3.js`), Wallet Adapter (Phantom, Solflare) |
| **DeFi / Swaps** | Jupiter API (V6 quote); proxy at `/api/swap` for CORS-free access |
| **AI** | Google Generative AI SDK — **Gemini 1.5 Flash** |
| **Language** | TypeScript |

---

## 🗺 Roadmap

### 📍 Phase 1 — MVP (Current)

- Wallet integration (Devnet); real-time balance and transaction list  
- AI reports (Gemini 1.5 Flash) with Ukrainian summaries and fallback when API is down  
- Swap **simulation** via Jupiter V6 (quote only; no on-chain swap)  
- Proof-of-Concept UI and copy for Solana Foundation Ukraine Grants  

### 📍 Phase 2 — Next 4 Weeks

- **Real mainnet swaps** (Jupiter swap execution) for SOL → USDC  
- Multi-wallet and multi-token support  
- **Automated Telegram reporting** for daily/weekly treasury digests  

### 📍 Phase 3 — Future

- **DAO-style governance** for fund allocation and approval flows  
- **Mobile integration** (PWA or native) for field volunteers  

---

## 🌍 Mission & Impact

VolunTrack AI is built to strengthen the **Ukrainian volunteer ecosystem** and **decentralization**:

- **Transparency** — Every donor and auditor can verify flows on-chain and read AI-generated summaries instead of raw tx hashes.  
- **Stability** — Swap simulation (and soon real swaps) help treasuries think in stable terms (e.g. USDC) and reduce volatility risk.  
- **Scale** — Automation (monitoring + reporting + future swaps) lets small teams operate like professional treasuries.

We believe crypto can power humanitarian work without sacrificing trust or clarity. This project is a Proof-of-Concept for the Solana Foundation Ukraine Grants; real on-chain swap execution is planned after audit and approval.

---

## 🚀 How to Run

### Prerequisites

- **Node.js** 18+  
- **npm** (or yarn/pnpm)

### Setup

1. **Clone and install**

   ```bash
   git clone <your-repo-url>
   cd voluntrack-ai
   npm install
   ```

2. **Environment variables**

   Create a `.env.local` in the project root (see `.env.example` if present):

   ```env
   # Optional; defaults to Devnet
   NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com

   # Required for AI report generation (Ukrainian summaries)
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
   ```

   Get a Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

3. **Start the app**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

### Using the Dashboard

- **Connect wallet** (Phantom, Solflare, etc.) — ensure the wallet is set to **Devnet** to see test SOL.  
- Use **“Get Test SOL”** (faucet link) if the balance is zero.  
- **“Check Best Swap”** — shows estimated USDC value (real Jupiter quote or demo price if the API is down).  
- **“Generate Report”** — fetches last 5 transactions and asks Gemini for a short Ukrainian treasury summary. If the API fails, a friendly fallback message is still shown.

---

## Project Structure

```
src/
├── app/                 # Next.js App Router (layout, page, globals)
│   └── api/swap/        # Jupiter quote proxy (avoids CORS)
├── components/          # Header, wallet provider, UI primitives
├── lib/                 # SolanaAgent (monitor, swap quote, AI report)
└── hooks/               # useIsMounted, etc.
```

---

## License

MIT. Built for the **Solana Foundation Ukraine** initiative.
