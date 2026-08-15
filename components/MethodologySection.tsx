"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CtaButton from "./CtaButton";
import Image from "next/image";

const steps = [
  {
    title: "Contato inicial",
    description:
      "Primeiro contato para entender seu momento atual e o que te motivou a buscar ajuda.",
  },
  {
    title: "Sessões de acompanhamento",
    description:
      "Sessões de 50 minutos, semanais ou quinzenais, para o trabalho terapêutico contínuo.",
  },
  {
    title: "Contato entre sessões",
    description:
      "Canal direto pelo WhatsApp para agendamentos e dúvidas do dia a dia.",
  },
  {
    title: "Cuidado ao longo do processo",
    description:
      "Orientações e materiais de apoio distribuídos conforme a necessidade de cada etapa.",
  },
];

export default function MethodologySection() {
  return (
    <section id="metodologia" className="py-24 bg-background-soft">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        {/* Top Decoration */}
        <div className="flex justify-center gap-2 text-primary/40 mb-12">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-6 leading-tight">
            Uma jornada com direção{" "}
            <span className="text-primary italic">desde o primeiro passo.</span>
          </h2>
          <p className="text-text-muted text-lg max-w-3xl mx-auto mb-8">
            Antes de iniciar o acompanhamento, conversamos para entender o
            seu momento atual — seja ansiedade, depressão, síndrome do
            pânico ou burnout — e o que você espera do processo.
          </p>
          <p className="font-bold text-text-main">
            Se houver alinhamento, iniciamos o acompanhamento psicológico com:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Steps List */}
          <div className="flex-1 space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-main mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side Image and Logo */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-primary/20"
            >
              {/* Placeholder for the reading image */}
              <Image
                src="/psico.png"
                alt="Metodologia de Atendimento Psicológico"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors duration-500" />

              {/* Overlay Seal/Logo */}
    
            </motion.div>

            {/* CTA Button fixed relative to image as in design or just below */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="https://wa.me/5571981401425"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-5 w-full max-w-md gap-2 md:px-4 py-3 flex items-center justify-between bg-primary rounded-full text-white font-bold text-sm tracking-widest uppercase shadow-xl hover:shadow-2xl hover:bg-primary/90 transition-all active:scale-[1.0]"
              >
                {" "}
                <span className="flex-1 font-bold text-base md:text-center">
                  {" "}
                  AGENDAR MINHA SESSÃO{" "}
                </span>{" "}
                <div className="md:w-10 md:h-10 h-8 w-8 bg-white rounded-full flex items-center justify-center text-primary group-hover:rotate-45 transition-transform duration-300">
                  {" "}
                  <ArrowUpRight className="w-4 h-4" />{" "}
                </div>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
