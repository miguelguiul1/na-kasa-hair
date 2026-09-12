import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
import { whatsappLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Mobile-only sticky bottom WhatsApp CTA bar. Hidden until the visitor
 * has scrolled past the hero section, then hidden again on desktop
 * where the header already carries a WhatsApp button.
 */
export function MobileWhatsappBar() {
  const visible = useScrolledPast(window.innerHeight * 0.7);

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
        className="flex w-full items-center justify-center gap-2 rounded-full bg-pink-primary px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-primary/20 transition-colors active:bg-pink-deep"
      >
        <WhatsAppIcon className="size-5 text-white" />
        Agendar no WhatsApp
      </a>
    </div>
  );
}
