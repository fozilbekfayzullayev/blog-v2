"use client";

import { useRef, useState, useLayoutEffect } from "react";

export function useIsTruncated<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    setIsTruncated(el.scrollHeight > el.clientHeight);
  }, []);

  return { ref, isTruncated };
}
