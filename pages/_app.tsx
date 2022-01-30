import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Topbar from './components/topbar';
import styled from 'styled-components';
import { device } from './components/breakpoints';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  flex: 1;
  flex-flow: column nowrap;
  flex-grow: 1;
  width: 100%;
  padding: 50px 20vw;
  @media (${`max-width: ${device.lg}`}) {
    padding: 50px 10vw;
  }
  @media (${`max-width: ${device.md}`}) {
    padding: 25px 5vw;
  }
  @media (${`max-width: ${device.sm}`}) {
    padding: 25px 25px;
  }
`;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  console.log(pageProps);
  return (
    <Wrapper>
      <Topbar />
      <ContentWrapper>
        <Component {...pageProps} />
      </ContentWrapper>
    </Wrapper>
  );
}

export default MyApp;
