
import React from 'react';
import styled from 'styled-components';
import Image  from '../ProfilePic.png';

const GridWrapper = styled.div`
  display: block;
  margin-top: 1em;
  margin-left: 300px;
`; 

const ImageWrapper = styled.div`

`;

export const Profile = () => (
  <GridWrapper>
    <div><h2>Profile Page</h2>
    
   <ImageWrapper>
    <img src={Image} alt='profile pic' />
    </ImageWrapper>
    </div>
  </GridWrapper>
)