import React from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const apiUrl = "https://localhost:7009/api/carpenter";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
      response: {},
    };
  }

  componentDidMount() {
    axios
      .get(apiUrl + "/GetAllcarpenter")
      .then((response) => response.data)
      .then(
        (result) => {
          this.setState({
            users: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  deleteUser(id) {
    const { users } = this.state;
    axios.delete(apiUrl + "/DeleteUserDetails/" + id).then((result) => {
      alert(result.data);
      this.setState({
        response: result,
        users: users.filter((user) => user.id !== id),
      });
    });
  }

  render() {
    const { error, users } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <div>
          <Table>
            <thead className="btn-primary">
              <tr>
                <th>UserName</th>
                <th>EmailID</th>
                <th>Password</th>
                <th>ServiceName</th>
                <th>ServicePrice</th>
                <th>ContactNumber</th>
                <th>ServiceHours</th>
                <th>ServiceDate</th>
                <th>Action</th>
                
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} data-testid="userrow">
                  <td>{user.userName}</td>
                  <td>{user.emailId}</td>
                  <td>{user.password}</td>
                  <td>{user.serviceName}</td>
                  <td>{user.servicePrice}</td>
                  <td>{user.contactNumber}</td>
                  <td>{user.serviceDate}</td>
                  <td>{user.serviceHours}</td>
                  

                  
                  <td>
                    <Button
                      variant="info"
                      onClick={() => this.props.editUser(user.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => this.deleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default UserList;
