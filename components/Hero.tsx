"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CircularText from "./CircularText";
import Marquee from "./Marquee";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen   flex flex-col justify-between overflow-hidden bg-background-soft">
      {/* Decorative background element */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-20 lg:px-32 flex-1 grid md:grid-cols-2 gap-12 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=""
        >
          <span className="inline-block py-1 px-4 rounded-full bg-secondary/10 text-secondary text-[10px] md:text-xs font-bold tracking-wider uppercase mb-2  mt-8">
            Nutricionista
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold leading-[1.1] text-text-main mb-6">
            Nutrição para viver com mais{" "}
            <span className="text-secondary italic">equilíbrio</span>.
          </h1>
          <p className="text-base md:text-xl text-text-muted mb-8 max-w-lg leading-relaxed">
            Acompanhamento individualizado para emagrecimento sustentável, saúde
            da mulher e mais qualidade de vida.
          </p>

          <a
            href="https://wa.me/5571981401425"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-6 px-4 w-full max-w-md md:px-4 py-3 flex items-center justify-between bg-primary rounded-full text-white font-bold text-sm tracking-widest uppercase shadow-xl hover:shadow-2xl hover:bg-primary/90 transition-all active:scale-[1.0]"
          >
            {" "}
            <span className="flex-1 font-bold text-base md:text-center">
              {" "}
              AGENDAR MINHA CONSULTA{" "}
            </span>{" "}
            <div className="md:w-10 md:h-10 h-8 w-8 bg-white rounded-full flex items-center justify-center text-primary group-hover:rotate-45 transition-transform duration-300">
              {" "}
              <ArrowUpRight className="w-4 h-4" />{" "}
            </div>{" "}
          </a>

          <div className="mt-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-sm text-text-muted font-medium">
              <span className="font-bold text-text-main">
                Acompanhamento individualizado
              </span>{" "}
              com plano alimentar sob medida para você
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mt-auto md:mt-0 -mx-6 md:mx-0"
        >
          <Image
            src="/fotohero.png"
            alt="Angela Andrade, nutricionista"
            width={600}
            height={700}
            className="w-full md:w-[92%] h-auto object-cover mx-auto rounded-none md:rounded-3xl"
            priority
          />

          {/* Floating circular text logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-0 -right-2 md:top-12 md:right-12 z-20 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-full -z-10 scale-90" />
            <CircularText
              text="Angela Andrade • "
              radius={60}
              fontSize="12px"
              className="drop-shadow-lg"
            />
            <div className="absolute w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg overflow-hidden"></div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:flex absolute bottom-20 -left-4 md:-left-10 z-20 bg-white p-4 rounded-2xl shadow-xl items-center gap-4 border border-zinc-100"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase font-bold tracking-wider">
                Nutrição
              </p>
              <p className="text-sm font-bold text-text-main">
                Emagrecimento Sustentável
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full z-20">
        <Marquee text="ANGELA ANDRADE NUTRIÇÃO" />
      </div>
    </section>
  );
}
