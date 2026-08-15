"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-700">
              <Image
                src="/fotohero.png"
                alt="Angela Andrade"
                width={500}
                height={600}
                className="w-full h-auto object-cover  transition-all duration-700"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Sua Nutricionista
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-8 leading-tight">
              Olá, eu sou a{" "}
              <span className="text-primary italic">Angela Andrade</span>.
            </h2>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                Sou nutricionista e atendo mulheres que buscam uma relação mais
                leve e duradoura com a comida. Meu trabalho vai além do
                cardápio: envolve entender sua rotina, seus exames, seus hábitos
                e os seus objetivos reais.
              </p>
              <p>
                Meu foco é a nutrição personalizada — com atenção especial à
                saúde da mulher, ao emagrecimento sustentável, à preservação da
                massa muscular e à composição corporal, sempre pensando na sua
                qualidade de vida a longo prazo.
              </p>
              <p className="font-medium text-text-main">
                Acredito em resultados construídos com constância, e não com
                restrição. Caminho ao seu lado em cada etapa do processo.
              </p>
            </div>

            <a
              href="https://wa.me/5571981401425"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-8 px-4 w-full max-w-md md:px-4 py-3 flex items-center justify-between bg-primary rounded-full text-white font-bold text-sm tracking-widest uppercase shadow-xl hover:shadow-2xl hover:bg-primary/90 transition-all active:scale-[1.0]"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
