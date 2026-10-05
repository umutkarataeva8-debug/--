import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Compass, Share2 } from 'lucide-react';
import { SALON_INFO } from '../data/services';
import { Language } from '../types';

interface LocationSectionProps {
  lang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ lang }) => {
  const isKy = lang === 'ky';

  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    isKy
      ? 'Саламатсызбы Эркайым айым! Салон Салидаттын дарегин тактап, сизге жазылайын дедим эле.'
      : 'Здравствуйте мастер Эркайым! Хочу уточнить адрес салона «Салидат» и записаться к вам.'
  )}`;

  const [copied, setCopied] = React.useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Салон Салидат — Ат-Башы • Мастер Эркайым',
          text: `Ат-Башыдагы «Салидат» сулуулук салону. Мастер Эркайым. Каш, перманенттик макияж. Тел: ${SALON_INFO.phoneDisplay}. Дарек: Ат-Башы, Мирбек дүкөнү, 2-кабат`,
          url: window.location.href,
        });
      } catch (err) {
        // user cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="location" className="py-16 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-rose-600" />
            <span>{isKy ? 'Дарек жана байланыш' : 'Адрес и контакты'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            {isKy ? 'Бизди кантип тапса болот?' : 'Как нас найти в Ат-Башы?'}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            {isKy
              ? 'Ат-Башынын так борборунда, ыңгайлуу жайда жайгашканбыз.'
              : 'Мы находимся в самом центре села Ат-Башы, легко добраться.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                    {isKy ? 'Дарегибиз' : 'Адрес'}
                  </span>
                  <p className="text-lg font-bold text-stone-900 mt-0.5">
                    {isKy ? SALON_INFO.addressKy : SALON_INFO.addressRu}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    {isKy
                      ? 'Ориентир: Ат-Башы айылы, борбордогу «Мирбек» дүкөнүнүн 2-кабаты.'
                      : 'Ориентир: с. Ат-Башы, центр, 2-й этаж магазина «Мирбек».'}
                  </p>
                </div>
              </div>

              {/* Phone item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                    {isKy ? 'Телефон жана WhatsApp' : 'Телефон и WhatsApp'}
                  </span>
                  <a
                    id="location-phone-link"
                    href={`tel:${SALON_INFO.phone}`}
                    className="text-xl font-serif font-bold text-stone-900 hover:text-rose-600 transition-colors block mt-0.5"
                  >
                    {SALON_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-stone-500 mt-1">
                    {isKy ? 'Чалууга же WhatsApp жазууга ар дайым ачык' : 'Доступны для звонков и сообщений'}
                  </p>
                </div>
              </div>

              {/* Working hours item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                    {isKy ? 'Иштөө тартиби' : 'График работы'}
                  </span>
                  <p className="text-base font-bold text-stone-900 mt-0.5">
                    09:00 – 19:00
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    {isKy ? 'Дүйшөмбү – Жекшемби (Алдын-ала жазылуу менен)' : 'Пн – Вс (по предварительной записи)'}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct buttons */}
            <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col gap-3">
              <a
                id="location-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isKy ? 'WhatsAppтан жазылуу' : 'Записаться в WhatsApp'}</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  id="location-call-btn"
                  href={`tel:${SALON_INFO.phone}`}
                  className="py-2.5 px-3 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-rose-600" />
                  <span>{isKy ? 'Түз чалуу' : 'Позвонить'}</span>
                </a>

                <button
                  id="location-share-btn"
                  onClick={handleShare}
                  className="py-2.5 px-3 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5 text-stone-600" />
                  <span>{copied ? (isKy ? 'Көчүрүлдү!' : 'Скопировано!') : (isKy ? 'Бөлүшүү' : 'Поделиться')}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Visual Map & Landmark presentation */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-rose-600" />
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    {isKy ? 'Ат-Башы картасы жана багыт' : 'Карта и ориентиры Ат-Башы'}
                  </h3>
                </div>
                <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full font-medium">
                  Нарын облусу
                </span>
              </div>

              {/* Visual simulated map container with realistic pins and coordinates */}
              <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 flex flex-col justify-between p-4 shadow-inner">
                {/* Background map grid styled SVG illustration */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d6d3d1_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Visual mountain and village road styling */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                  <svg className="w-full h-full" viewBox="0 0 500 300" fill="none" preserveAspectRatio="none">
                    <path d="M0,150 Q120,130 250,150 T500,160" stroke="#a8a29e" strokeWidth="12" strokeLinecap="round" />
                    <path d="M250,0 L250,300" stroke="#cbd5e1" strokeWidth="6" strokeDasharray="6 6" />
                    <path d="M120,60 L380,240" stroke="#e2e8f0" strokeWidth="4" />
                    <circle cx="250" cy="150" r="40" fill="#fecdd3" fillOpacity="0.5" />
                  </svg>
                </div>

                {/* Top map info */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="bg-white/95 px-3 py-1 rounded-lg text-xs font-bold text-stone-800 shadow-xs border border-stone-200">
                    📍 с. Ат-Башы (Ат-Башы айылы)
                  </span>
                  <span className="bg-stone-900/90 text-white px-2.5 py-1 rounded-lg text-[11px] font-medium backdrop-blur-xs">
                    Мирбек дүкөнү, 2-кабат
                  </span>
                </div>

                {/* Central Salon Pin */}
                <div className="relative z-10 self-center text-center">
                  <div className="inline-flex flex-col items-center animate-bounce">
                    <div className="px-3.5 py-1.5 rounded-full bg-stone-900 text-white text-xs font-bold shadow-xl border border-rose-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                      <span>Салон «Салидат»</span>
                    </div>
                    <div className="w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-t-8 border-t-stone-900" />
                  </div>
                  <div className="w-12 h-3 bg-stone-900/20 rounded-full blur-xs mx-auto mt-0.5" />
                </div>

                {/* Bottom map action bar */}
                <div className="relative z-10 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-stone-200 shadow-sm flex items-center justify-between gap-3 text-xs">
                  <div>
                    <p className="font-bold text-stone-900">
                      {isKy ? '«Мирбек» дүкөнүнүн 2-кабатына чыгыңыз' : 'Поднимитесь на 2-й этаж маг. «Мирбек»'}
                    </p>
                    <p className="text-[11px] text-stone-500">
                      {isKy ? 'Эшигинин алдында унаа токтотуучу жай бар' : 'Рядом удобная парковка'}
                    </p>
                  </div>
                  <a
                    id="open-maps-btn"
                    href="https://www.google.com/maps/search/?api=1&query=Ат-Башы+Нарын"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-stone-900 text-white font-semibold flex items-center gap-1 hover:bg-stone-800 shrink-0"
                  >
                    <Navigation className="w-3.5 h-3.5 text-rose-400" />
                    <span>{isKy ? 'Карта' : 'Карта'}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Visiting instructions */}
            <div className="mt-5 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600">
              <p className="font-semibold text-stone-900 mb-1">
                {isKy ? 'Келүүдө эскертүү:' : 'Рекомендация перед визитом:'}
              </p>
              <p>
                {isKy
                  ? 'Ар бир кардарга кенен убакыт бөлүнүп, кезек күтпөшүңүз үчүн алдын-ала 0704 15 25 23 номери же WhatsApp аркылуу жазылып келүүңүздү өтүнөбүз.'
                  : 'Пожалуйста, записывайтесь заранее через WhatsApp или звонком, чтобы мастер забронировал для вас комфортное время без очередей.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
