import React, { useState } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import HomeAge from './index.age';

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 45% 45%;
  grid-column-gap: 20px;
  grid-row-gap: 50vh;
`;

const Contra = styled.div`
  text-align: right;
`;

const Landing = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  justify-content: center;
`;

const COLORS = {
  TS: styled.span`
    color: #3178c6;
  `,
  React: styled.span`
    color: #61dbfb;
  `,
  LUA: styled.span`
    color: #000080;
  `,
  LUAU: styled.span`
    color: #009dff;
  `,
};

const Home: NextPage = () => {
  return (
    <Wrapper>
      <div>
        I am <HomeAge /> year-old self-taught developer from Kansas working on
        software and things.
      </div>
      <div></div>
      <div></div>
      <Contra>
        Currently I work at GorgoHealth as a Cofounder and Lead Software
        Engineer.
      </Contra>
      <div>
        <div>
          I am working with: <COLORS.TS>TypeScript</COLORS.TS>,
          <COLORS.React> React/React-Native</COLORS.React>, NodeJS, Deno, Rust,
          Golang,
        </div>
        <br></br>
        <div>
          And have worked with: <COLORS.LUA>LUA</COLORS.LUA>/
          <COLORS.LUAU>LUAU</COLORS.LUAU>, Java, LibGDX, roblox-ts
        </div>
      </div>
      <div></div>
      <Landing>Welcome to my landing page</Landing>
    </Wrapper>
  );
};

export default Home;
