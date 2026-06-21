import { InstagramIcon, FacebookIcon, TiktokIcon } from "../components/SocialIcons";
import FadeIn from "../components/FadeIn";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";

const SOCIAL_LINKS = [
  { Icon: InstagramIcon, label: "Instagram" },
  { Icon: FacebookIcon, label: "Facebook" },
  { Icon: TiktokIcon, label: "TikTok" },
];

export default function Footer() {
  const { lang } = useLanguage();

  const quickLinks = [
    { key: "historia", href: "#historia" },
    { key: "cafe", href: "#cafe" },
    { key: "origenes", href: "#origenes" },
    { key: "contacto", href: "#contacto" },
  ] as const;

  return (
    <FadeIn delay={0} y={20} duration={0.6} as="footer">
      <div
        className="bg-navy px-5 sm:px-8 md:px-10 py-12 sm:py-16"
        style={{ borderTop: "1px solid rgba(242, 232, 213, 0.15)" }}
      >
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-start">
          <div className="flex flex-col gap-3 max-w-xs">
            <span
              className="wave-heading-inverse font-bold uppercase tracking-tight"
              style={{ fontSize: "clamp(1.4rem, 4vw, 2.2rem)" }}
            >
              CAFÉ DE LAS OLAS
            </span>
            <p className="text-paper/50 font-light text-sm">
              {content.footer.tagline[lang]}
            </p>
          </div>

          <nav className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-paper/70 uppercase tracking-wide text-sm
                  hover:text-paper transition-colors duration-200"
              >
                {content.nav[link.key][lang]}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-rust text-xs uppercase tracking-widest">
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
                  className="w-10 h-10 rounded-full border border-paper/30
                    flex items-center justify-center text-paper
                    hover:border-rust hover:text-rust transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row sm:justify-between gap-3 pt-6 mt-10"
          style={{ borderTop: "1px solid rgba(242, 232, 213, 0.1)" }}
        >
          <span className="text-paper/40 text-xs">
            {content.footer.copyright[lang]}
          </span>
          <span className="text-paper/40 text-xs">
            {content.footer.credit[lang]}
          </span>
        </div>
      </div>
    </FadeIn>
  );
}
