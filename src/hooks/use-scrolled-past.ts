import { useEffect, useState } from "react";

/**
 * Returns true once the page has been scrolled past `thresholdPx`.
 * Used to reveal the mobile sticky WhatsApp CTA bar only after the
 * hero section has scrolled out of view.
 */
export function useScrolledPast(thresholdPx: number) {
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPast(window.scrollY > thresholdPx);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [thresholdPx]);

  return scrolledPast;
}
