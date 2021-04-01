import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

class Register extends React.Component {
	submitForm = () => {
		alert("You are registered now");
	};
	render() {
		return (
			<Container>
				<Row>
					<Col className={"col-sm-8 offset-2 text-white"}>
						<Form
							onSubmit={(e) => {
								e.preventDefault();
								this.submitForm();
							}}
						>
							<Form.Group controlId="exampleForm.ControlInput1">
								<Form.Label>Name</Form.Label>
								<Form.Control type="text" placeholder="name" />
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlInput1">
								<Form.Label>Surname</Form.Label>
								<Form.Control type="text" placeholder="surname" />
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlInput1">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="name@example.com" />
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlInput1">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="password" />
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlSelect1">
								<Form.Label>Year of birth</Form.Label>
								<Form.Control as="select">
									{["1970" - "2021"].map((year) => (
										<option>{year}</option>
									))}
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Form.Control>
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlInput1">
								<Form.Label>Streat address</Form.Label>
								<Form.Control type="text" placeholder="streat address" />
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlInput1">
								<Form.Label>City</Form.Label>
								<Form.Control type="text" placeholder="your city" />
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlInput1">
								<Form.Label>Postal code</Form.Label>
								<Form.Control type="number" placeholder="postal code" />
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlInput1">
								<Form.Label>Credit card</Form.Label>
								<Form.Control type="number" placeholder="xxxx-xxxx-xxxx-xxxx" />
							</Form.Group>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		);
	}
}
export default Register;
