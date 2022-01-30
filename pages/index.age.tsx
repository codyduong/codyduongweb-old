import { Temporal } from '@js-temporal/polyfill';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Age = styled.div`
  display: inline-block;
`;

const BDAY = Temporal.ZonedDateTime.from({
  timeZone: 'America/Chicago',
  year: 2003,
  month: 1,
  day: 9,
}).toInstant().epochMilliseconds;

const HomeAge = (): JSX.Element => {
  const [age, setAge] = useState(
    Temporal.Now.instant().epochMilliseconds - BDAY
  );

  useEffect(() => {
    let mounted = true;
    const rerender = setInterval(() => {
      mounted && setAge(Temporal.Now.instant().epochMilliseconds - BDAY);
    }, 100);
    return () => {
      mounted = false;
      clearInterval(rerender);
    };
  }, [age]);

  return <Age>{(age / 3.154e10).toString().substring(0, 11)}</Age>;
};

export default HomeAge;
