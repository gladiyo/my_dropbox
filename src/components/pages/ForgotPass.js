import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <div className="bg-dark" style={{ minHeight: "100vh" }}>
      <CenteredContainer>
        <Card className="shadow">
          <Card.Body>
            <h2 className="text-center mb-4">Password Reset</h2>
            <div className="mb-3">
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>

              <Button disabled={loading} className="w-100" type="submit">
                Reset Password
              </Button>
            </Form>

            <div className="w-100 text-center mt-3">
              <Link to="/login" className="text-decoration-none">
                Back to Login
              </Link>
            </div>
            <div className="w-100 text-center mt-2">
              Don't have an account?{" "}
              <Link to="/signup" className="text-decoration-none">
                Sign Up
              </Link>
            </div>
          </Card.Body>
        </Card>
      </CenteredContainer>
    </div>
  )
}
