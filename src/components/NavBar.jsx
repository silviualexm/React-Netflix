import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
//import Register from "./Register";

class NetflixNavBar extends React.Component {
	render() {
		return (
			<>
				<Navbar className="bg-dark text-white" expand="md">
					<Link exact="true" className="nav-link" to="/">
						<img
							src="https://logos-marcas.com/wp-content/uploads/2020/04/Netflix-Logo.png"
							height="60px"
							width="130px"
							alt="netflix"
						/>
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Link exact="true" className="nav-link" to="/">
								Home
							</Link>
							<Link className="nav-link" to="/register">
								Register
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</>
		);
	}
}
export default NetflixNavBar;
