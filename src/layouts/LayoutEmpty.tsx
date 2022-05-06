import { css, Global } from '@emotion/react';
import Head from 'next/head';
import { FC, ReactNode } from 'react';

interface LayoutEmptyProps {
  children: ReactNode;
  title?: string;
}

export const LayoutEmpty: FC<LayoutEmptyProps> = ({ title, children }) => (
  <>
    <Head>
      <title>{title ? `${title} - Form.ly` : 'Form.ly'}</title>
    </Head>
    <Global
      styles={css`
        html,
        body,
        #__next {
          height: 100%;
          width: 100%;
          scroll-behavior: smooth;
        }
        html: {
          overflow: hidden;
        }
      `}
    />
    {children}
  </>
);
