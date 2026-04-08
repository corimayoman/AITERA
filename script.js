/**
 * avely.ai — Main Script
 * Handles: language switching, locale detection, flag update,
 *          mobile menu, cookie banner, scroll effects, scroll reveal.
 *
 * No external dependencies. Vanilla JS only.
 * Add more languages by extending the `translations` object below.
 */

/* ── Translation Dictionary ──────────────────────────────────────────────── */
const translations = {

  en: {
    /* Navigation */
    "nav.services":    "Services",
    "nav.how":         "How It Works",
    "nav.industries":  "Industries",
    "nav.why":         "Why avely.ai",
    "nav.about":       "About",
    "nav.contact":     "Contact",
    "nav.cta":         "Book a Consultation",

    /* Hero */
    "hero.eyebrow":         "AI Transformation",
    "hero.title.line1":     "Reinventing",
    "hero.title.line2":     "systems with AI",
    "hero.subtitle":        "avely.ai helps organizations redesign operations, workflows, and decision systems using artificial intelligence — with precision, security, and enterprise-grade implementation.",
    "hero.cta.primary":     "Book a Consultation",
    "hero.cta.secondary":   "Explore Services",
    "hero.trust.security":  "Security-conscious",
    "hero.trust.enterprise":"Enterprise-grade",
    "hero.trust.practical": "Practical implementation",

    /* Value Proposition */
    "value.label":       "The Transformation Imperative",
    "value.title":       "AI is not a feature. It's a redesign.",
    "value.subtitle":    "Organizations that treat AI as a bolt-on tool miss the real opportunity. avely.ai helps you rethink systems from the ground up — so AI becomes structural, not cosmetic.",
    "value.item1.title": "System-level redesign",
    "value.item1.desc":  "We don't automate isolated tasks. We redesign the operational architecture so AI creates compounding value across your organization.",
    "value.item2.title": "Intelligence by design",
    "value.item2.desc":  "Every solution is built with AI as a first-class component — not retrofitted. This means faster decisions, fewer bottlenecks, and measurable operational gains.",
    "value.item3.title": "Scalable from day one",
    "value.item3.desc":  "Our implementations are architected to scale. What starts as a focused deployment grows into a strategic capability that evolves with your organization.",

    /* Services */
    "services.label":    "What We Build",
    "services.title":    "AI solutions built for enterprise operations",
    "services.subtitle": "Each service is designed to address a specific operational challenge — and to integrate into a broader AI transformation strategy.",
    "services.s1.title": "AI Knowledge Assistants",
    "services.s1.desc":  "Intelligent assistants that surface the right information at the right moment — trained on your organization's knowledge base, policies, and processes.",
    "services.s1.benefit":"↑ Decision speed",
    "services.s2.title": "Document Intelligence",
    "services.s2.desc":  "Transform unstructured documents — contracts, reports, forms — into structured, queryable intelligence. Reduce manual review time and extract insights at scale.",
    "services.s2.benefit":"↓ Manual processing",
    "services.s3.title": "Customer Support AI Agents",
    "services.s3.desc":  "Autonomous agents that handle complex customer interactions with accuracy and consistency — escalating intelligently when human judgment is required.",
    "services.s3.benefit":"↑ Resolution quality",
    "services.s4.title": "Operations Copilot",
    "services.s4.desc":  "An AI layer embedded in your operational workflows — providing real-time guidance, anomaly detection, and decision support for your operations teams.",
    "services.s4.benefit":"↑ Operational clarity",
    "services.s5.title": "Workflow Automation Agents",
    "services.s5.desc":  "End-to-end automation of complex, multi-step business processes. Agents that coordinate across systems, handle exceptions, and adapt to changing conditions.",
    "services.s5.benefit":"↓ Process friction",

    /* How It Works */
    "how.label":       "Our Approach",
    "how.title":       "From discovery to scale",
    "how.subtitle":    "A structured methodology that moves from understanding your systems to deploying AI that performs in production.",
    "how.step1.title": "Discover",
    "how.step1.desc":  "We map your current systems, data flows, and operational bottlenecks to identify where AI creates the highest strategic value.",
    "how.step2.title": "Design",
    "how.step2.desc":  "We architect the AI solution — defining models, data pipelines, integration points, and governance frameworks before a single line of code is written.",
    "how.step3.title": "Implement",
    "how.step3.desc":  "We build and deploy with enterprise-grade standards: security, observability, testing, and documentation built in from the start.",
    "how.step4.title": "Scale",
    "how.step4.desc":  "We support expansion across teams, systems, and use cases — ensuring your AI capability grows with your organization's ambitions.",

    /* Industries */
    "industries.label":   "Cross-Industry Adaptability",
    "industries.title":   "Built for any sector",
    "industries.subtitle":"avely.ai's methodology adapts to the specific constraints, regulations, and operational realities of each industry.",
    "industries.i1.title":"Finance",
    "industries.i1.desc": "Risk analysis, compliance automation, and intelligent reporting.",
    "industries.i2.title":"Healthcare",
    "industries.i2.desc": "Clinical documentation, patient flow optimization, and knowledge management.",
    "industries.i3.title":"Manufacturing",
    "industries.i3.desc": "Predictive maintenance, quality control, and supply chain intelligence.",
    "industries.i4.title":"Logistics",
    "industries.i4.desc": "Route optimization, demand forecasting, and operational coordination.",
    "industries.i5.title":"Legal",
    "industries.i5.desc": "Contract analysis, due diligence automation, and legal research acceleration.",
    "industries.i6.title":"Professional Services",
    "industries.i6.desc": "Proposal generation, client intelligence, and delivery optimization.",
    "industries.i7.title":"Enterprise Operations",
    "industries.i7.desc": "Cross-functional AI deployment for large-scale organizational transformation.",

    /* Why avely.ai */
    "why.label":    "Why avely.ai",
    "why.title":    "Built differently. Deployed seriously.",
    "why.subtitle": "We combine strategic thinking with technical depth — so AI transformation delivers real operational change, not just a proof of concept.",
    "why.d1.title": "AI-first system redesign",
    "why.d1.desc":  "We redesign processes with AI as a structural component, not an afterthought.",
    "why.d2.title": "Enterprise-grade mindset",
    "why.d2.desc":  "Security, governance, and scalability are built in from the first design decision.",
    "why.d3.title": "Practical implementation",
    "why.d3.desc":  "We deliver working systems, not slide decks. Every engagement ends with production-ready AI.",
    "why.d4.title": "Cross-industry adaptability",
    "why.d4.desc":  "Our methodology adapts to the specific constraints and opportunities of your sector.",
    "why.d5.title": "Privacy and security by design",
    "why.d5.desc":  "Every system is built with data minimization, access control, and secure architecture principles.",

    /* Security */
    "security.label":       "Security & Privacy",
    "security.title":       "Built with privacy and security in mind",
    "security.subtitle":    "Every avely.ai implementation is structured around GDPR-ready principles, secure architecture, and data minimization — from the first design decision to production deployment.",
    "security.c1.title":    "GDPR-ready principles",
    "security.c1.desc":     "Designed to support compliance requirements. Data handling, retention, and access are structured with regulatory frameworks in mind.",
    "security.c2.title":    "Data minimization",
    "security.c2.desc":     "We collect and process only what is strictly necessary. No unnecessary data retention, no speculative data collection.",
    "security.c3.title":    "Encryption in transit",
    "security.c3.desc":     "All data in motion is encrypted using current industry standards. Secure communication is a baseline requirement, not an option.",
    "security.c4.title":    "Least privilege access",
    "security.c4.desc":     "Systems are designed so each component accesses only what it needs. Privilege escalation paths are minimized by design.",
    "security.c5.title":    "Privacy by design",
    "security.c5.desc":     "Privacy considerations are embedded in the architecture from the start — not added as a compliance layer after the fact.",
    "security.c6.title":    "Secure implementation approach",
    "security.c6.desc":     "Code is written with security-conscious practices: input validation, dependency management, and secure defaults throughout.",
    "security.disclaimer":  "avely.ai implementations are designed with GDPR-ready principles and security-conscious practices. This does not constitute a legal compliance certification. Organizations should conduct their own legal and compliance review.",

    /* About */
    "about.label":       "About avely.ai",
    "about.title":       "Reinventing systems with AI",
    "about.p1":          "avely.ai helps organizations reinvent systems with AI by combining strategic redesign, intelligent automation, and enterprise-grade implementation.",
    "about.p2":          "We work with organizations that are serious about transformation — not just experimentation. Our engagements are structured to deliver measurable operational change, with the rigor and security standards that enterprise environments demand.",
    "about.p3":          "We are AI-first, implementation-focused, and built for the long term.",
    "about.cta":         "Start a conversation",
    "about.stat1.num":   "AI-first",
    "about.stat1.label": "Approach to every engagement",
    "about.stat2.num":   "7+",
    "about.stat2.label": "Industries served",
    "about.stat3.num":   "5",
    "about.stat3.label": "Core AI solution types",
    "about.stat4.num":   "100%",
    "about.stat4.label": "Production-ready delivery",

    /* Contact */
    "contact.label":           "Get in Touch",
    "contact.title":           "Ready to redesign your systems?",
    "contact.subtitle":        "Tell us about your organization and the challenges you're facing. We'll respond within one business day.",
    "contact.form.name":       "Full name",
    "contact.form.company":    "Company",
    "contact.form.email":      "Work email",
    "contact.form.message":    "How can we help?",
    "contact.form.consent.text":   "I agree that avely.ai may process my data to respond to this inquiry. I have read the ",
    "contact.form.consent.privacy":"Privacy Policy",
    "contact.form.submit":     "Send message",
    "contact.form.privacyNote":"Your data is used solely to respond to your inquiry. We do not sell or share your information with third parties. See our Privacy Policy for details.",

    /* CTA Banner */
    "cta.label":    "Take the next step",
    "cta.title":    "Your systems are ready for AI. Are you?",
    "cta.subtitle": "Book a consultation with avely.ai and discover where AI transformation creates the most strategic value for your organization.",
    "cta.primary":  "Book a Consultation",
    "cta.secondary":"Explore Services",

    /* Footer */
    "footer.tagline":    "Reinventing systems with AI. Enterprise-grade AI transformation for organizations that are serious about change.",
    "footer.col1.title": "Solutions",
    "footer.col2.title": "Company",
    "footer.col3.title": "Legal",
    "footer.col4.title": "Contact",
    "footer.privacy":    "Privacy Policy",
    "footer.cookies":    "Cookie Policy",
    "footer.terms":      "Terms of Use",
    "footer.copyright":  "© 2025 avely.ai. All rights reserved.",

    /* Cookie Banner */
    "cookie.text":    "We use essential cookies to make this site work. We do not use tracking or advertising cookies. See our ",
    "cookie.link":    "Cookie Policy",
    "cookie.text2":   " for details.",
    "cookie.accept":  "Accept",
    "cookie.decline": "Decline",

    /* Legal pages */
    "privacy.label":        "Legal",
    "privacy.title":        "Privacy Policy",
    "privacy.updated":      "Last updated: January 2025",
    "cookie.page.title":    "Cookie Policy",
    "terms.page.title":     "Terms of Use",

    /* Page meta (updated dynamically) */
    "_meta.title":       "avely.ai — AI-Powered Digital Transformation",
    "_meta.description": "avely.ai helps organizations redesign operations, workflows, and decision systems using artificial intelligence. Enterprise-grade AI transformation.",
  },

  es: {
    /* Navigation */
    "nav.services":    "Servicios",
    "nav.how":         "Cómo Funciona",
    "nav.industries":  "Sectores",
    "nav.why":         "Por Qué avely.ai",
    "nav.about":       "Nosotros",
    "nav.contact":     "Contacto",
    "nav.cta":         "Reservar Consulta",

    /* Hero */
    "hero.eyebrow":         "Transformación con IA",
    "hero.title.line1":     "Reinventando",
    "hero.title.line2":     "sistemas con IA",
    "hero.subtitle":        "avely.ai ayuda a las organizaciones a rediseñar operaciones, flujos de trabajo y sistemas de decisión mediante inteligencia artificial — con precisión, seguridad e implementación de nivel empresarial.",
    "hero.cta.primary":     "Reservar Consulta",
    "hero.cta.secondary":   "Ver Servicios",
    "hero.trust.security":  "Seguridad por diseño",
    "hero.trust.enterprise":"Nivel empresarial",
    "hero.trust.practical": "Implementación práctica",

    /* Value Proposition */
    "value.label":       "El Imperativo de la Transformación",
    "value.title":       "La IA no es una función. Es un rediseño.",
    "value.subtitle":    "Las organizaciones que tratan la IA como un complemento pierden la oportunidad real. avely.ai te ayuda a repensar los sistemas desde cero — para que la IA sea estructural, no cosmética.",
    "value.item1.title": "Rediseño a nivel de sistema",
    "value.item1.desc":  "No automatizamos tareas aisladas. Rediseñamos la arquitectura operativa para que la IA genere valor compuesto en toda la organización.",
    "value.item2.title": "Inteligencia por diseño",
    "value.item2.desc":  "Cada solución se construye con la IA como componente principal, no como añadido. Esto significa decisiones más rápidas, menos cuellos de botella y mejoras operativas medibles.",
    "value.item3.title": "Escalable desde el primer día",
    "value.item3.desc":  "Nuestras implementaciones están diseñadas para escalar. Lo que comienza como un despliegue focalizado se convierte en una capacidad estratégica que evoluciona con tu organización.",

    /* Services */
    "services.label":    "Qué Construimos",
    "services.title":    "Soluciones de IA para operaciones empresariales",
    "services.subtitle": "Cada servicio está diseñado para abordar un desafío operativo específico e integrarse en una estrategia de transformación con IA más amplia.",
    "services.s1.title": "Asistentes de Conocimiento IA",
    "services.s1.desc":  "Asistentes inteligentes que ofrecen la información correcta en el momento adecuado — entrenados con la base de conocimiento, políticas y procesos de tu organización.",
    "services.s1.benefit":"↑ Velocidad de decisión",
    "services.s2.title": "Inteligencia Documental",
    "services.s2.desc":  "Transforma documentos no estructurados — contratos, informes, formularios — en inteligencia estructurada y consultable. Reduce el tiempo de revisión manual y extrae insights a escala.",
    "services.s2.benefit":"↓ Procesamiento manual",
    "services.s3.title": "Agentes IA de Atención al Cliente",
    "services.s3.desc":  "Agentes autónomos que gestionan interacciones complejas con clientes con precisión y consistencia — escalando de forma inteligente cuando se requiere criterio humano.",
    "services.s3.benefit":"↑ Calidad de resolución",
    "services.s4.title": "Copiloto de Operaciones",
    "services.s4.desc":  "Una capa de IA integrada en tus flujos operativos — que proporciona orientación en tiempo real, detección de anomalías y soporte a la decisión para tus equipos.",
    "services.s4.benefit":"↑ Claridad operativa",
    "services.s5.title": "Agentes de Automatización de Flujos",
    "services.s5.desc":  "Automatización de extremo a extremo de procesos de negocio complejos y multietapa. Agentes que coordinan entre sistemas, gestionan excepciones y se adaptan a condiciones cambiantes.",
    "services.s5.benefit":"↓ Fricción de proceso",

    /* How It Works */
    "how.label":       "Nuestro Enfoque",
    "how.title":       "Del descubrimiento a la escala",
    "how.subtitle":    "Una metodología estructurada que va desde la comprensión de tus sistemas hasta el despliegue de IA que funciona en producción.",
    "how.step1.title": "Descubrir",
    "how.step1.desc":  "Mapeamos tus sistemas actuales, flujos de datos y cuellos de botella operativos para identificar dónde la IA genera mayor valor estratégico.",
    "how.step2.title": "Diseñar",
    "how.step2.desc":  "Arquitectamos la solución de IA — definiendo modelos, pipelines de datos, puntos de integración y marcos de gobernanza antes de escribir una sola línea de código.",
    "how.step3.title": "Implementar",
    "how.step3.desc":  "Construimos y desplegamos con estándares empresariales: seguridad, observabilidad, pruebas y documentación integradas desde el inicio.",
    "how.step4.title": "Escalar",
    "how.step4.desc":  "Apoyamos la expansión entre equipos, sistemas y casos de uso — asegurando que tu capacidad de IA crezca con las ambiciones de tu organización.",

    /* Industries */
    "industries.label":   "Adaptabilidad Multisectorial",
    "industries.title":   "Diseñado para cualquier sector",
    "industries.subtitle":"La metodología de avely.ai se adapta a las restricciones, regulaciones y realidades operativas específicas de cada industria.",
    "industries.i1.title":"Finanzas",
    "industries.i1.desc": "Análisis de riesgo, automatización del cumplimiento e informes inteligentes.",
    "industries.i2.title":"Salud",
    "industries.i2.desc": "Documentación clínica, optimización del flujo de pacientes y gestión del conocimiento.",
    "industries.i3.title":"Manufactura",
    "industries.i3.desc": "Mantenimiento predictivo, control de calidad e inteligencia de cadena de suministro.",
    "industries.i4.title":"Logística",
    "industries.i4.desc": "Optimización de rutas, previsión de demanda y coordinación operativa.",
    "industries.i5.title":"Legal",
    "industries.i5.desc": "Análisis de contratos, automatización de due diligence y aceleración de investigación legal.",
    "industries.i6.title":"Servicios Profesionales",
    "industries.i6.desc": "Generación de propuestas, inteligencia de clientes y optimización de entrega.",
    "industries.i7.title":"Operaciones Empresariales",
    "industries.i7.desc": "Despliegue de IA multifuncional para transformación organizacional a gran escala.",

    /* Why avely.ai */
    "why.label":    "Por Qué avely.ai",
    "why.title":    "Construido diferente. Desplegado en serio.",
    "why.subtitle": "Combinamos pensamiento estratégico con profundidad técnica — para que la transformación con IA genere cambio operativo real, no solo una prueba de concepto.",
    "why.d1.title": "Rediseño de sistemas con IA como base",
    "why.d1.desc":  "Rediseñamos procesos con la IA como componente estructural, no como añadido.",
    "why.d2.title": "Mentalidad empresarial",
    "why.d2.desc":  "Seguridad, gobernanza y escalabilidad integradas desde la primera decisión de diseño.",
    "why.d3.title": "Implementación práctica",
    "why.d3.desc":  "Entregamos sistemas funcionales, no presentaciones. Cada proyecto termina con IA lista para producción.",
    "why.d4.title": "Adaptabilidad multisectorial",
    "why.d4.desc":  "Nuestra metodología se adapta a las restricciones y oportunidades específicas de tu sector.",
    "why.d5.title": "Privacidad y seguridad por diseño",
    "why.d5.desc":  "Cada sistema se construye con principios de minimización de datos, control de acceso y arquitectura segura.",

    /* Security */
    "security.label":       "Seguridad y Privacidad",
    "security.title":       "Construido con privacidad y seguridad en mente",
    "security.subtitle":    "Cada implementación de avely.ai se estructura en torno a principios preparados para el RGPD, arquitectura segura y minimización de datos — desde la primera decisión de diseño hasta el despliegue en producción.",
    "security.c1.title":    "Principios preparados para el RGPD",
    "security.c1.desc":     "Diseñado para apoyar los requisitos de cumplimiento. El manejo, retención y acceso a datos se estructuran teniendo en cuenta los marcos regulatorios.",
    "security.c2.title":    "Minimización de datos",
    "security.c2.desc":     "Recopilamos y procesamos solo lo estrictamente necesario. Sin retención innecesaria de datos, sin recopilación especulativa.",
    "security.c3.title":    "Cifrado en tránsito",
    "security.c3.desc":     "Todos los datos en movimiento se cifran con los estándares actuales de la industria. La comunicación segura es un requisito base, no una opción.",
    "security.c4.title":    "Acceso de mínimo privilegio",
    "security.c4.desc":     "Los sistemas están diseñados para que cada componente acceda solo a lo que necesita. Las rutas de escalada de privilegios se minimizan por diseño.",
    "security.c5.title":    "Privacidad por diseño",
    "security.c5.desc":     "Las consideraciones de privacidad están integradas en la arquitectura desde el inicio — no añadidas como capa de cumplimiento a posteriori.",
    "security.c6.title":    "Enfoque de implementación segura",
    "security.c6.desc":     "El código se escribe con prácticas de seguridad: validación de entradas, gestión de dependencias y valores predeterminados seguros en todo momento.",
    "security.disclaimer":  "Las implementaciones de avely.ai están diseñadas con principios preparados para el RGPD y prácticas de seguridad consciente. Esto no constituye una certificación de cumplimiento legal. Las organizaciones deben realizar su propia revisión legal y de cumplimiento.",

    /* About */
    "about.label":       "Sobre avely.ai",
    "about.title":       "Reinventando sistemas con IA",
    "about.p1":          "avely.ai ayuda a las organizaciones a reinventar sus sistemas con IA combinando rediseño estratégico, automatización inteligente e implementación de nivel empresarial.",
    "about.p2":          "Trabajamos con organizaciones que se toman en serio la transformación — no solo la experimentación. Nuestros proyectos están estructurados para generar cambio operativo medible, con el rigor y los estándares de seguridad que exigen los entornos empresariales.",
    "about.p3":          "Somos IA-first, orientados a la implementación y construidos para el largo plazo.",
    "about.cta":         "Iniciar una conversación",
    "about.stat1.num":   "IA-first",
    "about.stat1.label": "Enfoque en cada proyecto",
    "about.stat2.num":   "7+",
    "about.stat2.label": "Sectores atendidos",
    "about.stat3.num":   "5",
    "about.stat3.label": "Tipos de solución IA",
    "about.stat4.num":   "100%",
    "about.stat4.label": "Entrega lista para producción",

    /* Contact */
    "contact.label":           "Contacto",
    "contact.title":           "¿Listo para rediseñar tus sistemas?",
    "contact.subtitle":        "Cuéntanos sobre tu organización y los desafíos que enfrentas. Responderemos en un día hábil.",
    "contact.form.name":       "Nombre completo",
    "contact.form.company":    "Empresa",
    "contact.form.email":      "Email profesional",
    "contact.form.message":    "¿Cómo podemos ayudarte?",
    "contact.form.consent.text":   "Acepto que avely.ai procese mis datos para responder a esta consulta. He leído la ",
    "contact.form.consent.privacy":"Política de Privacidad",
    "contact.form.submit":     "Enviar mensaje",
    "contact.form.privacyNote":"Tus datos se utilizan únicamente para responder a tu consulta. No vendemos ni compartimos tu información con terceros. Consulta nuestra Política de Privacidad para más detalles.",

    /* CTA Banner */
    "cta.label":    "El siguiente paso",
    "cta.title":    "Tus sistemas están listos para la IA. ¿Y tú?",
    "cta.subtitle": "Reserva una consulta con avely.ai y descubre dónde la transformación con IA genera mayor valor estratégico para tu organización.",
    "cta.primary":  "Reservar Consulta",
    "cta.secondary":"Ver Servicios",

    /* Footer */
    "footer.tagline":    "Reinventando sistemas con IA. Transformación empresarial con IA para organizaciones que se toman en serio el cambio.",
    "footer.col1.title": "Soluciones",
    "footer.col2.title": "Empresa",
    "footer.col3.title": "Legal",
    "footer.col4.title": "Contacto",
    "footer.privacy":    "Política de Privacidad",
    "footer.cookies":    "Política de Cookies",
    "footer.terms":      "Términos de Uso",
    "footer.copyright":  "© 2025 avely.ai. Todos los derechos reservados.",

    /* Cookie Banner */
    "cookie.text":    "Usamos cookies esenciales para que este sitio funcione. No usamos cookies de seguimiento ni publicidad. Consulta nuestra ",
    "cookie.link":    "Política de Cookies",
    "cookie.text2":   " para más detalles.",
    "cookie.accept":  "Aceptar",
    "cookie.decline": "Rechazar",

    /* Legal pages */
    "privacy.label":        "Legal",
    "privacy.title":        "Política de Privacidad",
    "privacy.updated":      "Última actualización: enero de 2025",
    "cookie.page.title":    "Política de Cookies",
    "terms.page.title":     "Términos de Uso",

    /* Page meta */
    "_meta.title":       "avely.ai — Transformación Digital con IA",
    "_meta.description": "avely.ai ayuda a las organizaciones a rediseñar operaciones, flujos de trabajo y sistemas de decisión mediante inteligencia artificial. Transformación empresarial con IA.",
  }
};

