import React from 'react';
import { CONTACT_INFO } from '@/constants/links';

export default function ContactCTA() {
  return (
    <section id="contato" className="w-full bg-primary-container text-on-primary py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-surface-container-high/20 rounded-full text-emerald-400 text-xs uppercase tracking-wider mb-6">
            <span className="material-symbols-outlined text-[16px]">bolt</span>
            <span>Atendimento Direto Comercial</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-on-primary leading-tight">
            Fale direto com nossa equipe de vendas
          </h2>

            <p className="text-base md:text-lg text-on-primary-container mb-8 max-w-2xl leading-relaxed">
                Consulte disponibilidade de estoque, prazos de entrega para a sua região e condições de faturamento para PJ.
            </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={`${CONTACT_INFO.marcosPaulo.whatsapp}?text=Ol%C3%A1+Marcos+Paulo%2C+gostaria+de+fazer+uma+cota%C3%A7%C3%A3o.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base shadow-lg transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[20px]">forum</span>
              <span>Marcos Paulo: {CONTACT_INFO.marcosPaulo.formattedPhone}</span>
            </a>

            <a
              href={`${CONTACT_INFO.regiane.whatsapp}?text=Ol%C3%A1+Regiane%2C+gostaria+de+fazer+uma+cota%C3%A7%C3%A3o.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base shadow-lg transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[20px]">forum</span>
              <span>Regiane: {CONTACT_INFO.regiane.formattedPhone}</span>
            </a>
          </div>

          <div className="mt-8">
            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-on-primary-container hover:text-white text-sm font-medium transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              <span>Siga no Instagram (@ribeiropapeis)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}