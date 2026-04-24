"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import heroBackground from "../../gambar/background-home.jpeg";
import logoImage from "../../gambar/logo.png";
import aboutImage from "../../gambar/foto-bersama.jpg";
import {
  ArrowRight,
  Clock3,
  ExternalLink,
  MapPin,
  PhoneCall,
  Star,
} from "lucide-react";

import { CtaLink } from "@/components/cta-link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  formatRupiah,
  getLandingPageData,
  mapsUrl,
  restaurantInfo,
} from "@/lib/site-content";

const navigationItems = [
  { href: "#about", label: "Tentang" },
  { href: "#menu", label: "Menu" },
  { href: "#reviews", label: "Testimoni" },
  { href: "#contact", label: "Kontak" },
];

const heroTags = [
  "\u2B50 Lebih dari 1.600+ ulasan",
  "\uD83E\uDD90 Bahan Seafood Segar",
  "\uD83D\uDD52 Buka Setiap Hari (07:00 - 22:00)",
];

const revealViewport = { once: true, amount: 0.2 };

const revealTransition = {
  duration: 0.8,
  ease: [0.25, 0.25, 0, 1] as const,
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const menuStaggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpItem = {
  hidden: {
    opacity: 0,
    y: 75,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const menuRevealTransition = {
  duration: 0.65,
  ease: [0.25, 0.25, 0, 1] as const,
};

export default function Home() {
  const { featuredMenus, testimonials } = getLandingPageData();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    scrollToTop();

    const frame = window.requestAnimationFrame(scrollToTop);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#0b0c10]/82 backdrop-blur-2xl">
        <div className="section-shell flex items-center gap-4 py-3">
          <a
            href="#top"
            className="inline-flex shrink-0 items-center md:mr-auto"
          >
            <Image
              src={logoImage}
              alt="Logo Simpang Empat Suki"
              width={68}
              height={68}
              className="size-[48px] object-contain sm:size-[58px]"
            />
            <span className="sr-only">Simpang Empat Suki</span>
          </a>

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-8">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      href={item.href}
                      className="relative rounded-none bg-transparent px-0 py-2 text-sm font-medium text-white/68 transition-colors duration-300 hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#d6ba9c] after:transition-transform after:duration-300 hover:after:scale-x-100 focus:after:scale-x-100"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <CtaLink
            source="navbar"
            showIcon={false}
            className="hidden !bg-[#ece0d4] !text-[#111111] hover:!bg-[#f3e9df] focus-visible:!bg-[#f3e9df] active:!bg-[#e7d8ca] md:inline-flex"
          >
            Pesan Sekarang
          </CtaLink>

          <div className="min-w-0 flex-1 overflow-x-auto md:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <nav className="flex items-center gap-5 whitespace-nowrap pb-1 sm:gap-6">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative inline-flex px-0 py-2 text-sm whitespace-nowrap text-white/68 transition-colors duration-300 hover:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#d6ba9c] after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1 bg-zinc-950">
        <motion.section
          className="relative isolate overflow-hidden"
          initial={{ opacity: 0, y: 75, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={revealViewport}
          transition={revealTransition}
        >
          <div className="absolute inset-0">
            <Image
              src={heroBackground}
              alt="Hidangan Simpang Empat Suki"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_24%,rgba(228,206,174,0.16),transparent_24%),linear-gradient(90deg,rgba(5,6,8,0.68)_0%,rgba(5,6,8,0.48)_36%,rgba(5,6,8,0.34)_68%,rgba(5,6,8,0.44)_100%),linear-gradient(180deg,rgba(7,8,10,0.18)_0%,rgba(7,8,10,0.2)_32%,rgba(7,8,10,0.52)_72%,rgba(7,8,10,0.82)_100%)]" />
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#08090d]/70 to-transparent" />
          </div>

          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />

          <div className="section-shell relative z-10 flex min-h-[34rem] items-end pt-20 sm:min-h-[40rem] sm:pt-24 lg:min-h-[46rem]">
            <div className="max-w-4xl space-y-7 pb-32 sm:pb-40 lg:pb-44">
              <div className="-translate-y-[50px] space-y-5">
                <span className="section-eyebrow border-white/12 bg-black/22 text-white/78">
                  CHINESE FOOD & SEAFOOD | BALIKPAPAN BARU
                </span>

                <div className="space-y-5">
                  <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[6.2rem] xl:leading-[0.92]">
                    Simpang Empat Suki
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
                    Sajian Chinese Food otentik dan olahan Seafood segar dengan
                    cita rasa yang selalu dirindukan. Tempat bersantap yang
                    nyaman untuk keluarga, menghadirkan hidangan favorit mulai
                    dari Sapo Tahu Seafood hingga Mantau Goreng khas kami.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <CtaLink
                  source="hero-primary"
                  showIcon={false}
                  className="w-full !bg-[#ece0d4] !text-[#111111] hover:!bg-[#f3e9df] focus-visible:!bg-[#f3e9df] active:!bg-[#e7d8ca] sm:w-auto"
                >
                  Pesan Sekarang
                </CtaLink>
                <a
                  href="#menu"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.04] px-5 text-sm font-semibold text-white transition hover:border-white/22 hover:bg-white/[0.08] sm:w-auto"
                >
                  Lihat Menu
                  <ArrowRight className="size-4" />
                </a>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-white/70">
                {heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/12 bg-black/18 px-4 py-2 backdrop-blur-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="relative z-10 scroll-mt-[104px] bg-zinc-950 pb-12 pt-0 sm:scroll-mt-[112px] sm:pb-16"
          initial={{ opacity: 0, y: 75, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={revealViewport}
          transition={revealTransition}
        >
          <div className="section-shell rounded-[2.6rem] bg-zinc-950 p-4 sm:p-5">
            <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
              <Card className="overflow-hidden rounded-[2.25rem] border border-white/8 bg-zinc-900 py-0 text-white shadow-[0_30px_60px_-42px_rgba(0,0,0,0.45)]">
                <CardHeader className="px-7 py-7 sm:px-9 sm:py-9">
                  <span className="section-eyebrow w-fit border-white/10 bg-white/[0.04] text-white/78">
                    TENTANG RESTORAN
                  </span>
                  <CardDescription className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
                    Menjadi bagian dari sejarah kuliner Balikpapan sejak 2003.
                    Berawal dari nama Depot Simpang Empat, kini kami bersatu
                    menjadi Simpang Empat Suki. Kami menghadirkan sajian
                    Chinese Food otentik yang telah disesuaikan dengan selera
                    lokal. Setiap hidangan disiapkan dengan sepenuh hati,
                    meneruskan komitmen pada kualitas, cita rasa, dan tradisi
                    yang diwariskan dari tahun ke tahun.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 px-7 pb-7 sm:grid-cols-3 sm:px-9 sm:pb-9">
                  <div className="rounded-[1.6rem] border border-white/8 bg-zinc-800 p-6">
                    <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-white/8 text-zinc-100">
                      <MapPin className="size-5" />
                    </div>
                    <p className="mt-5 text-sm leading-8 text-zinc-200">
                      Ruko Sentra Eropa Blok AB 4 No 30-31, Balikpapan Baru
                    </p>
                  </div>
                  <div className="rounded-[1.6rem] border border-white/8 bg-zinc-800 p-6">
                    <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-white/8 text-zinc-100">
                      <Clock3 className="size-5" />
                    </div>
                    <p className="mt-5 text-sm leading-8 text-zinc-200">
                      Setiap Hari | 07:00 - 22:00
                    </p>
                  </div>
                  <div className="rounded-[1.6rem] border border-white/8 bg-zinc-800 p-6">
                    <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-white/8 text-zinc-100">
                      <PhoneCall className="size-5" />
                    </div>
                    <p className="mt-5 text-sm leading-8 text-zinc-200">
                      0851-0061-2116
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="overflow-hidden rounded-[2.25rem] border border-white/8 bg-zinc-900 p-3 shadow-[0_30px_60px_-42px_rgba(0,0,0,0.45)]">
                <div className="relative min-h-[320px] overflow-hidden rounded-[1.8rem] bg-[#111111] sm:min-h-[420px]">
                  <Image
                    src={aboutImage}
                    alt="Pilihan hidangan keluarga di Simpang Empat Suki"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,14,0.06),rgba(12,12,14,0.3))]" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-5 pb-5 pt-16 text-white sm:px-7 sm:pb-7">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/72">
                      PILIHAN KELUARGA
                    </p>
                    <p className="mt-2 max-w-md text-base font-semibold text-white sm:text-lg">
                      Suasana bersantap yang bersih, nyaman, dan ramah untuk
                      kumpul keluarga.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="menu"
          className="section-shell scroll-mt-[104px] bg-zinc-950 py-12 sm:scroll-mt-[112px] sm:py-16"
          initial={{ opacity: 0, y: 75, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={revealViewport}
          transition={revealTransition}
        >
          <div className="rounded-[2.5rem] border border-white/8 bg-zinc-950 p-7 sm:p-10">
            <div className="max-w-3xl space-y-4">
              <span className="section-eyebrow border-white/10 bg-white/[0.04] text-white/72">
                MENU UNGGULAN
              </span>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Hidangan Favorit Pilihan Pelanggan
              </h2>
              <p className="text-base leading-8 text-zinc-400">
                Pilihan hidangan khas Simpang Empat Suki dengan bahan segar dan
                racikan bumbu otentik yang selalu menjadi incaran setiap kali
                berkunjung.
              </p>
            </div>

            <motion.div
              className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
              variants={menuStaggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={revealViewport}
            >
              {featuredMenus.map((menu) => (
                <motion.div
                  key={menu.id}
                  variants={fadeUpItem}
                  transition={menuRevealTransition}
                  className="h-full"
                >
                  <Card className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/8 bg-zinc-900 py-0 shadow-[0_30px_60px_-42px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-1">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={menu.imageUrl}
                        alt={menu.name}
                        fill
                        className="object-cover transition duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.3))]" />
                    </div>
                    <CardHeader className="flex-1 px-6 pt-6">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-zinc-500">
                        {menu.imageLabel}
                      </p>
                      <CardTitle className="mt-2 text-2xl font-semibold tracking-tight text-white">
                        {menu.name}
                      </CardTitle>
                      <CardDescription className="pt-2 text-sm leading-7 text-zinc-400">
                        {menu.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-4 flex items-center justify-between border-white/8 bg-zinc-950 px-6 py-5">
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.24em] text-zinc-500">
                          Harga
                        </p>
                        <p className="mt-1 text-lg font-semibold tracking-tight text-white">
                          {menu.priceLabel ?? formatRupiah(menu.price)}
                        </p>
                      </div>
                      <CtaLink
                        source={`menu-${menu.id}`}
                        showIcon={false}
                        size="sm"
                        className="h-10 bg-orange-600 px-4 text-xs text-white hover:bg-orange-500"
                      >
                        Pesan
                      </CtaLink>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="reviews"
          className="section-shell scroll-mt-[104px] py-24 sm:scroll-mt-[112px] sm:py-28"
          initial={{ opacity: 0, y: 75, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={revealViewport}
          transition={revealTransition}
        >
          <div className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
            <div className="dark-panel rounded-[2.4rem] p-7 sm:p-10">
              <span className="section-eyebrow border-white/10 bg-white/6 text-white/72">
                Testimoni
              </span>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Apa Kata Pelanggan Kami
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
                Ribuan ulasan positif dari pelanggan setia kami. Kualitas bahan
                dan cita rasa otentik yang selalu terjaga membuat Simpang Empat
                Suki selalu di hati.
              </p>

              <div className="mt-10 flex items-end gap-4">
                <div>
                  <p className="text-6xl font-semibold tracking-[-0.05em] text-white sm:text-7xl">
                    {restaurantInfo.averageRating}
                  </p>
                  <p className="mt-2 text-sm text-white/58">
                    Rating rata-rata pelanggan
                  </p>
                </div>
                <div className="flex gap-1 pb-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="size-5 fill-[#d6ba9c] text-[#d6ba9c]"
                    />
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              className="grid gap-4 md:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={revealViewport}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  variants={fadeUpItem}
                  transition={revealTransition}
                  className="h-full"
                >
                  <Card className="flex h-full flex-col rounded-[1.9rem] border border-white/8 bg-zinc-900 py-0 text-white shadow-[0_30px_60px_-42px_rgba(0,0,0,0.45)]">
                    <CardHeader className="gap-4 px-5 py-5">
                      <div className="flex items-center gap-3">
                        <Avatar className="size-12 bg-white/8">
                          <AvatarFallback className="bg-transparent font-semibold text-[#d6ba9c]">
                            {testimonial.avatarFallback}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base font-semibold tracking-tight text-white">
                            {testimonial.customerName}
                          </CardTitle>
                          <div className="mt-1 flex gap-1">
                            {Array.from({
                              length: Math.round(testimonial.rating),
                            }).map((_, index) => (
                              <Star
                                key={index}
                                className="size-3.5 fill-[#d6ba9c] text-[#d6ba9c]"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 px-5 pb-6 text-sm leading-7 text-zinc-300">
                      &ldquo;{testimonial.reviewText}&rdquo;
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="section-shell scroll-mt-[104px] py-24 sm:scroll-mt-[112px] sm:py-28"
          initial={{ opacity: 0, y: 75, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={revealViewport}
          transition={revealTransition}
        >
          <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="dark-panel rounded-[2.5rem] p-7 sm:p-10">
              <span className="section-eyebrow border-white/10 bg-white/6 text-white/72">
                RESERVASI & PESAN ANTAR
              </span>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
                Siap Menikmati Hidangan Kami?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
                Pesan sekarang untuk makan di tempat, bawa pulang, atau
                nikmati layanan pesan antar. Anda juga dapat melihat daftar
                menu dan harga lengkap kami melalui tautan di bawah.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink
                  source="final-cta"
                  showIcon={false}
                  className="w-full !bg-[#ece0d4] !text-[#111111] hover:!bg-[#f3e9df] focus-visible:!bg-[#f3e9df] active:!bg-[#e7d8ca] sm:w-auto"
                >
                  Pesan Sekarang
                </CtaLink>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/14 bg-white/6 px-5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                >
                  Buka Lokasi
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/8 bg-zinc-900 p-7 text-white shadow-[0_30px_60px_-42px_rgba(0,0,0,0.45)] sm:p-10">
              <span className="section-eyebrow border-white/10 bg-white/[0.04] text-white/72">
                INFORMASI KONTAK
              </span>
              <div className="mt-6 space-y-5">
                <div className="rounded-[1.6rem] border border-white/8 bg-zinc-800/50 p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-zinc-500">
                    Telepon / WhatsApp
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
                    0851-0061-2116
                  </p>
                </div>
                <div className="rounded-[1.6rem] border border-white/8 bg-zinc-800/50 p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-zinc-500">
                    LINKTREE & FULL MENU
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-white">
                    Akses pemesanan online & lihat daftar menu lengkap.
                  </p>
                </div>
                <div className="rounded-[1.6rem] border border-white/8 bg-zinc-800/50 p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-zinc-500">
                    Alamat Lengkap
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-300">
                    Ruko Sentra Eropa Blok AB 4 No 30-31, Balikpapan Baru
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-zinc-950">
        <div className="section-shell pb-8 pt-2">
          <div className="flex flex-col gap-2 border-t border-white/8 py-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <p>{"\u00A9 2026 Simpang Empat Suki. All rights reserved."}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
