export type Language = "en" | "fr";

export const translations = {
  en: {
    // Navigation & Common UI
    navHome: "Home",
    navAbout: "About",
    navWork: "Work",
    navWhyUs: "Why Us",
    navProcess: "Process",
    navBlogs: "Blogs",
    navTeam: "Team",
    navContact: "Contact",
    backToHome: "Back to Home",
    backToHomepage: "Back to Homepage",
    startProject: "Start a project",
    startProjectCapital: "Start a Project",
    getInTouch: "Get in touch",
    contactUs: "Contact Us",
    navigation: "Navigation",
    partner: "Partner",
    readTime: "min read",
    by: "By",
    readArticle: "Read article",
    viewDemo: "View Demo",
    learnMore: "Learn More",
    viewAllProjects: "View all projects",
    noPhoto: "No photo uploaded",
    haveBuildInMind: "Have a build in mind?",
    discussTimeline: "Reach out directly to discuss timelines, specifications, and operational directions.",
    
    // Capabilities Band
    capBrandStrategy: "Brand strategy",
    capWebflow: "Webflow",
    capNextjs: "Next.js",
    capFigmaSystems: "Figma systems",
    capLifecycleEmail: "Lifecycle email",
    capPaidMedia: "Paid media",
    capSeoArchitecture: "SEO architecture",
    capProductDesign: "Product design",
    capAiWorkflows: "AI workflows",
    capMotionDesign: "Motion design",
    
    // Comparison (Why Choose Us)
    usualWay: "The usual way",
    growthBridgeWay: "The Growth Bridge way",
    
    // FAQs section
    commonQuestions: "Common Questions",
    frequentlyAskedQuestions: "Frequently Asked Questions",
    
    // Contact Form
    reachOut: "Reach Out",
    talkSpecs: "Let's talk specs.",
    contactDesc: "Tell us what you're trying to build, your timeline constraints, and your metrics targets. We'll follow up within 24 hours.",
    emailUs: "Email Us",
    callUs: "Call Us",
    studioLocation: "Studio Location",
    whatsYourName: "What's your name?",
    yourEmailAddress: "Your email address",
    companyOptional: "Company / Organization (Optional)",
    expectedBudget: "Expected Budget Range",
    describeScope: "Describe the project scope",
    submitInquiry: "Submit Project Inquiry",
    sendingInquiry: "Sending inquiry...",
    messageSent: "Message Sent Successfully",
    thanksForReaching: "Thank you for reaching out to Growth Bridge! Mohammed Aiman or a member of the team will follow up directly within 24 hours.",
    sendAnother: "Send another message",
    
    // Contact Errors
    nameRequired: "Name is required",
    emailRequired: "Email is required",
    emailInvalid: "Please enter a valid email address",
    scopeRequired: "Please describe your project scope",
    
    // Blog UI
    insights: "Insights"
  },
  fr: {
    // Navigation & Common UI
    navHome: "Accueil",
    navAbout: "À propos",
    navWork: "Projets",
    navWhyUs: "Pourquoi nous",
    navProcess: "Processus",
    navBlogs: "Blog",
    navTeam: "Équipe",
    navContact: "Contact",
    backToHome: "Retour à l'accueil",
    backToHomepage: "Retour à l'accueil",
    startProject: "Démarrer un projet",
    startProjectCapital: "Démarrer un Projet",
    getInTouch: "Nous contacter",
    contactUs: "Contactez-nous",
    navigation: "Navigation",
    partner: "Associé",
    readTime: "min de lecture",
    by: "Par",
    readArticle: "Lire l'article",
    viewDemo: "Voir démo ↗",
    learnMore: "En savoir plus",
    viewAllProjects: "Voir tous les projets",
    noPhoto: "Aucune photo disponible",
    haveBuildInMind: "Un projet en tête ?",
    discussTimeline: "Contactez-nous directement pour discuter de vos calendriers, spécifications et orientations opérationnelles.",
    
    // Capabilities Band
    capBrandStrategy: "Stratégie de marque",
    capWebflow: "Webflow",
    capNextjs: "Next.js",
    capFigmaSystems: "Systèmes Figma",
    capLifecycleEmail: "E-mails transactionnels",
    capPaidMedia: "Campagnes payantes",
    capSeoArchitecture: "Architecture SEO",
    capProductDesign: "Design de produit",
    capAiWorkflows: "Flux de travail IA",
    capMotionDesign: "Motion design",
    
    // Comparison (Why Choose Us)
    usualWay: "La méthode habituelle",
    growthBridgeWay: "La méthode Growth Bridge",
    
    // FAQs section
    commonQuestions: "Questions Fréquentes",
    frequentlyAskedQuestions: "Frequently Asked Questions", // Will keep French title but clean up on page
    
    // Contact Form
    reachOut: "Nous Contacter",
    talkSpecs: "Parlons de votre projet.",
    contactDesc: "Décrivez-nous ce que vous souhaitez construire, vos contraintes de calendrier et vos objectifs. Nous vous répondrons sous 24 heures.",
    emailUs: "Écrivez-nous",
    callUs: "Appelez-nous",
    studioLocation: "Localisation du Studio",
    whatsYourName: "Quel est votre nom ?",
    yourEmailAddress: "Votre adresse e-mail",
    companyOptional: "Entreprise / Organisation (Optionnel)",
    expectedBudget: "Fourchette de budget prévue",
    describeScope: "Décrivez la portée du projet",
    submitInquiry: "Envoyer la demande de projet",
    sendingInquiry: "Envoi de la demande...",
    messageSent: "Message envoyé avec succès",
    thanksForReaching: "Merci d'avoir contacté Growth Bridge ! Mohammed Aiman ou un membre de notre équipe vous recontactera directement sous 24 heures.",
    sendAnother: "Envoyer un autre message",
    
    // Contact Errors
    nameRequired: "Le nom est requis",
    emailRequired: "L'e-mail est requis",
    emailInvalid: "Veuillez saisir une adresse e-mail valide",
    scopeRequired: "Veuillez décrire la portée de votre projet",
    
    // Blog UI
    insights: "Analyses"
  }
};