/* ── Language Configuration ──────────────────────────────────────────────── */

/**
 * Flag data — based on selected language/locale, NOT geographic detection.
 * To add a language: add an entry to translations{} above and flagData below.
 */
const flagData = {
  en: { flag: '🇺🇸', code: 'EN' },
  es: { flag: '🇪🇸', code: 'ES' },
};

const SUPPORTED_LANGS = Object.keys(translations);
const DEFAULT_LANG    = 'en';
const STORAGE_KEY     = 'aitera_lang';

/* ── Detect initial language ─────────────────────────────────────────────── */
function detectLanguage() {
  // 1. Check localStorage (user's explicit choice)
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;

  // 2. Check URL param ?lang=xx (useful for hreflang links)
  const urlParam = new URLSearchParams(window.location.search).get('lang');
  if (urlParam && SUPPORTED_LANGS.includes(urlParam)) return urlParam;

  // 3. Browser locale — navigator.language returns e.g. "es-ES", "en-US"
  const browserLang = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
  if (SUPPORTED_LANGS.includes(browserLang)) return browserLang;

  return DEFAULT_LANG;
}

/* ── Apply translations ──────────────────────────────────────────────────── */
function applyTranslations(lang) {
  const dict = translations[lang] || translations[DEFAULT_LANG];

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Update document language attribute
  document.documentElement.lang = lang;

  // Update page title and meta description
  if (dict['_meta.title'])       document.title = dict['_meta.title'];
  if (dict['_meta.description']) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict['_meta.description']);
  }

  // Update Open Graph title/description
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc  = document.querySelector('meta[property="og:description"]');
  if (ogTitle && dict['_meta.title'])       ogTitle.setAttribute('content', dict['_meta.title']);
  if (ogDesc  && dict['_meta.description']) ogDesc.setAttribute('content', dict['_meta.description']);
}

