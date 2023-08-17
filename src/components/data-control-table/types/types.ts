import { ReactNode } from 'react';

interface IDataTableItem {
  id: number;
  title: string;
  other?: (string | number | null | ReactNode)[];
}

export type { IDataTableItem };
