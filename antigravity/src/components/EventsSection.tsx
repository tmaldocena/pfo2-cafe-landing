import React from 'react';
import { useLanguage } from '../LanguageContext';
import { FadeIn } from './FadeIn';
import { WaveDivider } from './WaveDivider';
import { Calendar, Users, Award, ChevronRight } from 'lucide-react';

export const EventsSection: React.FC = () => {
  const { t } = useLanguage();

  const sessions = [
    {
      title: {
        es: 'Calibración & Sensorial',
        en: 'Calibration & Sensory',
      },
      date: {
        es: 'Sábado Próximo, 11:00 hs',
        en: 'Next Saturday, 11:00 AM',
      },
      duration: '90 min',
      price: '$12.000 / $15 USD',
      details: {
        es: 'Aprendé a calibrar tu paladar y a identificar notas florales, cítricas y achocolatadas.',
        en: 'Learn to calibrate your palate and identify floral, citrus, and chocolatey notes.',
      },
    },
    {
      title: {
        es: 'Filtrados del Mundo',
        en: 'Brewing the World',
      },
      date: {
        es: 'Sábado 4 de Julio, 11:00 hs',
        en: 'Saturday, July 4th, 11:00 AM',
      },
      duration: '120 min',
      price: '$14.000 / $18 USD',
      details: {
        es: 'Exploración de V60, Chemex y Aeropress utilizando granos de Etiopía y Colombia.',
        en: 'Exploring V60, Chemex, and Aeropress using beans from Ethiopia and Colombia.',
      },
    },
  ];

  return (
    <div className="relative">
      {/* Wave transition from Light (Origins) to Dark (Events) */}
      <WaveDivider fill="fill-ink-navy" className="absolute top-0 left-0 w-full z-10" />

      <section
        id="events"
        className="relative min-h-screen bg-ink-navy text-raw-paper pt-32 pb-24 md:pt-40 md:pb-32 px-6 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto flex flex-col space-y-16">
          {/* Header */}
          <FadeIn y={25} className="text-center">
            <span className="text-xs font-bold tracking-widest text-rust-copper uppercase block mb-2">
              EXPERIENCES
            </span>
            <h2 className="wave-heading dark text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase">
              {t.events.heading}
            </h2>
            <div className="w-20 h-[3px] bg-rust-copper mx-auto mt-4 rounded-full" />
          </FadeIn>

          {/* Content: Editorial Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left side: General Intro */}
            <div className="lg:col-span-5 flex flex-col space-y-6 md:space-y-8">
              <FadeIn delay={0.1} y={20}>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide leading-tight text-rope-natural">
                  {t.events.heading === 'Catas y Experiencias'
                    ? 'Nuestras sesiones semanales de cupping y guiado'
                    : 'Our weekly cupping and guided tasting sessions'}
                </h3>
              </FadeIn>

              <FadeIn delay={0.2} y={20}>
                <p className="text-raw-paper/85 font-light text-lg leading-relaxed">
                  {t.events.description}
                </p>
              </FadeIn>

              {/* Perks Checklist */}
              <div className="flex flex-col space-y-4 pt-4 border-t border-raw-paper/10 text-sm font-medium tracking-wider uppercase text-rope-natural/80">
                <FadeIn delay={0.3} y={15} className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-rust-copper" />
                  <span>
                    {t.events.heading === 'Catas y Experiencias'
                      ? 'Grupos reducidos (máx 6 personas)'
                      : 'Small groups (max 6 people)'}
                  </span>
                </FadeIn>
                <FadeIn delay={0.4} y={15} className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-rust-copper" />
                  <span>{t.events.info}</span>
                </FadeIn>
                <FadeIn delay={0.5} y={15} className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-rust-copper" />
                  <span>
                    {t.events.heading === 'Catas y Experiencias'
                      ? 'Materiales y coffee bags incluidos'
                      : 'Materials and coffee bags included'}
                  </span>
                </FadeIn>
              </div>
            </div>

            {/* Right side: Event Cards */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              {sessions.map((session, idx) => (
                <FadeIn
                  key={idx}
                  delay={0.2 + idx * 0.15}
                  y={30}
                  className="group bg-raw-paper/5 border border-raw-paper/10 hover:border-rust-copper/60 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0 transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
                >
                  <div className="flex flex-col space-y-3 md:w-3/4">
                    <span className="text-xs font-bold tracking-widest text-rust-copper uppercase">
                      {t.events.heading === 'Catas y Experiencias' ? session.date.es : session.date.en}
                    </span>
                    <h4 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-raw-paper group-hover:text-rust-copper transition-colors duration-300">
                      {t.events.heading === 'Catas y Experiencias' ? session.title.es : session.title.en}
                    </h4>
                    <p className="text-sm md:text-base text-raw-paper/70 font-light leading-relaxed">
                      {t.events.heading === 'Catas y Experiencias' ? session.details.es : session.details.en}
                    </p>
                    <div className="flex space-x-4 text-xs tracking-wider font-semibold text-rope-natural/70">
                      <span>DURATION: {session.duration}</span>
                      <span>•</span>
                      <span>FEE: {session.price}</span>
                    </div>
                  </div>

                  <div className="md:w-1/4 flex md:justify-end w-full">
                    <button
                      className="flex items-center space-x-2 bg-rust-copper text-raw-paper px-4 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md transition-all duration-300 hover:bg-[#96421F] hover:scale-105 active:scale-95 cursor-pointer w-full md:w-auto justify-center"
                      onClick={() => alert(t.events.heading === 'Catas y Experiencias' ? 'Reservas próximamente disponibles.' : 'Reservations coming soon.')}
                    >
                      <span>{t.events.cta}</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
