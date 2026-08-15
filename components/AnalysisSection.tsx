"use client";

import { motion } from "framer-motion";
import { Beaker, Calendar, Apple, FileCheck } from "lucide-react";

const analysisSteps = [
  {
    icon: Beaker,
    title: "Exames como ponto de partida",
    description: "Sem dados, qualquer plano é um chute. A leitura detalhada dos exames laboratoriais mostra o que está travando o seu emagrecimento ou o seu bem-estar."
  },
  {
    icon: Calendar,
    title: "Análise da sua rotina",
    description: "Rotina mal ajustada sabota qualquer resultado, mesmo com um plano certo. Entendo seu sono, estresse, treino, horários e demandas diárias."
  },
  {
    icon: Apple,
    title: "Leitura dos seus hábitos alimentares",
    description: "Entender o que, quando e como você come ajuda a identificar os sinais, sintomas e padrões que travam o seu progresso."
  },
  {
    icon: FileCheck,
    title: "Conclusão do diagnóstico individual",
    description: "Com todas as informações em mãos, o caminho se torna claro. Essa última etapa direciona um plano compatível com seu corpo, sua rotina e o seu objetivo real — emagrecimento sustentável, saúde da mulher, composição corporal ou qualidade de vida."
  }
];

export default function AnalysisSection() {
  return (
    <section className="relative min-h-screen lg:h-screen flex items-center py-12 lg:py-0 bg-dark-accent overflow-hidden">
      {/* Grid Background Effect */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-bold tracking-widest uppercase mb-4 lg:mb-6"
          >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            Entendendo seu corpo
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-white mb-3 lg:mb-5 leading-tight"
          >
            Todo plano começa com uma <span className="text-white/60">análise profunda</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto"
          >
            Antes de definir qualquer estratégia nutricional, é preciso entender <span className="text-white/80 font-bold">como seu corpo funciona hoje</span> — e isso é <span className="text-white/80 font-bold">feito por etapas claras</span>, a partir dos seus exames, rotina e hábitos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {analysisSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group relative bg-white/5 border border-white/10 p-5 lg:p-7 rounded-[32px] hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              {/* Card Glow Top */}
              <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                  <step.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:text-primary transition-colors duration-500" />
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">
                  {step.title}
                </h3>
                
                <p className="text-xs lg:text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                  {step.description}
                </p>
              </div>
              
              {/* Bottom Decoration */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
