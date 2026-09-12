import { SectionHeading } from "@/components/site/SectionHeading";
import halfUpTwist from "@/assets/gallery/half-up-twist.jpg";
import bridalMakeup from "@/assets/gallery/bridal-makeup.jpg";
import longWavyBalayage from "@/assets/gallery/long-wavy-balayage.jpg";
import selfieFront from "@/assets/gallery/selfie-front.jpg";
import updoBun from "@/assets/gallery/updo-bun.jpg";
import nailsDetail from "@/assets/gallery/nails-detail.jpg";
import salonInteriorStairs from "@/assets/gallery/salon-interior-stairs.jpg";

const GALLERY_ITEMS = [
  { src: halfUpTwist, alt: "Coque semipreso com torção, resultado de coloração e mechas Na Kasa Hair" },
  { src: bridalMakeup, alt: "Maquiagem e penteado para noiva feitos no Na Kasa Hair" },
  { src: longWavyBalayage, alt: "Cabelo longo ondulado com balayage feito no Na Kasa Hair" },
  { src: selfieFront, alt: "Retrato de cliente mostrando o resultado das mechas Na Kasa Hair" },
  { src: updoBun, alt: "Coque baixo elegante para evento, penteado Na Kasa Hair" },
  { src: nailsDetail, alt: "Unhas em tom terracota, referência de cor trabalhada no salão" },
  { src: salonInteriorStairs, alt: "Interior aconchegante do Na Kasa Hair, com plantas e escada de madeira" },
];

export function Gallery() {
  return (
    <section id="galeria" className="bg-cream-base px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Um gostinho do salão"
          title="Galeria"
          description="Alguns trabalhos feitos por aqui — cor, corte e finalização."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <img
              key={item.src}
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl border border-navy-border object-cover shadow-sm transition-transform duration-300 hover:scale-[1.03]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
