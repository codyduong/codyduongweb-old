import React from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -100;
`;

const IndexCanvas = (): JSX.Element => {
  return (
    <Wrapper>
      <Canvas>
        <ambientLight />
      </Canvas>
    </Wrapper>
  );
};

export default IndexCanvas;
