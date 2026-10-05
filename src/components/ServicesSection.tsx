import React, { useState } from 'react';
import { Sparkles, Clock, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { SERVICES_DATA, SALON_INFO } from '../data/services';
import { Language, ServiceItem } from '../types';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (service: ServiceItem) => void;
  selectedServiceIds: string[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectService,
  selectedServiceIds,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'permanent' | 'brows' | 'lashes_makeup'>('all');
  const isKy = lang === 'ky';

  const categories = [
    { id: 'all', label: isKy ? 'Бардык кызматтар' : 'Все услуги' },
    { id: 'permanent', label: isKy ? 'Перманенттик макияж' : 'Перманентный макияж' },
    { id: 'brows', label: isKy ? 'Каш жасалгалоо' : 'Оформление бровей' },
    { id: 'lashes_makeup', label: isKy ? 'Кирпик жана макияж' : 'Ресницы и макияж' },
  ];

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>{isKy ? 'Биздин кызматтар жана баалар' : 'Наши услуги и прайс'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            {isKy ? 'Сулуулук жана тыкандык үчүн баары' : 'Всё для вашей безупречной красоты'}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            {isKy
              ? 'Ат-Башыдагы «Салидат» салонунда сертификатталган пигменттер, премиум сапат жана так баалар. Сизге ылайыктуу кызматты тандап, онлайн жазылыңыз.'
              : 'Профессиональный уход в Ат-Башы: только сертифицированные материалы, одноразовые расходники и фиксированные честные цены.'}
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => setActiveTab(cat.id as any)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                  activeTab === cat.id
                    ? 'bg-stone-900 text-white shadow-md'
                    : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const isSelected = selectedServiceIds.includes(service.id);
            const title = isKy ? service.titleKy : service.titleRu;
            const desc = isKy ? service.descKy : service.descRu;
            const tag = isKy ? service.tagKy : service.tagRu;

            const servicePriceLabel = service.priceDisplay || `${service.price.toLocaleString()} сом`;
            const serviceWhatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
              isKy
                ? `Саламатсызбы Эркайым айым! Салон Салидаттан «${service.titleKy}» (${servicePriceLabel}) кызматына жазылайын дедим эле.`
                : `Здравствуйте мастер Эркайым! Салон Салидат: хочу записаться на услугу «${service.titleRu}» (${servicePriceLabel}).`
            )}`;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`flex flex-col justify-between rounded-2xl bg-white border transition-all duration-200 overflow-hidden shadow-xs hover:shadow-md ${
                  isSelected
                    ? 'border-rose-500 ring-2 ring-rose-500/20'
                    : 'border-stone-200/80 hover:border-stone-300'
                }`}
              >
                {/* Optional Image */}
                {service.imageUrl && (
                  <div className="relative h-44 w-full overflow-hidden bg-stone-100">
                    <img
                      src={service.imageUrl}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {tag && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-rose-600/90 text-white text-[11px] font-semibold backdrop-blur-xs">
                        {tag}
                      </span>
                    )}
                    <span className="absolute bottom-2.5 right-3 px-2.5 py-0.5 rounded-md bg-stone-900/80 text-white text-xs font-bold backdrop-blur-xs flex items-center gap-1">
                      <Clock className="w-3 h-3 text-rose-300" />
                      {service.duration}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                        {title}
                      </h3>
                    </div>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 mt-2">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xs text-stone-500 uppercase tracking-wider block">
                          {isKy ? 'Баасы' : 'Стоимость'}
                        </span>
                        <span className="font-serif text-2xl font-bold text-rose-600">
                          {service.priceDisplay ? (
                            service.priceDisplay
                          ) : (
                            <>
                              {service.price.toLocaleString()} <span className="text-base font-normal text-stone-700">сом</span>
                            </>
                          )}
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-stone-500 uppercase tracking-wider block">
                          {isKy ? 'Убактысы' : 'Время'}
                        </span>
                        <span className="text-xs font-semibold text-stone-700">
                          {service.duration}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        id={`select-btn-${service.id}`}
                        onClick={() => onSelectService(service)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                          isSelected
                            ? 'bg-rose-50 text-rose-700 border border-rose-300'
                            : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-rose-600" />
                            <span>{isKy ? 'Тандалды' : 'Выбрано'}</span>
                          </>
                        ) : (
                          <>
                            <span>{isKy ? 'Жазылууга кошуу' : 'В расчет'}</span>
                            <ArrowRight className="w-3 h-3" />
                          </>
                        )}
                      </button>

                      <a
                        id={`whatsapp-service-${service.id}`}
                        href={serviceWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Notice */}
        <div className="mt-10 p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
            <p>
              {isKy
                ? 'Бардык баалар так жана кошумча жашыруун төлөмдөрсүз. Перманенттин баасына алдын-ала эскиз чийүү жана сездирбөөчү анестезия кирет.'
                : 'В стоимость перманента уже входит индивидуальная отрисовка эскиза, первичная и вторичная анестезия и рекомендации по уходу.'}
            </p>
          </div>
          <a
            id="notice-call-link"
            href={`tel:${SALON_INFO.phone}`}
            className="shrink-0 font-semibold text-rose-700 hover:text-rose-800 underline"
          >
            {isKy ? 'Суроолор болсо чалыңыз' : 'Уточнить детали'}
          </a>
        </div>
      </div>
    </section>
  );
};
