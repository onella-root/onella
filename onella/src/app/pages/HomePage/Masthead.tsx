import * as React from 'react';
import styled from 'styled-components/macro';
import { Logos } from './Logos';
import { Title } from './components/Title';
import { Lead } from './components/Lead';
import { A } from 'app/components/A';

export function Masthead() {
  return (
    <Wrapper>
      <Logos />
      <Title>Welcome to Onella</Title>
      <Lead>
        The true organic marketplace, where {' '}
        <A
          href="https://www.reactboilerplate.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buyers
        </A>{' '}
        and{' '}
        <A
          href="https://github.com/facebook/create-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sellers
        </A>{' '}
        come together.
      </Lead>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;
