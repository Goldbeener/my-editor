export interface Fn {
  (...args: unknown[]): void;
}
// debounce
export function debounce(fn: Fn, delay?: number): Fn {
  let timeout: NodeJS.Timeout;
  return function (...args: unknown[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay || 100);
  };
}

// throttle
export function throttle(fn: Fn, delay = 100): Fn {
  let last: number = Date.now();
  return function (...args: unknown[]) {
    if (Date.now() - last >= delay) {
      fn(...args);
      last = Date.now();
    }
  };
}

