interface IRadioItem<T> {
  value: T;
  text: string;
}

type ViewType = 'row' | 'column';

export type { IRadioItem, ViewType };
