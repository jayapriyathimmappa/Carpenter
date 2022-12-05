import React from "react";
import { render, screen } from "@testing-library/react";
import UserList from "./GetUser";
import axios from "axios";

const BASE_URL = "https://localhost:7009/api/carpenter";

jest.mock("axios");

describe("Add User Component", () => {
  const mockEditUser = jest.fn();

  it("Should have all columns in the header", () => {
    render(<UserList editUser={mockEditUser} />);
    expect(screen.getByText("capUsername")).toBeInTheDocument();
    expect(screen.getByText("capemailid")).toBeInTheDocument();
    expect(screen.getByText("cappassword")).toBeInTheDocument();
    expect(screen.getByText("capservicename")).toBeInTheDocument();
    expect(screen.getByText("capserviceprice")).toBeInTheDocument();
    expect(screen.getByText("capservicehour")).toBeInTheDocument();
    expect(screen.getByText("capcontactnumber")).toBeInTheDocument();
    expect(screen.getByText("capservicedate")).toBeInTheDocument();


    expect(screen.getByText("Action")).toBeInTheDocument();
  });
  it("should return users list while loading", async () => {
    const users = [
      {
        id: 1,
        UserName:"capUsername",
        emailId:"capemailid",
        Password:"cappassword",
        serviceName:"capservicename",
        servicePrice:"capserviceprice",
        contactNumber:"capcontactnumber",
        serviceDate:"capservicedate",
        serviceHours:"capservicehour",
      },
      {
        id: 2,
        UserName:"capUsername",
        emailId:"capemailid",
        Password:"cappassword",
        serviceName:"capservicename",
        servicePrice:"capserviceprice",
        contactNumber:"capcontactnumber",
        serviceDate:"capservicedate",
        serviceHours:"capservicehour",
      },
      {
        id: 3,
        UserName:"capUsername",
        emailId:"capemailid",
        Password:"cappassword",
        serviceName:"capservicename",
        servicePrice:"capserviceprice",
        contactNumber:"capcontactnumber",
        serviceDate:"capservicedate",
        serviceHours:"capservicehour",
        
      },
    ];
    // Mocking the Axios.get to return the Users value
    axios.get = jest.fn();
    axios.get.mockResolvedValueOnce(users);

    // when
    render(<UserList editUser={mockEditUser} />);

    // then - verify that the get endpoint has been called
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/GetAllcarpenter`);
  });
});
