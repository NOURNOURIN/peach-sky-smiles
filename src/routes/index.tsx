import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarCheck,
  Clock,
  HeartPulse,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  Baby,
  Wand2,
  X,
} from "lucide-react";

import heroImage from "@/assets/hero-dentist.jpg";
import dentistPortrait from "@/assets/dentist-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cabinet Dentaire Sourire & Cie — Dentiste à Paris" },
      {
        name: "description",
        content:
          "Cabinet dentaire moderne et chaleureux : soins, esthétique dentaire, orthodontie et urgences. Prenez rendez-vous en ligne.",
      },
      { property: "og:title", content: "Cabinet Dentaire Sourire & Cie" },
      {
        property: "og:description",
        content:
          "Des soins dentaires doux et modernes pour toute la famille. Prenez rendez-vous en ligne.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#services", label: "Soins" },
  { href: "#equipe", label: "L'équipe" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

const services = [
  {
    icon: Stethoscope,
    title: "Soins généraux",
    description:
      "Contrôles, détartrage, traitement des caries et suivi personnalisé de votre santé bucco-dentaire.",
    tone: "sky",
  },
  {
    icon: Sparkles,
    title: "Esthétique dentaire",
    description:
      "Blanchiment, facettes et harmonisation du sourire pour un résultat naturel et lumineux.",
    tone: "peach",
  },
  {
    icon: Smile,
    title: "Orthodontie",
    description:
      "Aligneurs invisibles et appareils modernes pour enfants, ados et adultes.",
    tone: "sky",
  },
  {
    icon: Baby,
    title: "Pédodontie",
    description:
      "Une approche douce et ludique pour les tout-petits, sans stress et sans douleur.",
    tone: "peach",
  },
  {
    icon: HeartPulse,
    title: "Urgences dentaires",
    description:
      "Douleur, dent cassée, abcès : nous vous recevons en priorité le jour même.",
    tone: "sky",
  },
  {
    icon: Wand2,
    title: "Implantologie",
    description:
      "Remplacement de dents manquantes avec des implants durables et esthétiques.",
    tone: "peach",
  },
];

const testimonials = [
  {
    name: "Camille R.",
    text: "Enfin un dentiste qui met à l'aise ! L'équipe est adorable et le cabinet est magnifique.",
  },
  {
    name: "Mehdi B.",
    text: "Prise en charge rapide pour une urgence, soin sans douleur. Je recommande vivement.",
  },
  {
    name: "Sophie L.",
    text: "Mes enfants adorent leurs rendez-vous, c'est dire ! Merci pour votre douceur.",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-6 sm:py-4">
          <a href="#" className="flex shrink-0 items-center gap-2">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Smile className="size-5" />
            </span>
            <span className="font-heading text-lg font-semibold whitespace-nowrap md:text-xl">
              Sourire <span className="text-primary">&amp;</span> Cie
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              aria-label="Prendre rendez-vous"
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-3 py-2 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-105 sm:px-4 md:px-5 md:py-2.5"
            >
              <CalendarCheck className="size-4 sm:hidden" />
              <span className="hidden sm:inline">Prendre rendez-vous</span>
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:border-primary md:hidden"
            >
              {menuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border/60 bg-background px-6 py-3 md:hidden">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-3 py-3 font-semibold transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden gradient-sky">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground">
              <Sparkles className="size-4" />
              Nouveau : rendez-vous en ligne
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-tight md:text-6xl">
              Un sourire éclatant,{" "}
              <span className="text-primary">en toute douceur</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Bienvenue au cabinet Sourire &amp; Cie. Une équipe attentionnée,
              des technologies modernes et une ambiance chaleureuse pour prendre
              soin de votre sourire, dès le plus jeune âge.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-soft transition-transform hover:scale-105"
              >
                <CalendarCheck className="size-5" />
                Réserver ma visite
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-card px-7 py-3.5 font-bold text-primary transition-colors hover:border-primary"
              >
                Découvrir nos soins
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-5 text-primary" />
                <span className="font-semibold">Conventionné secteur 1</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="size-5 text-peach-bright" />
                <span className="font-semibold">4,9/5 — 320 avis</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 size-24 rounded-full bg-accent animate-float" />
            <img
              src={heroImage}
              alt="Dentiste souriante avec une patiente dans un cabinet lumineux"
              width={1600}
              height={912}
              className="relative rounded-3xl shadow-soft"
            />
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-card p-4 shadow-peach md:-right-8">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Clock className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-bold">Ouvert 6j/7</p>
                  <p className="text-xs text-muted-foreground">
                    Lun – Sam, 9h à 19h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Nos soins
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">
            Tout pour votre sourire, sous un même toit
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Du contrôle de routine aux soins les plus pointus, notre équipe
            vous accompagne avec douceur et expertise.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className={`group rounded-3xl p-8 transition-transform hover:-translate-y-2 ${
                service.tone === "peach" ? "gradient-peach" : "gradient-sky"
              }`}
            >
              <span
                className={`flex size-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${
                  service.tone === "peach"
                    ? "bg-peach-bright text-primary-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                <service.icon className="size-7" />
              </span>
              <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Équipe */}
      <section id="equipe" className="overflow-hidden gradient-peach">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <img
              src={dentistPortrait}
              alt="Dr. Léa Martin, chirurgien-dentiste"
              width={800}
              height={1008}
              loading="lazy"
              className="rounded-3xl shadow-peach"
            />
            <div className="absolute -right-4 top-8 rounded-2xl bg-card p-4 shadow-soft lg:-right-8">
              <p className="font-heading text-2xl font-bold text-primary">15+</p>
              <p className="text-xs font-semibold text-muted-foreground">
                années d'expérience
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              L'équipe
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">
              Dr. Léa Martin et son équipe vous accueillent
            </h2>
            <p className="mt-6 text-muted-foreground">
              Diplômée de la faculté de chirurgie dentaire de Paris, le Dr.
              Martin a fondé Sourire &amp; Cie avec une conviction : un soin
              dentaire réussi commence par une écoute attentive.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Soins sans douleur grâce aux techniques d'anesthésie modernes",
                "Plateau technique complet : radiologie 3D, empreinte numérique",
                "Approche adaptée aux patients anxieux et aux enfants",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <ShieldCheck className="size-3.5" />
                  </span>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Avis */}
      <section id="avis" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Ils nous font confiance
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">
            Des sourires qui parlent d'eux-mêmes
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-border bg-card p-8 shadow-soft"
            >
              <div className="flex gap-1 text-peach-bright">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                « {t.text} »
              </blockquote>
              <figcaption className="mt-5 font-heading font-bold">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="gradient-sky">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 rounded-3xl bg-card p-10 shadow-soft md:grid-cols-2 md:p-14">
            <div>
              <h2 className="text-balance text-3xl font-bold md:text-4xl">
                Prêt à retrouver le sourire ?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Appelez-nous ou passez au cabinet : nous trouvons ensemble le
                créneau qui vous convient.
              </p>
              <div className="mt-8 space-y-4 text-sm font-semibold">
                <p className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                    <Phone className="size-4" />
                  </span>
                  01 23 45 67 89
                </p>
                <p className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                    <MapPin className="size-4" />
                  </span>
                  12 rue des Lilas, 75011 Paris
                </p>
                <p className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                    <Clock className="size-4" />
                  </span>
                  Lundi – Samedi, 9h à 19h
                </p>
              </div>
            </div>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                required
                placeholder="Votre nom"
                className="rounded-2xl border border-input bg-background px-5 py-3.5 text-sm outline-none transition-colors focus:border-primary"
              />
              <input
                type="tel"
                required
                placeholder="Votre téléphone"
                className="rounded-2xl border border-input bg-background px-5 py-3.5 text-sm outline-none transition-colors focus:border-primary"
              />
              <select
                className="rounded-2xl border border-input bg-background px-5 py-3.5 text-sm text-muted-foreground outline-none transition-colors focus:border-primary"
                defaultValue=""
              >
                <option value="" disabled>
                  Motif de la visite
                </option>
                <option>Contrôle / détartrage</option>
                <option>Esthétique dentaire</option>
                <option>Orthodontie</option>
                <option>Urgence</option>
                <option>Autre</option>
              </select>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
              >
                <CalendarCheck className="size-5" />
                Demander un rendez-vous
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Nous vous rappelons sous 2 heures ouvrées.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
          <p className="flex items-center gap-2 font-heading font-bold text-foreground">
            <Smile className="size-4 text-primary" />
            Sourire &amp; Cie
          </p>
          <p>© 2026 Cabinet Dentaire Sourire &amp; Cie — Tous droits réservés</p>
          <div className="flex gap-6 font-semibold">
            <a href="#" className="hover:text-primary">
              Mentions légales
            </a>
            <a href="#" className="hover:text-primary">
              Confidentialité
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
