import { type ReactNode } from 'react';

interface EachProps<T> {
  render: (item: T, index: number) => ReactNode;
  arrayOf: T[];
}

export const Each = <T,>({ render, arrayOf }: EachProps<T>) => arrayOf.map((item, index) => render(item, index));

export default Each;
