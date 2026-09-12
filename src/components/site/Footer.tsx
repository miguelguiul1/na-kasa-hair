import { PawPrint } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { BUSINESS } from "@/lib/constants";
import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-navy-primary px-4 py-10 text-cream-base sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <img
          src={logo}
          alt="Na Kasa Hair"
          className="h-14 w-auto aspect-[4/1] rounded-md object-cover object-center"
        />
        <p className="max-w-md text-sm text-cream-base/80">
          {BUSINESS.addressLine}
        </p>
        <p className="text-sm text-cream-base/80">{BUSINESS.phoneDisplay}</p>
        <a
          href={BUSINESS.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-cream-base/90 hover:text-pink-deep"
        >
          <InstagramIcon className="size-4" />
          {BUSINESS.instagramHandle}
        </a>
        <div className="relative mt-2 h-px w-16 bg-cream-base/20">
          <PawPrint
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 bg-navy-primary text-cream-base/40"
          />
        </div>
        <p className="text-xs text-cream-base/60">
          © {new Date().getFullYear()} {BUSINESS.name}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
