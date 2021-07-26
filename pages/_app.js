import React, { useEffect } from 'react';
import { Global, css } from '@emotion/core';
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import theme from '../styles/theme';
import SEO from '../next-seo.config';
import MDXComponents from '../components/MDXComponents';

const GlobalStyle = ({ children }) => (
  <>
    <CSSReset />
    <Global
      styles={css`
        ::selection {
          background-color: #ff9cf9;
          color: #fefefe;
        }

        html {
          min-width: 360px;
          scroll-behavior: smooth;
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: white;
        }
      `}
    />
    {children}
  </>
);

const App = ({ Component, pageProps }) => {

  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <GlobalStyle>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </GlobalStyle>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;
