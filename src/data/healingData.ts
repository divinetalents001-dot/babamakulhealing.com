export interface HealingService {
  id: string;
  indexLabel: string;
  title: string;
  shortTitle: string;
  category: string;
  sessionFormat: string;
  duration: string;
  summary: string;
  fullDescription: string;
  botanicals: string[];
  outcomes: string[];
  image: string;
  imageAlt: string;
}

export interface Testimonial {
  id: string;
  title: string;
  quote: string;
  clientName: string;
  clientContext: string;
  serviceUsed: string;
}

export interface JournalArticle {
  id: string;
  category: 'Love & Harmony' | 'Spiritual Cleansing' | 'Herbal Apothecary';
  publishedDate: string;
  readTime: string;
  title: string;
  excerpt: string;
  paragraphs: string[];
  botanicalNote: string;
  relatedServiceId: string;
}

export interface BotanicalEntry {
  name: string;
  localTradition: string;
  primaryUse: string;
  preparation: string;
}

export const SITE_CONTACT = {
  brandName: 'Baba Makul Healing',
  heritageName: 'Baba Makul Healing',
  location: 'Kampala, Uganda',
  hours: 'Mon – Sat · 08:30 – 19:00 EAT',
  phoneDisplay: '+243 896 249 259',
  phoneRaw: '243896249259',
  email: 'divinetalents001@gmail.com',
  whatsappBaseUrl: 'https://wa.me/243896249259',
};

export const HERO_MEDIA = {
  image: '/assets/aistudio/WhatsApp_Image_2026-11-08_at_07.24.03__1__eb076637.jpeg',
  alt: 'Traditional African healer seated in striped earth-toned robes beside a sacred hearth fire, clay pot, and rising incense smoke',
};

export const HERITAGE_MEDIA = {
  image: '/assets/aistudio/WhatsApp_Image_2026-11-08_at_07.24.03_55e5d821.jpeg',
  alt: 'Elder African spiritual practitioner in ceremonial attire with beaded necklaces and candle flame beside ritual smoke',
};