// Seeded Data Translations (EN -> FR mapping for database defaults)
const seededDataTranslations: Record<string, string> = {
  // Homepage Configurations
  "Build your startup with Growth Bridge.": "Bâtissez votre startup avec Growth Bridge.",
  "A design and engineering partner for founders who value quality, clarity, and momentum. We bridge complex engineering with premium aesthetics.": 
    "Un partenaire de design et d'ingénierie pour les fondateurs qui valorisent la qualité, la clarté et l'élan. Nous associons une ingénierie complexe à une esthétique haut de gamme.",
  "Start a project": "Démarrer un projet",
  "Bridging elite design with engineering.": "Associer un design d'élite à l'ingénierie.",
  "We are a boutique studio of designers and developers, working directly with founders to build clean, premium interfaces that endure.":
    "Nous sommes un studio boutique de designers et développeurs, travaillant directement avec les fondateurs pour concevoir des interfaces épurées et haut de gamme qui durent.",
  "Most agencies pass your design from senior directors down to junior developers who copy templates. At Growth Bridge, we eliminate administrative overhead. Our creators code, and our coders design. The builder you talk to in our first call is the one writing the components for your platform.":
    "La plupart des agences transmettent votre design de directeurs seniors à des développeurs juniors qui copient des modèles. Chez Growth Bridge, nous éliminons les filtres administratifs. Nos créateurs codent et nos codeurs conçoivent. La personne avec qui vous échangez lors de notre premier appel est celle qui écrit les composants de votre plateforme.",
  
  // Section Headers
  "About Growth Bridge": "À propos de Growth Bridge",
  "Our Disciplines": "Nos Disciplines",
  "Featured Projects": "Projets Phares",
  "Projects that speak\nfor themselves.": "Des projets qui parlent d'eux-mêmes.",
  "Projects that speak for themselves.": "Des projets qui parlent d'eux-mêmes.",
  "Why Choose Us": "Pourquoi Nous Choisir",
  "Built different,\nand built to prove it.": "Construit différemment, et prêt à le prouver.",
  "Built different, and built to prove it.": "Construit différemment, et prêt à le prouver.",
  "Our process": "Notre processus",
  "Five stages, always\nin this order.": "Cinq étapes, toujours dans cet ordre.",
  "Five stages, always in this order.": "Cinq étapes, toujours dans cet ordre.",
  "Three ways to\nwork together.": "Trois façons de collaborer.",
  "Three ways to work together.": "Trois façons de collaborer.",
  "What clients say": "Ce que disent nos clients",
  "Latest insights &\nfield notes.": "Dernières analyses et notes de terrain.",
  "Latest insights & field notes.": "Dernières analyses et notes de terrain.",
  "Let's build something\nworth talking about.": "Construisons quelque chose de mémorable.",
  "Let's build something worth talking about.": "Construisons quelque chose de mémorable.",
  "Tell us what's not working yet. We'll tell you, honestly, whether we're the right team to fix it.":
    "Dites-nous ce qui ne fonctionne pas encore. Nous vous dirons, honnêtement, si nous sommes la bonne équipe pour y remédier.",
  "Creative projects shipped since 2019": "Projets créatifs livrés depuis 2019",
  "Average timeline to first prototype": "Délai moyen pour le premier prototype",
  "Days": "jours",
  "Client retention and rebook rate": "Taux de rétention et de réengagement client",
  "Committed transparency & alignment": "Engagement total de transparence et d'alignement",
  "The usual way": "La méthode habituelle",
  "The Growth Bridge way": "La méthode Growth Bridge",
  
  // Comparison Rows
  "Three agencies for brand, build, and growth — none of them talking to each other.":
    "Trois agences distinctes pour la marque, le site et la croissance — qui ne communiquent pas entre elles.",
  "One team, accountable for the whole funnel, from first sketch to the dashboard you check on Monday.":
    "Une seule équipe, responsable de l'ensemble de l'entonnoir, de la première esquisse au tableau de bord que vous vérifiez le lundi.",
  "A 40-slide deck of options, due back to you to make the actual decision.":
    "Une présentation de 40 diapositives d'options, que vous devez analyser pour prendre la décision finale.",
  "One strong direction, argued for clearly, because you hired a point of view, not a menu.":
    "Une orientation forte, défendue avec clarté, car vous avez choisi un point de vue, pas un menu.",
  "A black-box handoff you can't extend without calling us again.":
    "Une livraison boîte noire que vous ne pouvez pas faire évoluer sans nous rappeler.",
  "Documented source files and a system your own team can build on without us in the room.":
    "Des fichiers sources documentés et un système que votre propre équipe peut faire évoluer de manière autonome.",
  
  // Founder details
  "Mohammed Aiman, founder —": "Mohammed Aiman, fondateur —",
  "\"We started Growth Bridge because we kept watching good businesses get mediocre work from teams that thought like vendors instead of operators. Fifty-plus projects later, that's still the whole pitch.\"":
    "\"Nous avons lancé Growth Bridge parce que nous voyions trop de belles entreprises recevoir un travail moyen de la part de prestataires agissant comme de simples vendeurs plutôt que comme des partenaires. Plus de cinquante projets plus tard, notre promesse reste la même.\"",

  // Process Steps
  "Discover": "Découvrir",
  "A deep-dive into your business, audience, and goals to find the real opportunity, not the obvious one.":
    "Une immersion profonde dans votre entreprise, votre public et vos objectifs pour identifier la véritable opportunité, pas celle évidente.",
  "Design": "Design",
  "Editorial-quality interfaces that balance beauty with conversion logic — argued for, not A/B tested into existence.":
    "Des interfaces de qualité éditoriale alliant esthétique et logique de conversion — portées par une vision, pas dictées par des tests A/B.",
  "Develop": "Développer",
  "Fast, robust, and scalable builds, with clean handoff documentation from day one.":
    "Des architectures rapides, robustes et évolutives, avec une documentation de transfert propre dès le premier jour.",
  "Launch": "Lancer",
  "Analytics, automations, and campaign surfaces connected before launch day, not patched on after.":
    "Analyses, automatisations et outils de campagne configurés avant le jour du lancement, pas rajoutés à la hâte par la suite.",
  "Grow": "Propulser",
  "Ongoing experimentation that compounds the result instead of resetting the clock every quarter.":
    "Une expérimentation continue qui capitalise sur les résultats au lieu de remettre les compteurs à zéro chaque trimestre.",

  // Capabilities
  "Brand strategy": "Stratégie de marque",
  "Webflow": "Webflow",
  "Next.js": "Next.js",
  "Figma systems": "Systèmes Figma",
  "Lifecycle email": "E-mails transactionnels",
  "Paid media": "Campagnes payantes",
  "SEO architecture": "Architecture SEO",
  "Product design": "Design de produit",
  "AI workflows": "Flux de travail IA",
  "Motion design": "Motion design",

  // Services
  "Website development": "Développement web",
  "Fast, polished marketing sites designed to convert visitors into pipeline. Every pixel intentional, every load time respected.":
    "Des sites vitrines performants et soignés, conçus pour convertir vos visiteurs en opportunités. Chaque pixel a son importance, chaque temps de chargement est respecté.",
  "Positioning, naming, and visual language built on a point of view you can actually defend in a room full of competitors.":
    "Positionnement, nommage et langage visuel fondés sur une vision forte que vous pouvez réellement défendre face à vos concurrents.",
  "Interfaces shaped around clarity and momentum — wireframes through to a system your engineers can build without guessing.":
    "Des interfaces pensées pour la clarté et la fluidité — des maquettes jusqu'à un système que vos ingénieurs peuvent coder sans deviner.",
  "Growth marketing": "Growth marketing",
  "Funnels and experiment systems that turn attention into measurable, compounding pipeline rather than one-off spikes.":
    "Des tunnels de conversion et systèmes d'expérimentation qui transforment l'attention en croissance mesurable et durable, plutôt qu'en pics sans lendemain.",
  "AI automation": "Automatisation IA",
  "Workflow systems that remove repetitive ops work so your team's time goes toward the calls only a person can make.":
    "Des systèmes opérationnels pour éliminer les tâches répétitives afin que le temps de votre équipe soit consacré aux décisions que seuls les humains peuvent prendre.",
  "Product development": "Développement de produit",
  "From prototype to launch-ready build, engineered with the same restraint and pace as the design that precedes it.":
    "Du prototype au produit prêt pour le lancement, conçu avec la même rigueur et le même rythme que le design qui l'a précédé.",
  "Six disciplines.\nOne accountable\nteam.": "Six disciplines.\nUne seule équipe responsable.",
  "Six disciplines. One accountable team.": "Six disciplines. Une seule équipe responsable.",

  // Projects
  "Northstar Commerce": "Northstar Commerce",
  "E-commerce redesign": "Refonte E-commerce",
  "A premium storefront rebuild with conversion-first design and lifecycle automation worthy of the product.":
    "Une refonte complète de boutique en ligne orientée conversion et automatisation de cycle de vie à la hauteur du produit.",
  "Atlas Clinics": "Atlas Clinics",
  "Healthcare platform": "Plateforme de santé",
  "Local SEO architecture and booking funnels designed to build trust from the first click.":
    "Architecture SEO locale et tunnels de réservation conçus pour instaurer la confiance dès le premier clic.",
  "Pulse SaaS": "Pulse SaaS",
  "Product launch": "Lancement de produit",
  "Brand positioning, launch site, and onboarding for a product-led growth engine.":
    "Positionnement de marque, site de lancement et intégration pour un moteur de croissance axé sur le produit.",
  "Loam & Co.": "Loam & Co.",
  "Brand & web": "Identité de marque & web",
  "Visual identity and lookbook site for a slow-fashion studio's debut collection.":
    "Identité visuelle et lookbook numérique pour la première collection d'un studio de mode éco-responsable.",
  "Selected engineering\n& design archives.": "Sélection d'archives\nd'ingénierie et de design.",
  "Selected engineering & design archives.": "Sélection d'archives d'ingénierie et de design.",
  "A comprehensive look at our builds — storefronts, medical booking channels, complex dashboards, and SaaS design systems engineered for high performance.":
    "Un aperçu complet de nos réalisations — boutiques en ligne, parcours médicaux, tableaux de bord complexes et systèmes de design SaaS conçus pour la performance.",
  "Pre-built Solutions": "Solutions pré-intégrées",
  "Production-ready templates, starter architectures, and component systems designed to kickstart your next digital experience with zero overhead.":
    "Modèles prêts pour la production, architectures de départ et bibliothèques de composants conçus pour lancer votre projet sans friction.",
  "No pre-built solutions match this filter.": "Aucune solution pré-intégrée ne correspond à ce filtre.",
  "Customised Implementations": "Intégrations sur mesure",
  "Tailor-made designs, deep custom backend integrations, and bespoke digital assets crafted to meet unique business challenges and scale seamlessly.":
    "Designs sur mesure, intégrations de backend personnalisées et actifs numériques uniques pour répondre aux enjeux de votre entreprise.",
  "No customised implementations match this filter.": "Aucune intégration sur mesure ne correspond à ce filtre.",

  // Industries list
  "E-commerce & DTC": "E-commerce & DTC",
  "Healthcare": "Santé",
  "B2B SaaS": "SaaS B2B",
  "Consumer apps": "Applications grand public",
  "Hospitality": "Hôtellerie & Restauration",
  "Fintech": "Fintech",
  "14 projects": "14 projets",
  "9 projects": "9 projets",
  "18 projects": "18 projets",
  "7 projects": "7 projets",
  "5 projects": "5 projets",
  "4 projects": "4 projets",
  "Storefronts, lifecycle email, retention systems.": "Boutiques en ligne, e-mails transactionnels, systèmes de fidélisation.",
  "Booking funnels, compliance-aware UX, local SEO.": "Tunnels de réservation, UX conforme, SEO local.",
  "Launch sites, onboarding flows, PLG instrumentation.": "Sites de lancement, parcours d'onboarding, intégration PLG.",
  "Brand systems, App Store pages, growth loops.": "Systèmes de marque, pages d'App Store, boucles de croissance.",
  "Booking experiences, photography direction, local presence.": "Expériences de réservation, direction photo, présence locale.",
  "Trust-first UI, regulatory-aware copy, dashboarding.": "Interfaces basées sur la confiance, rédaction conforme, tableaux de bord.",

  // Team Members
  "Founder & Chief Architect": "Fondateur & Architecte en Chef",
  "We started Growth Bridge because we kept watching good businesses get mediocre work from teams that thought like vendors instead of operators. Fifty-plus projects later, that's still the whole pitch.":
    "Nous avons lancé Growth Bridge parce que nous voyions trop de belles entreprises recevoir un travail moyen de la part de prestataires agissant comme de simples vendeurs plutôt que comme des partenaires. Plus de cinquante projets plus tard, notre promesse reste la même.",
  "Sarah Jenkins": "Sarah Jenkins",
  "Lead Product Designer": "Designer Produit Senior",
  "Designing digital experiences that bridge brand strategy with production-ready frontends. Former designer at Stripe and Vercel.":
    "Création d'expériences numériques alliant stratégie de marque et interfaces prêtes pour la production. Ancienne designer chez Stripe et Vercel.",
  "Alex Rivera": "Alex Rivera",
  "Senior Fullstack Engineer": "Ingénieur Fullstack Senior",
  "Specializing in low-latency Next.js integrations, dynamic content pipelines, and clean API structure. Obsessed with sub-second page performance.":
    "Spécialisé dans les intégrations Next.js à faible latence, les flux de contenu dynamiques et les architectures API propres. Obsédé par les performances web inférieures à la seconde.",
  "Dynamic Squad": "Équipe Dynamique",
  "Meet our team\nof builders.": "Découvrez notre équipe\nde constructeurs.",
  "Meet our team of builders.": "Découvrez notre équipe de constructeurs.",
  "We eliminate administrative filters. Our creators design, and our designers build. You talk directly with the engineers compiling your layout components.":
    "Nous éliminons les filtres administratifs. Nos créateurs conçoivent et nos codeurs construisent. Vous échangez directement avec les ingénieurs qui écrivent les composants de votre interface.",

  // Testimonials
  "Riya Shah": "Riya Shah",
  "Founder, Northstar Commerce": "Fondatrice, Northstar Commerce",
  "Growth Bridge gave our brand the kind of presence we used to think only enterprise teams could afford.":
    "Growth Bridge a donné à notre marque le type de présence que nous pensions réservé aux grandes entreprises.",
  "Daniel Morris": "Daniel Morris",
  "Director, Atlas Clinics": "Directeur, Atlas Clinics",
  "They turned a scattered sales process into one clean system. We saw better leads within weeks.":
    "Ils ont transformé un processus commercial fragmenté en un système propre. Nous avons obtenu de meilleurs prospects en quelques semaines.",
  "Anika Rao": "Anika Rao",
  "CEO, Pulse SaaS": "CEO, Pulse SaaS",
  "The design taste is obvious, but the operating discipline is what made the project special.":
    "La sensibilité esthétique est évidente, mais c'est la rigueur opérationnelle qui a rendu le projet si spécial.",

  // FAQS
  "How long does a typical project sprint take?": "Combien de temps prend un sprint de projet typique ?",
  "Our project sprints generally take between 4 to 8 weeks, depending on complexity. We focus on delivering a high-fidelity first prototype within the first 14 days so we can iterate quickly together.":
    "Nos sprints de projet durent généralement entre 4 et 8 semaines, selon la complexité. Nous nous concentrons sur la livraison d'un premier prototype haute-fidélité dans les 14 premiers jours afin de pouvoir itérer rapidement ensemble.",
  "What is a growth partnership?": "Qu'est-ce qu'un partenariat de croissance ?",
  "A growth partnership is our retainer model (minimum 3 months). It embeds our design and engineering team into your product roadmap, handling continuous feature launches, landing pages, and conversion optimizations.":
    "Un partenariat de croissance est notre modèle par abonnement (minimum 3 mois). Il intègre notre équipe de design et d'ingénierie dans votre feuille de route produit, gérant les lancements continus de fonctionnalités, les pages de destination et l'optimisation des conversions.",
  "Do you offer post-launch support?": "Proposez-vous un support après le lancement ?",
  "Yes! Every project sprint includes 30 days of complimentary post-launch support. For long-term iterations and scaling, clients usually transition into a monthly growth partnership.":
    "Oui ! Chaque sprint de projet inclut 30 jours de support post-lancement gratuit. Pour des itérations et un développement à long terme, nos clients passent généralement à un partenariat de croissance mensuel.",
  "How do you handle hosting and handoff?": "Comment gérez-vous l'hébergement et la livraison ?",
  "We provide complete handoff of clean, commented Next.js / Tailwind repositories and Figma systems. We also configure analytics, SEO tags, and CI/CD pipelines on platforms like Vercel or Netlify so your site is ready to launch.":
    "Nous fournissons une livraison complète de dépôts Next.js propres et commentés et de systèmes Figma. Nous configurons également les analyses, les balises SEO et les pipelines CI/CD sur des plateformes comme Vercel ou Netlify afin que votre site soit prêt à être lancé.",
  "Frequently Asked Questions": "Questions Fréquentes",

  // Blogs UI & Seeded Blogs
  "The design-to-code gap is costing you momentum.": "L'écart entre le design et le code vous coûte de l'élan.",
  "How fractional engineering teams bridge complex layout execution with premium developer-first systems.":
    "Comment les équipes d'ingénierie partagées comblent l'exécution de mises en page complexes avec des systèmes axés développeur.",
  "design-to-code-gap": "design-to-code-gap",
  "A detailed post about how modern design workflows can be translated directly into high-fidelity code components.":
    "Un article détaillé sur la façon dont les flux de travail de design modernes peuvent être traduits directement en composants de code haute fidélité.",
  "Why we built a static-first CMS pipeline for Next.js 16.": "Pourquoi nous avons construit un pipeline CMS statique pour Next.js 16.",
  "A deep dive into combining incremental static generation with flexible, dynamic administrator panels.":
    "Une plongée au cœur de la combinaison d'une génération statique incrémentale avec des panneaux d'administration dynamiques et flexibles.",
  "static-first-cms-pipeline": "static-first-cms-pipeline",
  "We explore the architecture behind building performant web applications with sub-second page loads.":
    "Nous explorons l'architecture derrière la création d'applications web performantes avec des temps de chargement inférieurs à la seconde.",
  "How to optimize LCP and INP on dynamic landing pages.": "Comment optimiser le LCP et l'INP sur les pages de destination dynamiques.",
  "Actionable steps to keep your user interfaces interactive and lightweight while loading dynamic media.":
    "Des étapes concrètes pour maintenir vos interfaces utilisateur interactives et légères tout en chargeant des médias dynamiques.",
  "optimize-lcp-inp-dynamic-pages": "optimize-lcp-inp-dynamic-pages",
  "Practical tips on lazy loading components, image optimizations, and fine-tuning Framer Motion paints.":
    "Conseils pratiques sur le chargement paresseux des composants, les optimisations d'images et le réglage des animations Framer Motion.",
  "Latest Blogs": "Derniers Articles",
  "Engineering": "Ingénierie",
  "Workflow": "Flux de travail",
  "CMS": "CMS",
  "Technology": "Technologie",
  "Performance": "Performance",
  "Core Web Vitals": "Core Web Vitals",
  "Optimization": "Optimisation",
};

// Translate function for UI strings
export function t(key: keyof typeof translations.en, lang: Language): string {
  const dict = translations[lang] || translations.en;
  return (dict[key] || translations.en[key] || key) as string;
}

// Translate function for Seeded Mongoose record properties
export function translateSeeded(text: string | null | undefined, lang: Language): string {
  if (!text) return "";
  if (lang === "en") return text;
  
  const trimmed = text.trim();
  if (seededDataTranslations[trimmed]) {
    return seededDataTranslations[trimmed];
  }
  
  // Try case-insensitive matching
  const keys = Object.keys(seededDataTranslations);
  const match = keys.find(k => k.toLowerCase() === trimmed.toLowerCase());
  if (match) {
    return seededDataTranslations[match];
  }
  
  return text;
}
