import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { device } from './breakpoints';

const Button = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.div`
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
  onClick: MouseEventHandler<Element> | undefined;
  children: React.ReactNode;
}

const TopbarButton = (props: TopbarButtonProps): JSX.Element => {
  const { onClick, children } = props;

  return (
    <Button onClick={onClick} tabIndex={0}>
      <Text>{children}</Text>
      <UnderButtonIndicator />
    </Button>
  );
};

export default TopbarButton;
