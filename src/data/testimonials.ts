export interface Testimonial {
  client: string;
  segment: string;
  quote: string;
  logo: string;
}

// Conforme Seção 9 do Prompt Master: sem dados inventados, usa placeholders explícitos
export const TESTIMONIALS: Testimonial[] = [
  {
    client: "CLIENTE_REAL_01",
    segment: "Restaurante",
    quote: "DEPOIMENTO_REAL_01",
    logo: "LOGO_CLIENTE_01",
  },
];
