import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/constants";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpg";

const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#instagram", label: "Instagram" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-border bg-cream-base/95 backdrop-blur supports-[backdrop-filter]:bg-cream-base/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="Na Kasa Hair"
            className="h-10 w-auto aspect-[4/1] object-cover object-center transition-transform duration-300 hover:-rotate-2 hover:scale-105 sm:h-12"
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-primary transition-colors hover:text-pink-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-pink-primary px-8 text-base font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-pink-deep active:scale-[0.97] active:duration-100"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="size-4 text-white" />
              Agendar
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="relative inline-flex size-10 items-center justify-center rounded-full p-2 text-navy-primary md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu
            aria-hidden="true"
            className={cn(
              "absolute inset-0 m-auto size-6 transition-all duration-200",
              menuOpen ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
            )}
          />
          <X
            aria-hidden="true"
            className={cn(
              "absolute inset-0 m-auto size-6 transition-all duration-200",
              menuOpen ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0",
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out md:hidden",
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <nav
            aria-hidden={!menuOpen}
            className={cn(
              "flex flex-col gap-1 border-t border-navy-border bg-cream-base px-4 pb-4 pt-2 transition-opacity duration-300",
              menuOpen ? "opacity-100" : "opacity-0",
            )}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-2.5 text-base font-medium text-navy-primary transition-colors hover:bg-cream-alt hover:text-pink-deep"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
