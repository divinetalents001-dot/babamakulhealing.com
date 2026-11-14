import { useEffect, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { SITE_CONTACT } from '../data/healingData';

const QUICK_TOPICS = [
  {
    id: 'love-healing',
    label: 'Love Healing',
    preset:
      'Hello Baba Makul Healing, I would like confidential guidance regarding Love & Relationship Healing.',
  },
  {
    id: 'spiritual-cleansing',
    label: 'Spiritual Cleansing',
    preset:
      'Hello Baba Makul Healing, I would like to ask about Spiritual Cleansing & Protection.',
  },
  {
    id: 'herbal-remedies',
    label: 'Herbal Remedies',
    preset:
      'Hello Baba Makul Healing, I would like a personal Herbal Healing Consultation.',
  },
];

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopicId, setSelectedTopicId] = useState<string>('love-healing');
  const [message, setMessage] = useState<string>(QUICK_TOPICS[0].preset);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSelectTopic = (topicId: string) => {
    setSelectedTopicId(topicId);
    const found = QUICK_TOPICS.find((t) => t.id === topicId);
    if (found) {
      setMessage(found.preset);
    }
  };

  const whatsappUrl = `${SITE_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(
    message.trim() ||
      'Hello Baba Makul Healing, I would like to schedule a healing consultation.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Popup Chat Card */}
      {isOpen && (
        <div
          id="whatsapp-chat-popup"
          role="dialog"
          aria-label="Chat with Baba Makul Healing on WhatsApp"
          className="w-[calc(100vw-2.5rem)] max-w-sm bg-[#FAF7F2] text-[#1E261F] rounded-lg border border-[#323E34]/20 shadow-2xl overflow-hidden transition-transform duration-150"
        >
          {/* Header */}
          <div className="bg-[#243326] text-[#FAF7F2] px-5 py-4 flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-2xl font-semibold leading-tight text-[#FAF7F2]">
                Chat with us
              </h3>
              <p className="text-xs text-[#FAF7F2]/80 mt-1">
                {SITE_CONTACT.brandName} · {SITE_CONTACT.hours}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp chat popup"
              className="inline-flex items-center justify-center w-8 h-8 rounded-md text-[#FAF7F2]/80 hover:text-[#FAF7F2] hover:bg-[#FAF7F2]/10 transition-colors focus-visible:outline-2 focus-visible:outline-[#FAF7F2]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 space-y-4">
            {/* Greeting Message Bubble */}
            <div className="bg-[#F2ECE1] border border-[#323E34]/12 rounded-md p-3.5 text-sm text-[#1E261F] leading-relaxed">
              Peace and blessings. Choose a healing focus or write your own
              message below to start a private conversation with our Kampala
              sanctuary on WhatsApp.
            </div>

            {/* Topic Selector */}
            <div>
              <p className="text-xs font-medium text-[#525E53] mb-2">
                Select a topic
              </p>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_TOPICS.map((topic) => {
                  const active = selectedTopicId === topic.id;
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => handleSelectTopic(topic.id)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors whitespace-nowrap shrink-0 ${
                        active
                          ? 'bg-[#243326] text-[#FAF7F2] border-[#243326]'
                          : 'bg-white text-[#1E261F] border-[#323E34]/15 hover:bg-[#F2ECE1]'
                      }`}
                    >
                      {topic.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Message Input */}
            <div>
              <label
                htmlFor="whatsapp-popup-message"
                className="block text-xs font-medium text-[#525E53] mb-1.5"
              >
                Your message
              </label>
              <textarea
                id="whatsapp-popup-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your question or request..."
                className="w-full px-3 py-2 text-sm bg-white border border-[#323E34]/20 rounded-md text-[#1E261F] placeholder:text-[#525E53]/60 focus:outline-none focus:border-[#243326] focus:ring-1 focus:ring-[#243326] resize-none"
              />
            </div>

            {/* Primary WhatsApp Launch Action */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium bg-[#1B6B3A] text-white rounded-md hover:bg-[#15562E] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B6B3A]"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>Start WhatsApp Chat</span>
            </a>

            <p className="text-xs text-[#525E53] text-center tabular-nums">
              Confidential consultations · {SITE_CONTACT.phoneDisplay}
            </p>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button with "Chat with us" label */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="whatsapp-chat-popup"
        aria-label={isOpen ? 'Close WhatsApp chat' : 'Chat with us on WhatsApp'}
        className="inline-flex items-center gap-2.5 h-11 px-4 rounded-lg bg-[#1B6B3A] text-white shadow-lg border border-white/15 hover:bg-[#15562E] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B6B3A]"
      >
        <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
        <span className="text-sm font-medium">
          {isOpen ? 'Close Chat' : 'Chat with us'}
        </span>
      </button>
    </div>
  );
}
