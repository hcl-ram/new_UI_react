export const ROUTES = {
  PATIENT_ALIASES: '/patient/aliases',
} as const;

export type RouteKey = keyof typeof ROUTES;
