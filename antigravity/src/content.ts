export interface TranslationContent {
  nav: {
    history: string;
    coffee: string;
    origins: string;
    events: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    subtext: string;
    cta: string;
  };
  about: {
    heading: string;
    text: string;
    cta: string;
  };
  menu: {
    heading: string;
    items: {
      number: string;
      name: string;
      description: string;
    }[];
  };
  origins: {
    heading: string;
    items: {
      number: string;
      name: string;
      description: string;
    }[];
  };
  events: {
    heading: string;
    description: string;
    info: string;
    cta: string;
  };
  testimonials: {
    heading: string;
    items: {
      name: string;
      role: string;
      quote: string;
    }[];
  };
  contact: {
    heading: string;
    subheading: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submit: string;
    success: string;
  };
  footer: {
    tagline: string;
    credit: string;
    copyright: string;
  };
}

export const translations: Record<'es' | 'en', TranslationContent> = {
  es: {
    nav: {
      history: "Historia",
      coffee: "Café",
      origins: "Orígenes",
      events: "Catas",
      testimonials: "Testimonios",
      contact: "Contacto",
    },
    hero: {
      subtext: "como la marea, el café vuelve — cada vez más preciso que la vez anterior",
      cta: "Ver el Menú",
    },
    about: {
      heading: "Nuestra Historia",
      text: "Creemos que el buen café no se persigue, se espera — como una marea que siempre vuelve, un poco más refinada cada vez. Granos de origen único, tostados en pequeños lotes, preparados con el mismo cuidado, taza tras taza. Este es el ritmo del mar, aplicado al café.",
      cta: "Conocer el Menú",
    },
    menu: {
      heading: "Nuestro Café",
      items: [
        {
          number: "01",
          name: "Filtrado / Pour Over",
          description: "Un método lento y deliberado — agua vertida en olas constantes hasta que la taza alcanza su versión más calma y clara de sí misma.",
        },
        {
          number: "02",
          name: "Espresso",
          description: "Presión y precisión condensadas en treinta segundos — la marea reducida a una sola extracción intensa.",
        },
        {
          number: "03",
          name: "Cold Brew",
          description: "Paciencia por sobre el calor — veinte horas de reposo, de la misma forma en que el mar moldea la piedra: lento y sin apuro.",
        },
        {
          number: "04",
          name: "Granos de Origen Único / Single Origin Beans",
          description: "Granos de una sola finca, una sola cosecha — para que cada lote cuente la misma historia, refinada cosecha tras cosecha.",
        },
        {
          number: "05",
          name: "Tueste a Medida / Custom Roast",
          description: "Curvas de tueste ajustadas en pequeños incrementos hasta que el grano revela exactamente aquello para lo que siempre estuvo preparado.",
        },
      ],
    },
    origins: {
      heading: "Orígenes",
      items: [
        {
          number: "01",
          name: "Yirgacheffe, Etiopía",
          description: "Floral, cítrico, casi como té de jazmín — el origen al que más volvemos, porque nunca deja de enseñarnos algo nuevo sobre el mismo grano.",
        },
        {
          number: "02",
          name: "Huila, Colombia",
          description: "Caramelo y manzana roja, un balance que refinamos cosecha tras cosecha — prueba de que la constancia y el carácter no son opuestos.",
        },
        {
          number: "03",
          name: "Mogiana, Brasil",
          description: "Profundo, a nuez, con notas de chocolate — el trasfondo constante debajo de cada blend, como una corriente que nunca deja de moverse.",
        },
      ],
    },
    events: {
      heading: "Catas y Experiencias",
      description: "Unite a nuestras sesiones de cata guiadas. Aprendé a distinguir notas, orígenes y perfiles de tueste junto a nuestros baristas.",
      info: "Todos los sábados 11:00 hs — Cupos limitados.",
      cta: "Reservar Lugar",
    },
    testimonials: {
      heading: "Testimonios",
      items: [
        {
          name: "Lucía Fernández",
          role: "regular desde 2019",
          quote: "No vengo buscando algo nuevo cada vez — vuelvo porque está exactamente tan bueno como la última vez. Esa constancia es rara de encontrar.",
        },
        {
          name: "Martín Ibarra",
          role: "barista de profesión",
          quote: "Se nota que cada taza está calibrada, no improvisada. Esa es la diferencia entre una buena cafetería y una excelente.",
        },
        {
          name: "Carolina Sosa",
          role: "dueña de estudio de diseño cercano",
          quote: "El ritual diario de mi equipo. Mismo pedido, misma calidad, todos los días — se volvió parte de cómo arrancamos a trabajar.",
        },
        {
          name: "Javier Ortiz",
          role: "fotógrafo",
          quote: "Fotografié muchos cafés. Este es el único donde el cuidado se nota en la taza, no solo en la decoración.",
        },
      ],
    },
    contact: {
      heading: "Visitanos",
      subheading: "¿Preguntas, eventos, o solo querés saludar? Escribinos — leemos cada mensaje entre preparaciones.",
      nameLabel: "Nombre",
      emailLabel: "Email",
      messageLabel: "Mensaje",
      submit: "Enviar Mensaje",
      success: "Mensaje enviado (solo demo)",
    },
    footer: {
      tagline: "Café que vuelve, como la marea — siempre un poco más preciso.",
      credit: "Preparado con cuidado, calibrado de forma continua.",
      copyright: "© 2026 Café de las Olas. Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      history: "Story",
      coffee: "Coffee",
      origins: "Origins",
      events: "Tastings",
      testimonials: "Reviews",
      contact: "Contact",
    },
    hero: {
      subtext: "like the tide, coffee returns — each time more precise than the last",
      cta: "View Menu",
    },
    about: {
      heading: "Our Story",
      text: "We believe great coffee isn't chased, it's awaited — like a tide that always comes back, a little more refined each time. Single-origin beans, roasted in small batches, brewed with the same care, cup after cup. This is the rhythm of the sea, applied to coffee.",
      cta: "See the Menu",
    },
    menu: {
      heading: "Our Coffee",
      items: [
        {
          number: "01",
          name: "Pour Over / Filtrado",
          description: "A slow, deliberate method — water poured in steady waves until the cup reaches its calmest, clearest version of itself.",
        },
        {
          number: "02",
          name: "Espresso",
          description: "Pressure and precision distilled into thirty seconds — the tide condensed into a single, intense pull.",
        },
        {
          number: "03",
          name: "Cold Brew",
          description: "Patience over heat — twenty hours of steeping, the same way the sea shapes stone, slowly and without rush.",
        },
        {
          number: "04",
          name: "Single Origin Beans / Granos de Origen Único",
          description: "Beans sourced from one farm, one harvest — so every batch tells the same story, refined harvest after harvest.",
        },
        {
          number: "05",
          name: "Custom Roast / Tueste a Medida",
          description: "Roast curves adjusted in small increments until the bean reveals exactly what it was always capable of.",
        },
      ],
    },
    origins: {
      heading: "Origins",
      items: [
        {
          number: "01",
          name: "Yirgacheffe, Ethiopia",
          description: "Floral, citrus-bright, almost like jasmine tea — the origin we return to most, because it never stops teaching us something new about the same bean.",
        },
        {
          number: "02",
          name: "Huila, Colombia",
          description: "Caramel and red apple, a balance we've refined harvest after harvest — proof that consistency and character aren't opposites.",
        },
        {
          number: "03",
          name: "Mogiana, Brazil",
          description: "Deep, nutty, chocolate-forward — the steady undertone beneath every blend, like a current that never stops moving.",
        },
      ],
    },
    events: {
      heading: "Tastings & Experiences",
      description: "Join our guided tasting sessions. Learn to distinguish notes, origins, and roast profiles alongside our baristas.",
      info: "Every Saturday at 11:00 AM — Limited spots available.",
      cta: "Reserve a Spot",
    },
    testimonials: {
      heading: "Reviews",
      items: [
        {
          name: "Lucía Fernández",
          role: "regular since 2019",
          quote: "I don't come here for something new every time — I come back because it's exactly as good as the last time. That consistency is rare.",
        },
        {
          name: "Martín Ibarra",
          role: "professional barista",
          quote: "You can tell every cup is calibrated, not improvised. That's the difference between a good coffee shop and a great one.",
        },
        {
          name: "Carolina Sosa",
          role: "owner of a nearby design studio",
          quote: "My team's daily ritual. Same order, same quality, every single day — it's become part of how we start work.",
        },
        {
          name: "Javier Ortiz",
          role: "photographer",
          quote: "I've photographed a lot of cafés. This is the only one where the care shows in the cup, not just the decor.",
        },
      ],
    },
    contact: {
      heading: "Visit Us",
      subheading: "Questions, catering, or just want to say hello? Drop us a line — we read every message between brews.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      submit: "Send Message",
      success: "Message sent (demo only)",
    },
    footer: {
      tagline: "Coffee that returns, like the tide — always a little more precise.",
      credit: "Brewed with care, calibrated continuously.",
      copyright: "© 2026 Café de las Olas. All rights reserved.",
    },
  },
};
