"use client";

import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Morjane Armstrong Santos de Miranda",
    initial: "M",
    text: "Muito cuidadosa e preciosista! Ouviu cada demanda minha e foi adaptando o plano nutricional de forma organizada e célere! Além disso, ela é MUITO atualizada no que tange a suplementos e compostos (e as marcas ideais ou confiáveis). Ficou bem mais fácil organizar tudo aqui em casa por causa disso! Obrigada Super!",
  },
  {
    name: "Marivalda Correia",
    initial: "M",
    text: "Agradecer a Nutri Angela Andrade pela dedicação, acompanhamento, paciência e carinho comigo em momento delicado e que tudo foi sucesso 🙏",
  },
  {
    name: "Ana Paula Amaral",
    initial: "A",
    text: "Profissional cuidadosa e atenciosa, busca sempre adequar a dieta a sua rotina e hábitos alimentares, sempre disponível para tirar dúvidas e indicar as melhores opções de produtos, além de ensinar várias receitas práticas. Super satisfeita.",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-background-soft overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-4">
            Histórias de <span className="text-primary italic">sucesso</span>.
          </h2>
          <p className="text-text-muted">Veja o que as pacientes estão dizendo sobre o acompanhamento.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col relative h-full"
            >
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-text-main text-lg italic mb-6 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-auto flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dark-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-text-main">{t.name}</p>
                  <p className="text-text-muted text-sm flex items-center gap-1">
                    <BadgeCheck className="w-3.5 h-3.5 text-primary" />
                    Avaliação no Google
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-text-muted mt-12">
          Enquanto isso, você pode acompanhar conteúdos e resultados no Instagram.
        </p>
      </div>
    </section>
  );
}
