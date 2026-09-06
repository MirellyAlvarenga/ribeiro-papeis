import React from 'react';
import Image from 'next/image';
import { CONTACT_INFO } from '@/src/constants/links';

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full bg-surface-container-low overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 pt-8 md:pt-12 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full shadow-sm mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
              <span className="text-xs uppercase tracking-wider font-semibold">Distribuidora Nacional</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight mb-4">
              Soluções em Papel e Distribuição para o seu Negócio
            </h1>
            
<p className="text-base md:text-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
  Fornecemos papéis de alta performance para indústrias gráficas, convertedoras e e-commerce com entrega acelerada, faturamento flexível para empresas e rastreabilidade total de lote.
</p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href={CONTACT_INFO.marcosPaulo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base shadow-md transition-all duration-200 active:scale-95"
              >
                <svg className="w-6 h-6 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Falar no WhatsApp</span>
              </a>
              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors shadow-sm font-semibold text-sm"
              >
                <span>Ver Catálogo</span>
                <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 gap-x-4 pt-2 text-on-surface-variant text-xs uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                <span>Atendimento Imediato</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                <span>Pronta Entrega em Lote</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                <span>Nota Fiscal & Faturamento para PJ</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-surface-container-lowest">
              <Image
                src="/images/professional_clean_commercial_photography_of_industrial_paper_distribution.png"
                alt="Armazém de distribuição logística Ribeiro Papéis"
                width={600}
                height={460}
                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
              
              <div className="absolute top-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-500 text-[20px]">verified</span>
                <div>
                  <span className="block text-xs text-on-surface font-semibold">Cadeia FSC®</span>
                  <span className="block text-[11px] text-on-surface-variant">Manejo Sustentável</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded-lg shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-[22px]">inventory</span>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-on-surface tracking-tight">+10.000 t</div>
                    <div className="text-[11px] text-on-surface-variant uppercase">Papéis Distribuídos / Ano</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="inline-flex items-center gap-1.5 text-xs text-on-surface font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Estoque Ativo
                  </span>
                  <span className="text-[11px] text-on-surface-variant">Pronto Despacho</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}