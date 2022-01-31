import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { device } from './breakpoints';

const Button = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.a`
  padding: 10px;
  font-size: 2rem;
  @media (${`max-width: ${device.sm}`}) {
    font-size: 1.5rem;
  }
`;

const UnderButtonIndicator = styled.div`
  width: 0%;
  height: 0.2rem;
  background-color: #ffffff;

  ${Button}:hover & {
    width: 100%;
  }
`;

interface TopbarButtonProps {
  onClick?: MouseEventHandler<Element> | undefined;
  href: string | undefined;
  children: React.ReactNode;
}

const TopbarButton = (props: TopbarButtonProps): JSX.Element => {
  const { onClick, children, href } = props;

  return (
    <Button onClick={onClick}>
      <Text href={href}>{children}</Text>
      <UnderButtonIndicator />
    </Button>
  );
};

export default TopbarButton;
