import { Camera } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

const PLACEHOLDER_COUNT = 6;

function GalleryPlaceholder({ index }: { index: number }) {
  return (
    <div
      className="flex aspect-[4/5] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-navy-border bg-cream-alt text-navy-muted"
      role="img"
      aria-label={`Espaço reservado para foto ${index + 1} da galeria — a substituir por foto real do Instagram`}
    >
      <Camera className="size-8" />
      <span className="text-sm font-medium">Foto em breve</span>
    </div>
  );
}

export function Gallery() {
  return (
    <section id="galeria" className="bg-cream-base px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Um gostinho do salão"
          title="Galeria"
          description="TODO: substituir os espaços abaixo pelas fotos reais do salão e dos trabalhos (Instagram @na_kasahair)."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
            <GalleryPlaceholder key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
