import type { PatientAlias } from '@/types';
import { generateId } from '@/utils';

export const MOCK_PATIENT_NAME = 'Steinberg, Fred';

export const MOCK_ALIASES: PatientAlias[] = [
  {
    id: generateId(),
    lastName: 'Steinberg',
    firstName: 'Freddy',
    middleName: 'J',
    suffix: 'JR',
  },
];