/* ── Update flag indicator ───────────────────────────────────────────────── */
function updateFlag(lang) {
  const data     = flagData[lang] || flagData[DEFAULT_LANG];
  const flagEl   = document.getElementById('lang-flag');
  const codeEl   = document.getElementById('lang-code');
  if (flagEl) flagEl.textContent = data.flag;
  if (codeEl) codeEl.textContent = data.code;
}

/* ── Set language ────────────────────────────────────────────────────────── */
let currentLang = DEFAULT_LANG;

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  applyTranslations(lang);
  updateFlag(lang);
}

/* ── Language toggle ─────────────────────────────────────────────────────── */
function initLanguageSwitcher() {
  const toggle = document.getElementById('lang-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    // Cycle through supported languages
    const idx     = SUPPORTED_LANGS.indexOf(currentLang);
    const nextIdx = (idx + 1) % SUPPORTED_LANGS.length;
    setLanguage(SUPPORTED_LANGS[nextIdx]);
  });
}

/* ── Mobile Menu ─────────────────────────────────────────────────────────── */
function initMobileMenu() {
  const toggle    = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  // Close menu when a nav link is clicked
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── Header scroll effect ────────────────────────────────────────────────── */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}

/* ── Cookie Banner ───────────────────────────────────────────────────────── */
function initCookieBanner() {
  const banner  = document.getElementById('cookie-banner');
  const accept  = document.getElementById('cookie-accept');
  const decline = document.getElementById('cookie-decline');
  if (!banner) return;

  // Show banner only if no decision has been stored
  const decision = localStorage.getItem('aitera_cookie_consent');
  if (decision) {
    banner.classList.add('hidden');
    return;
  }

  const dismiss = () => {
    banner.classList.add('hidden');
  };

  accept?.addEventListener('click', () => {
    localStorage.setItem('aitera_cookie_consent', 'accepted');
    dismiss();
  });

  decline?.addEventListener('click', () => {
    localStorage.setItem('aitera_cookie_consent', 'declined');
    dismiss();
  });
}

