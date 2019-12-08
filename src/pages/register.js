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

const Register = () => {
    return(
        <Wrapper>
        <NavigationBar />
        <Logo />
        <Sidebar />
        <h2>Register: </h2>
        </Wrapper>
    );
};

export default Register;


/*import React from 'react';


class Register extends React.component{

    constructor(props){
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            password:''
        }
    }

    
}

export default Register;
*/