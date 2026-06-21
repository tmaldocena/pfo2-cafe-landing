import React from 'react';
import { useLanguage } from '../LanguageContext';
import { FadeIn } from './FadeIn';
import { WaveDivider } from './WaveDivider';
import { Globe } from 'lucide-react';

export const OriginsSection: React.FC = () => {
  const { t } = useLanguage();

  // Highlight profiles for the 3 origins
  const originMetadata = [
    {
      num: '01',
      profile: { es: 'FLORAL Y CÍTRICO', en: 'FLORAL & CITRUS' },
      altitude: '1,900 - 2,200m',
      process: { es: 'Lavado', en: 'Washed' },
    },
    {
      num: '02',
      profile: { es: 'DULCE Y BALANCEADO', en: 'SWEET & BALANCED' },
      altitude: '1,500 - 1,800m',
      process: { es: 'Lavado', en: 'Washed' },
    },
    {
      num: '03',
      profile: { es: 'PROFUNDO Y CHOCOLATOSO', en: 'DEEP & CHOCOLATY' },
      altitude: '900 - 1,200m',
      process: { es: 'Natural', en: 'Natural' },
    },
  ];

  return (
    <div className="relative">
      {/* Wave transition from Dark (Menu) to Light (Origins) */}
      <WaveDivider fill="fill-raw-paper" flipped={true} className="absolute top-0 left-0 w-full z-10" />

      <section
        id="origins"
        className="relative min-h-screen bg-raw-paper text-ink-navy pt-32 pb-24 md:pt-40 md:pb-32 px-6 overflow-hidden border-b border-ink-navy/5"
      >
        <div className="max-w-6xl mx-auto flex flex-col space-y-12 md:space-y-16">
          {/* Section Header */}
          <FadeIn y={25} className="text-center">
            <span className="text-xs font-bold tracking-widest text-rust-copper uppercase block mb-2">
              TERROIR
            </span>
            <h2 className="wave-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase">
              {t.origins.heading}
            </h2>
            <div className="w-20 h-[3px] bg-rust-copper mx-auto mt-4 rounded-full" />
          </FadeIn>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {t.origins.items.map((item, idx) => {
              const meta = originMetadata[idx];
              return (
                <FadeIn
                  key={item.number}
                  delay={idx * 0.15}
                  y={30}
                  className="group flex flex-col justify-between bg-raw-paper border border-toasted-wood/20 hover:border-rust-copper rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Subtle Background Watermark Globe */}
                  <div className="absolute -top-10 -right-10 text-ink-navy opacity-[0.02] group-hover:scale-110 group-hover:text-rust-copper group-hover:opacity-[0.04] transition-all duration-700 pointer-events-none">
                    <Globe size={180} className="stroke-[1]" />
                  </div>

                  <div>
                    {/* Header: Number and Altitude */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-4xl font-extrabold text-rope-natural/40 group-hover:text-rust-copper transition-colors duration-300 leading-none">
                        {item.number}
                      </span>
                      <span className="text-xs font-semibold tracking-wider bg-ink-navy/5 px-3 py-1 rounded-full text-ink-navy/60 group-hover:bg-rust-copper/10 group-hover:text-rust-copper transition-colors duration-300">
                        {meta.altitude}
                      </span>
                    </div>

                    {/* Origin Name */}
                    <h3 className="text-2xl font-bold tracking-wide uppercase mb-2 group-hover:text-rust-copper transition-colors duration-300">
                      {item.name}
                    </h3>

                    {/* Tasting Profile Label */}
                    <span className="text-xs font-bold tracking-widest text-toasted-wood block mb-4 uppercase">
                      {t.origins.heading === 'Orígenes' ? meta.profile.es : meta.profile.en}
                    </span>

                    {/* Divider */}
                    <div className="w-12 h-[2px] bg-toasted-wood/20 group-hover:bg-rust-copper/40 transition-colors duration-300 mb-6" />

                    {/* Description */}
                    <p className="text-base text-ink-navy/80 leading-relaxed font-light mb-8">
                      {item.description}
                    </p>
                  </div>

                  {/* Metadata Footer */}
                  <div className="flex justify-between items-center text-xs tracking-wider font-semibold text-toasted-wood/80 border-t border-toasted-wood/10 pt-4 mt-auto">
                    <span>PROCESS</span>
                    <span className="uppercase text-ink-navy group-hover:text-rust-copper transition-colors duration-300">
                      {t.origins.heading === 'Orígenes' ? meta.process.es : meta.process.en}
                    </span>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
