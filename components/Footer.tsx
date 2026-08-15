"use client";

import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-accent text-white py-20">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
            Pronto para cuidar da sua{" "}
            <span className="text-secondary italic">saúde</span> de dentro
            para fora?
          </h2>
          <a
            href="https://wa.me/5571981401425"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-dark-accent px-10 py-5 rounded-full text-xl font-bold hover:bg-primary hover:text-white transition-all shadow-2xl active:scale-95"
          >
            Agendar minha consulta agora
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-12 pt-16 border-t border-white/10">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-serif font-bold tracking-tight mb-6 block">
              Angela <span className="text-secondary">Andrade</span>
            </span>
            <p className="text-white/60 max-w-sm mb-2 leading-relaxed">
              Nutrição personalizada com foco em emagrecimento sustentável,
              saúde da mulher, composição corporal e qualidade de vida.
            </p>
            <p className="text-white/40 text-sm mb-8">Atendimento particular, com recibo para reembolso</p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <Link
                  href="#sobre"
                  className="hover:text-primary transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#planos"
                  className="hover:text-primary transition-colors"
                >
                  Planos
                </Link>
              </li>
              <li>
                <Link
                  href="#depoimentos"
                  className="hover:text-primary transition-colors"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-white/60">
              <li>contato@angelaandradenutri.com.br</li>
              <li>(71) 98140-1425</li>
              <li>Atendimento online e presencial</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center text-sm text-white/30">
          <p>© 2026 Angela Andrade Nutrição. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
