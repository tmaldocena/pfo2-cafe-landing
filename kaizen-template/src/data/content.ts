export type Lang = "en" | "es";

export const content = {
  nav: {
    about: { en: "About", es: "Acerca" },
    price: { en: "Price", es: "Precio" },
    services: { en: "Services", es: "Servicios" },
    projects: { en: "Projects", es: "Proyectos" },
    contact: { en: "Contact", es: "Contacto" },
  },
  hero: {
    subtext: {
      en: "a studio shaped by small, deliberate improvements — refining every detail until it's right",
      es: "un estudio que crece a partir de pequeñas mejoras deliberadas, refinando cada detalle hasta que esté bien",
    },
  },
  buttons: {
    contact: { en: "Contact Me", es: "Contáctame" },
    liveProject: { en: "Live Project", es: "Ver Proyecto" },
  },
  about: {
    heading: { en: "About me", es: "Sobre mí" },
    paragraph: {
      en: "We believe great design isn't a single leap — it's many small steps, refined over time. Branding, web, and motion, shaped through iteration until every detail earns its place. This is kaizen: continuous improvement, applied to craft.",
      es: "Creemos que el buen diseño no es un solo salto, sino muchos pequeños pasos, refinados con el tiempo. Branding, web y motion, moldeados a través de la iteración hasta que cada detalle tiene su lugar. Esto es kaizen: mejora continua, aplicada al oficio.",
    },
  },
  services: {
    heading: { en: "Services", es: "Servicios" },
    items: [
      {
        number: "01",
        name: { en: "3D Modeling", es: "Modelado 3D" },
        description: {
          en: "Objects, characters, and environments built through iterative refinement — shaped and reshaped until every form feels right.",
          es: "Objetos, personajes y entornos construidos a través de un refinamiento iterativo: moldeados y vueltos a moldear hasta que cada forma se siente correcta.",
        },
      },
      {
        number: "02",
        name: { en: "Rendering", es: "Renderizado" },
        description: {
          en: "Photorealistic renders refined pass after pass, where lighting, texture, and material are adjusted in small increments until the image feels true.",
          es: "Renders fotorrealistas refinados pasada tras pasada, donde la iluminación, la textura y el material se ajustan en pequeños incrementos hasta que la imagen se siente real.",
        },
      },
      {
        number: "03",
        name: { en: "Motion Design", es: "Motion Design" },
        description: {
          en: "Animation built in layers — each motion adjusted, timed, and re-timed until the story moves the way it should.",
          es: "Animación construida en capas: cada movimiento ajustado, sincronizado y vuelto a sincronizar hasta que la historia se mueve como debe.",
        },
      },
      {
        number: "04",
        name: { en: "Branding", es: "Branding" },
        description: {
          en: "Visual identities developed through repeated refinement — from a single mark to a full system, improved at every stage.",
          es: "Identidades visuales desarrolladas a través de un refinamiento constante: desde una sola marca hasta un sistema completo, mejorado en cada etapa.",
        },
      },
      {
        number: "05",
        name: { en: "Web Design", es: "Diseño Web" },
        description: {
          en: "Interfaces shaped through continuous testing and adjustment — layout, type, and flow refined until the experience feels effortless.",
          es: "Interfaces moldeadas a través de pruebas y ajustes continuos: layout, tipografía y flujo refinados hasta que la experiencia se siente natural.",
        },
      },
    ],
  },
  projects: {
    heading: { en: "Project", es: "Proyecto" },
    categoryClient: { en: "Client", es: "Cliente" },
    categoryPersonal: { en: "Personal", es: "Personal" },
    items: [
      {
        number: "01",
        name: "Nextlevel Studio",
        category: "client" as const,
        images: {
          col1a:
            "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
          col1b:
            "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
          col2:
            "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
        },
      },
      {
        number: "02",
        name: "Aura Brand Identity",
        category: "personal" as const,
        images: {
          col1a:
            "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
          col1b:
            "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
          col2:
            "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
        },
      },
      {
        number: "03",
        name: "Solaris Digital",
        category: "client" as const,
        images: {
          col1a:
            "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
          col1b:
            "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
          col2:
            "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
        },
      },
    ],
  },
  testimonials: {
    heading: { en: "What Clients Say", es: "Lo Que Dicen los Clientes" },
    items: [
      {
        name: "Hiro Tanaka",
        role: { en: "Founder — Nextlevel Studio", es: "Fundador — Nextlevel Studio" },
        quote: {
          en: "Working with Kaizen felt different from day one — every revision made the project sharper, never just different. That's rare.",
          es: "Trabajar con Kaizen se sintió diferente desde el primer día — cada revisión hacía el proyecto más afilado, nunca solo distinto. Eso es raro de encontrar.",
        },
      },
      {
        name: "Sofía Reyes",
        role: { en: "Marketing Lead — Solaris Digital", es: "Líder de Marketing — Solaris Digital" },
        quote: {
          en: "They don't chase trends, they refine fundamentals. The final result felt inevitable, like it couldn't have been any other way.",
          es: "No persiguen tendencias, refinan lo fundamental. El resultado final se sintió inevitable, como si no pudiera haber sido de otra manera.",
        },
      },
      {
        name: "Marco Belli",
        role: { en: "Creative Director — Aura Collective", es: "Director Creativo — Aura Collective" },
        quote: {
          en: "Small, constant check-ins instead of one big reveal. By the time we launched, there were no surprises — just a product we trusted.",
          es: "Check-ins pequeños y constantes en lugar de una sola gran revelación. Para el lanzamiento, no hubo sorpresas — solo un producto en el que confiábamos.",
        },
      },
      {
        name: "Yuki Sato",
        role: { en: "Product Owner — Vitara", es: "Product Owner — Vitara" },
        quote: {
          en: "Kaizen treats feedback as fuel, not friction. That mindset alone made the collaboration the smoothest we've had with any studio.",
          es: "Kaizen trata el feedback como combustible, no como friction. Solo esa mentalidad hizo de la colaboración la más fluida que tuvimos con cualquier estudio.",
        },
      },
    ],
  },
  contact: {
    heading: { en: "Let's Talk", es: "Hablemos" },
    subheading: {
      en: "Have a project in mind? Tell us about it — we read every message and reply within a day or two.",
      es: "¿Tenés un proyecto en mente? Contanos sobre él — leemos cada mensaje y respondemos en uno o dos días.",
    },
    fields: {
      name: { en: "Name", es: "Nombre" },
      namePlaceholder: { en: "Your name", es: "Tu nombre" },
      email: { en: "Email", es: "Email" },
      emailPlaceholder: { en: "your@email.com", es: "tu@email.com" },
      message: { en: "Message", es: "Mensaje" },
      messagePlaceholder: {
        en: "Tell us about your project...",
        es: "Contanos sobre tu proyecto...",
      },
    },
    submit: { en: "Send Message", es: "Enviar Mensaje" },
    confirmation: {
      en: "Message sent (demo only)",
      es: "Mensaje enviado (solo demo)",
    },
  },
  footer: {
    tagline: {
      en: "A studio shaped by continuous improvement.",
      es: "Un estudio moldeado por la mejora continua.",
    },
    follow: { en: "Follow", es: "Seguinos" },
    copyright: {
      en: "© 2026 Kaizen Studio. All rights reserved.",
      es: "© 2026 Kaizen Studio. Todos los derechos reservados.",
    },
    credit: {
      en: "Built with care, refined continuously.",
      es: "Construido con cuidado, refinado de forma continua.",
    },
  },
};
