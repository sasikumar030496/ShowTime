import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signIn } from "../../API/Auth";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const redirect = () => {
    const userTypes = localStorage.getItem("userTypes");
    if (userTypes === "CUSTOMER") {
      navigate("/");
    } else if (userTypes === "ADMIN") {
      navigate("/admin");
    }
  };

  const onFormSubmit = async (e) => {
    // e.preventDefault();

    console.log(userName);
    console.log(password);

    try {
      const response = await signIn({ userName, password });
      const { name, userId, email, userType, userStatus, accessToken } =
        response.data;
      localStorage.setItem("name", name);
      localStorage.setItem("userId", userId);
      localStorage.setItem("email", email);
      localStorage.setItem("userType", userType);
      localStorage.setItem("userStatus", userStatus);
      localStorage.setItem("accessToken", accessToken);
      redirect();
    } catch (error) {
      console.log("Invalid Credentials : ", error);
    }
  };

  return (
    <div className="bg-dark d-flex justify-content-center align-items-center vh-100 text-light">
      <Form onSubmit={onFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={onUserNameChange}
            value={userName}
            type="text"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={onPasswordChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Auth;
