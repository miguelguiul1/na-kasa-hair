// Na Kasa Hair — real business data.
// Everything here is confirmed by the client. Do NOT add facts that
// aren't listed (prices, hours, extra reviews, testimonials, etc.) —
// use a visible TODO placeholder in the UI instead.

export const BUSINESS = {
  name: "Na Kasa Hair",
  addressLine: "R. Artur de Azevedo, 1405 - Pinheiros, São Paulo - SP",
  neighborhoodShort: "Pinheiros, SP",
  phoneDisplay: "+55 11 95155-3807",
  whatsappNumber: "5511951553807",
  instagramHandle: "@na_kasahair",
  instagramUrl: "https://instagram.com/na_kasahair",
  ratingValue: "4.8",
  reviewCount: 229,
} as const;

const whatsappDefaultMessage =
  "Olá! Vim pelo site e quero agendar um horário.";

export const whatsappLink = (message: string = whatsappDefaultMessage) =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const googleMapsSearchLink = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    BUSINESS.addressLine,
  )}`;

export const ratingLabel = `${BUSINESS.ratingValue}★ · ${BUSINESS.reviewCount} avaliações`;
