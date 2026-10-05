import React, { useState } from 'react';
import { Calendar, Clock, MessageCircle, Phone, Sparkles, Check, Trash2, User, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA, SALON_INFO } from '../data/services';
import { Language, ServiceItem } from '../types';

interface BookingSectionProps {
  lang: Language;
  selectedServices: ServiceItem[];
  onToggleService: (service: ServiceItem) => void;
  onClearSelected: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  lang,
  selectedServices,
  onToggleService,
  onClearSelected,
}) => {
  const isKy = lang === 'ky';

  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00');
  const [clientNote, setClientNote] = useState('');

  const timeSlots = [
    '09:30', '10:30', '11:30', '13:00', '14:30', '16:00', '17:30'
  ];

  // Calculate total price
  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);

  // Generate WhatsApp Message
  const getWhatsappMessage = () => {
    const serviceListStr = selectedServices.length > 0
      ? selectedServices.map(s => `• ${isKy ? s.titleKy : s.titleRu} (${s.priceDisplay || `${s.price} сом`})`).join('\n')
      : isKy ? '• Каш / Перманент консультациясы' : '• Консультация по бровям / перманенту';

    if (isKy) {
      return (
        `Саламатсызбы Эркайым айым! Ат-Башыдагы «Салидат» сулуулук салонуңузга жазылайын дедим эле:\n\n` +
        `👤 Кардар: ${clientName.trim() || 'Айтылган эмес'}\n` +
        `📞 Телефон: ${clientPhone.trim() || 'Ушул WhatsApp номерим'}\n` +
        `📅 Ыңгайлуу күн: ${preferredDate || 'Жакынкы бош күн'}\n` +
        `⏰ Убактысы: ${preferredTime}\n` +
        `💅 Тандалган кызматтар:\n${serviceListStr}\n` +
        (totalPrice > 0 ? `💰 Жалпы баасы болжол менен: ${totalPrice} сом\n` : '') +
        (clientNote.trim() ? `💬 Кошумча: ${clientNote.trim()}\n` : '') +
        `\nСураныч, ушул убакыт бошпу, тактап бересизби? Рахмат!`
      );
    } else {
      return (
        `Здравствуйте мастер Эркайым! Хочу записаться к вам в салон «Салидат» в Ат-Башы:\n\n` +
        `👤 Имя: ${clientName.trim() || 'Не указано'}\n` +
        `📞 Телефон: ${clientPhone.trim() || 'Этот номер WhatsApp'}\n` +
        `📅 Желаемая дата: ${preferredDate || 'Ближайшая свободная дата'}\n` +
        `⏰ Время: ${preferredTime}\n` +
        `💅 Выбранные услуги:\n${serviceListStr}\n` +
        (totalPrice > 0 ? `💰 Итоговая сумма: ${totalPrice} сом\n` : '') +
        (clientNote.trim() ? `💬 Примечание: ${clientNote.trim()}\n` : '') +
        `\nПодскажите, пожалуйста, свободно ли данное время? Спасибо!`
      );
    }
  };

  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(getWhatsappMessage())}`;

  return (
    <section id="booking" className="py-16 sm:py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-800/60 text-rose-300 text-xs font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5 text-rose-400" />
            <span>{isKy ? 'Ыкчам онлайн жазылуу' : 'Удобная онлайн запись'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {isKy ? 'Эркайым айымга түз жазылуу' : 'Прямая запись к мастеру Эркайым'}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2">
            {isKy
              ? 'Салон Салидат (Ат-Башы, Мирбек дүкөнү, 2-кабат). Кызматты тандап, WhatsApp аркылуу түз жазылыңыз:'
              : 'Салон Салидат (Ат-Башы, магазин Мирбек, 2-й этаж). Выберите услугу и запишитесь напрямую через WhatsApp:'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step 1: Select services */}
          <div className="lg:col-span-7 bg-stone-800/90 border border-stone-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-stone-700">
              <div>
                <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold block">
                  {isKy ? '1-Кадам' : 'Шаг 1'}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {isKy ? 'Кызматты белгилеңиз' : 'Отметьте нужные услуги'}
                </h3>
              </div>
              {selectedServices.length > 0 && (
                <button
                  id="clear-selected-services-btn"
                  onClick={onClearSelected}
                  className="text-xs text-stone-400 hover:text-rose-400 flex items-center gap-1 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{isKy ? 'Тазалоо' : 'Сбросить'}</span>
                </button>
              )}
            </div>

            <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
              {SERVICES_DATA.map((service) => {
                const isSelected = selectedServices.some(s => s.id === service.id);
                return (
                  <div
                    key={service.id}
                    id={`booking-item-${service.id}`}
                    onClick={() => onToggleService(service)}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-rose-950/40 border-rose-500/80 text-white shadow-xs'
                        : 'bg-stone-900/60 border-stone-700/60 text-stone-300 hover:border-stone-500 hover:bg-stone-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                        isSelected
                          ? 'bg-rose-500 border-rose-500 text-white'
                          : 'border-stone-600 bg-stone-800'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {isKy ? service.titleKy : service.titleRu}
                        </p>
                        <p className="text-xs text-stone-400">
                          {service.duration}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-rose-300 shrink-0 ml-2">
                      {service.priceDisplay || `${service.price} сом`}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Total Summary */}
            <div className="mt-6 pt-5 border-t border-stone-700 flex items-center justify-between">
              <div>
                <p className="text-xs text-stone-400">
                  {isKy ? 'Тандалган кызматтар' : 'Выбрано услуг'}: {selectedServices.length}
                </p>
                <p className="text-xs text-stone-500 mt-0.5">
                  {isKy ? 'Ат-Башы, Мирбек 2-кабат' : 'Ат-Башы, маг. Мирбек, 2 эт.'}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-stone-400 uppercase tracking-wider">
                  {isKy ? 'Жалпы баасы' : 'Итого'}:
                </p>
                <p className="font-serif text-2xl font-bold text-rose-400">
                  {totalPrice.toLocaleString()} <span className="text-sm font-normal text-stone-300">сом</span>
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Form & WhatsApp Send */}
          <div className="lg:col-span-5 bg-stone-800/90 border border-stone-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="mb-5 pb-4 border-b border-stone-700">
                <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold block">
                  {isKy ? '2-Кадам' : 'Шаг 2'}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {isKy ? 'Убакыт жана байланыш' : 'Время и контакты'}
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Client Name */}
                <div>
                  <label htmlFor="client-name-input" className="block text-stone-300 mb-1.5 font-medium">
                    {isKy ? 'Сиздин атыңыз:' : 'Ваше имя:'}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      id="client-name-input"
                      type="text"
                      placeholder={isKy ? 'Мисалы: Айгүл' : 'Например: Айгуль'}
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 rounded-xl py-2.5 pl-9 pr-3 text-white placeholder-stone-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                    />
                  </div>
                </div>

                {/* Client Phone */}
                <div>
                  <label htmlFor="client-phone-input" className="block text-stone-300 mb-1.5 font-medium">
                    {isKy ? 'Телефон номериңиз (WhatsApp):' : 'Ваш номер телефона (WhatsApp):'}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      id="client-phone-input"
                      type="tel"
                      placeholder="0704..."
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 rounded-xl py-2.5 pl-9 pr-3 text-white placeholder-stone-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                    />
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="client-date-input" className="block text-stone-300 mb-1.5 font-medium">
                      {isKy ? 'Ыңгайлуу күн:' : 'Желаемая дата:'}
                    </label>
                    <div className="relative">
                      <input
                        id="client-date-input"
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-700 rounded-xl py-2.5 px-3 text-white text-xs focus:outline-none focus:border-rose-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="client-time-select" className="block text-stone-300 mb-1.5 font-medium">
                      {isKy ? 'Саат:' : 'Время:'}
                    </label>
                    <select
                      id="client-time-select"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 rounded-xl py-2.5 px-3 text-white text-xs focus:outline-none focus:border-rose-500"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional note */}
                <div>
                  <label htmlFor="client-note-input" className="block text-stone-300 mb-1.5 font-medium">
                    {isKy ? 'Кошумча каалоо (кааласаңыз):' : 'Пожелания или комментарий:'}
                  </label>
                  <textarea
                    id="client-note-input"
                    rows={2}
                    placeholder={isKy ? 'Мисалы: эски татуажым бар / биринчи жолу жасатып жатам' : 'Например: есть старый татуаж / делаю впервые'}
                    value={clientNote}
                    onChange={(e) => setClientNote(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl py-2 px-3 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="mt-6 pt-5 border-t border-stone-700 space-y-3">
              <a
                id="send-booking-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-900/40 transition-all text-center"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>{isKy ? 'WhatsApp аркылуу жөнөтүү' : 'Отправить запись в WhatsApp'}</span>
              </a>

              <a
                id="booking-direct-call-btn"
                href={`tel:${SALON_INFO.phone}`}
                className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-950 border border-stone-700 text-stone-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-rose-400" />
                <span>{isKy ? `Түз чалуу: ${SALON_INFO.phoneDisplay}` : `Позвонить: ${SALON_INFO.phoneDisplay}`}</span>
              </a>

              <p className="text-[11px] text-stone-400 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{isKy ? 'Мастер Эркайым билдирүүңүзгө тез арада жооп берет' : 'Мастер Эркайым быстро подтвердит вашу запись'}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
