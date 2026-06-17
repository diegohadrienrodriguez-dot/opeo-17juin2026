// ═══════════════════════════════════════════════════════════════════════════
//  OPEO · i18n Engine  v1.0
//  Usage: data-i18n="key"       → textContent
//         data-i18n-html="key"  → innerHTML (for rich content with tags)
// ═══════════════════════════════════════════════════════════════════════════

const OPEO_TRANSLATIONS = {

  /* ── FRANÇAIS (source) ─────────────────────────────────────────────────── */
  fr: {
    // Nav & mobile menu
    'nav.home':           'Accueil',
    'nav.about':          'À propos',
    'nav.expertises':     'Expertises',
    'nav.sectors':        'Secteurs',
    'nav.transformation': 'Transformation',
    'nav.publications':   'Publications',
    'nav.careers':        'Carrières',
    'nav.contact':        'Contact',

    // Hero
    'hero.h1':            'Vos Opérations<br>sont <span class="hl">Stratégiques</span>',
    'hero.desc':          'OPEO est un Cabinet de Conseil européen qui accompagne la transformation des opérations industrielles, notamment dans les secteurs du Luxe, Industrie de Process, Aéronautique &amp; Défense et Pharmaceutique – Santé.<br><br>Grâce à des transformations axées sur l\'agilité, l\'excellence opérationnelle, le digital et de nouveaux business models, nous identifions les causes profondes des problématiques complexes et délivrons des résultats concrets.',
    'hero.cta.brochure':  'Télécharger la brochure',
    'hero.cta.offers':    'Nos offres',
    'hero.stat.years':    'Ans d\'expertise',
    'hero.stat.consult':  'Consultants',
    'hero.stat.sectors':  'Secteurs d\'intervention',
    'hero.stat.missions': 'Missions réalisées',
    'hero.scroll':        'Découvrir',

    // Logo cloud
    'cloud.label':        'Ils nous font confiance',

    // Mission
    'mission.label':      'Notre mission',
    'mission.h2':         'Transformer votre stratégie en un défi opérationnel sur le terrain',
    'mission.p':          'Depuis 2012, OPEO est au cœur de l\'excellence industrielle, alliant une présence concrète sur le terrain et une exploration constante des tendances et grands changements de notre société. Nous accompagnons nos clients à concevoir et exécuter des transformations opérationnelles fondées sur une excellence industrielle durable et un leadership engagé.',
    'mission.cta':        'En savoir plus →',
    'mission.pill1.h4':   'Agilité',
    'mission.pill1.p':    'Adaptation continue aux mutations du contexte industriel',
    'mission.pill2.h4':   'Excellence',
    'mission.pill2.p':    'Standards opérationnels de classe mondiale',
    'mission.pill3.h4':   'Digital & Data',
    'mission.pill3.p':    'Opérations augmentées par la donnée et l\'IA',
    'mission.pill4.h4':   'Terrain',
    'mission.pill4.p':    'Au plus près des équipes et des opérations',

    // Articles
    'articles.label':     'Nos contributions',
    'articles.h2':        'Nos derniers articles',
    'articles.see-all':   'Voir toutes les publications',
    'articles.read':      'Lire',
    'articles.dl':        'Télécharger',

    // Quick access
    'quick.exp.h3':       'Nos Expertises',
    'quick.exp.p':        'Stratégie Industrielle & Restructuration, Supply Chain, Excellence Opérationnelle, R&D, Digital & Data — 5 domaines couvrant l\'ensemble de la chaîne de valeur industrielle.',
    'quick.exp.lnk':      'Découvrir →',
    'quick.sec.h3':       'Nos Secteurs',
    'quick.sec.p':        'Luxe, Industrie de Process, Aéronautique & Défense, Pharmaceutique – Santé — une expertise sectorielle profonde dans les industries les plus exigeantes d\'Europe.',
    'quick.sec.lnk':      'Découvrir →',
    'quick.trans.h3':     'Notre Geste de Transformation',
    'quick.trans.p':      'Allier performance et transformation durable par l\'activation des équipes — 5 étapes, 2 mouvements complémentaires pour ancrer le changement durablement.',
    'quick.trans.lnk':    'Découvrir →',
    'quick.about.h3':     'À Propos d\'OPEO',
    'quick.about.p':      'Depuis 2012, OPEO est au cœur de l\'excellence industrielle. Notre mission : accompagner les industriels dans leurs transformations opérationnelles, en conjuguant performance durable et innovation.',
    'quick.about.lnk':    'Découvrir →',
    'quick.car.h3':       'Carrières',
    'quick.car.p':        'Issus d\'une école d\'ingénieurs ou de commerce ? Travaillez sur le terrain avec des dirigeants sur des projets novateurs et engagés. Découvrez nos offres !',
    'quick.car.lnk':      'Découvrir →',
    'quick.pub.h3':       'Publications',
    'quick.pub.p':        'Articles, livres blancs, témoignages clients, tribunes — nos dernières contributions à la réflexion sur l\'industrie européenne.',
    'quick.pub.lnk':      'Découvrir →',

    // CTA band
    'cta.eyebrow':        'Passons à l\'action',
    'cta.h2':             'Prêts à transformer<br>vos opérations ?',
    'cta.p':              'Rencontrons-nous pour comprendre vos enjeux et co-construire votre feuille de route de transformation opérationnelle.',
    'cta.btn1':           'Prendre rendez-vous →',
    'cta.btn2':           'Voir nos offres',
    'cta.btn3':           'Télécharger la brochure',
    'cta.btn4':           'Poser une question',

    // Footer
    'footer.desc':        'Cabinet de Conseil européen spécialisé dans la transformation des opérations industrielles. Conçu et développé en France.',
    'footer.col.sectors': 'Secteurs',
    'footer.col.about':   'À propos',
    'footer.col.contact': 'Contact',
    'footer.col.careers': 'Carrières',
  },

  /* ── ENGLISH ────────────────────────────────────────────────────────────── */
  en: {
    // Nav & mobile menu
    'nav.home':           'Home',
    'nav.about':          'About',
    'nav.expertises':     'Expertise',
    'nav.sectors':        'Sectors',
    'nav.transformation': 'Transformation',
    'nav.publications':   'Publications',
    'nav.careers':        'Careers',
    'nav.contact':        'Contact',

    // Hero
    'hero.h1':            'Your Operations<br>are <span class="hl">Strategic</span>',
    'hero.desc':          'OPEO is a European consulting firm supporting the transformation of industrial operations, with a focus on the Luxury, Process Industry, Aerospace &amp; Defence and Pharmaceutical – Healthcare sectors.<br><br>Through transformations built on agility, operational excellence, digital and new business models, we identify the root causes of complex challenges and deliver concrete, measurable results.',
    'hero.cta.brochure':  'Download brochure',
    'hero.cta.offers':    'Our services',
    'hero.stat.years':    'Years of expertise',
    'hero.stat.consult':  'Consultants',
    'hero.stat.sectors':  'Sectors',
    'hero.stat.missions': 'Missions completed',
    'hero.scroll':        'Discover',

    // Logo cloud
    'cloud.label':        'They trust us',

    // Mission
    'mission.label':      'Our mission',
    'mission.h2':         'Turning your strategy into an operational challenge on the ground',
    'mission.p':          'Since 2012, OPEO has been at the heart of industrial excellence, combining concrete field presence with ongoing exploration of the trends and major shifts shaping our world. We help clients design and execute operational transformations grounded in sustainable industrial excellence and committed leadership.',
    'mission.cta':        'Learn more →',
    'mission.pill1.h4':   'Agility',
    'mission.pill1.p':    'Continuous adaptation to industrial change',
    'mission.pill2.h4':   'Excellence',
    'mission.pill2.p':    'World-class operational standards',
    'mission.pill3.h4':   'Digital & Data',
    'mission.pill3.p':    'Operations enhanced by data and AI',
    'mission.pill4.h4':   'On-site',
    'mission.pill4.p':    'Alongside teams and operations',

    // Articles
    'articles.label':     'Our contributions',
    'articles.h2':        'Latest articles',
    'articles.see-all':   'View all publications',
    'articles.read':      'Read',
    'articles.dl':        'Download',

    // Quick access
    'quick.exp.h3':       'Our Expertise',
    'quick.exp.p':        'Industrial Strategy & Restructuring, Supply Chain, Operational Excellence, R&D, Digital & Data — 5 domains covering the entire industrial value chain.',
    'quick.exp.lnk':      'Discover →',
    'quick.sec.h3':       'Our Sectors',
    'quick.sec.p':        'Luxury, Process Industry, Aerospace & Defence, Pharmaceutical – Healthcare — deep sector expertise across Europe\'s most demanding industries.',
    'quick.sec.lnk':      'Discover →',
    'quick.trans.h3':     'Our Transformation Approach',
    'quick.trans.p':      'Combining performance and sustainable transformation through team engagement — 5 stages, 2 complementary movements to anchor change durably.',
    'quick.trans.lnk':    'Discover →',
    'quick.about.h3':     'About OPEO',
    'quick.about.p':      'Since 2012, OPEO has been at the heart of industrial excellence. Our mission: to support manufacturers in their operational transformations, combining lasting performance and innovation.',
    'quick.about.lnk':    'Discover →',
    'quick.car.h3':       'Careers',
    'quick.car.p':        'Engineering or business school graduate? Work on-site with senior leaders on innovative, high-impact projects. Explore our open roles!',
    'quick.car.lnk':      'Discover →',
    'quick.pub.h3':       'Publications',
    'quick.pub.p':        'Articles, white papers, client testimonials, opinion pieces — our latest contributions to the debate on European industry.',
    'quick.pub.lnk':      'Discover →',

    // CTA band
    'cta.eyebrow':        "Let's take action",
    'cta.h2':             'Ready to transform<br>your operations?',
    'cta.p':              'Let\'s meet to understand your challenges and co-build your operational transformation roadmap.',
    'cta.btn1':           'Schedule a meeting →',
    'cta.btn2':           'Our services',
    'cta.btn3':           'Download brochure',
    'cta.btn4':           'Ask a question',

    // Footer
    'footer.desc':        'European consulting firm specialising in the transformation of industrial operations. Designed and developed in France.',
    'footer.col.sectors': 'Sectors',
    'footer.col.about':   'About',
    'footer.col.contact': 'Contact',
    'footer.col.careers': 'Careers',
  }
};

// ── Engine ─────────────────────────────────────────────────────────────────────
const I18N = {
  current: localStorage.getItem('opeo-lang') || 'fr',

  t(key) {
    const dict = OPEO_TRANSLATIONS[this.current] || OPEO_TRANSLATIONS.fr;
    return (dict[key] !== undefined) ? dict[key] : (OPEO_TRANSLATIONS.fr[key] ?? key);
  },

  apply() {
    const lang = this.current;

    // Update <html lang=""> attribute
    document.documentElement.lang = lang;

    // Text-only content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (val !== key) el.textContent = val;
    });

    // Rich HTML content (spans, <br>, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = this.t(key);
      if (val !== key) el.innerHTML = val;
    });

    // Sync all switcher buttons across desktop + mobile
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }
};

// ── Public API ─────────────────────────────────────────────────────────────────
function setLang(lang) {
  I18N.current = lang;
  localStorage.setItem('opeo-lang', lang);
  I18N.apply();
}

// Boot on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => I18N.apply());
} else {
  I18N.apply();
}
