import { FC, ReactNode } from 'react';
import { LayoutEmpty } from './LayoutEmpty';

interface LayoutMainProps {
  children: ReactNode;
  title?: string;
}

export const LayoutMain: FC<LayoutMainProps> = ({ title, children }) => (
  <LayoutEmpty title={title}>{children}</LayoutEmpty>
);
