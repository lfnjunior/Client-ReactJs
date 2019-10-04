import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap/";
import "./Login.css";
import user from "../../assets/user.png";

export default function Login({ history }) {
  const [validated, setValidated] = useState(false);

  async function handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      history.push("/main");
    }
    setValidated(true);
  }

  return (
    <div className="bkg">
      <Container className="card-login">
        <Row>
          <Col md={2} xs={1} lg={3} />
          <Col md={8} xs={10} lg={6}>
            <div className=" card-login-center">
              <Card bg="light" className="shadow-lg p-3 mb-5 bg-white rounded">
                <div className="avatar">
                  <Card.Img
                    className="img-avatar"
                    variant="middle"
                    src={user}
                  />{" "}
                </div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Informe o email"
                    />
                    <Form.Control.Feedback type="invalid">
                      Email obrigatório.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Informe a senha"
                    />
                    <Form.Control.Feedback type="invalid">
                      Senha obrigatória.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Acessar
                  </Button>
                </Form>
              </Card>
            </div>
          </Col>
          <Col md={2} xs={1} lg={3} />
        </Row>
      </Container>
    </div>
  );
}
