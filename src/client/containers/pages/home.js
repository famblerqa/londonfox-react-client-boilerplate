import React, { Fragment } from 'react'
import styled from 'styled-components';

const Header = styled.div`
  backgroundcolor:#ccc;
`;

export const Home = () => (
  <Fragment>
    <Header>
      Home
    </Header>
    <p>
      Hello World!
    </p>
  </Fragment>
);
