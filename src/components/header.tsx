"use client";

import Link from "next/link";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-dashboard-border bg-dashboard-bg/95 backdrop-blur supports-[backdrop-filter]:bg-dashboard-bg/80">
      <div className="container flex h-14 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-zinc-100 hover:text-solana-green transition-colors"
        >
          <span className="bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent font-bold">
            VolunTrack AI
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm text-dashboard-muted hover:text-zinc-100 transition-colors"
          >
            Dashboard
          </Link>
          <Button variant="outline" size="sm" className="gap-2">
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </Button>
        </nav>
      </div>
    </header>
  );
}
