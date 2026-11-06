// src/config/site.ts
// Archivo de configuración central – editar aquí para actualizar contenido sin tocar componentes

const rawBase = import.meta.env.BASE_URL || '/';
export const base = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;
export const withBase = (path: string) => `${base}${path.startsWith('/') ? path : '/' + path}`;

export const siteConfig = {
  name: 'Grupo Elysium',
  tagline: 'Cuidamos la gestión. Impulsamos los primeros años.',
  description:
    'Grupo Elysium es una organización mexicana dedicada a la gestión de estancias infantiles y centros de educación inicial, con un enfoque profesional e institucional.',
  url: 'https://centroelysium.org',
  locale: 'es-MX',
  foundingYear: 2007,

  // SEO / Open Graph
  og: {
    image: withBase('/images/og-grupo-elysium.jpg'),
    type: 'website',
  },

  // Contacto — completar con datos reales antes de publicar
  contact: {
    email: 'info@centroelysium.org',
    phone: '+52 55 6479 3805',
    whatsapp: '525564793805', // número para el botón de WhatsApp
    address: '', // PENDIENTE
    city: 'México',
  },

  // Navegación principal
  nav: [
    { label: 'Inicio', href: withBase('/') },
    { label: 'Nosotros', href: withBase('/nosotros') },
    { label: 'Nuestro enfoque', href: withBase('/#enfoque') },
    { label: 'Áreas de gestión', href: withBase('/#areas') },
    { label: 'Compromiso institucional', href: withBase('/#compromiso') },
    { label: 'Contacto', href: withBase('/contacto') },
  ],

  // Textos del Hero
  hero: {
    eyebrow: 'GRUPO ELYSIUM · MÉXICO',
    h1: 'Gestión institucional al servicio de la primera infancia.',
    subtitle:
      'Fortalecemos la organización y gestión de estancias infantiles y centros de educación inicial, con un enfoque profesional que coloca el bienestar y desarrollo de la niñez en el centro de cada decisión.',
    cta1: { label: 'Conoce nuestro enfoque', href: withBase('/#enfoque') },
    cta2: { label: 'Contactar a Grupo Elysium', href: withBase('/contacto') },
    // NOTA: "Desde 2007" se muestra sujeto a validación documental antes de publicar
    showFoundingYear: true,
  },

  // Sección Quiénes Somos
  about: {
    title: 'Una visión institucional de la primera infancia',
    paragraphs: [
      'Grupo Elysium es una organización mexicana dedicada a la gestión de estancias infantiles y centros de educación inicial.',
      'Nuestra propuesta institucional se basa en la importancia de una gestión ordenada, la coordinación de equipos, el fortalecimiento de los procesos y la mejora continua.',
      'Entendemos que detrás de cada centro existe una responsabilidad fundamental: crear condiciones que permitan acompañar el cuidado, aprendizaje y desarrollo integral de niñas y niños.',
    ],
  },

  // Propósito, Misión y Visión
  pmv: [
    {
      label: 'Propósito',
      text: 'Contribuir a que cada centro cuente con una organización sólida, equipos preparados y condiciones que permitan concentrar sus esfuerzos en el bienestar, cuidado y desarrollo infantil.',
      icon: 'purpose',
    },
    {
      label: 'Misión',
      text: 'Fortalecer la gestión de estancias infantiles y centros de educación inicial mediante procesos organizativos responsables, coordinación profesional y mejora continua, favoreciendo entornos de cuidado, aprendizaje y desarrollo integral para la primera infancia.',
      icon: 'mission',
    },
    {
      label: 'Visión',
      text: 'Ser un grupo de referencia en México por su modelo de gestión de centros de atención y educación inicial, reconocido por su profesionalismo, compromiso con el bienestar infantil, solidez institucional y capacidad de adaptación a las necesidades de las familias y comunidades.',
      icon: 'vision',
    },
  ],

  // Áreas de gestión
  services: [
    {
      title: 'Gestión administrativa',
      description: 'Organización, procesos internos y coordinación de recursos.',
      icon: 'admin',
    },
    {
      title: 'Coordinación operativa',
      description: 'Estructuración y seguimiento de actividades para el funcionamiento de los centros.',
      icon: 'ops',
    },
    {
      title: 'Gestión del talento humano',
      description: 'Apoyo en organización de equipos, incorporación, formación y desarrollo profesional.',
      icon: 'people',
    },
    {
      title: 'Acompañamiento pedagógico',
      description: 'Coordinación de procesos relacionados con la atención educativa y el desarrollo infantil.',
      icon: 'pedagogy',
    },
    {
      title: 'Calidad y mejora continua',
      description: 'Seguimiento de procesos y oportunidades de fortalecimiento institucional.',
      icon: 'quality',
    },
    {
      title: 'Organización documental y procesos',
      description: 'Estructuración de procedimientos y documentación operativa.',
      icon: 'docs',
    },
  ],

  // Modelo de gestión (proceso orientativo)
  process: [
    { step: '01', title: 'Diagnóstico institucional' },
    { step: '02', title: 'Planeación y organización' },
    { step: '03', title: 'Coordinación de equipos y procesos' },
    { step: '04', title: 'Seguimiento operativo' },
    { step: '05', title: 'Evaluación y mejora continua' },
  ],

  // Valores
  values: [
    { name: 'Responsabilidad', description: 'Cumplimos nuestros compromisos con rigor y transparencia, asumiendo el impacto de nuestras decisiones.' },
    { name: 'Integridad', description: 'Actuamos con honestidad y coherencia, manteniendo la confianza de quienes trabajan con nosotros.' },
    { name: 'Bienestar infantil', description: 'El desarrollo y cuidado de niñas y niños orienta cada uno de nuestros procesos y decisiones.' },
    { name: 'Profesionalismo', description: 'Aplicamos conocimiento, rigor y mejores prácticas en nuestra gestión institucional.' },
    { name: 'Respeto', description: 'Reconocemos la dignidad de las personas, las familias y las comunidades a las que servimos.' },
    { name: 'Colaboración', description: 'Trabajamos en equipo, valorando la comunicación abierta y el aporte de cada persona.' },
    { name: 'Mejora continua', description: 'Buscamos aprender y evolucionar de manera constante para ofrecer una gestión cada vez más sólida.' },
  ],

  // Compromiso con la primera infancia
  commitment: {
    title: 'El bienestar infantil, en el centro de nuestro enfoque',
    text: [
      'Reconocemos la importancia de los primeros años de vida y el papel que desempeñan los centros de atención y educación inicial en el acompañamiento de niñas, niños y sus familias.',
      'Promovemos una visión institucional basada en el respeto, el cuidado responsable, la colaboración y el reconocimiento de los derechos de la niñez.',
    ],
    principles: [
      { name: 'Bienestar y protección', description: 'El cuidado responsable de niñas y niños es nuestra prioridad fundamental.' },
      { name: 'Respeto a los derechos infantiles', description: 'Promovemos una gestión que reconoce y respeta los derechos de la primera infancia.' },
      { name: 'Entornos de aprendizaje', description: 'Apoyamos la creación de condiciones que favorezcan el desarrollo y el aprendizaje.' },
      { name: 'Relación con las familias', description: 'Reconocemos el papel central de las familias como parte de la comunidad educativa.' },
    ],
  },

  // Footer
  footer: {
    description: 'Organización mexicana dedicada a la gestión de estancias infantiles y centros de educación inicial.',
    legalName: '', // PENDIENTE — agregar razón social cuando se confirme
    privacyUrl: withBase('/aviso-de-privacidad'),
  },
} as const;
