import React from 'react';

export default function About() {
  return (
    <section id="sobre-nos" className="w-full py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 text-secondary text-xs uppercase tracking-wider mb-2 font-semibold">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              <span>Sobre a Ribeiro Papéis</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl text-on-surface font-bold tracking-tight mb-4">
              Parceiro Estratégico da Cadeia Produtiva Gráfica e Industrial
            </h2>
            
            <p className="text-base text-on-surface-variant leading-relaxed mb-4">
              Fundada com a missão de eliminar gargalos de abastecimento de papel, a <strong>Ribeiro Papéis</strong> atua na distribuição e conversão personalizada de matérias-primas celulósicas. Mantemos parceria direta com as maiores fábricas integradas do Brasil e do exterior.
            </p>
            
            <p className="text-base text-on-surface-variant leading-relaxed mb-8">
              Com estrutura de armazenagem climatizada, frotas dedicadas e centro próprio de corte longitudinal e transversal, asseguramos que sua produção nunca pare por falta de estoque ou variação dimensional.
            </p>

            <div className="grid grid-cols-3 gap-4 p-4 bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-on-surface">25+</span>
                <span className="text-xs text-on-surface-variant uppercase mt-1">Anos de Mercado</span>
              </div>
                <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-secondary">200+</span>
                <span className="text-xs text-on-surface-variant uppercase mt-1">Empresas Atendidas</span>
                </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-on-surface">99.4%</span>
                <span className="text-xs text-on-surface-variant uppercase mt-1">Pontualidade Logística</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">forest</span>
                </div>
                <div>
                  <h4 className="text-lg text-on-surface font-semibold mb-1">Sustentabilidade e Rastreabilidade FSC®</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Todos os lotes de papel fornecidos contam com comprovação de origem florestal renovável, atendendo aos rigorosos critérios internacionais de ESG e auditorias industriais.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high text-on-primary-fixed flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">warehouse</span>
                </div>
                <div>
                  <h4 className="text-lg text-on-surface font-semibold mb-1">Armazém com Controle de Umidade</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Estoque protegido com controle termohigrométrico para preservar a estabilidade dimensional e evitar enruamento nas impressões rotativas ou offset planas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                </div>
                <div>
                  <h4 className="text-lg text-on-surface font-semibold mb-1">Suporte Técnico Especializado</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Nossos consultores ajudam você a escolher a gramatura e sentido de fibra corretos para otimizar custo e reduzir desperdício de refile no maquinário.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}