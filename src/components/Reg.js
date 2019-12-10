import React, { Component } from 'react';  
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
 

class Reg extends Component {

    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: ''
        }

        this.firstName = this.firstName.bind(this);
        this.lastName = this.lastName.bind(this);
        this.userName = this.userName.bind(this);
        this.email = this.email.bind(this);
        this.password = this.password.bind(this);
        this.register = this.register.bind(this);
    }

    firstName(event) {
        this.setState({firstName: event.target.value})
    }

    lastName(event) {
        this.setState({ lastName: event.target.value})
    }

    userName(event) {
        this.setState({ userName: event.target.value})
    }

    email(event) {
        this.setState({email: event.target.value})
    }

    password(event) {
        this.setState({ password: event.target.value})
    }

    register(event) {
        fetch('http://localhost:51282/Api/login/InsertEmployee', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                firstName: this.state.firstName,
                lastName: this.state.lastName,
                userName: this.state.userName,
                email: this.state.email,
                password: this.state.password,
            })
        }).then((Response) => Response.json())
            .then((Result) => {
                if (Result.Status == 'Success')
                    this.props.history.push("/Dashboard");
                else    
                    alert('Sorry, unauthenticated user')
            })
    }


    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <Card className="mx-4">
                                <Form>
                                    <div class="row" className="mb-2 pageheading">
                                        <div class="col-sm-12 btn btn-primary">
                                            Sign Up
                                        </div>
                                    </div>
                                    <InputGroup className="mb-3">
                                        <Input type="text" onChange={this.firstName} placeholder="Enter First Name" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" onChange={this.lastName} placeholder="Enter Last Name" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" onChange={this.userName} placeholder="Enter User Name" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" onChange={this.email} placeholder="Enter Email Address" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" onChange={this.password} placeholder="Enter new Password" />
                                    </InputGroup>
                                    <Button onClick={this.register} color="success" block>Create Account</Button>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default Reg;