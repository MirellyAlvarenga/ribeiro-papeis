import React from 'react';
import { CONTACT_INFO } from '@/constants/links';

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-on-primary-container border-t border-outline/10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <span className="text-xl text-on-primary font-bold block">Ribeiro Papéis</span>
            <p className="text-sm leading-relaxed">
              Distribuição comercial de papéis, caixas A4, papéis jornal, reciclados e produtos especiais para escritórios, indústrias e comércio.
            </p>
            <p className="flex items-start gap-2 text-sm leading-relaxed">
              <span className="material-symbols-outlined text-emerald-400 text-[18px]">location_on</span>
              <span>{CONTACT_INFO.address}</span>
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-base text-on-primary font-semibold tracking-tight">Principais Produtos</h4>
            <ul className="space-y-2 text-sm">
              <li>Papel A4 (Caixa c/ 10 pacotes)</li>
              <li>Jornal Reciclado</li>
              <li>Papel Jornal</li>
              <li>Bloquinhos de Papel</li>
              <li>Papel Glassine (Impermeável)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-base text-on-primary font-semibold tracking-tight">Atendimento WhatsApp</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-400 text-[18px]">call</span>
                <a href={CONTACT_INFO.marcosPaulo.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Marcos Paulo: {CONTACT_INFO.marcosPaulo.formattedPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-400 text-[18px]">call</span>
                <a href={CONTACT_INFO.regiane.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Regiane: {CONTACT_INFO.regiane.formattedPhone}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-base text-on-primary font-semibold tracking-tight">Redes Sociais</h4>
            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-high/20 text-on-primary font-semibold text-xs hover:bg-surface-container-high/30 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              <span>@ribeiropapeis</span>
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-outline/20 text-center text-sm">
          <p>Copyright © Ribeiro Papéis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}