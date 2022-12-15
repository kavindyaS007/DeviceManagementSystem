import React from "react";
import '../App.css';
import "bootstrap/dist/css/bootstrap.css"

import { Nav, Navbar, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

const NavbarComponent = () => {
    return (
            <Navbar className="navbar" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to={"/"} className="nav-link">Device Management System</Link>
                    </Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav>
                            <Link to={"/devices"} className="nav-link Navbar-link">Devices</Link>
                        </Nav>
                        <Nav>
                            <Link to={"/add-device"} className="nav-link Navbar-link">Add Device</Link>
                        </Nav>
                    </Nav>
                </Container>
            </Navbar>
    );
};

export default NavbarComponent;