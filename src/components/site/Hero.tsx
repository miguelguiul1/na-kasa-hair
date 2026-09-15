import { MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { ratingLabel, whatsappLink } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream-base px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] size-72 rounded-full bg-pink-primary/10 blur-3xl sm:size-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-[-10%] size-72 rounded-full bg-cream-alt blur-3xl sm:size-96"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <span className="font-script text-3xl text-pink-deep sm:text-4xl">
          Bem-vinda à
        </span>

        <h1 className="text-4xl font-semibold leading-tight text-navy-primary sm:text-5xl lg:text-6xl">
          Na Kasa <span className="text-pink-primary">Hair</span>
        </h1>

        <p className="max-w-xl text-lg text-navy-primary/90 sm:text-xl">
          Coloração criativa, mechas e cortes femininos em um salão que
          parece a sua própria casa.
        </p>

        <Badge
          variant="outline"
          className="h-auto gap-1.5 rounded-full border-navy-border bg-white px-4 py-2 text-sm font-medium text-navy-primary shadow-sm"
        >
          <Star className="size-4 fill-pink-primary text-pink-primary" />
          {ratingLabel} no Google
        </Badge>

        <Button
          asChild
          size="lg"
          className="rounded-full bg-pink-deep px-8 text-base font-semibold text-white shadow-md shadow-pink-primary/25 transition-all hover:-translate-y-0.5 hover:brightness-90 active:scale-[0.97] active:duration-100"
        >
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="size-5 text-white" />
            Agendar no WhatsApp
          </a>
        </Button>

        <div className="flex items-center gap-1.5 text-sm text-navy-muted">
          <MapPin className="size-4 text-pink-deep" />
          Pinheiros, São Paulo
        </div>
      </div>
    </section>
  );
}
