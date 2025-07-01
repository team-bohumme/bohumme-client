import React from 'react';

import { themeVars } from '../../styles';

import type { IconName } from '../icon-list';

type IconColor = keyof typeof themeVars.color;

type IconProps = {
  name: IconName;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  color?: IconColor;
  className?: string;
} & React.SVGProps<SVGSVGElement>;

export const Icon = ({
  name,
  size,
  width,
  height,
  color,
  className,
  ...rest
}: IconProps) => {
  const computedWidth = width ?? size ?? 24;
  const computedHeight = height ?? size ?? 24;

  const iconClass = className ?? '';

  return (
    <svg
      width={
        typeof computedWidth === 'number' ? `${computedWidth}px` : computedWidth
      }
      height={
        typeof computedHeight === 'number'
          ? `${computedHeight}px`
          : computedHeight
      }
      className={iconClass}
      style={color ? { color: themeVars.color[color] } : undefined}
      aria-hidden="true"
      {...rest}
    >
      <use href={`#icon-${name}`} />
    </svg>
  );
};