/* ── Scroll Reveal ───────────────────────────────────────────────────────── */
function initScrollReveal() {
  // Respect reduced-motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings slightly for a polished cascade effect
        const siblings = Array.from(entry.target.parentElement?.children || []);
        const idx = siblings.indexOf(entry.target);
        const delay = Math.min(idx * 80, 400);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ── Contact Form — sends via Formspree ──────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const consent = form.querySelector('#contact-consent');
    if (!consent?.checked) {
      consent?.focus();
      return;
    }

    const btn = form.querySelector('[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.textContent = currentLang === 'es' ? 'Enviando…' : 'Sending…';
    }

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        if (btn) {
          btn.textContent = currentLang === 'es' ? 'Enviado ✓' : 'Sent ✓';
          btn.style.background = '#2d6a4f';
        }
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      if (btn) {
        btn.textContent = currentLang === 'es' ? 'Error — reintentar' : 'Error — try again';
        btn.style.background = '#c0392b';
        btn.disabled = false;
      }
    }
  });
}

/* ── Smooth scroll for anchor links ─────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerH = document.getElementById('site-header')?.offsetHeight || 68;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ── Init ────────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLanguage();
  setLanguage(lang);

  initLanguageSwitcher();
  initMobileMenu();
  initHeaderScroll();
  initCookieBanner();
  initScrollReveal();
  initContactForm();
  initSmoothScroll();
});
