"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  RefreshCw,
  HeartHandshake,
  MessageCircle,
  Target,
  Activity,
  FlaskConical,
  Pill,
  Percent,
} from "lucide-react";

const benefits = [
  {
    icon: ClipboardList,
    title: "Plano alimentar individualizado",
    description:
      "Construído de acordo com a sua rotina, seus objetivos e suas necessidades.",
  },
  {
    icon: RefreshCw,
    title: "Ajustes conforme sua evolução",
    description:
      "O plano acompanha o seu progresso e é adaptado sempre que necessário.",
  },
  {
    icon: HeartHandshake,
    title: "Acompanhamento contínuo",
    description:
      "Um processo de cuidado real, e não apenas uma consulta isolada.",
  },
  {
    icon: MessageCircle,
    title: "Suporte durante o processo",
    description:
      "Canal direto comigo para dúvidas e ajustes ao longo do acompanhamento.",
  },
  {
    icon: Target,
    title: "Estratégias para manter a constância",
    description:
      "Ferramentas práticas para tornar o processo mais leve e sustentável.",
  },
  {
    icon: Activity,
    title: "Avaliação física completa",
    description:
      "Composição corporal analisada por bioimpedância ou por fotos com IA.",
  },
  {
    icon: FlaskConical,
    title: "Análise de exames e sintomas",
    description:
      "Leitura detalhada dos seus exames laboratoriais, sinais e sintomas.",
  },
  {
    icon: Pill,
    title: "Suplementação, se necessário",
    description:
      "Indicação orientada apenas quando fizer sentido para o seu caso.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        {/* Top Decoration */}
        <div className="flex justify-center gap-2 text-primary/40 mb-12">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-8 leading-tight">
            Ao iniciar o{" "}
            <span className="text-primary italic">
              acompanhamento nutricional
            </span>
            , você não recebe apenas um cardápio.
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Você inicia um processo completo de cuidado com a sua saúde, pensado
            para a sua rotina, os seus objetivos e a sua composição corporal —
            sem dietas genéricas ou restritivas.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-zinc-100 flex flex-col relative overflow-hidden h-full"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-4 sm:left-8 w-8 sm:w-12 h-1 sm:h-1.5 bg-primary/80 rounded-b-full group-hover:w-full group-hover:left-0 group-hover:rounded-none transition-all duration-300" />

              <div className="w-9 h-9 sm:w-12 sm:h-12 bg-zinc-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-6 group-hover:bg-primary/5 transition-colors">
                <benefit.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary/70 group-hover:text-primary transition-colors" />
              </div>

              <h3 className="text-sm sm:text-xl font-bold text-text-main mb-1.5 sm:mb-3">
                {benefit.title}
              </h3>

              <p className="text-xs sm:text-base text-text-muted leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
