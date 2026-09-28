import type { PatientAlias } from '@/types';

/**
 * Splits a display-formatted primary patient name (e.g. "Last, First Middle Suffix")
 * into its component parts.
 */
export function splitPrimaryName(primary: string): {
  lastName: string;
  firstName: string;
  middleName: string;
  suffix: string;
} {
  if (!primary || !primary.trim()) {
    return { lastName: '', firstName: '', middleName: '', suffix: '' };
  }

  const [rawLast, rawRest = ''] = primary.split(',', 2).map((s) => s.trim());
  const restParts = rawRest.split(/\s+/).filter(Boolean);

  return {
    lastName: rawLast ?? '',
    firstName: restParts[0] ?? '',
    middleName: restParts[1] ?? '',
    suffix: restParts[2] ?? '',
  };
}

/**
 * Formats a PatientAlias record into the primary display name format:
 * "Last, First Middle Suffix".
 */
export function formatPrimaryName(alias: Pick<PatientAlias, 'lastName' | 'firstName' | 'middleName' | 'suffix'>): string {
  const last = (alias.lastName ?? '').trim();
  const first = (alias.firstName ?? '').trim();
  const middle = (alias.middleName ?? '').trim();
  const suffix = (alias.suffix ?? '').trim();

  let name = last;
  if (first) name = last ? `${last}, ${first}` : first;
  if (middle) name += name ? ` ${middle}` : middle;
  if (suffix) name += name ? ` ${suffix}` : suffix;
  return name;
}
