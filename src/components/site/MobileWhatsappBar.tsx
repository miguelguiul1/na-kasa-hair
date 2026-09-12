import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
import { whatsappLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Mobile-only sticky bottom WhatsApp CTA bar. Hidden until the visitor
 * has scrolled past the hero section, then hidden again on desktop
 * where the header already carries a WhatsApp button. It also hides
 * itself once the footer scrolls into view so it never overlaps the
 * footer content (the footer's own WhatsApp/contact info takes over).
 */
export function MobileWhatsappBar() {
  const scrolledPastHero = useScrolledPast(window.innerHeight * 0.7);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const visible = scrolledPastHero && !footerVisible;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-navy-border bg-cream-base/95 p-3 backdrop-blur transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-pink-primary px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-primary/20 transition-all active:bg-pink-deep active:scale-[0.97] active:duration-100"
      >
        <WhatsAppIcon className="size-5 text-white" />
        Agendar no WhatsApp
      </a>
    </div>
  );
}
