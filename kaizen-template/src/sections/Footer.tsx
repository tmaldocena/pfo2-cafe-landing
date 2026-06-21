import {
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
  DribbbleIcon,
} from "../components/SocialIcons";
import FadeIn from "../components/FadeIn";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";

const SOCIAL_LINKS = [
  { Icon: InstagramIcon, label: "Instagram" },
  { Icon: LinkedinIcon, label: "LinkedIn" },
  { Icon: GithubIcon, label: "GitHub" },
  { Icon: DribbbleIcon, label: "Dribbble" },
];

export default function Footer() {
  const { lang } = useLanguage();

  const quickLinks = [
    { key: "about", href: "#about" },
    { key: "services", href: "#services" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ] as const;

  return (
    <FadeIn delay={0} y={20} duration={0.6} as="footer">
      <div
        className="bg-ink px-5 sm:px-8 md:px-10 py-12 sm:py-16"
        style={{ borderTop: "1px solid rgba(237, 227, 211, 0.15)" }}
      >
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-start">
          {/* Left block */}
          <div className="flex flex-col gap-3">
            <span
              className="hero-heading font-black uppercase tracking-tight"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
            >
              KAIZEN
            </span>
            <p className="text-cream/50 font-light text-sm max-w-xs">
              {content.footer.tagline[lang]}
            </p>
          </div>

          {/* Middle block — quick links */}
          <nav className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-cream/70 uppercase tracking-wide text-sm
                  hover:opacity-100 hover:text-cream transition-colors duration-200"
              >
                {content.nav[link.key][lang]}
              </a>
            ))}
          </nav>

          {/* Right block — social */}
          <div className="flex flex-col gap-3">
            <span className="text-terracotta text-xs uppercase tracking-widest">
              {content.footer.follow[lang]}
            </span>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-cream/30
                    flex items-center justify-center text-cream
                    hover:border-terracotta hover:text-terracotta transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col sm:flex-row sm:justify-between gap-3 pt-6 mt-10"
          style={{ borderTop: "1px solid rgba(237, 227, 211, 0.1)" }}
        >
          <span className="text-cream/40 text-xs">
            {content.footer.copyright[lang]}
          </span>
          <span className="text-cream/40 text-xs">
            {content.footer.credit[lang]}
          </span>
        </div>
      </div>
    </FadeIn>
  );
}