export const HEALING_SERVICES: HealingService[] = [
  {
    id: 'love-healing',
    indexLabel: '01',
    title: 'Love & Relationship Healing',
    shortTitle: 'Love Healing',
    category: 'Relationship Restoration',
    sessionFormat: 'Private Ritual & Guidance',
    duration: '60 min consultation',
    summary:
      'Restore and strengthen love relationships using time-honored African herbs and focused spiritual alignment tailored to your circumstances.',
    fullDescription:
      'Our love healing rituals are prepared to rekindle warmth, mend estrangement, resolve persistent conflicts, and restore trust within your partnership. Drawing on aromatic roots, hibiscus infusions, and ancestral prayer, each session addresses the root emotional barriers standing between two people.',
    botanicals: ['Hibiscus Sabdariffa', 'Wild Cinnamon Bark', 'Rosewater & Honey Infusion'],
    outcomes: [
      'Calm unresolved misunderstandings and emotional distance',
      'Re-establish mutual devotion, patience, and open communication',
      'Shield partnerships from external interference and discord',
    ],
    image: '/assets/aistudio/WhatsApp_Image_2026-11-08_at_07.24.04_aa827094.jpeg',
    imageAlt:
      'Traditional practitioner seated in an indoor sanctuary surrounded by ceramic bowls, botanical herbs, and earthen vessels for love healing',
  },
  {
    id: 'spiritual-cleansing',
    indexLabel: '02',
    title: 'Spiritual Cleansing & Protection',
    shortTitle: 'Spiritual Cleansing',
    category: 'Aura & Space Renewal',
    sessionFormat: 'In-Person or Remote Rite',
    duration: '50 min session',
    summary:
      'Purify your spirit and clear negative attachments that hinder your peace of mind, sleep, and daily progress through traditional cleansing rites.',
    fullDescription:
      'Heavy emotional residue, envy, or prolonged misfortune can cloud clarity and weigh down your household. Using smoldering frankincense resin, spring water baths, and protective botanical smoke, our cleansing rites restore lightness, clear stagnant energy, and establish grounded spiritual protection.',
    botanicals: ['East African Frankincense', 'Wild Sage & Eucalyptus', 'Hammered Brass Spring Water'],
    outcomes: [
      'Release lingering heaviness, recurring bad dreams, and anxiety',
      'Restore calm energy across your home or workspace',
      'Establish ongoing spiritual boundaries and grounded clarity',
    ],
    image: '/assets/aistudio/WhatsApp_Image_2026-11-08_at_07.24.03__2__3e5b1f1c.jpeg',
    imageAlt:
      'Spiritual cleansing ceremony in a lush forest clearing with bundled green herbs, stone mortar, earthen vessels, and incense smoke',
  },
  {
    id: 'herbal-remedies',
    indexLabel: '03',
    title: 'Herbal Healing Consultations',
    shortTitle: 'Herbal Remedies',
    category: 'Botanical Apothecary',
    sessionFormat: 'Diagnostic & Custom Blend',
    duration: '45 min intake',
    summary:
      'Experience natural restoration with freshly ground African roots, barks, and leaf infusions prepared specifically for your emotional and physical vitality.',
    fullDescription:
      'Our herbalists conduct attentive one-on-one consultations to understand both your physical fatigue and spiritual strain. Every remedy is milled and steeped in small batches using wild-harvested East and Central African botanicals to bring your body and spirit back into steady balance.',
    botanicals: ['Moringa Leaf', 'Turmeric & Wild Ginger Root', 'Traditional Bark Decoctions'],
    outcomes: [
      'Personalized botanical preparation matched to your constitution',
      'Clear daily dosage and preparation instructions',
      'Follow-up check-ins to adjust blends as balance returns',
    ],
    image: '/assets/aistudio/t_c9c592c7.jpeg',
    imageAlt:
      'Traditional herbalist preparing steaming botanical infusions in a carved clay vessel alongside fresh leaves, roots, and amber glass bottles',
  },
];

export const BOTANICAL_INDEX: BotanicalEntry[] = [
  {
    name: 'Hibiscus & Rosewater Infusion',
    localTradition: 'Heart-Opening Botanical',
    primaryUse: 'Softening resentment and inviting warmth into strained partnerships.',
    preparation: 'Steeped at dawn with raw forest honey and warm spring water.',
  },
  {
    name: 'East African Frankincense Resin',
    localTradition: 'Sacred Cleansing Smoke',
    primaryUse: 'Clearing stagnant household energy and quieting restless thoughts.',
    preparation: 'Burned slowly over natural hardwood charcoal in stoneware vessels.',
  },
  {
    name: 'Moringa & Wild Root Decoction',
    localTradition: 'Restorative Tonic',
    primaryUse: 'Rebuilding physical stamina depleted by prolonged stress and worry.',
    preparation: 'Hand-milled in stone mortars and bottled in UV-amber glass.',
  },
  {
    name: 'Wild Sage & Bark Wash',
    localTradition: 'Protective Boundary Bath',
    primaryUse: 'Grounding personal energy before major life transitions or travel.',
    preparation: 'Cold-infused overnight in hammered brass bowls under quiet prayer.',
  },
];

