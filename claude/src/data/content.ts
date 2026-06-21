export type Lang = "es" | "en";

export const content = {
  nav: {
    historia: { es: "Historia", en: "Story" },
    cafe: { es: "Café", en: "Coffee" },
    origenes: { es: "Orígenes", en: "Origins" },
    contacto: { es: "Contacto", en: "Contact" },
  },
  hero: {
    subtext: {
      es: "como la marea, el café vuelve — cada vez más preciso que la vez anterior",
      en: "like the tide, coffee returns — each time more precise than the last",
    },
    cta: { es: "Ver el Menú", en: "View Menu" },
  },
  buttons: {
    primary: { es: "Contactar", en: "Contact" },
    seeMenu: { es: "Conocer el Menú", en: "See the Menu" },
    submit: { es: "Enviar Mensaje", en: "Send Message" },
  },
  about: {
    heading: { es: "Nuestra Historia", en: "Our Story" },
    paragraph: {
      es: "Creemos que el buen café no se persigue, se espera — como una marea que siempre vuelve, un poco más refinada cada vez. Granos de origen único, tostados en pequeños lotes, preparados con el mismo cuidado, taza tras taza. Este es el ritmo del mar, aplicado al café.",
      en: "We believe great coffee isn't chased, it's awaited — like a tide that always comes back, a little more refined each time. Single-origin beans, roasted in small batches, brewed with the same care, cup after cup. This is the rhythm of the sea, applied to coffee.",
    },
  },
  menu: {
    heading: { es: "Nuestro Café", en: "Our Coffee" },
    items: [
      {
        number: "01",
        name: { es: "Filtrado", en: "Pour Over" },
        description: {
          es: "Un método lento y deliberado — agua vertida en olas constantes hasta que la taza alcanza su versión más calma y clara de sí misma.",
          en: "A slow, deliberate method — water poured in steady waves until the cup reaches its calmest, clearest version of itself.",
        },
      },
      {
        number: "02",
        name: { es: "Espresso", en: "Espresso" },
        description: {
          es: "Presión y precisión condensadas en treinta segundos — la marea reducida a una sola extracción intensa.",
          en: "Pressure and precision distilled into thirty seconds — the tide condensed into a single, intense pull.",
        },
      },
      {
        number: "03",
        name: { es: "Cold Brew", en: "Cold Brew" },
        description: {
          es: "Paciencia por sobre el calor — veinte horas de reposo, de la misma forma en que el mar moldea la piedra: lento y sin apuro.",
          en: "Patience over heat — twenty hours of steeping, the same way the sea shapes stone, slowly and without rush.",
        },
      },
      {
        number: "04",
        name: { es: "Granos de Origen Único", en: "Single Origin Beans" },
        description: {
          es: "Granos de una sola finca, una sola cosecha — para que cada lote cuente la misma historia, refinada cosecha tras cosecha.",
          en: "Beans sourced from one farm, one harvest — so every batch tells the same story, refined harvest after harvest.",
        },
      },
      {
        number: "05",
        name: { es: "Tueste a Medida", en: "Custom Roast" },
        description: {
          es: "Curvas de tueste ajustadas en pequeños incrementos hasta que el grano revela exactamente aquello para lo que siempre estuvo preparado.",
          en: "Roast curves adjusted in small increments until the bean reveals exactly what it was always capable of.",
        },
      },
    ],
  },
  origins: {
    heading: { es: "Orígenes", en: "Origins" },
    eyebrow: {
      es: "Tres mareas, tres orígenes",
      en: "Three tides, three origins",
    },
    items: [
      {
        number: "01",
        place: "Yirgacheffe",
        country: { es: "Etiopía", en: "Ethiopia" },
        note: {
          es: "Floral, cítrico, casi como té de jazmín — el origen al que más volvemos, porque nunca deja de enseñarnos algo nuevo sobre el mismo grano.",
          en: "Floral, citrus-bright, almost like jasmine tea — the origin we return to most, because it never stops teaching us something new about the same bean.",
        },
      },
      {
        number: "02",
        place: "Huila",
        country: { es: "Colombia", en: "Colombia" },
        note: {
          es: "Caramelo y manzana roja, un balance que refinamos cosecha tras cosecha — prueba de que la constancia y el carácter no son opuestos.",
          en: "Caramel and red apple, a balance we've refined harvest after harvest — proof that consistency and character aren't opposites.",
        },
      },
      {
        number: "03",
        place: "Mogiana",
        country: { es: "Brasil", en: "Brazil" },
        note: {
          es: "Profundo, a nuez, con notas de chocolate — el trasfondo constante debajo de cada blend, como una corriente que nunca deja de moverse.",
          en: "Deep, nutty, chocolate-forward — the steady undertone beneath every blend, like a current that never stops moving.",
        },
      },
    ],
  },
  events: {
    heading: { es: "Catas Guiadas", en: "Guided Tastings" },
    eyebrow: { es: "Una vez al mes", en: "Once a month" },
    description: {
      es: "El primer sábado de cada mes, abrimos tres orígenes en simultáneo para que los pruebes lado a lado — la misma calibración, explicada en vivo. Cupos limitados, reserva por mensaje.",
      en: "On the first Saturday of every month, we open three origins side by side for you to taste — the same calibration, explained live. Limited spots, reserve by message.",
    },
    cta: { es: "Reservar Lugar", en: "Reserve a Spot" },
    detail: {
      es: "Sábados, 11:00 hs · Cupo: 12 personas",
      en: "Saturdays, 11:00 AM · Capacity: 12 people",
    },
  },
  testimonials: {
    heading: { es: "Lo Que Dicen", en: "What They Say" },
    items: [
      {
        name: "Lucía Fernández",
        role: { es: "regular desde 2019", en: "regular since 2019" },
        quote: {
          es: "No vengo buscando algo nuevo cada vez — vuelvo porque está exactamente tan bueno como la última vez. Esa constancia es rara de encontrar.",
          en: "I don't come here for something new every time — I come back because it's exactly as good as the last time. That consistency is rare.",
        },
      },
      {
        name: "Martín Ibarra",
        role: { es: "barista de profesión", en: "professional barista" },
        quote: {
          es: "Se nota que cada taza está calibrada, no improvisada. Esa es la diferencia entre una buena cafetería y una excelente.",
          en: "You can tell every cup is calibrated, not improvised. That's the difference between a good coffee shop and a great one.",
        },
      },
      {
        name: "Carolina Sosa",
        role: { es: "dueña de estudio de diseño cercano", en: "owner of a nearby design studio" },
        quote: {
          es: "El ritual diario de mi equipo. Mismo pedido, misma calidad, todos los días — se volvió parte de cómo arrancamos a trabajar.",
          en: "My team's daily ritual. Same order, same quality, every single day — it's become part of how we start work.",
        },
      },
      {
        name: "Javier Ortiz",
        role: { es: "fotógrafo", en: "photographer" },
        quote: {
          es: "Fotografié muchos cafés. Este es el único donde el cuidado se nota en la taza, no solo en la decoración.",
          en: "I've photographed a lot of cafés. This is the only one where the care shows in the cup, not just the decor.",
        },
      },
    ],
  },
  contact: {
    heading: { es: "Visitanos", en: "Visit Us" },
    subheading: {
      es: "¿Preguntas, eventos, o solo querés saludar? Escribinos — leemos cada mensaje entre preparaciones.",
      en: "Questions, catering, or just want to say hello? Drop us a line — we read every message between brews.",
    },
    fields: {
      name: { es: "Nombre", en: "Name" },
      namePlaceholder: { es: "Tu nombre", en: "Your name" },
      email: { es: "Email", en: "Email" },
      emailPlaceholder: { es: "tu@email.com", en: "your@email.com" },
      message: { es: "Mensaje", en: "Message" },
      messagePlaceholder: {
        es: "Contanos en qué podemos ayudarte...",
        en: "Tell us how we can help...",
      },
    },
    confirmation: {
      es: "Mensaje enviado (solo demo)",
      en: "Message sent (demo only)",
    },
  },
  footer: {
    tagline: {
      es: "Café que vuelve, como la marea — siempre un poco más preciso.",
      en: "Coffee that returns, like the tide — always a little more precise.",
    },
    follow: { es: "Seguinos", en: "Follow" },
    copyright: {
      es: "© 2026 Café de las Olas. Todos los derechos reservados.",
      en: "© 2026 Café de las Olas. All rights reserved.",
    },
    credit: {
      es: "Preparado con cuidado, calibrado de forma continua.",
      en: "Brewed with care, calibrated continuously.",
    },
  },
};
