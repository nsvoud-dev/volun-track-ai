# VolunTrack AI

**Autonomous Treasury Agent for Ukrainian Volunteers**

VolunTrack AI is an **AI-native dApp** built for the Solana Foundation Ukraine ecosystem. It monitors Solana wallet transactions, automatically swaps non-stablecoin donations to USDC via Jupiter, and generates human-readable financial reports from on-chain data using the Gemini API—so volunteer treasuries stay transparent and auditable.

---

## Mission

To give Ukrainian volunteer organizations a **transparent, automated treasury** on Solana:

- **Monitor** – Track incoming and outgoing Solana transactions in real time.
- **Stabilize** – Auto-swap donated tokens to USDC for predictable reporting and operations.
- **Report** – Use AI (Gemini) to turn raw on-chain data into clear, donor-friendly summaries.

By combining Solana’s speed and low fees with Jupiter’s liquidity and Gemini’s language capabilities, VolunTrack AI helps maintain donor trust and operational clarity.

---

## Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| **Frontend** | Next.js 14 (App Router), Tailwind CSS, Lucide React, Shadcn/UI |
| **Blockchain** | Solana (`@solana/web3.js`), Jupiter (`@jup-ag/core` or `@jup-ag/api`) for swaps |
| **AI**       | Google Generative AI SDK (Gemini)   |
| **Language** | TypeScript                          |

---

## Architecture (High Level)

```
┌─────────────────────────────────────────────────────────────────┐
│  Donor Transparency Dashboard (Next.js 14, dark theme)           │
│  – Wallet connection (UI)                                        │
│  – Transaction list & AI report display                          │
└────────────────────────────┬────────────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────────────┐
│  SolanaAgent (src/lib/agent.ts)                                  │
│  – monitorTransactions()   → fetch & normalize wallet activity   │
│  – executeAutoSwap()       → Jupiter swap to USDC                │
│  – generateAIReport()      → Gemini summary from tx data         │
└────────────────────────────┬────────────────────────────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        ▼                    ▼                    ▼
   Solana RPC           Jupiter API           Gemini API
   (web3.js)            (@jup-ag/core)        (Generative AI SDK)
```

- **Frontend**: App Router under `src/app`, reusable UI in `src/components`, Shadcn-style components in `src/components/ui`.
- **Logic**: Agent and shared utilities in `src/lib`; custom hooks in `src/hooks` for wallet, reports, and transactions.

---

## Project Structure

```
src/
├── app/              # Next.js App Router (layout, page, globals)
├── components/       # Header, dashboard, UI primitives (Button, etc.)
├── lib/              # agent.ts (SolanaAgent), utils
└── hooks/            # Custom hooks (e.g. useWallet, useAgentReport)
```

---

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Environment variables** (copy `.env.example` to `.env.local`)

   - `NEXT_PUBLIC_SOLANA_RPC_URL` – (optional) Solana RPC endpoint; defaults to Devnet
   - `NEXT_PUBLIC_GEMINI_API_KEY` – Google AI Studio key for AI report generation (Ukrainian summaries)

3. **Run development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the Donor Transparency Dashboard.

4. **Wallet connection** – Connect via Phantom, Solflare, or any Wallet Standard–compatible wallet. The dashboard shows real SOL balance and supports “Generate Report” for AI summaries in Ukrainian.

5. **Mock mode** – If the connected wallet has no transactions (or no Gemini API key), the AI report still returns a short Ukrainian message so grant judges and demos always have something to show.

---

## SolanaAgent API

- **`fetchRecentTransactions(limit?, publicKeyOverride?)`** – Returns the last N transaction summaries (signature, timestamp) for the wallet.
- **`monitorTransactions()`** – Same as `fetchRecentTransactions(5)`.
- **`executeAutoSwap(inputMint, amount, slippageBps?)`** – (TODO) Swaps a given token to USDC via Jupiter.
- **`generateAIReport(transactions, periodLabel?, apiKey?)`** – Uses Gemini to produce a 2–3 sentence treasury summary in Ukrainian (“Volunteer’s Treasury Assistant”). Uses `NEXT_PUBLIC_GEMINI_API_KEY` if `apiKey` is omitted. Mock mode when there are no transactions.

---

## License

MIT. Built for the Solana Foundation Ukraine initiative.
