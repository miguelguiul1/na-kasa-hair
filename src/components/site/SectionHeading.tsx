import { Separator } from "@/components/ui/separator";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  accentWord?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

/**
 * Shared H2 pattern: optional script eyebrow, Poppins headline (one word
 * can be rendered in pink-primary), and the recurring thick navy divider
 * bar that echoes the logo's divider line.
 */
export function SectionHeading({
  eyebrow,
  title,
  accentWord,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const parts = accentWord ? title.split(accentWord) : [title];
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "font-script text-2xl text-pink-deep transition-all duration-[400ms] ease-out sm:text-3xl",
            inView ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-semibold text-navy-primary transition-all duration-[400ms] ease-out sm:text-4xl",
          inView ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
        )}
      >
        {accentWord ? (
          <>
            {parts[0]}
            <span className="text-pink-primary">{accentWord}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      <Separator
        orientation="horizontal"
        className={cn(
          "h-1.5 w-14 origin-left rounded-full bg-navy-primary transition-transform duration-500 ease-out sm:w-16",
          inView ? "scale-x-100" : "scale-x-0",
        )}
        style={{ transitionDelay: "150ms" }}
      />
      {description ? (
        <p className="max-w-2xl text-base text-navy-muted">{description}</p>
      ) : null}
    </div>
  );
}
