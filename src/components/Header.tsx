import React, { useState } from 'react';
import { Phone, MapPin, MessageCircle, Menu, X, Sparkles, Clock, Globe } from 'lucide-react';
import { SALON_INFO } from '../data/services';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onSelectServiceForBooking?: (serviceTitle: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onLanguageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    services: lang === 'ky' ? 'Кызматтар' : 'Услуги',
    priceList: lang === 'ky' ? 'Баалар' : 'Прайс',
    results: lang === 'ky' ? 'Натыйжалар' : 'До / После',
    whyUs: lang === 'ky' ? 'Эмне үчүн биз?' : 'О нас',
    faq: lang === 'ky' ? 'Суроо-жооп' : 'Вопросы',
    booking: lang === 'ky' ? 'Жазылуу' : 'Записаться',
    address: lang === 'ky' ? 'Ат-Башы, «Мирбек» дүкөнү, 2-кабат' : 'Ат-Башы, маг. «Мирбек», 2-этаж',
    callNow: lang === 'ky' ? 'Чалуу' : 'Позвонить',
    salonBadge: lang === 'ky' ? 'Сулуулук салону' : 'Салон красоты',
  };

  const navLinks = [
    { href: '#services', label: t.services },
    { href: '#pricing', label: t.priceList },
    { href: '#portfolio', label: t.results },
    { href: '#why-us', label: t.whyUs },
    { href: '#faq', label: t.faq },
    { href: '#location', label: lang === 'ky' ? 'Дарек' : 'Контакты' },
  ];

  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    lang === 'ky'
      ? 'Саламатсызбы Эркайым айым! Сиздин Ат-Башыдагы «Салидат» салонуңузга жазылайын дедим эле.'
      : 'Здравствуйте мастер Эркайым! Хочу записаться к вам в салон «Салидат» в Ат-Башы.'
  )}`;

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/70">
      {/* Top info bar */}
      <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span className="font-medium text-stone-200">{t.address}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-stone-400">
              <Clock className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>09:00 – 19:00</span>
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* Direct phone link */}
            <a
              id="top-bar-phone-link"
              href={`tel:${SALON_INFO.phone}`}
              className="flex items-center gap-1.5 font-semibold text-rose-300 hover:text-rose-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SALON_INFO.phoneDisplay}</span>
            </a>

            {/* Language toggle */}
            <div className="flex items-center gap-1 bg-stone-800 rounded-full p-0.5 border border-stone-700">
              <Globe className="w-3 h-3 text-stone-400 ml-1.5 mr-0.5" />
              <button
                id="lang-btn-ky"
                onClick={() => onLanguageChange('ky')}
                className={`px-2 py-0.5 text-[11px] font-medium rounded-full transition-all ${
                  lang === 'ky'
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                KG
              </button>
              <button
                id="lang-btn-ru"
                onClick={() => onLanguageChange('ru')}
                className={`px-2 py-0.5 text-[11px] font-medium rounded-full transition-all ${
                  lang === 'ru'
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                RU
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white shadow-md shadow-rose-200">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 leading-none group-hover:text-rose-700 transition-colors">
              {SALON_INFO.name}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-rose-600 mt-1">
              {t.salonBadge} • Ат-Башы • Мастер {SALON_INFO.masterName}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-700 hover:text-rose-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="nav-call-btn"
            href={`tel:${SALON_INFO.phone}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-stone-300 text-stone-800 text-xs font-semibold hover:border-stone-400 hover:bg-stone-100 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-stone-600" />
            <span>{SALON_INFO.phoneDisplay}</span>
          </a>

          <a
            id="nav-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm hover:shadow transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <a
            id="nav-book-link"
            href="#booking"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold shadow-sm hover:shadow transition-all"
          >
            <span>{t.booking}</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            id="mobile-quick-call"
            href={`tel:${SALON_INFO.phone}`}
            className="p-2 rounded-full bg-rose-50 text-rose-700 border border-rose-200"
            title="Позвонить"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-700 hover:bg-stone-100"
            aria-label="Навигация"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FAF8F5] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-stone-800 hover:bg-stone-100 hover:text-rose-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-stone-200 flex flex-col gap-2.5">
            <a
              id="mobile-menu-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp аркылуу жазылуу</span>
            </a>
            <a
              id="mobile-menu-call-btn"
              href={`tel:${SALON_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-stone-900 text-white font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{SALON_INFO.phoneDisplay} — Чалуу</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
