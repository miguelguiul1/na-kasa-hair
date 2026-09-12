import { Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  BUSINESS,
  googleMapsSearchLink,
  whatsappLink,
} from "@/lib/constants";

export function Contact() {
  return (
    <section id="contato" className="bg-cream-alt px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Vamos marcar?" title="Contato" />

        <div className="mx-auto mt-10 flex max-w-xl flex-col gap-5 rounded-2xl border border-navy-border bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-pink-deep" />
            <div>
              <p className="text-base font-medium text-navy-primary">
                {BUSINESS.addressLine}
              </p>
              <a
                href={googleMapsSearchLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-pink-deep underline-offset-4 hover:underline"
              >
                Ver no mapa
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="size-5 shrink-0 text-pink-deep" />
            <p className="text-base text-navy-primary">
              {BUSINESS.phoneDisplay}
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 size-5 shrink-0 text-pink-deep" />
            <p className="text-base text-navy-muted">
              Horário de funcionamento: <span className="italic">TODO — informar ao cliente</span>
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="mt-2 h-auto self-center rounded-full bg-pink-primary px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-pink-primary/25 transition-all hover:-translate-y-0.5 hover:bg-pink-deep"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="size-5 text-white" />
              Chamar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
