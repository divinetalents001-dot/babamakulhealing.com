import { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Clock,
  Mail,
  MessageCircle,
  Phone,
} from 'lucide-react';
import {
  BOTANICAL_INDEX,
  CLIENT_TESTIMONIALS,
  HEALING_SERVICES,
  HERITAGE_MEDIA,
  HERO_MEDIA,
  JOURNAL_ARTICLES,
  JournalArticle,
  SITE_CONTACT,
} from './data/healingData';
import { Navbar } from './components/Navbar';
import { ResilientImage } from './components/ResilientImage';
import { ConsultationForm } from './components/ConsultationForm';
import { JournalModal } from './components/JournalModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';

type JournalFilter = 'All' | JournalArticle['category'];

const JOURNAL_FILTERS: JournalFilter[] = [
  'All',
  'Love & Harmony',
  'Spiritual Cleansing',
  'Herbal Apothecary',
];

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    HEALING_SERVICES[0].id
  );
  const [activePillarId, setActivePillarId] = useState<string>(
    HEALING_SERVICES[0].id
  );
  const [showBotanicalIndex, setShowBotanicalIndex] = useState<boolean>(false);
  const [journalFilter, setJournalFilter] = useState<JournalFilter>('All');
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  const activePillar =
    HEALING_SERVICES.find((s) => s.id === activePillarId) || HEALING_SERVICES[0];

  const filteredArticles =
    journalFilter === 'All'
      ? JOURNAL_ARTICLES
      : JOURNAL_ARTICLES.filter((article) => article.category === journalFilter);

  const jumpToConsultation = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E261F]">
      <Navbar onSelectConsultation={() => jumpToConsultation()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section
          id="home"
          className="relative bg-[#1A251C] text-[#FAF7F2] overflow-hidden"
        >
          <div className="absolute inset-0">
            <ResilientImage
              src={HERO_MEDIA.image}
              alt={HERO_MEDIA.alt}
              fallbackTitle="Baba Makul Healing Sanctuary"
              className="w-full h-full object-cover object-[75%_20%] opacity-85"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#162017]/95 via-[#1A251C]/75 to-[#1A251C]/20"
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28 lg:py-36">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-medium tracking-wide text-[#E5C9A3] mb-4">
                African Herbal &amp; Spiritual Healing
              </p>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#FAF7F2] leading-[1.06] [text-wrap:balance]">
                Heal, Restore, Reclaim Love
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#FAF7F2]/85 leading-relaxed max-w-xl">
                Time-honored African botanical preparations, spiritual cleansing
                rites, and confidential relationship guidance rooted in living
                herbal tradition.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`${SITE_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(
                    'Hello Baba Makul Healing, I would like to discuss a personal healing consultation.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-medium bg-[#FAF7F2] text-[#1A251C] rounded-md hover:bg-[#EFE6D8] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF7F2]"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp Us</span>
                </a>

                <button
                  type="button"
                  onClick={() => jumpToConsultation()}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#FAF7F2] border border-[#FAF7F2]/35 rounded-md hover:bg-[#FAF7F2]/10 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF7F2]"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Three Healing Pillars — Asymmetric Editorial Layout */}
        <section
          aria-labelledby="pillars-heading"
          className="border-b border-[#323E34]/12 bg-[#FAF7F2]"
        >
          <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#323E34]/12">
              <div>
                <p className="text-xs font-medium text-[#525E53] mb-2">
                  Core Foundations
                </p>
                <h2
                  id="pillars-heading"
                  className="font-display text-3xl sm:text-4xl font-semibold text-[#1E261F] [text-wrap:balance]"
                >
                  Three Pathways to Wholeness
                </h2>
              </div>
              <p className="text-sm text-[#525E53] max-w-md leading-relaxed">
                Select a practice below to inspect traditional botanicals and
                expected outcomes before booking.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left 5 cols: Numbered interactive list */}
              <div className="lg:col-span-5 divide-y divide-[#323E34]/12 border-t border-b border-[#323E34]/12">
                {HEALING_SERVICES.map((pillar) => {
                  const isActive = pillar.id === activePillar.id;
                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      onClick={() => setActivePillarId(pillar.id)}
                      aria-expanded={isActive}
                      className={`w-full text-left py-5 px-4 transition-colors duration-150 flex items-start justify-between gap-4 focus-visible:outline-2 focus-visible:outline-[#243326] ${
                        isActive ? 'bg-[#F2ECE1]' : 'hover:bg-[#F2ECE1]/50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 text-xs text-[#525E53] mb-1">
                          <span className="tabular-nums font-medium">
                            {pillar.indexLabel}.
                          </span>
                          <span>{pillar.category}</span>
                        </div>
                        <h3 className="font-display text-2xl font-semibold text-[#1E261F]">
                          {pillar.shortTitle}
                        </h3>
                        <p className="mt-1.5 text-sm text-[#525E53] leading-relaxed">
                          {pillar.summary}
                        </p>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 mt-2 shrink-0 transition-transform duration-150 ${
                          isActive
                            ? 'text-[#1E261F] translate-x-0.5'
                            : 'text-[#525E53]/60'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  );
                })}
              </div>

              {/* Right 7 cols: Active Pillar Spotlight */}
              <div className="lg:col-span-7 bg-[#F2ECE1] rounded-lg border border-[#323E34]/12 overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-12 items-stretch">
                  <div className="sm:col-span-5 min-h-[260px]">
                    <ResilientImage
                      src={activePillar.image}
                      alt={activePillar.imageAlt}
                      fallbackTitle={activePillar.shortTitle}
                      className="w-full h-full object-cover object-[50%_20%]"
                    />
                  </div>
                  <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#525E53] mb-2">
                        <span>{activePillar.sessionFormat}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{activePillar.duration}</span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#1E261F]">
                        {activePillar.title}
                      </h3>
                      <p className="mt-3 text-sm text-[#2C362D] leading-relaxed">
                        {activePillar.fullDescription}
                      </p>

                      <div className="mt-5 pt-4 border-t border-[#323E34]/12">
                        <p className="text-xs font-medium text-[#525E53] mb-2">
                          Key Botanicals &amp; Elements
                        </p>
                        <p className="text-sm text-[#1E261F]">
                          {activePillar.botanicals.join(' · ')}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={() => jumpToConsultation(activePillar.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-[#243326] text-[#FAF7F2] rounded-md hover:bg-[#1A251C] transition-colors whitespace-nowrap"
                      >
                        <span>Inquire About {activePillar.shortTitle}</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. About & Heritage */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="bg-[#FAF7F2] border-b border-[#323E34]/12"
        >
          <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-6">
                <p className="text-xs font-medium text-[#525E53] mb-2">
                  Our Lineage &amp; Mission
                </p>
                <h2
                  id="about-heading"
                  className="font-display text-3xl sm:text-4xl font-semibold text-[#1E261F] leading-tight [text-wrap:balance]"
                >
                  Preserving African Healing Traditions
                </h2>
                <p className="mt-4 text-base text-[#2C362D] leading-relaxed">
                  Our mission is to uphold and share the ancient healing
                  practices of Africa, offering genuine solutions for love
                  reconciliation, spiritual renewal, and household peace.
                </p>
                <p className="mt-3 text-sm text-[#525E53] leading-relaxed">
                  Guided by Baba Makul and the Baba Makul Healing lineage, every
                  consultation is held in strict confidence—honoring both
                  ancestral wisdom and the real emotional pressures of modern
                  life.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setShowBotanicalIndex((prev) => !prev)}
                    aria-expanded={showBotanicalIndex}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#243326] text-[#FAF7F2] rounded-md hover:bg-[#1A251C] transition-colors whitespace-nowrap"
                  >
                    <span>
                      {showBotanicalIndex
                        ? 'Hide Traditional Botanicals'
                        : 'Explore Traditional Botanicals'}
                    </span>
                    {showBotanicalIndex ? (
                      <ChevronUp className="w-4 h-4" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              {/* Right 6 cols: Lineage Portrait + Practice Standards */}
              <div className="lg:col-span-6 space-y-6">
                <div className="aspect-[16/10] rounded-lg overflow-hidden border border-[#323E34]/12 bg-[#1A251C]">
                  <ResilientImage
                    src={HERITAGE_MEDIA.image}
                    alt={HERITAGE_MEDIA.alt}
                    fallbackTitle="Ancestral Healing Lineage"
                    className="w-full h-full object-cover object-[50%_22%]"
                  />
                </div>

                <div className="bg-[#F2ECE1] rounded-lg border border-[#323E34]/12 p-6 sm:p-8">
                  <h3 className="font-display text-2xl font-semibold text-[#1E261F] pb-4 border-b border-[#323E34]/12">
                    How Every Consultation Works
                  </h3>
                  <ol className="divide-y divide-[#323E34]/10 mt-2">
                    <li className="py-4">
                      <div className="text-xs font-medium text-[#525E53] tabular-nums mb-1">
                        01 · Listening &amp; Spiritual Assessment
                      </div>
                      <p className="text-sm text-[#1E261F] leading-relaxed">
                        You speak openly by WhatsApp or in a private consultation
                        about your relationship, household atmosphere, or
                        lingering emotional weight.
                      </p>
                    </li>
                    <li className="py-4">
                      <div className="text-xs font-medium text-[#525E53] tabular-nums mb-1">
                        02 · Small-Batch Botanical Preparation
                      </div>
                      <p className="text-sm text-[#1E261F] leading-relaxed">
                        Roots, barks, leaves, and aromatic resins are selected and
                        ground specifically for your situation—never generic
                        pre-packaged mixes.
                      </p>
                    </li>
                    <li className="pt-4">
                      <div className="text-xs font-medium text-[#525E53] tabular-nums mb-1">
                        03 · Guided Ritual &amp; Follow-Through
                      </div>
                      <p className="text-sm text-[#1E261F] leading-relaxed">
                        Clear step-by-step instructions for cleansing washes,
                        herbal infusions, and ongoing check-ins until balance is
                        restored.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Expandable Traditional Botanical Reference Drawer */}
            {showBotanicalIndex && (
              <div className="mt-10 pt-8 border-t border-[#323E34]/15">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-[#1E261F]">
                      Apothecary Materia Medica
                    </h3>
                    <p className="text-sm text-[#525E53]">
                      Selected traditional plants and resins prepared in our
                      apothecary.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {BOTANICAL_INDEX.map((item) => (
                    <div
                      key={item.name}
                      className="p-5 bg-[#F2ECE1]/80 rounded-lg border border-[#323E34]/12"
                    >
                      <div className="text-xs text-[#525E53] mb-1">
                        {item.localTradition}
                      </div>
                      <h4 className="font-display text-xl font-semibold text-[#1E261F]">
                        {item.name}
                      </h4>
                      <p className="mt-2 text-sm text-[#2C362D] leading-relaxed">
                        {item.primaryUse}
                      </p>
                      <p className="mt-2 text-xs text-[#525E53]">
                        Preparation: {item.preparation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 4. Detailed Healing Services — Deep Botanical Forest Section */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="bg-[#243326] text-[#FAF7F2]"
        >
          <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-medium text-[#E5C9A3] mb-2">
                Our Healing Services
              </p>
              <h2
                id="services-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FAF7F2] [text-wrap:balance]"
              >
                Authentic African Herbal &amp; Spiritual Treatments
              </h2>
              <p className="mt-3 text-base text-[#FAF7F2]/80 leading-relaxed">
                Every treatment is tailored to your life situation—whether
                restoring closeness in love, clearing heavy spiritual burdens,
                or rebuilding inner strength through natural herbs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {HEALING_SERVICES.map((service) => (
                <article
                  key={service.id}
                  className="flex flex-col bg-[#1A251C] border border-[#FAF7F2]/12 rounded-lg overflow-hidden"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#162017]">
                    <ResilientImage
                      src={service.image}
                      alt={service.imageAlt}
                      fallbackTitle={service.title}
                      className="w-full h-full object-cover object-[50%_20%] transition-transform duration-300 hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#E5C9A3] mb-2">
                        <span className="tabular-nums">{service.indexLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{service.sessionFormat}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{service.duration}</span>
                      </div>

                      <h3 className="font-display text-2xl font-semibold text-[#FAF7F2] leading-snug">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm text-[#FAF7F2]/80 leading-relaxed">
                        {service.fullDescription}
                      </p>

                      <ul className="mt-5 pt-4 border-t border-[#FAF7F2]/10 space-y-2 text-xs text-[#FAF7F2]/75">
                        {service.outcomes.map((outcome, idx) => (
                          <li key={idx} className="leading-relaxed">
                            — {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#FAF7F2]/10">
                      <button
                        type="button"
                        onClick={() => jumpToConsultation(service.id)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium bg-[#FAF7F2] text-[#1A251C] rounded-md hover:bg-[#EFE6D8] transition-colors whitespace-nowrap"
                      >
                        <span>Request {service.shortTitle}</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Client Stories — Adjacent Claim-to-Proof */}
        <section
          aria-labelledby="testimonials-heading"
          className="bg-[#F2ECE1] border-b border-[#323E34]/12"
        >
          <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
            <div className="max-w-2xl mb-10">
              <p className="text-xs font-medium text-[#525E53] mb-2">
                Client Experiences
              </p>
              <h2
                id="testimonials-heading"
                className="font-display text-3xl sm:text-4xl font-semibold text-[#1E261F] [text-wrap:balance]"
              >
                What Our Clients Say
              </h2>
              <p className="mt-2 text-sm text-[#525E53]">
                Hear from those who have experienced transformative healing
                through {SITE_CONTACT.heritageName}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CLIENT_TESTIMONIALS.map((item) => (
                <blockquote
                  key={item.id}
                  className="bg-[#FAF7F2] border border-[#323E34]/12 rounded-lg p-6 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-xs text-[#525E53] mb-2">
                      {item.serviceUsed}
                    </p>
                    <h3 className="font-display text-2xl font-semibold text-[#1E261F] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#2C362D] leading-relaxed">
                      “{item.quote}”
                    </p>
                  </div>

                  <footer className="mt-6 pt-4 border-t border-[#323E34]/10">
                    <div className="text-sm font-medium text-[#1E261F]">
                      {item.clientName}
                    </div>
                    <div className="text-xs text-[#525E53] mt-0.5">
                      {item.clientContext}
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Journal / Blog — Interactive Category Filtering + Full Article Reader */}
        <section
          id="journal"
          aria-labelledby="journal-heading"
          className="bg-[#FAF7F2] border-b border-[#323E34]/12"
        >
          <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-medium text-[#525E53] mb-2">
                  Healing Journal
                </p>
                <h2
                  id="journal-heading"
                  className="font-display text-3xl sm:text-4xl font-semibold text-[#1E261F] [text-wrap:balance]"
                >
                  Botanical &amp; Spiritual Notes
                </h2>
              </div>

              {/* Interactive filter control (segmented button group) */}
              <div
                role="tablist"
                aria-label="Filter journal notes by topic"
                className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F2ECE1] rounded-md border border-[#323E34]/12"
              >
                {JOURNAL_FILTERS.map((filterName) => {
                  const active = journalFilter === filterName;
                  return (
                    <button
                      key={filterName}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setJournalFilter(filterName)}
                      className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                        active
                          ? 'bg-[#243326] text-[#FAF7F2]'
                          : 'text-[#525E53] hover:text-[#1E261F]'
                      }`}
                    >
                      {filterName}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-[#F2ECE1]/60 border border-[#323E34]/12 rounded-lg p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#525E53] mb-3">
                      <span>{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.publishedDate}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{article.readTime}</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-[#1E261F] leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#2C362D] leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#323E34]/10">
                    <button
                      type="button"
                      onClick={() => setActiveArticle(article)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#243326] hover:text-[#1A251C] underline decoration-[#243326]/30 hover:decoration-[#243326] whitespace-nowrap"
                    >
                      <span>Read Full Note</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Contact & Consultation Intake */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="bg-[#F2ECE1]"
        >
          <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left 5 cols: Sanctuary Contact Details */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <p className="text-xs font-medium text-[#525E53] mb-2">
                    Private Sanctuary Desk
                  </p>
                  <h2
                    id="contact-heading"
                    className="font-display text-3xl sm:text-4xl font-semibold text-[#1E261F] [text-wrap:balance]"
                  >
                    Get in Touch
                  </h2>
                  <p className="mt-3 text-sm text-[#2C362D] leading-relaxed">
                    Connect with us today for personalized African healing
                    solutions, herbal consultations, and confidential spiritual
                    guidance.
                  </p>
                </div>

                <dl className="divide-y divide-[#323E34]/12 border-t border-b border-[#323E34]/12 text-sm">
                  <div className="py-4 flex items-start gap-3">
                    <Clock
                      className="w-4 h-4 text-[#243326] mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-xs text-[#525E53]">
                        Consultation Hours
                      </dt>
                      <dd className="font-medium text-[#1E261F] mt-0.5 tabular-nums">
                        {SITE_CONTACT.hours}
                      </dd>
                    </div>
                  </div>

                  <div className="py-4 flex items-start gap-3">
                    <Phone
                      className="w-4 h-4 text-[#243326] mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-xs text-[#525E53]">
                        Phone &amp; WhatsApp
                      </dt>
                      <dd className="mt-0.5">
                        <a
                          href={`tel:+${SITE_CONTACT.phoneRaw}`}
                          className="font-medium text-[#1E261F] tabular-nums hover:underline"
                        >
                          {SITE_CONTACT.phoneDisplay}
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="py-4 flex items-start gap-3">
                    <Mail
                      className="w-4 h-4 text-[#243326] mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-xs text-[#525E53]">Email</dt>
                      <dd className="mt-0.5">
                        <a
                          href={`mailto:${SITE_CONTACT.email}`}
                          className="font-medium text-[#1E261F] hover:underline break-all"
                        >
                          {SITE_CONTACT.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* Right 7 cols: Interactive Validated Form */}
              <div className="lg:col-span-7">
                <ConsultationForm
                  selectedServiceId={selectedServiceId}
                  onChangeServiceId={setSelectedServiceId}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Footer */}
      <footer className="bg-[#1A251C] text-[#FAF7F2]/80 border-t border-[#FAF7F2]/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl font-semibold text-[#FAF7F2]">
              {SITE_CONTACT.brandName}
            </p>
            <p className="text-xs text-[#FAF7F2]/65 mt-1">
              African Herbal &amp; Spiritual Healing ·{' '}
              <span className="tabular-nums">{SITE_CONTACT.phoneDisplay}</span>
            </p>
          </div>

          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-5 text-xs text-[#FAF7F2]/75"
          >
            <a href="#home" className="hover:text-[#FAF7F2] whitespace-nowrap">
              Home
            </a>
            <a href="#about" className="hover:text-[#FAF7F2] whitespace-nowrap">
              About Us
            </a>
            <a
              href="#services"
              className="hover:text-[#FAF7F2] whitespace-nowrap"
            >
              Services
            </a>
            <a
              href="#journal"
              className="hover:text-[#FAF7F2] whitespace-nowrap"
            >
              Journal
            </a>
            <a
              href="#contact"
              className="hover:text-[#FAF7F2] whitespace-nowrap"
            >
              Contact
            </a>
          </nav>

          <p className="text-xs text-[#FAF7F2]/60">
            © 2026 {SITE_CONTACT.brandName}. All rights reserved.
          </p>
        </div>
      </footer>

      <JournalModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        onRequestService={(serviceId) => jumpToConsultation(serviceId)}
      />

      <WhatsAppWidget />
    </div>
  );
}