export const CLIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-love',
    title: 'Transformative Love Healing',
    quote:
      'After eight months of silence and painful misunderstandings, my partner and I finally sat down with open hearts. Within three weeks of following Baba Makul’s guided reconciliation ritual, our home felt warm and connected again.',
    clientName: 'Grace Namukasa',
    clientContext: 'Kampala · Reconciliation Session',
    serviceUsed: 'Love & Relationship Healing',
  },
  {
    id: 't-cleansing',
    title: 'Spiritual Renewal',
    quote:
      'For over a year I carried constant heaviness and sleeplessness after a difficult separation. The cleansing preparation and quiet guidance helped me release that weight and step back into my work with clear focus.',
    clientName: 'Samuel Kintu',
    clientContext: 'Entebbe · Cleansing & Protection Rite',
    serviceUsed: 'Spiritual Cleansing & Protection',
  },
  {
    id: 't-herbal',
    title: 'Herbal Remedies That Work',
    quote:
      'Unlike generic advice, the herbalist listened carefully for nearly an hour before preparing a custom root and leaf blend. Within a month my energy stabilized and my household felt noticeably calmer.',
    clientName: 'Amina Nabirye',
    clientContext: 'Jinja · Botanical Consultation',
    serviceUsed: 'Herbal Healing Consultations',
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'article-reconciliation',
    category: 'Love & Harmony',
    publishedDate: 'October 2026',
    readTime: '4 min read',
    title: 'Why Patience and Herbal Cleansing Come Before Reconciliation',
    excerpt:
      'Before asking a partner to return or forgive, clearing emotional bitterness creates the stillness needed for honest conversation.',
    botanicalNote: 'Prepared with dried hibiscus calyx, wild cinnamon, and unbleached beeswax light.',
    relatedServiceId: 'love-healing',
    paragraphs: [
      'When a relationship fractures, most people reach for urgency—repeated messages, anxious explanations, or forced promises. In traditional African spiritual practice, urgency often deepens the wound because unsettled emotions speak louder than good intentions.',
      'Our love healing approach begins by cooling agitation. Using gentle heart-opening botanicals such as hibiscus flower steeped with aromatic bark, the first step is restoring calm within yourself so that communication carries steadiness rather than desperation.',
      'Once inner clarity is established, focused prayer and harmony rituals clear external misunderstandings and invite both partners back to a place of mutual respect, patience, and genuine listening.',
    ],
  },
  {
    id: 'article-cleansing',
    category: 'Spiritual Cleansing',
    publishedDate: 'September 2026',
    readTime: '5 min read',
    title: 'Recognizing Stagnant Energy in the Home and How Smoke Rituals Help',
    excerpt:
      'Heavy atmosphere, restless sleep, and sudden household friction often signal that a living space needs deliberate botanical purification.',
    botanicalNote: 'Combines East African frankincense tears, dried eucalyptus leaves, and spring water.',
    relatedServiceId: 'spiritual-cleansing',
    paragraphs: [
      'Homes absorb the emotions of everyone who enters them. Prolonged worry, conflict, or envy from outside visitors can leave a subtle heaviness that lingers long after a difficult season has passed.',
      'Traditional smoke cleansing with resinous frankincense and wild aromatic herbs works both practically and spiritually: it marks a clear boundary between past turbulence and a fresh chapter.',
      'During a guided cleansing session from our Kampala sanctuary, we pair morning ventilation, spring water washes at thresholds, and calm resin smoke to restore peaceful rest and mental clarity.',
    ],
  },
  {
    id: 'article-apothecary',
    category: 'Herbal Apothecary',
    publishedDate: 'August 2026',
    readTime: '4 min read',
    title: 'Whole Roots vs. Extracts: Preparing Small-Batch African Remedies',
    excerpt:
      'Why stone-milled barks, moringa leaves, and slow decoctions remain central to personalized traditional healing.',
    botanicalNote: 'Small-batch infusions stored in dark amber apothecary glass away from direct heat.',
    relatedServiceId: 'herbal-remedies',
    paragraphs: [
      'Authentic herbalism does not rely on one-size-fits-all capsules. Two people experiencing exhaustion or emotional strain may require entirely different botanical support depending on their daily environment, sleep, and constitution.',
      'In our apothecary, roots and barks are cleaned, sun-dried, and ground by hand in hardwood and stone mortars just prior to preparation. Keeping the whole botanical profile intact preserves subtle aromatic oils that factory processing strips away.',
      'Every consultation ends with clear, practical preparation guidance—whether as a warm morning tea, a restorative tonic, or an evening herbal wash.',
    ],
  },
];
