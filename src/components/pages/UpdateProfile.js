import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/user");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div style={{ backgroundColor: "#333" }}>
      <CenteredContainer>
        <Card>
          <Card.Body className="bg-primary text-center border border-light rounded">
            <h2 className="text-center text-light mb-4">Update Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control
                  className="bg-primary text-light"
                  type="email"
                  placeholder="Enter email"
                  ref={emailRef}
                  required
                  defaultValue={currentUser.email}
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label className="text-light">Password</Form.Label>
                <Form.Control
                  className="bg-primary text-light"
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </Form.Group>
              <Form.Group controlId="formPasswordConfirm">
                <Form.Label className="text-light">
                  Confirm Password
                </Form.Label>
                <Form.Control
                  className="bg-primary text-light"
                  type="password"
                  placeholder="Confirm Password"
                  ref={passwordConfirmRef}
                />
              </Form.Group>
              <Button
                variant="info"
                type="submit"
                className="w-100 mt-4"
                disabled={loading}
              >
                Update
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/user" className="text-light">
                Cancel
              </Link>
            </div>
          </Card.Body>
        </Card>
      </CenteredContainer>
    </div>
  );
}
