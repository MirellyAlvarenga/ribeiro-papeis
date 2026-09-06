import React from 'react';
import Image from 'next/image';
import { CONTACT_INFO } from '@/src/constants/links';

export default function Products() {
  const categories = [
    {
      title: 'Papel A4',
      badge: 'Escritório & Corporativo',
      grammage: '75g/m²',
      format: 'Caixa c/ 10 pacotes (500 fls cada)',
      desc: 'Papel sulfite A4 de alta alvura, ideal para impressões do dia a dia, documentos corporativos, relatórios e uso geral em escritórios.',
      image: '/images/papela4.png',
      msg: 'Papel A4 (Caixa com 10 pacotes)',
    },
    {
      title: 'Jornal Reciclado',
      badge: 'Sustentável & Embalagens',
      grammage: 'Gramaturas Variadas',
      format: 'Bobinas & Pacotes',
      desc: 'Opção ecológica e econômica para proteção de mercadorias, forração, empacotamento e processos industriais sustentáveis.',
      image: '/images/jornal-reciclado.png',
      msg: 'Jornal Reciclado',
    },
    {
      title: 'Papel Jornal',
      badge: 'Imprensa & Proteção',
      grammage: 'Standard Industrial',
      format: 'Bobinas & Folhas',
      desc: 'Papel leve e versátil, amplamente utilizado em tiragens de jornais, folhetos promocionais, proteção de vidros e artesanato.',
      image: '/images/papel jornal.png',
      msg: 'Papel Jornal',
    },
    {
      title: 'Bloquinhos de Papel',
      badge: 'Papelaria & Rascunho',
      grammage: 'Diversos Tamanhos',
      format: 'Blocos Blocados',
      desc: 'Ideal para anotações rápidas, rascunhos comerciais e uso diário em escritórios, balcões de atendimento e papelarias.',
      image: '/images/blocodepapel.png',
      msg: 'Bloquinhos de Papel',
    },
    {
      title: 'Papel Glassine',
      badge: 'Especial & Barreira',
      grammage: 'Alta Lise e Transparência',
      format: 'Folhas & Rebobinado',
      desc: 'Papel translúcido, suave e resistente a gordura/umidade. Perfeito para intercalação de fotos, embalagens delicadas e proteção special.',
      image: '/images/papelglassine.png',
      msg: 'Papel Glassine',
    },
  ];

  return (
    <section id="produtos" className="w-full py-16 md:py-24 bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-secondary text-xs uppercase tracking-wider mb-2 font-semibold">
              <span className="material-symbols-outlined text-[18px]">category</span>
              <span>Nosso Portfólio</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
              Papéis Mais Comuns
            </h2>
            <p className="text-base text-on-surface-variant mt-2">
              Fornecimento contínuo e condições especiais de faturamento para empresas e indústrias.
            </p>
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item, idx) => (
            <div key={idx} className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 bg-surface-container-highest overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface text-[11px] uppercase font-semibold">
                  {item.badge}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed rounded text-[11px] font-semibold">
                      {item.grammage}
                    </span>
                    <span className="px-2 py-0.5 bg-surface-container-high text-on-surface-variant rounded text-[11px]">
                      {item.format}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-2 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-on-surface-variant line-clamp-3 mb-6">
                    {item.desc}
                  </p>
                </div>

                <a
                  href={`${CONTACT_INFO.marcosPaulo.whatsapp}?text=Ol%C3%A1%2C+gostaria+de+uma+cota%C3%A7%C3%A3o+para+${encodeURIComponent(item.msg)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-surface-container-high hover:bg-emerald-500 hover:text-white text-on-surface font-semibold text-xs transition-all"
                >
                  <span>Pedir Cotação no WhatsApp</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}