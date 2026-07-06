export function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ServiceIcon({ type }: { type: string }) {
  switch (type) {
    case 'construction':
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <path d="M4 14L16 4l12 10v14H4V14z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 28V18h8v10" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'renovation':
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <path d="M8 24l4-12 4 8 4-4 4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 26h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'extension':
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <path d="M4 16h16v12H4V16z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20 20h8v8h-8v-8z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M24 12v8M20 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M22 8l4-2v6l-4-2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function StatIcon({ type }: { type: string }) {
  switch (type) {
    case 'projects':
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <path d="M16 4l12 6v8c0 7.7-5.3 14.9-12 16-6.7-1.1-12-8.3-12-16v-8l12-6z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 16l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'experience':
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <path d="M16 4l12 6v8c0 7.7-5.3 14.9-12 16-6.7-1.1-12-8.3-12-16v-8l12-6z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'satisfaction':
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 16l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 24c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16 6V4M22 8l1.5-1.5M24 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
      <path d="M6.5 4h3l1.5 5-2 1.5a11 11 0 005 5L17.5 13.5 22.5 15v3a2 2 0 01-2 2A17 17 0 013 6.5a2 2 0 012-2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
      <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
