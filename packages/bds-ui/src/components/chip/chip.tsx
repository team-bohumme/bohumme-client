import { type ReactNode } from 'react';

import * as styles from './chip.css';

interface ChipProps {
  children: ReactNode;
  color: 'gray' | 'primary';
  size: 'rectangular' | 'rounded';
  outline?: boolean;
}

const Chip = ({ children, color, size, outline = false }: ChipProps) => {
  return (
    <button
      className={styles.chipVariants({
        color,
        size,
        outline,
      })}
    >
      {children}
    </button>
  );
};

export default Chip;
