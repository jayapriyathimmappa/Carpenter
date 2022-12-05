import React, { Component } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form,Input, InputGroup, Row } from 'reactstrap';  
class Login extends Component {  
    constructor() {  
        super();  
  
        this.state = {  
          logemailid: '',  
          logPassword: '',
              
        }  
  
        this.logPassword = this.logPassword.bind(this);  
        this.logemailid = this.logemailid.bind(this);  
        this.Login = this.Login.bind(this);  
    }  
  
    logemailid(event) {  
        this.setState({ logemailid: event.target.value })  
    }  
    logPassword(event) {  
        this.setState({ logPassword: event.target.value })  
    }  
    
    Login(event) {  
        // debugger;  
        fetch(`https://localhost:7009/api/carpenter/Login`, {  
            method:'post',  
            headers: {  
                'Accept': 'application/json',  
                'Content-Type': 'application/json'  
            },  
            body: JSON.stringify({  
              logemailid: this.state.logemailid,  
              logPassword: this.state.logPassword  
            })  
        }).then((Response) => Response.json())  
            .then((result) => {  
                console.log(result);  
                if (result.Status === 'Invalid')  
                    alert('Invalid User');  
                else  
                    this.props.history.push("");  
            })  
    }  
  
    render() {  
  
        return (  

            
    <div class="main">
    <div className="Login-form"> 
    <h2>  Login </h2> 
         <Container className='container'>  
             <Row className="user-box">  
                  <Col md="9" lg="7" xl="6">  
  
                     <CardGroup>  
                     <Card className="p-2">  
                    <CardBody>  
                    <Form>  
                        <div  className="mb-2 pageheading">  
                        <div href="./Register" className="col-sm-12 btn btn-primary">  
                                                   
                        </div>  
                         </div>  
                             <InputGroup className="mb-3">  
  
                             <Input type="text" onChange={this.logemailid} placeholder="Enter Email" />  
                                </InputGroup>  
                                <InputGroup className="mb-3">  
  
                                <Input type="password" onChange={this.logPassword} placeholder="Enter Password" />  
                                </InputGroup>  
                                <Button onClick={this.Login} color="success" block><Link to="/Login">Login</Link></Button>  
                                </Form>  
                                </CardBody>  
                                </Card>  
                            </CardGroup>  
                        </Col>  
                    </Row>  
                </Container>  
            </div> 
            </div> 
        );  
    }  
}  
  
export default Login;