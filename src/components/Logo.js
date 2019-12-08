import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import Image  from '../Logo.png';

const LogoWrapper = styled.div`   
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 120px;
    width: 300px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    left: 0;
    top: 0px;
    background-color: #d3d3d3; /* light grey */
    overflow-x: hidden;     /* Disable horizontal scroll */
    border-right: 2px solid grey;
`;

const ImageWrapper = styled.div`
    margin-left: 97.5px;
    padding-top: 15px;
    overflow: hidden;
`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <LogoWrapper>
    
            <ImageWrapper>
             <img src={Image} alt='tweeter logo' />
             </ImageWrapper>
           </LogoWrapper>
            
        );
    }
}


