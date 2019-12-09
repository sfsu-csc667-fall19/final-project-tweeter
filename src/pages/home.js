import React from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';
import Sidebar from '../components/Sidebar';
import { NavigationBar } from '../components/NavigationBar';

import Tweeter from './Tweeter';

const Wrapper = styled.div`
  display: block;
  margin-top: 1em;
  margin-left: 300px;
`; 


export const Home = () => (
  <Wrapper>
    <Logo />
    <Sidebar />
    <div className='home'>
      <h2>Home Page</h2>
      <Tweeter />
    </div>
  </Wrapper>
)