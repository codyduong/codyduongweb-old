import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import HomeAge from './index.age';
import { Temporal } from '@js-temporal/polyfill';
import IndexCanvas from './index.three';

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
  TS: styled.a`
    color: #3178c6;
  `,
  React: styled.a`
    color: #61dbfb;
  `,
  LUA: styled.a`
    color: #000080;
  `,
  LUAU: styled.a`
    color: #009dff;
  `,
};

const BDAY = Temporal.ZonedDateTime.from({
  timeZone: 'America/Chicago',
  year: 2003,
  month: 1,
  day: 9,
}).toInstant();

const JOB = Temporal.ZonedDateTime.from({
  timeZone: 'America/Chicago',
  year: 2021,
  month: 8,
  day: 13,
}).toInstant();

const Home: NextPage = () => {
  const [showChild, setShowChild] = useState(false);

  //Hydrate clientside only
  useEffect(() => {
    setShowChild(true);
  }, []);

  return (
    <>
      {showChild && <IndexCanvas />}
      <Wrapper>
        <div>
          I am <HomeAge instant={BDAY} /> year-old self-taught developer from
          Kansas working on software and things.
        </div>
        <div></div>
        <div></div>
        <Contra tabIndex={0}>
          Currently I work at GorgoHealth as a Cofounder and Lead Software
          Engineer. I have been working in this role for{' '}
          <HomeAge instant={JOB} /> years.
        </Contra>
        <div tabIndex={0}>
          <div>
            I am working with:{' '}
            <COLORS.TS
              title={'Link to projects with TypeScript'}
              href={'/work#typescript'}
            >
              TypeScript
            </COLORS.TS>
            ,{' '}
            <COLORS.React title={'Link to projects with React/React-Native'}>
              React/React-Native
            </COLORS.React>
            , NodeJS, Deno, Rust, Golang,
          </div>
          <br></br>
          <div>
            And have worked with: PHP, JQuery, Java, LibGDX,{' '}
            <COLORS.LUA>LUA</COLORS.LUA>/<COLORS.LUAU>LUAU</COLORS.LUAU>,
            roblox-ts
          </div>
        </div>
        <div></div>
        <Landing>Welcome to my landing page</Landing>
      </Wrapper>
    </>
  );
};

export default Home;
