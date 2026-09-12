import { Star } from "lucide-react";
import { ratingLabel } from "@/lib/constants";

export function SocialProofStrip() {
  return (
    <section className="border-y border-navy-border bg-white py-6">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 text-center">
        <Star className="size-5 fill-pink-primary text-pink-primary" />
        <p className="text-base font-medium text-navy-primary sm:text-lg">
          {ratingLabel}{" "}
          <span className="text-navy-muted">no Google</span>
        </p>
      </div>
    </section>
  );
}
