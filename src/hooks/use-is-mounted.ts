"use client";

import { useEffect, useState } from "react";

/**
 * Returns true only after the component has mounted (client-side).
 * Use to avoid hydration mismatch when rendering wallet or browser-only UI.
 */
export function useIsMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
