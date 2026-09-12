import { Palette, Scissors, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/site/SectionHeading";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    icon: Palette,
    title: "Coloração",
    description:
      "Cor personalizada para o seu tom de pele e estilo, do clássico ao mais ousado, sempre com muito cuidado com a saúde do fio.",
    circleClassName: "transition-colors duration-[400ms] group-hover:bg-pink-primary/15",
    iconClassName: "transition-transform duration-[400ms] group-hover:-rotate-[8deg]",
  },
  {
    icon: Sparkles,
    title: "Mechas",
    description:
      "Técnicas de iluminação e mechas criativas que trazem luz e movimento ao cabelo, com um resultado natural e cheio de personalidade.",
    circleClassName: "",
    iconClassName: "transition-transform duration-500 group-hover:scale-110",
  },
  {
    icon: Scissors,
    title: "Cortes Femininos",
    description:
      "Cortes pensados para valorizar o formato do rosto e a rotina de cada cliente, em um atendimento tranquilo e sem pressa.",
    circleClassName: "",
    iconClassName: "group-hover:[animation:scissor-snip_400ms_ease-in-out]",
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

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description, circleClassName, iconClassName }) => (
            <Card
              key={title}
              className="group rounded-2xl border border-navy-border px-2 py-2 shadow-sm"
            >
              <CardHeader>
                <div
                  className={cn(
                    "mb-2 flex size-12 items-center justify-center rounded-full bg-cream-alt text-pink-deep",
                    circleClassName,
                  )}
                >
                  <Icon className={cn("size-6", iconClassName)} />
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
