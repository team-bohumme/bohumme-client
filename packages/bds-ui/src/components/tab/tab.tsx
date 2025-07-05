import { PropsWithChildren } from 'react';

export default function Tab({ children }: PropsWithChildren) {
  return <nav>{children}</nav>;
}
