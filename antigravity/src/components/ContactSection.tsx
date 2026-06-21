import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { PrimaryButton } from './PrimaryButton';
import { FadeIn } from './FadeIn';
import { MapPin, Clock, Mail, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-raw-paper text-ink-navy py-24 md:py-32 px-6 overflow-hidden border-b border-ink-navy/5"
    >
      <div className="max-w-6xl mx-auto flex flex-col space-y-16">
        
        {/* Header */}
        <FadeIn y={25} className="text-center">
          <span className="text-xs font-bold tracking-widest text-rust-copper uppercase block mb-2">
            CONNECT
          </span>
          <h2 className="wave-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase">
            {t.contact.heading}
          </h2>
          <div className="w-20 h-[3px] bg-rust-copper mx-auto mt-4 rounded-full" />
        </FadeIn>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info & Hours */}
          <div className="lg:col-span-5 flex flex-col space-y-8 md:space-y-10">
            <FadeIn delay={0.1} y={20}>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide leading-tight">
                {t.contact.heading === 'Visitanos' ? 'Vení a visitarnos' : 'Come visit us'}
              </h3>
              <p className="text-ink-navy/70 font-light mt-3 leading-relaxed">
                {t.contact.heading === 'Visitanos'
                  ? 'Te esperamos en el corazón de Palermo para compartir un café preparado a tu medida.'
                  : 'We await you in the heart of Palermo to share a coffee brewed precisely to your taste.'}
              </p>
            </FadeIn>

            {/* Quick Details Cards */}
            <div className="flex flex-col space-y-6 pt-6 border-t border-toasted-wood/20 text-ink-navy/85">
              
              {/* Address */}
              <FadeIn delay={0.2} y={15} className="flex items-start space-x-4">
                <div className="p-3 bg-toasted-wood/10 rounded-xl text-rust-copper flex-shrink-0">
                  <MapPin size={20} className="stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-toasted-wood uppercase mb-1">
                    {t.contact.heading === 'Visitanos' ? 'DIRECCIÓN' : 'ADDRESS'}
                  </h4>
                  <p className="text-base font-medium">Honduras 4800, Palermo, CABA, Argentina</p>
                </div>
              </FadeIn>

              {/* Hours */}
              <FadeIn delay={0.3} y={15} className="flex items-start space-x-4">
                <div className="p-3 bg-toasted-wood/10 rounded-xl text-rust-copper flex-shrink-0">
                  <Clock size={20} className="stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-toasted-wood uppercase mb-1">
                    {t.contact.heading === 'Visitanos' ? 'HORARIOS' : 'HOURS'}
                  </h4>
                  <div className="text-sm font-medium space-y-0.5">
                    <p className="flex justify-between w-48">
                      <span>Lunes – Viernes:</span>
                      <span>08:00 – 20:00</span>
                    </p>
                    <p className="flex justify-between w-48">
                      <span>Sábados – Domingos:</span>
                      <span>09:00 – 21:00</span>
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Email */}
              <FadeIn delay={0.4} y={15} className="flex items-start space-x-4">
                <div className="p-3 bg-toasted-wood/10 rounded-xl text-rust-copper flex-shrink-0">
                  <Mail size={20} className="stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-toasted-wood uppercase mb-1">
                    {t.contact.heading === 'Visitanos' ? 'CONTACTO' : 'CONTACT'}
                  </h4>
                  <p className="text-base font-medium">hola@cafedelasolas.com</p>
                </div>
              </FadeIn>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-toasted-wood/5 border border-toasted-wood/10 rounded-2xl p-8 shadow-sm">
            <FadeIn delay={0.1} y={20} className="flex flex-col space-y-6">
              <div>
                <p className="text-lg text-ink-navy/85 font-light leading-relaxed">
                  {t.contact.subheading}
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 px-6 border border-rust-copper/30 bg-rust-copper/5 rounded-xl text-center space-y-4"
                >
                  <CheckCircle size={48} className="text-rust-copper animate-bounce" />
                  <h4 className="text-xl font-bold uppercase tracking-wider text-rust-copper">
                    {t.contact.heading === 'Visitanos' ? '¡Mensaje Enviado!' : 'Message Sent!'}
                  </h4>
                  <p className="text-sm font-medium text-ink-navy/70">
                    {t.contact.success}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
                  {/* Name field */}
                  <div className="flex flex-col space-y-2 relative group">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold tracking-wider text-toasted-wood uppercase group-focus-within:text-rust-copper transition-colors duration-300"
                    >
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Lucía Fernández"
                      className="bg-transparent border-b border-toasted-wood/30 focus:border-rust-copper outline-none py-2 text-ink-navy transition-colors duration-300 placeholder-ink-navy/30 text-base"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col space-y-2 relative group">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold tracking-wider text-toasted-wood uppercase group-focus-within:text-rust-copper transition-colors duration-300"
                    >
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. lucia@example.com"
                      className="bg-transparent border-b border-toasted-wood/30 focus:border-rust-copper outline-none py-2 text-ink-navy transition-colors duration-300 placeholder-ink-navy/30 text-base"
                    />
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col space-y-2 relative group">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold tracking-wider text-toasted-wood uppercase group-focus-within:text-rust-copper transition-colors duration-300"
                    >
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t.contact.heading === 'Visitanos' ? 'Escribí tu mensaje aquí...' : 'Write your message here...'}
                      className="bg-transparent border-b border-toasted-wood/30 focus:border-rust-copper outline-none py-2 text-ink-navy transition-colors duration-300 placeholder-ink-navy/30 resize-none text-base"
                    />
                  </div>

                  <div className="pt-4">
                    <PrimaryButton type="submit" className="w-full">
                      {t.contact.submit}
                    </PrimaryButton>
                  </div>
                </form>
              )}
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
