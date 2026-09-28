import type { PatientAlias } from '@/types';
import { MOCK_ALIASES, MOCK_PATIENT_NAME } from '@/data';

/**
 * Simulated data access layer for patient aliases.
 * Replace these implementations with real API calls when a backend is available.
 */
export const patientAliasesService = {
  async getPatientName(): Promise<string> {
    await simulateLatency();
    return MOCK_PATIENT_NAME;
  },

  async getAliases(): Promise<PatientAlias[]> {
    await simulateLatency();
    return MOCK_ALIASES.map((a) => ({ ...a }));
  },

  async saveAliases(patientName: string, aliases: PatientAlias[]): Promise<void> {
    await simulateLatency();
    // eslint-disable-next-line no-console
    console.info('[patientAliasesService] Saved', { patientName, aliases });
  },
};

function simulateLatency(ms = 150): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
