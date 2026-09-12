import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/constants";
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
            className="h-10 w-auto aspect-[4/1] object-cover object-center sm:h-12"
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-primary transition-colors hover:text-pink-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-full bg-pink-primary px-5 text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-pink-deep"
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
          className="inline-flex items-center justify-center rounded-full p-2 text-navy-primary md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {menuOpen ? (
        <nav className="flex flex-col gap-1 border-t border-navy-border bg-cream-base px-4 pb-4 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-2.5 text-base font-medium text-navy-primary transition-colors hover:bg-cream-alt hover:text-pink-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
