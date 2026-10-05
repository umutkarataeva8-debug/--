import React from 'react';
import { Sparkles, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { SALON_INFO } from '../data/services';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isKy = lang === 'ky';

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-24 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-tight">
                  {SALON_INFO.name}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-400 block">
                  {isKy ? 'Сулуулук салону • Ат-Башы' : 'Салон красоты • Ат-Башы'}
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              {isKy
                ? 'Ат-Башыдагы каш жана перманенттик макияж боюнча ишенимдүү салон. Табигый сулуулук, 100% стерилдүүлүк жана кесипкөй мамиле.'
                : 'Профессиональное оформление бровей и пудровый перманентный макияж в селе Ат-Башы. Безопасность и безупречный вкус.'}
            </p>

            <div className="flex items-center gap-3">
              <a
                id="footer-whatsapp-link"
                href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {SALON_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Services list */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">
              {isKy ? 'Негизги кызматтар' : 'Популярные услуги'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#services" className="hover:text-rose-300 transition-colors">
                  {isKy ? '• Пудровый напыление (каш)' : '• Пудровое напыление бровей'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-rose-300 transition-colors">
                  {isKy ? '• Эрин перманенти (акварель)' : '• Перманент губ (акварель)'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-rose-300 transition-colors">
                  {isKy ? '• Перманентти коррекциялоо (1000 сом)' : '• Коррекция перманента (1000 сом)'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-rose-300 transition-colors">
                  {isKy ? '• Каш архитектурасы жана боёо' : '• Архитектура и окрашивание бровей'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-rose-300 transition-colors">
                  {isKy ? '• Каш жана кирпикти ламинациялоо' : '• Ламинирование бровей и ресниц'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-rose-300 transition-colors">
                  {isKy ? '• Той-кече макияжы (600 – 1500 сом)' : '• Праздничный макияж (600 – 1500 сом)'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">
              {isKy ? 'Байланышуу' : 'Контакты'}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{isKy ? SALON_INFO.addressKy : SALON_INFO.addressRu}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <a href={`tel:${SALON_INFO.phone}`} className="text-white font-semibold hover:underline">
                  {SALON_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-rose-400 shrink-0" />
                <span>09:00 – 19:00 (күн сайын)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} «Салидат» сулуулук салону. Бардык укуктар корголгон.</p>
          <p>Ат-Башы айылы, Нарын облусу, Кыргызстан</p>
        </div>
      </div>
    </footer>
  );
};
