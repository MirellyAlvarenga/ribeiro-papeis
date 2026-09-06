import React from 'react';
import Image from 'next/image';
import { CONTACT_INFO } from '@/constants/links';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/images/ribeiro_pap_is_logo.png"
            alt="Ribeiro Papéis Logo"
            width={240}
            height={80}
            className="h-14 md:h-16 w-auto object-contain"
            priority
          />
        </div>

        <nav className="hidden lg:flex items-center gap-2">
          <a href="#inicio" className="px-4 py-2 bg-surface-container-high text-on-surface font-semibold text-sm rounded-lg transition-colors">
            Início
          </a>
          <a href="#produtos" className="px-4 py-2 text-on-surface-variant hover:text-on-surface font-semibold text-sm rounded-lg transition-colors">
            Produtos
          </a>
          <a href="#sobre-nos" className="px-4 py-2 text-on-surface-variant hover:text-on-surface font-semibold text-sm rounded-lg transition-colors">
            Sobre Nós
          </a>
          <a href="#contato" className="px-4 py-2 text-on-surface-variant hover:text-on-surface font-semibold text-sm rounded-lg transition-colors">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CONTACT_INFO.marcosPaulo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-all shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Solicitar Cotação</span>
          </a>
        </div>
      </div>
    </header>
  );
}