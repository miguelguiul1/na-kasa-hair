import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
import { whatsappLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Mobile-only sticky bottom WhatsApp CTA bar. Hidden until the visitor
 * has scrolled past the hero section, then hidden again on desktop
 * where the header already carries a WhatsApp button. It also hides
 * itself once the footer or the contact section scrolls into view, so
 * it never doubles up with the WhatsApp CTA those sections already show.
 */
export function MobileWhatsappBar() {
  const scrolledPastHero = useScrolledPast(window.innerHeight * 0.7);
  const [footerVisible, setFooterVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const footer = document.querySelector("footer");
    const contact = document.getElementById("contato");
    const observers: IntersectionObserver[] = [];

    if (footer) {
      const observer = new IntersectionObserver(
        ([entry]) => setFooterVisible(entry.isIntersecting),
        { rootMargin: "0px 0px -10% 0px" },
      );
      observer.observe(footer);
      observers.push(observer);
    }

    if (contact) {
      const observer = new IntersectionObserver(
        ([entry]) => setContactVisible(entry.isIntersecting),
        { rootMargin: "0px 0px -10% 0px" },
      );
      observer.observe(contact);
      observers.push(observer);
    }

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const visible = scrolledPastHero && !footerVisible && !contactVisible;

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
        tabIndex={visible ? 0 : -1}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-pink-deep px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-primary/20 transition-all active:brightness-90 active:scale-[0.97] active:duration-100"
      >
        <WhatsAppIcon className="size-5 text-white" />
        Agendar no WhatsApp
      </a>
    </div>
  );
}
