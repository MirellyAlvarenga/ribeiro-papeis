import React from 'react';

export default function WhyUs() {
  const differentials = [
    {
      icon: 'local_shipping',
      title: 'Agilidade na Entrega',
      desc: 'Frota dedicada e roteirização própria com despachos em 24h a 48h para capitais e polos industriais gráficos.',
      color: 'bg-primary text-on-primary',
    },
    {
      icon: 'layers',
      title: 'Ampla Variedade',
      desc: 'Da linha leve 56g/m² a cartões de alta rigidez 350g/m². Disponibilidade imediata em bobinas e formatos planos.',
      color: 'bg-secondary text-on-secondary',
    },
    {
      icon: 'precision_manufacturing',
      title: 'Corte & Conversão',
      desc: 'Rebobinamento técnico e guilhotinamento de precisão para atender o gabarito exato da sua impressora.',
      color: 'bg-emerald-950 text-emerald-400',
    },
{
  icon: 'payments',
  title: 'Venda Faturada para Empresas',
  desc: 'Prazos flexíveis, limite de crédito pré-aprovado para empresas e condições competitivas para cargas fechadas.',
  color: 'bg-surface-container-high text-on-primary-fixed',
},
  ];

  return (
    <section className="w-full bg-surface-container-lowest py-12 md:py-16 shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => (
            <div key={index} className="p-6 rounded-xl bg-surface hover:bg-surface-container-low transition-colors duration-200">
              <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4`}>
                <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
              </div>
              <h3 className="text-lg text-on-surface mb-2 font-semibold">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}