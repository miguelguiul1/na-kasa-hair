import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { BUSINESS } from "@/lib/constants";

export function InstagramBlock() {
  return (
    <section
      id="instagram"
      className="bg-cream-base px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-5">
        <div className="flex size-12 items-center justify-center rounded-full bg-white text-pink-primary ring-1 ring-navy-border">
          <InstagramIcon className="size-6" />
        </div>
        <h2 className="text-2xl font-semibold text-navy-primary sm:text-3xl">
          Siga {BUSINESS.instagramHandle}
        </h2>
        <p className="max-w-md text-base text-navy-muted">
          Acompanhe os trabalhos, bastidores e novidades do salão no
          Instagram.
        </p>
        <Button
          asChild
          variant="outline"
          className="rounded-full border-navy-primary text-navy-primary transition-all hover:bg-navy-primary hover:text-white active:scale-[0.97] active:duration-100"
        >
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="size-4" />
            Ver no Instagram
          </a>
        </Button>
      </div>
    </section>
  );
}
