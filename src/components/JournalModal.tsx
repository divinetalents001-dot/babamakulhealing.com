import { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { JournalArticle } from '../data/healingData';

interface JournalModalProps {
  article: JournalArticle | null;
  onClose: () => void;
  onRequestService: (serviceId: string) => void;
}

export function JournalModal({
  article,
  onClose,
  onRequestService,
}: JournalModalProps) {
  useEffect(() => {
    if (!article) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="journal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1A251C]/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-[#FAF7F2] text-[#1E261F] rounded-lg border border-[#323E34]/15 shadow-2xl p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#323E34]/12">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#525E53] mb-3">
              <span>{article.category}</span>
              <span aria-hidden="true">·</span>
              <span>{article.publishedDate}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{article.readTime}</span>
            </div>
            <h2
              id="journal-modal-title"
              className="font-display text-2xl sm:text-3xl font-semibold text-[#1E261F] leading-tight"
            >
              {article.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close article"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md text-[#525E53] hover:text-[#1E261F] hover:bg-[#F2ECE1] transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-[#243326]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 space-y-5 text-[15px] sm:text-base leading-relaxed text-[#2C362D]">
          {article.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-2 p-5 bg-[#F2ECE1] rounded-md border border-[#323E34]/10">
          <p className="text-xs font-medium text-[#525E53] mb-1">
            Apothecary Preparation Note
          </p>
          <p className="text-sm text-[#1E261F] leading-relaxed">
            {article.botanicalNote}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-[#323E34]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-[#525E53]">
            Seek personal guidance on this topic with Baba Makul Healing.
          </p>
          <button
            type="button"
            onClick={() => {
              const targetService = article.relatedServiceId;
              onClose();
              onRequestService(targetService);
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#243326] text-[#FAF7F2] rounded-md hover:bg-[#1A251C] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#243326]"
          >
            <span>Request Consultation</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
