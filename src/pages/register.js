import React from 'react';


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