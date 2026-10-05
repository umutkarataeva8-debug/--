import React from 'react';
import { Sparkles, Phone, MessageCircle, MapPin, CheckCircle2, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { SALON_INFO } from '../data/services';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onBookClick }) => {
  const isKy = lang === 'ky';

  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    isKy
      ? 'Саламатсызбы Эркайым айым! Сиздин Ат-Башыдагы «Салидат» салонуңузга жазылайын дедим эле.'
      : 'Здравствуйте мастер Эркайым! Хочу записаться к вам в салон «Салидат» в Ат-Башы.'
  )}`;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-stone-200/60 bg-gradient-to-b from-[#FAF8F5] via-[#F7F3EE] to-[#FAF8F5]">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Location & Master pills */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-rose-800 text-xs sm:text-sm font-medium shadow-xs">
                <MapPin className="w-4 h-4 text-rose-600" />
                <span>{isKy ? 'Ат-Башы айылы • «Мирбек» дүкөнү, 2-кабат' : 'село Ат-Башы • магазин «Мирбек», 2-й этаж'}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 text-rose-200 text-xs sm:text-sm font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                <span>{isKy ? 'Мастер: Эркайым' : 'Мастер: Эркайым'}</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3.5xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.15]">
              {isKy ? (
                <>
                  Сулуулук салону <span className="text-rose-600 italic">«Салидат»</span> — Ат-Башы
                </>
              ) : (
                <>
                  Салон красоты <span className="text-rose-600 italic">«Салидат»</span> — Ат-Башы
                </>
              )}
            </h1>

            {/* Specialty tag */}
            <div className="flex items-center gap-2 my-4 text-stone-700 font-semibold text-lg sm:text-xl">
              <Sparkles className="w-5 h-5 text-rose-500 shrink-0" />
              <span>
                {isKy ? 'Каш жасалгалоо • Пудровый каш (3000 сом) • Перманент' : 'Брови • Пудровые брови (3000 сом) • Перманент'}
              </span>
            </div>

            {/* Description */}
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {isKy
                ? 'Ар бир айымга жекече жарашыктуу форма, табигый назик түс жана 100% стерилдүү коопсуздук. Эртең менен боёнбой эле, ар дайым сулуу жана тыкан болуп жүрүңүз!'
                : 'Индивидуальный подбор идеальной формы бровей, натуральный пудровый эффект и бархатные губы. 100% стерильные одноразовые картриджи и премиальные сертифицированные пигменты.'}
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                id="hero-whatsapp-cta"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{isKy ? 'WhatsApp аркылуу жазылуу' : 'Записаться через WhatsApp'}</span>
              </a>

              <button
                id="hero-book-form-cta"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>{isKy ? 'Кызматты тандап эсептөө' : 'Выбрать услугу и расчет'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-call-cta"
                href={`tel:${SALON_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-stone-300 bg-white/80 hover:bg-white text-stone-800 font-semibold text-sm shadow-xs transition-all"
              >
                <Phone className="w-4 h-4 text-stone-600" />
                <span>{SALON_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Features checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-stone-200/80 w-full text-xs sm:text-sm text-stone-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isKy ? '100% стерилдүү, бир жолку ийнелер' : '100% стерильно и безопасно'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{isKy ? 'Табигый, көгөрбөгөн пигменттер' : 'Сертифицированные пигменты'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{isKy ? 'Оорутпаган жумшак кол' : 'Аппликационная анестезия'}</span>
              </div>
            </div>
          </div>

          {/* Hero visual cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main image card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=900&q=85"
                  alt="Каш жасоо жана перманент Салидат"
                  className="w-full h-84 sm:h-96 object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-rose-500 text-xs font-semibold uppercase tracking-wider mb-2">
                    {isKy ? 'Премиум сапат' : 'Премиум качество'}
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-bold">
                    {isKy ? 'Идеалдуу каш жана перманент' : 'Идеальные брови и перманент'}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-200 mt-1">
                    {isKy ? 'Ат-Башыдагы айымдардын сүйүктүү салону' : 'Любимый салон девушек в Ат-Башы'}
                  </p>
                </div>
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-stone-200/80 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-sm shrink-0">
                    АМ
                  </div>
                  <div>
                    <div className="flex text-amber-400 text-xs">★★★★★</div>
                    <p className="text-xs font-bold text-stone-900 mt-0.5">
                      {isKy ? '«Пудровый кашым аябай жакты!»' : '«Брови просто идеальные!»'}
                    </p>
                    <p className="text-[11px] text-stone-500">
                      {isKy ? 'Айгүл, Ат-Башы' : 'Айгуль, Ат-Башы'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating address badge */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-stone-900 text-white p-3.5 rounded-2xl shadow-lg border border-stone-800 text-xs flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <div>
                  <p className="font-bold">{isKy ? 'Мирбек дүкөнү, 2-кабат' : 'Магазин «Мирбек», 2 эт.'}</p>
                  <p className="text-[10px] text-stone-300">Ат-Башы айылы</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
