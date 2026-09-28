/**
 * Generates a stable pseudo-unique id for client-side row keys.
 * Uses crypto.randomUUID when available, falls back to a timestamp+random string.
 */
export function generateId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `id-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
