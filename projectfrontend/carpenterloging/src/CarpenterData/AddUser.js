import React from "react";
import { Row, Form, Col, Button } from "react-bootstrap";


class AddUser extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      //userId: '',
      capemailid: "",
      capUsername: "",
      cappassword: "",
      capservicename:"",
      capserviceprice:"",
      capcontactnumber:"",
      capservicedate:"",
      capservicehours:"",
      
      


    };

    if (props.user.id) {
      this.state = props.user;
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }
  render() {
    let pageTitle;
    let actionStatus;
    if (this.state.id) {
      pageTitle = <h2>EDIT USER</h2>;
      actionStatus = <b>UPDATE</b>;
    } else {
      // pageTitle = <h2>CARPENTER REGISTERS</h2>;
      actionStatus = <b>SAVE</b>;
    }

    return (
      <div className="form">
        

        <h2> {pageTitle}</h2>
        
        <Row>
          <Col sm={7}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="capUsername">
              
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="text"
                  name="capUsername"
                  data-testid="capUsername"
                  value={this.state.capUsername}
                  onChange={this.handleChange}
                  placeholder="Username"
                />
              </Form.Group>
              <Form.Group controlId="capemailid">
                <Form.Label>EmailID:</Form.Label>
                <Form.Control
                  type="text"
                  name="capemailid"
                  data-testid="capemailid"
                  value={this.state.capemailid}
                  onChange={this.handleChange}
                  placeholder="emailid"
                />
                
              </Form.Group>
              <Form.Group controlId="cappassword">
                <Form.Label>password:</Form.Label>
                <Form.Control
                  type="password"
                  name="cappassword"
                  data-testid="cappassword"
                  value={this.state.cappassword}
                  onChange={this.handleChange}
                  placeholder="password"
                />
                
              </Form.Group>
              <Form.Group controlId="capservicename">
                <Form.Label>Servicename:</Form.Label>
                <Form.Control
                  type="capservicename"
                  name="capservicename"
                  data-testid="capservicename"
                  value={this.state.capservicename}
                  onChange={this.handleChange}
                  placeholder="servicename"
                />
                
              </Form.Group>

              <Form.Group controlId="capserviceprice">
                <Form.Label>serviceprice:</Form.Label>
                <Form.Control
                  type="capserviceprice"
                  name="capserviceprice"
                  data-testid="capserviceprice"
                  value={this.state.capserviceprice}
                  onChange={this.handleChange}
                  placeholder="serviceprice"
                />
                
              </Form.Group>
              <Form.Group controlId="capcontactnumber">
                <Form.Label>Contactnumber:</Form.Label>
                <Form.Control
                  type="capcontactnumber"
                  name="capcontactnumber"
                  data-testid="capcontactnumber"
                  value={this.state.capcontactnumber}
                  onChange={this.handleChange}
                  placeholder="contactnumber"
                />
                
              </Form.Group>

             

              <Form.Group controlId="capservicedate">
                <Form.Label>Servicedate:</Form.Label>
                <Form.Control
                  type="capservicedate"
                  name="capservicedate"
                  data-testid="capservicedate"
                  value={this.state.capservicehour}
                  onChange={this.handleChange}
                  placeholder="servicedate"
                />
                
              </Form.Group>
              <Form.Group controlId="capservicehours">
                <Form.Label>Servicehour:</Form.Label>
                <Form.Control
                  type="capservicehours"
                  name="capservicehours"
                  data-testid="capservicehours"
                  value={this.state.capservicehours}
                  onChange={this.handleChange}
                  placeholder="servicehours"
                />


              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="hidden"
                  name="capid"
                  value={this.state.id}
                />
                <Button variant="success" type="submit">
                  {actionStatus}
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddUser;
