import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const SproutIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21v-8" />
    <path d="M12 13c0-4-3-6.5-7-6.5 0 4 3 6.5 7 6.5Z" />
    <path d="M12 15c0-3.5 2.5-6 6.5-6 0 3.5-2.5 6-6.5 6Z" />
  </Base>
);

export const RecycleIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 19H4.8a1.8 1.8 0 0 1-1.6-2.7L5 13.5" />
    <path d="m8.5 16 -2 3 3 1.5" />
    <path d="M10.2 5.2 12 2.5l1.8 2.7" />
    <path d="m9.5 10.5 2.5-4.2 2.5 4.2" />
    <path d="M17 19h2.2a1.8 1.8 0 0 0 1.6-2.7L18 11" />
    <path d="m15.5 16 2 3-3 1.5" />
  </Base>
);

export const DropletIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3s6 6.2 6 10.5a6 6 0 0 1-12 0C6 9.2 12 3 12 3Z" />
    <path d="M9.5 14.5a2.6 2.6 0 0 0 2.2 2" />
  </Base>
);

export const TreeIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21v-5" />
    <path d="M12 16c-3.3 0-6-2.4-6-5.5 0-1.8 1-3.2 2.4-4C8.6 4 10.1 2.5 12 2.5s3.4 1.5 3.6 4c1.4.8 2.4 2.2 2.4 4 0 3.100-2.700 5.500-6 5.500Z" />
  </Base>
);

export const SunIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.100 17.100l1.600 1.600M5.300 18.700l1.600-1.600M17.100 6.900l1.600-1.600" />
  </Base>
);

export const HeartIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.500A4 4 0 0 1 19 10c0 5.600-7 10-7 10Z" />
  </Base>
);

export const CheckIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m5 12.500 4.500 4.500L19 7.500" />
  </Base>
);

export const AlertIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3.500 2.500 20h19L12 3.500Z" />
    <path d="M12 10v4.500M12 17.500v.01" />
  </Base>
);

export const MenuIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const CloseIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Base>
);

export const ExternalLinkIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M14 4h6v6" />
    <path d="M20 4 10.500 13.500" />
    <path d="M18 14v4.500A1.500 1.500 0 0 1 16.500 20h-11A1.500 1.500 0 0 1 4 18.500v-11A1.500 1.500 0 0 1 5.500 6H10" />
  </Base>
);

export const LockIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="5" y="11" width="14" height="9.500" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </Base>
);

export const UsersIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="9" cy="8" r="3.200" />
    <path d="M3 20c0-3.300 2.700-5.500 6-5.500s6 2.200 6 5.500" />
    <path d="M16 5a3 3 0 0 1 0 6M18 14.800c1.800.7 3 2.300 3 5.200" />
  </Base>
);
