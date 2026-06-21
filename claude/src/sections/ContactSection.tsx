import { useState, type FormEvent } from "react";
import FadeIn from "../components/FadeIn";
import FitHeading from "../components/FitHeading";
import PrimaryButton from "../components/PrimaryButton";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";

export default function ContactSection() {
  const { lang } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Visual demo only — no backend submission.
    setSubmitted(true);
  };

  const fields = content.contact.fields;

  return (
    <section
      id="contacto"
      className="bg-paper px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={30} className="mb-4">
        <FitHeading text={content.contact.heading[lang]} className="text-5xl" />
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="text-navy/60 font-light text-center max-w-xl mx-auto mb-12 sm:mb-16">
          {content.contact.subheading[lang]}
        </p>
      </FadeIn>

      <FadeIn delay={0.2} y={30}>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-name"
              className="text-navy/70 text-sm uppercase tracking-wide"
            >
              {fields.name[lang]}
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={fields.namePlaceholder[lang]}
              className="bg-transparent border-b-2 border-navy/20 py-3 text-navy
                placeholder:text-navy/30 focus:border-rust outline-none
                transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-email"
              className="text-navy/70 text-sm uppercase tracking-wide"
            >
              {fields.email[lang]}
            </label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={fields.emailPlaceholder[lang]}
              className="bg-transparent border-b-2 border-navy/20 py-3 text-navy
                placeholder:text-navy/30 focus:border-rust outline-none
                transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-message"
              className="text-navy/70 text-sm uppercase tracking-wide"
            >
              {fields.message[lang]}
            </label>
            <textarea
              id="contact-message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={fields.messagePlaceholder[lang]}
              className="bg-transparent border-b-2 border-navy/20 py-3 text-navy
                placeholder:text-navy/30 focus:border-rust outline-none
                transition-colors duration-200 resize-none"
            />
          </div>

          <PrimaryButton
            className="self-center mt-4"
            type="submit"
            label={content.buttons.submit[lang]}
          />

          {submitted && (
            <FadeIn delay={0} y={10} duration={0.4} className="self-center">
              <p className="text-rust text-sm font-medium uppercase tracking-wide">
                {content.contact.confirmation[lang]}
              </p>
            </FadeIn>
          )}
        </form>
      </FadeIn>
    </section>
  );
}
