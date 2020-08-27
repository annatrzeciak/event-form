import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      date: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(key, event) {
    this.setState({ [key]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="EventForm mt-5">
        <header className="text-center">
          <h1>Event form</h1>
          <h3>Please enter the form</h3>
        </header>
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="form-first-name">
              <Form.Label>First name</Form.Label>
              <Form.Control
                value={this.state.firstName}
                onChange={(e) => this.handleChange("firstName", e)}
                required
                type="text"
                placeholder="Enter first name"
              />
            </Form.Group>
            <Form.Group controlId="form-last-name">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                value={this.state.lastName}
                onChange={(e) => this.handleChange("lastName", e)}
                required
                type="text"
                placeholder="Enter last name"
              />
            </Form.Group>
            <Form.Group controlId="form-email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={this.state.email}
                onChange={(e) => this.handleChange("email", e)}
                required
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="form-date">
              <Form.Label>Event date</Form.Label>
              <Form.Control
                value={this.state.date}
                onChange={(e) => this.handleChange("date", e)}
                required
                type="date"
                placeholder="Enter event date"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
EventForm.propTypes = {};

export default EventForm;
