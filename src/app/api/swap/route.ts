import { NextRequest, NextResponse } from "next/server";

const JUPITER_QUOTE_URL = "https://quote-api.jup.ag/v6/quote";
const FETCH_TIMEOUT_MS = 5000;
/** Demo fallback: 1 SOL ≈ 140 USDC. outAmount in USDC raw (6 decimals). */
const MOCK_SOL_TO_USDC = 140;

/**
 * Proxy to Jupiter V6 Quote API. On failure (502, 504, timeout, network), returns a mock quote
 * so "Check Best Swap" always shows a value (real or demo).
 * GET /api/swap?inputMint=...&outputMint=...&amount=...&slippageBps=50
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const inputMint = searchParams.get("inputMint");
  const outputMint = searchParams.get("outputMint");
  const amountParam = searchParams.get("amount");
  const slippageBps = searchParams.get("slippageBps") ?? "50";

  if (!inputMint || !outputMint || !amountParam) {
    return NextResponse.json(
      { error: "Missing required params: inputMint, outputMint, amount" },
      { status: 400 }
    );
  }

  const amount = Math.floor(Number(amountParam));
  if (!Number.isFinite(amount) || amount <= 0) {
    return NextResponse.json(
      { error: "Invalid amount" },
      { status: 400 }
    );
  }

  const params = new URLSearchParams({
    inputMint,
    outputMint,
    amount: String(amount),
    slippageBps,
  });
  const url = `${JUPITER_QUOTE_URL}?${params.toString()}`;

  /** Mock response: SOL → USDC at fixed rate. outAmount in raw USDC (6 decimals). */
  const mockOutAmount = Math.floor((amount / 1e9) * MOCK_SOL_TO_USDC * 1e6);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      signal: controller.signal,
      next: { revalidate: 0 },
    });
    clearTimeout(timeoutId);

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      // 502, 504, or any non-OK: return mock so UI always has a value
      return NextResponse.json({
        outAmount: String(mockOutAmount),
        isMock: true,
      });
    }

    return NextResponse.json(data);
  } catch (_err) {
    // Timeout, network error, or parse error: return mock
    return NextResponse.json({
      outAmount: String(mockOutAmount),
      isMock: true,
    });
  }
}
