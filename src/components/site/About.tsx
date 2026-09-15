import { useState, type CSSProperties } from "react";
import { PawPrint } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import salonInterior from "@/assets/gallery/salon-storefront-interior.jpg";

type PawStyle = CSSProperties & { "--paw-x"?: string };

const HOVER_PAWS: { top: string; left: string; x: string; delay: string }[] = [
  { top: "-10px", left: "4px", x: "-16px", delay: "0ms" },
  { top: "-4px", left: "22px", x: "12px", delay: "120ms" },
  { top: "6px", left: "-10px", x: "-8px", delay: "240ms" },
  { top: "-16px", left: "36px", x: "20px", delay: "360ms" },
];

export function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="sobre"
      tabIndex={-1}
      className="bg-cream-alt px-4 py-16 outline-none sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="A nossa casa" title="Sobre" />

        <div className="mt-10 space-y-5 text-center text-base leading-relaxed text-navy-primary/90 sm:text-lg">
          <p>
            Na Kasa Hair, o nome já entrega a proposta: um salão pensado para
            que você se sinta em casa. O atendimento é próximo e sem pressa,
            do jeitinho de quem recebe uma amiga para tomar um café enquanto
            cuida do cabelo.
          </p>
          <p>
            É um espaço acolhedor em Pinheiros, feito para quem quer sair
            renovada — seja com uma cor nova, mechas cheias de luz ou um
            corte que combina com a próxima fase.
          </p>
        </div>

        <img
          src={salonInterior}
          alt="Fachada do Na Kasa Hair, em Pinheiros"
          loading="lazy"
          className="mx-auto mt-10 aspect-[4/3] w-full max-w-xs rounded-2xl border border-navy-border object-cover object-top shadow-sm"
        />

        <div
          className="mx-auto mt-10 flex max-w-md items-center gap-4 rounded-2xl border border-navy-border bg-white px-6 py-5 shadow-sm"
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
        >
          <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full bg-cream-alt text-pink-deep">
            <PawPrint className="size-6" />
            {isHovered ? (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
              >
                {HOVER_PAWS.map((paw, index) => (
                  <PawPrint
                    key={index}
                    className="absolute size-3 animate-paw-pop text-pink-primary"
                    style={
                      {
                        top: paw.top,
                        left: paw.left,
                        animationDelay: paw.delay,
                        "--paw-x": paw.x,
                      } as PawStyle
                    }
                  />
                ))}
              </div>
            ) : null}
          </div>
          <p className="text-left text-sm font-medium text-navy-primary sm:text-base">
            Pet friendly — pode trazer seu companheiro de quatro patas para
            fazer companhia durante o atendimento.
          </p>
        </div>
      </div>
    </section>
  );
}
