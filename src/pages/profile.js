
import React from 'react';
import styled from 'styled-components';
import Image  from '../ProfilePic.png';

import Logo from '../components/Logo';
import Sidebar from '../components/Sidebar';
import { NavigationBar } from '../components/NavigationBar';
import axios from 'axios';
import ProfileList from '../components/ProfileList';
import ProfileInput from '../components/ProfileInput';

const GridWrapper = styled.div`
  display: block;
  margin-top: 1em;
  margin-left: 300px;
  text-align: center;
`; 

const ImageWrapper = styled.div`

`;


export const Profile = () => (
  <GridWrapper>
    <NavigationBar />
        <Logo />
        <Sidebar />
    <div><h2>Profile Page</h2>
   <ImageWrapper>
    <img src={Image} alt='profile pic' />
    </ImageWrapper>
    <ProfileList />

    
    </div>
  </GridWrapper>
)