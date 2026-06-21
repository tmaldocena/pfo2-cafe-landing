import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../components/FadeIn";
import LiveProjectButton from "../components/LiveProjectButton";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";

interface ProjectCardProps {
  index: number;
  total: number;
  project: (typeof content.projects.items)[number];
}

function ProjectCard({ index, total, project }: ProjectCardProps) {
  const { lang } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const categoryLabel =
    project.category === "client"
      ? content.projects.categoryClient[lang]
      : content.projects.categoryPersonal[lang];

  return (
    <div
      ref={cardRef}
      className="h-[85vh] flex items-start sticky top-24 md:top-32"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
          border-2 border-cream bg-ink p-4 sm:p-6 md:p-8 origin-top"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="text-cream font-black"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-terracotta uppercase tracking-widest text-xs sm:text-sm font-medium">
                {categoryLabel}
              </span>
              <span className="text-cream uppercase tracking-tight font-bold text-xl sm:text-2xl md:text-3xl">
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Bottom row — image grid */}
        <div className="flex gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4 w-[40%]">
            <img
              src={project.images.col1a}
              alt={`${project.name} preview detail 1`}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.images.col1b}
              alt={`${project.name} preview detail 2`}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.images.col2}
              alt={`${project.name} main preview`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const total = content.projects.items.length;

  return (
    <section
      id="projects"
      className="bg-ink rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 relative z-10
        px-5 sm:px-8 md:px-10 pt-20 pb-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          {content.projects.heading[lang]}
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {content.projects.items.map((project, i) => (
          <ProjectCard key={project.number} index={i} total={total} project={project} />
        ))}
      </div>
    </section>
  );
}
