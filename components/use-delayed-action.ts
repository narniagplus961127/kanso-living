'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function useDelayedAction(delay = 420) {
  const [pending, setPending] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  const run = useCallback(
    (action: () => void) => {
      if (timerRef.current) return;

      setPending(true);
      timerRef.current = setTimeout(() => {
        action();
        timerRef.current = null;
        setPending(false);
      }, delay);
    },
    [delay],
  );

  return { pending, run };
}
