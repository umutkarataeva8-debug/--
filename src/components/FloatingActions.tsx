import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data/services';
import { Language } from '../types';

interface FloatingActionsProps {
  lang: Language;
  onBookClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ lang, onBookClick }) => {
  const isKy = lang === 'ky';

  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    isKy
      ? 'Саламатсызбы Эркайым айым! Ат-Башыдагы «Салидат» салонуңузга жазылайын дедим эле.'
      : 'Здравствуйте мастер Эркайым! Хочу записаться к вам в салон «Салидат» в Ат-Башы.'
  )}`;

  return (
    <div className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 z-40 max-w-md mx-auto sm:max-w-none">
      <div className="bg-stone-900/95 backdrop-blur-md border border-stone-700/80 rounded-2xl p-2 shadow-2xl flex items-center justify-between gap-2">
        {/* Direct Call Button */}
        <a
          id="floating-call-btn"
          href={`tel:${SALON_INFO.phone}`}
          className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold transition-colors"
          title="Позвонить"
        >
          <Phone className="w-4 h-4 text-rose-400" />
          <span className="truncate">{SALON_INFO.phoneDisplay}</span>
        </a>

        {/* WhatsApp Direct Button */}
        <a
          id="floating-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        {/* Online Booking Button */}
        <button
          id="floating-booking-btn"
          onClick={onBookClick}
          className="hidden xs:flex sm:flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold transition-colors"
        >
          <Calendar className="w-4 h-4" />
          <span>{isKy ? 'Жазылуу' : 'Запись'}</span>
        </button>
      </div>
    </div>
  );
};
