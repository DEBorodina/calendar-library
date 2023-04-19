declare module '*.svg' {
  import type { FC, HTMLProps } from 'react';
  export const ReactComponent: FC<HTMLProps<SVGElement>>;
}
