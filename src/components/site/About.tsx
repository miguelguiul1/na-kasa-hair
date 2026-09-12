import { PawPrint } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

export function About() {
  return (
    <section id="sobre" className="bg-cream-alt px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
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

        <div className="mx-auto mt-10 flex max-w-md items-center gap-4 rounded-2xl border border-navy-border bg-white px-6 py-5 shadow-sm">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-cream-alt text-pink-deep">
            <PawPrint className="size-6" />
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
