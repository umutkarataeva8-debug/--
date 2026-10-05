import React from 'react';
import { ShieldCheck, Sparkles, HeartHandshake, MapPin, Award, Star } from 'lucide-react';
import { REVIEWS_DATA } from '../data/services';
import { Language } from '../types';

interface AdvantagesSectionProps {
  lang: Language;
}

export const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({ lang }) => {
  const isKy = lang === 'ky';

  const advantages = [
    {
      icon: ShieldCheck,
      titleKy: '100% Стерилдүүлүк',
      titleRu: '100% Стерильность',
      descKy: 'Бир жолку ийнелер жана картридждер кардардын көзүнчө жаңы ачылат. Аспаптар дезинфекциядан толук өтөт.',
      descRu: 'Одноразовые стерильные картриджи вскрываются строго при вас. Полная дезинфекция и безопасность.',
    },
    {
      icon: Award,
      titleKy: 'Сертификатталган пигменттер',
      titleRu: 'Сертифицированные пигменты',
      descKy: 'Сапаттуу премиум пигменттер колдонулат. Убакыттын өтүшү менен көк же кызыл түскө айланбайт.',
      descRu: 'Премиум гипоаллергенные пигменты. Цвет мягко светлеет естественным образом, не давая синевы или красноты.',
    },
    {
      icon: Sparkles,
      titleKy: 'Жекече эскиз жана форма',
      titleRu: 'Индивидуальный эскиз',
      descKy: 'Эч качан бирдей шаблон менен иштебейбиз. Ар бир жүздүн анатомиясына жана каалоосуна жараша эскиз сызылат.',
      descRu: 'Никаких шаблонных форм. Подбираем идеальный изгиб и симметрию строго под пропорции вашего лица.',
    },
    {
      icon: MapPin,
      titleKy: 'Ат-Башынын так борборунда',
      titleRu: 'Удобно в центре Ат-Башы',
      descKy: '«Мирбек» дүкөнүнүн 2-кабатында. Табуу өтө оңой, жылуу, таза жана жайлуу шарт түзүлгөн.',
      descRu: 'Магазин «Мирбек», 2-й этаж. Удобный подъезд, уютная атмосфера и идеальная чистота.',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-rose-600" />
            <span>{isKy ? 'Эмне үчүн бизди тандашат?' : 'Почему выбирают салон «Салидат»?'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            {isKy ? 'Ат-Башыдагы айымдардын ишеними' : 'Доверие и забота о каждой клиентке'}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            {isKy
              ? 'Биз үчүн ар бир кардардын коопсуздугу, сулуулугу жана канааттанган жылмаюусу баарынан маанилүү.'
              : 'Для нас главное — безупречный результат, чистота, комфорт и ваша уверенность в себе.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                    {isKy ? adv.titleKy : adv.titleRu}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {isKy ? adv.descKy : adv.descRu}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Reviews from At-Bashy */}
        <div className="pt-10 border-t border-stone-200/80">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              {isKy ? 'Кардарларыбыздын ой-пикирлери' : 'Отзывы наших клиенток'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              {isKy ? 'Ат-Башы айылындагы биздин сүйүктүү айымдардан' : 'Реальные впечатления жительниц Ат-Башы'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS_DATA.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-5 border border-stone-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400 text-sm">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-stone-600 bg-stone-100 px-2 py-0.5 rounded-full font-medium">
                      {isKy ? rev.serviceKy : rev.serviceRu}
                    </span>
                  </div>

                  <p className="text-stone-700 text-xs sm:text-sm italic leading-relaxed mb-4">
                    "{isKy ? rev.commentKy : rev.commentRu}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-900">{rev.name}</p>
                    <p className="text-[10px] text-stone-500">{isKy ? rev.locationKy : rev.locationRu}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
