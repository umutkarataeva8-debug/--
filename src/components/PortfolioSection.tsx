import React, { useState } from 'react';
import { Sparkles, Eye, CheckCircle2, ArrowRight } from 'lucide-react';
import { BEFORE_AFTER_DATA, SALON_INFO } from '../data/services';
import { Language } from '../types';

interface PortfolioSectionProps {
  lang: Language;
  onBookClick: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ lang, onBookClick }) => {
  const isKy = lang === 'ky';
  const [activeItem, setActiveItem] = useState(0);
  const [showComparisonMode, setShowComparisonMode] = useState<'after' | 'both'>('both');

  const current = BEFORE_AFTER_DATA[activeItem];

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-[#F7F3EE] border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>{isKy ? 'Натыйжалар жана жасалган иштер' : 'Результаты работ До и После'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            {isKy ? 'Жүзүңүздүн табигый сулуулугу' : 'Естественное преображение'}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            {isKy
              ? 'Эскиче чийилген кара сызык эмес, заманбап пудра эффектиси. Айыккандан кийин жумшак жана табигый сакталат.'
              : 'Никаких шаблонных бровей или темных татуировок — только гармоничная форма, подчеркивающая ваши черты.'}
          </p>
        </div>

        {/* Selected Work Detail Presentation */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual comparison area */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Before Image */}
                <div className="relative rounded-2xl overflow-hidden bg-stone-100 aspect-4/3 border border-stone-200">
                  <img
                    src={current.beforeImg}
                    alt={`${current.titleKy} чейин`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 text-white text-xs font-bold px-2.5 py-1 rounded-md backdrop-blur-xs">
                    {isKy ? 'Чейин (До)' : 'До процедуры'}
                  </div>
                </div>

                {/* After Image */}
                <div className="relative rounded-2xl overflow-hidden bg-stone-100 aspect-4/3 border-2 border-rose-400">
                  <img
                    src={current.afterImg}
                    alt={`${current.titleKy} кийин`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow">
                    {isKy ? 'Кийин (После)' : 'После процедуры'}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 text-stone-900 text-[11px] font-semibold px-2 py-0.5 rounded backdrop-blur-xs">
                    {isKy ? 'Айыккан натыйжа' : 'Заживший результат'}
                  </div>
                </div>
              </div>
            </div>

            {/* Description & booking trigger */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold mb-3 border border-rose-200">
                  {isKy ? current.categoryKy : current.categoryRu}
                </span>

                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3 leading-snug">
                  {isKy ? current.titleKy : current.titleRu}
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed mb-5">
                  {isKy ? current.descriptionKy : current.descriptionRu}
                </p>

                <div className="space-y-2 mb-6 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{isKy ? 'Кардар менен эскиз толук макулдашылды' : 'Эскиз согласован с клиенткой до начала'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{isKy ? 'Теринин түсүнө дал келген пигмент' : 'Цвет подобран индивидуально под тон кожи'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{isKy ? 'Процедура оорутпай жасалды' : 'Процедура прошла абсолютно комфортно'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                <button
                  id="portfolio-book-btn"
                  onClick={onBookClick}
                  className="px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>{isKy ? 'Ушундай жасатууга жазылуу' : 'Хочу такой же результат'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  id="portfolio-whatsapp-btn"
                  href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                    isKy
                      ? `Саламатсызбы Салидат! Сайттан «${current.titleKy}» ишиңизди көрдүм, мага да ушундай кылып жасап бере аласызбы?`
                      : `Здравствуйте Салидат! Увидела на сайте пример работы «${current.titleRu}», хочу проконсультироваться.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs sm:text-sm font-semibold text-center transition-colors"
                >
                  {isKy ? 'WhatsApp менен суроо' : 'Задать вопрос в WhatsApp'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {BEFORE_AFTER_DATA.map((item, index) => (
            <button
              key={item.id}
              id={`portfolio-thumb-${item.id}`}
              onClick={() => setActiveItem(index)}
              className={`p-3.5 rounded-2xl text-left border transition-all flex items-center gap-3 ${
                activeItem === index
                  ? 'bg-white border-rose-500 shadow-md ring-2 ring-rose-500/20'
                  : 'bg-white/60 border-stone-200 hover:bg-white hover:border-stone-300'
              }`}
            >
              <img
                src={item.afterImg}
                alt={item.titleKy}
                className="w-14 h-14 rounded-xl object-cover shrink-0"
              />
              <div className="min-w-0">
                <p className="text-xs font-bold text-stone-900 truncate">
                  {isKy ? item.titleKy : item.titleRu}
                </p>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  {isKy ? item.categoryKy : item.categoryRu}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
