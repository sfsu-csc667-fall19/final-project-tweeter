import React from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';
import Sidebar from '../components/Sidebar';
import { NavigationBar } from '../components/NavigationBar';

const Wrapper = styled.div`
  display: block;
  margin-top: 1em;
  margin-left: 300px;
`; 


export const Favorites = () => (
  <Wrapper>
    <NavigationBar />
        <Logo />
        <Sidebar />
    <div><h2>Home Page</h2>
    <p>bunch of random text here</p>
    </div>
  </Wrapper>
)