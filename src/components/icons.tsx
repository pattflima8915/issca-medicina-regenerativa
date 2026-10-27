import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconDna = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 3c0 6 16 6 16 12M20 3c0 6-16 6-16 12M4 21c0-2.2 2.2-3.4 4.6-4M19.4 17c-1 .6-2.2 1.1-3.4 1.6" />
    <path d="M7.5 7.5h9M6.2 11h11.6M8 15.5h8" />
  </svg>
);

export const IconCell = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 3v2.4M12 18.6V21M3 12h2.4M18.6 12H21M5.6 5.6l1.7 1.7M16.7 16.7l1.7 1.7M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7" />
  </svg>
);

export const IconSyringe = (p: P) => (
  <svg {...base} {...p}>
    <path d="m18 2 4 4M17.5 6.5 21 3M13 7l4 4M8.5 11.5 12.5 15.5M3 21l3.2-.6L19 7.6 16.4 5 3.6 17.8 3 21Z" />
  </svg>
);

export const IconShield = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3 4.5 6v5.4c0 4.6 3.1 8.2 7.5 9.6 4.4-1.4 7.5-5 7.5-9.6V6L12 3Z" />
    <path d="m9 12 2.2 2.2L15.4 10" />
  </svg>
);

export const IconGlobe = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.4 2.6 3.6 5.6 3.6 9S14.4 18.4 12 21c-2.4-2.6-3.6-5.6-3.6-9S9.6 5.6 12 3Z" />
  </svg>
);

export const IconMicroscope = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 20h13M9.5 20a6 6 0 0 0 5.2-9" />
    <path d="m10 4 4.2 6.9-3.4 2.1L6.6 6.1 10 4Z" />
    <path d="m13.2 2.6 1.6 2.6M5 16.4l3.6-2.2" />
  </svg>
);

export const IconSpark = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3.5 13.9 9l5.6 1.9-5.6 1.9L12 18.4 10.1 12.8 4.5 10.9 10.1 9 12 3.5Z" />
    <path d="M18.5 16.5 19.3 18.8 21.5 19.6 19.3 20.4 18.5 22.6 17.7 20.4 15.5 19.6 17.7 18.8 18.5 16.5Z" />
  </svg>
);

export const IconCert = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="12.5" rx="2" />
    <path d="M7 8.5h6M7 12h4" />
    <circle cx="17" cy="17.5" r="3" />
    <path d="M15.2 20v3.2l1.8-1 1.8 1V20" />
  </svg>
);

export const IconUsers = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3.4" />
    <path d="M2.8 20c.5-3.4 3-5.4 6.2-5.4s5.7 2 6.2 5.4" />
    <path d="M16.5 5.2a3.4 3.4 0 0 1 0 6.5M18 14.9c2.2.6 3.6 2.4 3.9 5.1" />
  </svg>
);

export const IconPlay = (p: P) => (
  <svg {...base} {...p}>
    <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base} {...p}>
    <path d="m4.5 12.5 4.6 4.6L19.5 6.8" />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </svg>
);

export const IconChevron = (p: P) => (
  <svg {...base} {...p}>
    <path d="m6 9.5 6 6 6-6" />
  </svg>
);

export const IconQuote = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M9.6 5.4C6 7 4 9.9 4 13.8c0 2.9 1.7 4.8 4.1 4.8 2 0 3.6-1.5 3.6-3.5 0-1.9-1.3-3.3-3.1-3.3-.4 0-.8.1-.9.1.4-1.7 2-3.3 4.1-4.2l-2.2-2.3Zm9 0C15 7 13 9.9 13 13.8c0 2.9 1.7 4.8 4.1 4.8 2 0 3.6-1.5 3.6-3.5 0-1.9-1.3-3.3-3.1-3.3-.4 0-.8.1-.9.1.4-1.7 2-3.3 4.1-4.2l-2.2-2.3Z" />
  </svg>
);

export const IconClock = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.3l3.4 2" />
  </svg>
);

export const IconMenu = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconBook = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" />
    <path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5" />
    <path d="M9 8h7M9 11.5h5" />
  </svg>
);

export const IconCalendar = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

export const IconPlane = (p: P) => (
  <svg {...base} {...p}>
    <path d="M10.5 13.5 3 11l1.5-1.5 7-.5 4-6.5 1.8.6-2.2 6.4 4.4-.4 1.6 1.2-2.6 1.6.3 1.7Z" />
    <path d="M3 20.5h18" />
  </svg>
);

export const IconPin = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.4" />
  </svg>
);

export const IconVideo = (p: P) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
    <path d="m15.5 10.5 6-3.5v10l-6-3.5" />
  </svg>
);

export const IconLayers = (p: P) => (
  <svg {...base} {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5M3 17.5l9 5 9-5" />
  </svg>
);

export const IconStar = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4 6.2 20.5l1.1-6.5L2.6 9.4l6.5-.9L12 2.6Z" />
  </svg>
);
