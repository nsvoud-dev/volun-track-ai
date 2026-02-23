import {
  BarChart3,
  FileText,
  RefreshCw,
  Shield,
  Wallet,
} from "lucide-react";

export default function DonorTransparencyDashboard() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="rounded-2xl border border-dashboard-border bg-dashboard-card p-8 md:p-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
              Donor Transparency Dashboard
            </h1>
            <p className="mt-2 max-w-xl text-dashboard-muted">
              AI-native treasury for Ukrainian volunteers. Monitor Solana
              donations, auto-convert to USDC, and generate human-readable
              financial reports.
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-solana text-dashboard-bg">
            <Shield className="h-6 w-6" />
          </div>
        </div>
      </section>

      {/* Stats / feature cards */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Wallet Monitor",
            description: "Track incoming & outgoing Solana transactions",
            icon: Wallet,
            accent: "text-solana-purple",
          },
          {
            title: "Auto-Swap",
            description: "Convert non-stablecoins to USDC via Jupiter",
            icon: RefreshCw,
            accent: "text-solana-green",
          },
          {
            title: "AI Reports",
            description: "Gemini-powered human-readable summaries",
            icon: FileText,
            accent: "text-solana-purple-light",
          },
          {
            title: "On-Chain Data",
            description: "Transparent, verifiable donation history",
            icon: BarChart3,
            accent: "text-solana-green-light",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-dashboard-border bg-dashboard-card p-6 transition-colors hover:border-solana-purple/50"
          >
            <card.icon className={`h-8 w-8 ${card.accent}`} />
            <h3 className="mt-3 font-semibold text-zinc-100">{card.title}</h3>
            <p className="mt-1 text-sm text-dashboard-muted">
              {card.description}
            </p>
          </div>
        ))}
      </section>

      {/* CTA / status */}
      <section className="rounded-2xl border border-dashboard-border bg-dashboard-card p-8">
        <h2 className="text-xl font-semibold text-zinc-100">
          Get started
        </h2>
        <p className="mt-2 text-dashboard-muted">
          Connect your Solana wallet above to enable transaction monitoring and
          AI report generation. VolunTrack AI runs as an autonomous agent for
          Solana Foundation Ukraine initiatives.
        </p>
      </section>
    </div>
  );
}
