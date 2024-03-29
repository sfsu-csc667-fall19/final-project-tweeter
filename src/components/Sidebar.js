import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

const StyledSideNav = styled.div`   
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 300px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 120px;
    left: 0;
    background-color: #d3d3d3; /* light grey */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 10px;
    border-right: 2px solid grey;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                  path: '/Home', /* path is used as id to check which NavItem is active basically */
                  name: 'Home',
                  //css: 'fa fa-fw fa-home',
                  text: "Home",
                  key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                  path: '/profile',
                  name: 'Profile',
                 // css: 'fa fa-fw fa-clock',
                  text: "Profile",
                  key: 2
                },
                {
                  path: '/favorites',
                  name: 'Favorites',
                 // css: 'fas fa-hashtag',
                  text: "Favorites",
                  key: 3
                },
                {
                    path: '/logout',
                    name: 'Logout',
                   // css: 'fas fa-hashtag',
                    text: "Logout",
                    key: 4
                  },
                  
              ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <StyledSideNav>
                
                {
                    items.map((item) => {
                        return (
                            
                            <NavItem 
                                path={item.path}
                                name={item.name}
                               // css={item.css}
                                text={item.text}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />
                        );
                    })
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
    height: 70px;
    width: 300px; /* width must be same size as NavBar to center */
    text-align: center; /* Aligns <a> inside of NavIcon div */
    margin-top: 25px;
    margin-bottom: 50px;   /* Puts space between NavItems */
    a {
        font-size: 2.7em;
        color: ${(props) => props.active ? "#61FFD0" : "#115B49"};
        :hover {
            opacity: 0.6;
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return(
            
            <StyledNavItem active={active}>
                
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>{this.props.text}
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div`
`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
            
        );
    }
}
