import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserList from "./GetUser";
//import AddUser from "./AddUser";
import axios from "axios";
import AddUser from "./AddUser";

const apiUrl = "https://localhost:7009/api/carpenter";

class UserAction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddUser: false,
      error: null,
      response: {},
      userData: {},
      isEdituser: false,
      isCarpenterData: true,
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCreate() {
    this.setState({ isAddUser: true });
    this.setState({ isCarpenterData: false });
  }
  onDetails() {
    this.setState({ isCarpenterData: true });
    this.setState({ isAddUser: false });
  }

  onFormSubmit(data) {
    this.setState({ isAddUser: true });
    this.setState({ isCarpenterData: false });
    if (this.state.isEdituser) {
      axios.put(apiUrl + "/UpdateEmployeeDetails", data).then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          isAddUser: false,
          isEdituser: false,
        });
      });
    } else {
      axios.post(apiUrl + "/Insertcarpenter", data).then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          isAddUser: false,
          isEdituser: false,
        });
      });
    }
  }
  
  editUser = (id) => {
    this.setState({ isCarpenterData: false });
    axios.get(apiUrl + "/GetUserDetailsById/" + id).then(
      (result) => {
        this.setState({
          isEdituser: true,
          isAddUser: true,
          userData: result.data,
        });
      },
      (error) => {
        this.setState({ error });
      }
    );
  };

  render() {
    let userForm;
    if (this.state.isAddUser || this.state.isEditUser) {
      userForm = (
        <AddUser
          data-testid="login"
          onFormSubmit={this.onFormSubmit}
          user={this.state.userData}
        />
      );
    }
    return (

      <div className="App">
        <button className="logout"><Link to="/" className="logbtn" >Logout</Link></button>
        <Container>
          <h1 style={{ textAlign: "center" }}>Carpenter Hiring!!...!!</h1>
          <hr></hr>
          {!this.state.isCarpenterData && (
            <Button className="b1" variant="primary" onClick={() => this.onDetails()}>
              {" "}
              User Details
            </Button>
          )}
          {!this.state.isAddUser && (
            <Button variant="primary" onClick={() => this.onCreate()}>
              Register
            </Button>
          )}

           
          <br></br>
          {!this.state.isAddUser && (
            <UserList data-testid="userlist" editUser={this.editUser} />
          )}
          {userForm}
        </Container>
      </div>
    );
  }
}
export default UserAction;
