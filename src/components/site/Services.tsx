import { Palette, Scissors, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/site/SectionHeading";

const SERVICES = [
  {
    icon: Palette,
    title: "Coloração",
    description:
      "Cor personalizada para o seu tom de pele e estilo, do clássico ao mais ousado, sempre com muito cuidado com a saúde do fio.",
  },
  {
    icon: Sparkles,
    title: "Mechas",
    description:
      "Técnicas de iluminação e mechas criativas que trazem luz e movimento ao cabelo, com um resultado natural e cheio de personalidade.",
  },
  {
    icon: Scissors,
    title: "Cortes Femininos",
    description:
      "Cortes pensados para valorizar o formato do rosto e a rotina de cada cliente, em um atendimento tranquilo e sem pressa.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-cream-base px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Nossas especialidades"
          title="Serviços"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="rounded-2xl border-0 px-2 py-2 shadow-[0_10px_30px_-15px_rgba(30,42,94,0.25)] ring-1 ring-navy-border"
            >
              <CardHeader>
                <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-cream-alt text-pink-deep">
                  <Icon className="size-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-navy-primary">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-navy-muted">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
