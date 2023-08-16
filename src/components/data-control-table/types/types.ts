import { ReactNode } from 'react';

interface IDataTableItems {
  id: number;
  title: string;
  other?: (string | number | null | ReactNode)[];
}

export type { IDataTableItems };
