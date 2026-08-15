"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";

interface Plan {
  title: string;
  tag: string;
  features: string[];
  highlight?: boolean;
}

function whatsappHref(planName: string) {
  const text = encodeURIComponent(
    `Olá, Angela! Quero saber mais sobre o ${planName}.`
  );
  return `https://wa.me/5571981401425?text=${text}`;
}

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative flex flex-col h-full rounded-3xl p-8 border transition-all ${
        plan.highlight
          ? "bg-dark-accent border-dark-accent text-white shadow-2xl md:-translate-y-4"
          : "bg-white border-zinc-100 text-text-main shadow-sm"
      }`}
    >
      {plan.highlight && (
        <span className="absolute -top-4 left-8 flex items-center gap-1.5 bg-secondary text-dark-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          Mais escolhido
        </span>
      )}

      <span
        className={`text-xs font-bold uppercase tracking-widest mb-2 ${
          plan.highlight ? "text-secondary" : "text-primary"
        }`}
      >
        {plan.tag}
      </span>
      <h3
        className={`text-2xl font-serif font-bold mb-6 ${
          plan.highlight ? "text-white" : "text-text-main"
        }`}
      >
        {plan.title}
      </h3>

      <ul className="space-y-4 mb-8 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                plan.highlight ? "text-secondary" : "text-primary"
              }`}
            />
            <span
              className={`leading-relaxed ${
                plan.highlight ? "text-white/80" : "text-text-muted"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={whatsappHref(plan.title)}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center justify-between px-5 py-3 rounded-full font-bold text-sm tracking-wide uppercase transition-all active:scale-[0.98] ${
          plan.highlight
            ? "bg-white text-dark-accent hover:bg-primary hover:text-white"
            : "bg-primary text-white hover:bg-primary/90"
        }`}
      >
        <span className="flex-1 text-center">Falar no WhatsApp</span>
        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
      </a>
      <p
        className={`text-xs text-center mt-3 ${
          plan.highlight ? "text-white/50" : "text-text-muted"
        }`}
      >
        Valores sob consulta
      </p>
    </motion.div>
  );
}

const singleConsultation: Plan = {
  title: "Consulta Avulsa",
  tag: "Presencial ou online",
  features: [
    "1 consulta presencial ou on-line",
    "Avaliação física por bioimpedância (presencial) ou por fotos com auxílio de inteligência artificial (on-line)",
    "Avaliação completa da rotina e exames",
    "Plano alimentar personalizado",
    "1 ajuste no plano alimentar, se necessário",
    "Suporte pelo WhatsApp",
  ],
};

const onlinePlan: Plan = {
  title: "Plano Trimestral Online",
  tag: "Online",
  highlight: true,
  features: [
    "3 meses de acompanhamento",
    "3 sessões de acompanhamento para revisão da evolução e ajustes do plano",
    "Todos os benefícios do acompanhamento",
    "Avaliação física por fotos através de IA",
  ],
};

const presentialPlans: Plan[] = [
  {
    title: "Plano Trimestral Presencial",
    tag: "3 meses",
    features: [
      "3 meses de acompanhamento",
      "1 consulta presencial por mês",
      "Avaliação da evolução",
      "Ajustes necessários no plano",
      "Acompanhamento contínuo",
      "Benefícios dos acompanhamentos",
    ],
  },
  {
    title: "Plano Semestral Presencial",
    tag: "6 meses",
    features: [
      "6 meses de acompanhamento",
      "1 consulta presencial por mês",
      "Avaliação da evolução",
      "Ajustes necessários no plano",
      "Acompanhamento contínuo",
      "Benefícios dos acompanhamentos",
    ],
  },
];

export default function Plans() {
  return (
    <section id="planos" className="py-24 bg-background-soft">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
            Como posso te ajudar
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-6 leading-tight">
            Planos <span className="text-primary italic">nutricionais</span>
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Os planos foram desenvolvidos para oferecer um acompanhamento
            personalizado, respeitando sua rotina, seus objetivos e suas
            necessidades, tornando o processo mais leve, organizado e
            eficiente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          <PlanCard plan={singleConsultation} index={0} />
          <PlanCard plan={onlinePlan} index={1} />
          {presentialPlans.map((plan, index) => (
            <PlanCard key={plan.title} plan={plan} index={index + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
