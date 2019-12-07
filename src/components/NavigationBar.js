import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { 
    background-color: white;
    border-bottom: 2px solid grey;
 }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #222;
    &:hover { color: white; }
  }
  .navbar-brand {
    margin-left: 50%;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 30px;
    color: #222;
    
    &:hover { color: white; }
  }

`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Tweeter</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      {/*}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        </Nav>
</Navbar.Collapse>*/}
    </Navbar>
  </Styles>
)