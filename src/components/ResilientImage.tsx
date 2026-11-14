import { useState } from 'react';
import { Leaf } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#243326] via-[#2D3D2F] to-[#1A251C] text-[#FAF7F2]/80 p-6 text-center ${className}`}
      >
        <Leaf className="w-8 h-8 mb-3 text-[#D4A36A]" aria-hidden="true" />
        {fallbackTitle && (
          <span className="font-display text-lg tracking-wide text-[#FAF7F2]">
            {fallbackTitle}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
