import { Temporal } from '@js-temporal/polyfill';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Age = styled.div`
  display: inline-block;
`;

interface HomeAgeProps {
  instant: Temporal.Instant | undefined;
}

const HomeAge = (props: HomeAgeProps): JSX.Element => {
  const { instant = Temporal.Now.instant() } = props;
  const epoch = instant.epochMilliseconds;

  const [age, setAge] = useState(instant.epochMilliseconds - epoch);

  useEffect(() => {
    let mounted = true;
    const rerender = setInterval(() => {
      mounted && setAge(Temporal.Now.instant().epochMilliseconds - epoch);
    }, 100);
    return () => {
      mounted = false;
      clearInterval(rerender);
    };
  }, []);

  return <Age>{(age / 3.154e10).toString().substring(0, 11)}</Age>;
};

export default HomeAge;
