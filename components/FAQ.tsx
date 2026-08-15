"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "O atendimento é pelo plano de saúde?",
    a: "O atendimento é particular. É emitido recibo para que a paciente possa solicitar o reembolso junto ao seu plano de saúde, conforme as regras e condições da própria operadora."
  },
  {
    q: "Qual a diferença entre a consulta e o acompanhamento online?",
    a: "Na consulta online, existe um atendimento direto comigo por videochamada. Já o acompanhamento online não possui consulta por videochamada. O processo é realizado por meio de formulários, análise das informações, aplicativo e sessões de acompanhamento previstas no plano."
  },
  {
    q: "Como funciona a consulta online?",
    a: "Após o primeiro contato, a paciente recebe os formulários necessários para a anamnese e coleta das informações. Em seguida, é realizada a consulta por videochamada. Após a avaliação, é elaborado o planejamento nutricional personalizado, que fica disponível pelo aplicativo, juntamente com as orientações e materiais necessários."
  },
  {
    q: "Como funciona o acompanhamento online?",
    a: "Após o primeiro contato e contratação, são enviados os formulários necessários para a anamnese. As informações são analisadas e a paciente recebe acesso ao aplicativo pelo celular, onde poderá acompanhar seu plano alimentar, orientações e materiais. O plano trimestral inclui 3 sessões de acompanhamento, destinadas à revisão da evolução e aos ajustes necessários durante o processo. A avaliação física é realizada por meio de fotos com auxílio de inteligência artificial."
  },
  {
    q: "Preciso imprimir meu plano alimentar?",
    a: "Não. O planejamento, as orientações e os materiais ficam disponíveis pelo aplicativo, permitindo que a paciente tenha tudo de forma prática e acessível diretamente pelo celular."
  },
  {
    q: "Quantas consultas são necessárias?",
    a: "O ideal é realizar um acompanhamento contínuo, principalmente em um período de pelo menos três meses. O plano trimestral permite acompanhar a evolução, identificar dificuldades, avaliar os resultados e realizar ajustes na estratégia nutricional ao longo do processo. A consulta avulsa pode ser adequada para necessidades pontuais, mas não proporciona o mesmo nível de acompanhamento de um processo contínuo."
  },
  {
    q: "Posso contratar apenas uma consulta?",
    a: "Sim. Existe a opção de Consulta Avulsa Presencial, indicada para quem deseja um atendimento pontual."
  },
  {
    q: "É necessário pagar algum valor para reservar a consulta presencial?",
    a: "Sim. Para confirmação do agendamento da consulta presencial, é solicitado um sinal de R$ 50,00, que será descontado do valor total da consulta. O sinal é utilizado para garantir a reserva do horário agendado."
  },
  {
    q: "Como funciona o pagamento?",
    a: "Há opção de pagamento à vista ou parcelado. No pagamento parcelado, poderão ser acrescentadas as taxas referentes à operadora/cartão."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-20 lg:px-32 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-12 text-center">
          Dúvidas frequentes.
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-zinc-100 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between gap-6 text-left hover:text-primary transition-colors"
              >
                <span className="text-lg md:text-xl font-bold text-text-main">{faq.q}</span>
                <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-text-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
