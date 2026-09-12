import { Separator } from "@/components/ui/separator";
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

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="font-script text-2xl text-pink-deep sm:text-3xl">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold text-navy-primary sm:text-4xl">
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
        className="h-1.5 w-14 rounded-full bg-navy-primary sm:w-16"
      />
      {description ? (
        <p className="max-w-2xl text-base text-navy-muted">{description}</p>
      ) : null}
    </div>
  );
}
