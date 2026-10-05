import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, AlertCircle, Heart, CheckCircle2 } from 'lucide-react';
import { FAQ_DATA, SALON_INFO } from '../data/services';
import { Language } from '../types';

interface CareGuideProps {
  lang: Language;
}

export const CareGuideSection: React.FC<CareGuideProps> = ({ lang }) => {
  const isKy = lang === 'ky';
  const [openFaq, setOpenFaq] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#F7F3EE] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left column: Care guide memo (Памятка по уходу) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold mb-4">
              <Heart className="w-3.5 h-3.5 text-rose-600" />
              <span>{isKy ? 'Памятка: Кам көрүү эрежелери' : 'Памятка по уходу'}</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3">
              {isKy ? 'Процедурадан кийин эмне кылуу керек?' : 'Правила ухода после процедуры'}
            </h3>

            <p className="text-stone-600 text-xs sm:text-sm mb-6 leading-relaxed">
              {isKy
                ? 'Перманенттик макияждын кооз жана узак сакталышы үчүн алгачкы күндөрдөгү кам көрүү өтө маанилүү:'
                : 'Стойкость и чистота цвета на 50% зависят от правильного ухода в период заживления:'}
            </p>

            <div className="space-y-3.5 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-bold text-stone-900">
                    {isKy ? 'Алгачкы 3-5 күн суу тийгизбеңиз' : 'Не мочите зону 3–5 дней'}
                  </p>
                  <p className="text-stone-500 text-xs mt-0.5">
                    {isKy ? 'Сууланса салфетка менен акырын басып кургатыңыз.' : 'При случайном попадании воды промокните сухой салфеткой.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-bold text-stone-900">
                    {isKy ? 'Кабырчыкты тырмап үзбөңүз' : 'Не сдирайте шелушения и корочки'}
                  </p>
                  <p className="text-stone-500 text-xs mt-0.5">
                    {isKy ? 'Тери өз убагында табигый түлөп түшүшү керек.' : 'Они должны сойти сами, чтобы пигмент лег ровно.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-bold text-stone-900">
                    {isKy ? 'Сауна, мончо жана күндөн сактаныңыз' : 'Исключите баню, сауну и солнце'}
                  </p>
                  <p className="text-stone-500 text-xs mt-0.5">
                    {isKy ? '10–14 күн ысык бууга жана солярийге барбоо сунушталат.' : 'Горячий пар и ультрафиолет влияют на приживаемость цвета.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <p className="font-bold text-stone-900">
                    {isKy ? 'Атайын крем сүйкөө' : 'Используйте специальный крем'}
                  </p>
                  <p className="text-stone-500 text-xs mt-0.5">
                    {isKy ? 'Салидат айым сизге бере турган майды күнүнө 1-2 маал өтө жука катмар кылып сүйкөңүз.' : 'Мастер выдаст крем — наносите его тончайшим слоем.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-100 flex items-center gap-2 text-xs text-rose-700 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{isKy ? 'Толук жеке кеңеш процедура учурунда берилет' : 'Мастер подробно проинструктирует лично'}</span>
            </div>
          </div>

          {/* Right column: Frequently Asked Questions (FAQ) */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/80 text-stone-800 text-xs font-semibold mb-3">
                <HelpCircle className="w-3.5 h-3.5 text-stone-600" />
                <span>{isKy ? 'Көп берилүүчү суроолор' : 'Частые вопросы'}</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-stone-900">
                {isKy ? 'Каш жана перманент жөнүндө суроолор' : 'Ответы на волнующие вопросы'}
              </h2>
            </div>

            <div className="space-y-3">
              {FAQ_DATA.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    id={`faq-item-${faq.id}`}
                    className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-2xs transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-stone-900 text-sm sm:text-base hover:text-rose-600 transition-colors"
                    >
                      <span>{isKy ? faq.questionKy : faq.questionRu}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-stone-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                        {isKy ? faq.answerKy : faq.answerRu}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-white border border-stone-200 flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="text-xs font-bold text-stone-900">
                  {isKy ? 'Башка сурооңуз барбы?' : 'Остались вопросы?'}
                </p>
                <p className="text-xs text-stone-500">
                  {isKy ? 'Салидат айым менен түз байланышыңыз' : 'Спросите мастера лично'}
                </p>
              </div>
              <a
                id="faq-whatsapp-link"
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                  isKy
                    ? 'Саламатсызбы Салидат! Каш / перманент боюнча бир суроом бар эле.'
                    : 'Здравствуйте Салидат! У меня есть вопрос по поводу процедуры.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold"
              >
                {isKy ? 'WhatsAppтан суроо' : 'Спросить в WhatsApp'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
