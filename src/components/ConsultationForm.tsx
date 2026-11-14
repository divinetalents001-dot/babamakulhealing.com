import { FormEvent, useEffect, useState } from 'react';
import { Check, MessageCircle, Send } from 'lucide-react';
import { HEALING_SERVICES, SITE_CONTACT } from '../data/healingData';

interface ConsultationFormProps {
  selectedServiceId: string;
  onChangeServiceId: (id: string) => void;
}

interface SubmissionReceipt {
  referenceCode: string;
  name: string;
  email: string;
  serviceTitle: string;
  message: string;
}

export function ConsultationForm({
  selectedServiceId,
  onChangeServiceId,
}: ConsultationFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [receipt, setReceipt] = useState<SubmissionReceipt | null>(null);

  const selectedService =
    HEALING_SERVICES.find((s) => s.id === selectedServiceId) || HEALING_SERVICES[0];

  useEffect(() => {
    if (receipt) {
      // Keep receipt visible until user starts a new inquiry
    }
  }, [receipt]);

  const validate = () => {
    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (name.trim().length < 2) {
      nextErrors.name = 'Please enter your name (at least 2 characters).';
    }
    const emailTrimmed = email.trim();
    if (!emailTrimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (message.trim().length < 10) {
      nextErrors.message = 'Please share a brief note about what you are seeking (at least 10 characters).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const refNumber = `PMH-${Math.floor(1000 + Math.random() * 9000)}`;
    setReceipt({
      referenceCode: refNumber,
      name: name.trim(),
      email: email.trim(),
      serviceTitle: selectedService.title,
      message: message.trim(),
    });
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  const buildWhatsAppHref = (customName?: string, customMessage?: string, customService?: string) => {
    const who = customName || name.trim() || 'Guest';
    const focus = customService || selectedService.title;
    const body =
      customMessage ||
      message.trim() ||
      'I would like to schedule a private African herbal and spiritual consultation.';
    const composed = `Hello Baba Makul Healing,\nName: ${who}\nService Focus: ${focus}\nMessage: ${body}`;
    return `${SITE_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(composed)}`;
  };

  if (receipt) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-[#FAF7F2] border border-[#323E34]/15 rounded-lg p-6 sm:p-8"
      >
        <div className="flex items-start gap-3 mb-4">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#243326] text-[#FAF7F2] shrink-0">
            <Check className="w-4 h-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-medium text-[#525E53] tabular-nums">
              Inquiry Recorded · {receipt.referenceCode}
            </p>
            <h3 className="font-display text-2xl font-semibold text-[#1E261F] mt-0.5">
              Thank you, {receipt.name}
            </h3>
          </div>
        </div>

        <p className="text-sm text-[#2C362D] leading-relaxed mb-5">
          Your confidential request regarding{' '}
          <strong className="font-medium text-[#1E261F]">{receipt.serviceTitle}</strong>{' '}
          has been prepared. For an immediate conversation with our Kampala herbalists,
          you can send this exact inquiry directly to our WhatsApp desk or email{' '}
          <a
            href={`mailto:${SITE_CONTACT.email}`}
            className="underline decoration-[#323E34]/40 hover:decoration-[#1E261F]"
          >
            {SITE_CONTACT.email}
          </a>
          .
        </p>

        <div className="bg-[#F2ECE1] rounded-md p-4 text-xs text-[#2C362D] space-y-1.5 mb-6">
          <div>
            <span className="text-[#525E53]">Reply Email: </span>
            <span className="font-medium text-[#1E261F]">{receipt.email}</span>
          </div>
          <div>
            <span className="text-[#525E53]">Service Focus: </span>
            <span className="font-medium text-[#1E261F]">{receipt.serviceTitle}</span>
          </div>
          <div>
            <span className="text-[#525E53]">Note: </span>
            <span>{receipt.message}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={buildWhatsAppHref(receipt.name, receipt.message, receipt.serviceTitle)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#243326] text-[#FAF7F2] rounded-md hover:bg-[#1A251C] transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Continue on WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setReceipt(null)}
            className="px-4 py-2.5 text-sm font-medium text-[#1E261F] border border-[#323E34]/20 rounded-md hover:bg-[#F2ECE1] transition-colors whitespace-nowrap"
          >
            Send Another Note
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-[#FAF7F2] border border-[#323E34]/15 rounded-lg p-6 sm:p-8 space-y-5"
    >
      <div>
        <label
          htmlFor="service-focus"
          className="block text-xs font-medium text-[#525E53] mb-2"
        >
          Healing Focus
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" role="group" aria-label="Select Healing Focus">
          {HEALING_SERVICES.map((service) => {
            const active = service.id === selectedService.id;
            return (
              <button
                key={service.id}
                type="button"
                id={service.id === HEALING_SERVICES[0].id ? 'service-focus' : undefined}
                onClick={() => onChangeServiceId(service.id)}
                className={`px-3 py-2.5 text-xs font-medium rounded-md border text-left transition-colors whitespace-nowrap truncate ${
                  active
                    ? 'bg-[#243326] text-[#FAF7F2] border-[#243326]'
                    : 'bg-[#F2ECE1]/60 text-[#1E261F] border-[#323E34]/15 hover:bg-[#F2ECE1]'
                }`}
              >
                {service.shortTitle}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-medium text-[#525E53] mb-1.5"
          >
            Your Name
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
            }}
            placeholder="Full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#323E34]/20 rounded-md text-[#1E261F] placeholder:text-[#525E53]/60 focus:outline-none focus:border-[#243326] focus:ring-1 focus:ring-[#243326]"
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-xs text-[#9E2A2B]">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-medium text-[#525E53] mb-1.5"
          >
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#323E34]/20 rounded-md text-[#1E261F] placeholder:text-[#525E53]/60 focus:outline-none focus:border-[#243326] focus:ring-1 focus:ring-[#243326]"
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-xs text-[#9E2A2B]">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-medium text-[#525E53] mb-1.5"
        >
          How Can We Help You
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
          }}
          placeholder="Share briefly what you are experiencing or the guidance you are seeking..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#323E34]/20 rounded-md text-[#1E261F] placeholder:text-[#525E53]/60 focus:outline-none focus:border-[#243326] focus:ring-1 focus:ring-[#243326] resize-y"
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-xs text-[#9E2A2B]">
            {errors.message}
          </p>
        )}
      </div>

      <div className="pt-1 flex flex-wrap items-center justify-between gap-3">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#243326] text-[#FAF7F2] rounded-md hover:bg-[#1A251C] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#243326]"
        >
          <Send className="w-4 h-4" aria-hidden="true" />
          <span>Submit Request</span>
        </button>

        <a
          href={buildWhatsAppHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#243326] hover:text-[#1A251C] underline decoration-[#243326]/30 hover:decoration-[#243326] whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          <span>Or send directly via WhatsApp</span>
        </a>
      </div>
    </form>
  );
}
