import React from "react";
import { render } from "@testing-library/react";
import AddUser from "./AddUser";

describe("Add User Component", () => {
  const mockFormSubmit = jest.fn();
  const stubbedUserData = {
    capemailid: "",
    capUsername: "",
    cappassword: "",
    capservicename:"",
    capserviceprice:"",
    capcontactnumber:"",
    capservicedate:"",
    capservicehours:"",
  };

  it("Show all input fields with empty value", () => {
    const { getByTestId } = render(
      <AddUser onFormSubmit={mockFormSubmit} user={stubbedUserData} />
    );

    expect(getByTestId("username").value).toBe("");
    expect(getByTestId("emailid").value).toBe("");
    expect(getByTestId("password").value).toBe("");
    expect(getByTestId("serviceName").value).toBe("");
    expect(getByTestId("servicePrice").value).toBe("");
    expect(getByTestId("contactNumber").value).toBe("");
    expect(getByTestId("serviceDate").value).toBe("");
    expect(getByTestId("serviceHours").value).toBe("");


  });
});
