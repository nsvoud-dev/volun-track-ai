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

2. **Environment variables** (create `.env.local` when you integrate APIs)

   - `NEXT_PUBLIC_SOLANA_RPC_URL` – Solana RPC endpoint
   - `GEMINI_API_KEY` – Google AI Studio key for report generation

3. **Run development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the Donor Transparency Dashboard.

4. **Wallet connection** – The header includes a “Connect Wallet” button (UI only for now). Wiring to Phantom/Solflare and passing the public key into `SolanaAgent` is the next step.

---

## SolanaAgent API (placeholders)

- **`monitorTransactions()`** – Returns a list of transaction summaries for the configured wallet.
- **`executeAutoSwap(inputMint, amount, slippageBps?)`** – Swaps a given token to USDC via Jupiter.
- **`generateAIReport(transactions, periodLabel?)`** – Returns a Gemini-generated summary and insights for the given transactions.

Implementations are stubbed in `src/lib/agent.ts` and ready for RPC, Jupiter, and Gemini integration.

---

## License

MIT. Built for the Solana Foundation Ukraine initiative.
