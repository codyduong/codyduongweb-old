import React from 'react';
import styled from 'styled-components';
import { device } from './breakpoints';
import TopbarButton from './topbar.button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  width: 100%;
  background-color: #181b24;
  padding: 10px 15vw;
  @media (${`max-width: ${device.lg}`}) {
    padding: 10px 10vw;
  }
  @media (${`max-width: ${device.md}`}) {
    padding: 10px 5vw;
  }
  @media (${`max-width: ${device.sm}`}) {
    padding: 10px 0vw;
  }
`;

const Home = styled.div`
  flex: 1;
  flex-flow: column nowrap;
  max-width: 20vw;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  @media (${`max-width: calc((${device.md} + ${device.sm}) / 2)`}) {
    display: none;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-basis: auto;
  gap: 50px;
  justify-content: space-around;
  @media (${`max-width: ${device.md}`}) {
    gap: 30px;
  }
  @media (${`max-width: calc((${device.md} + ${device.sm}) / 2)`}) {
    flex-grow: 1;
    gap: 15px;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TopbarProps {}

const Topbar = (props: TopbarProps): JSX.Element => {
  return (
    <Wrapper>
      <Home tabIndex={0}>Cody Duong</Home>
      <Navigation role={'tablist'} tabIndex={0}>
        <TopbarButton onClick={undefined}>About</TopbarButton>
        <TopbarButton onClick={undefined}>Work</TopbarButton>
        <TopbarButton onClick={undefined}>Contact</TopbarButton>
      </Navigation>
    </Wrapper>
  );
};

export default Topbar;
