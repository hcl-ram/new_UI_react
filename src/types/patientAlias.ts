export interface PatientAlias {
  id: string;
  lastName: string;
  firstName: string;
  middleName: string;
  suffix: string;
}

export interface PatientAliasesState {
  patientName: string;
  aliases: PatientAlias[];
}

export interface ValidationError {
  rowIndex: number;
  field: keyof PatientAlias | 'row';
  message: string;
}

export type AliasRowAction = 'edit' | 'delete' | 'swap';
