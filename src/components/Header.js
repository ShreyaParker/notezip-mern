import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Form,FormControl} from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Note Zipper</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="m-auto">
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            </Form>
                        </Nav>
                        <Nav >
                            <Nav.Link href="/mynotes">My Notes</Nav.Link>
                            <NavDropdown title="Shreya Parkar" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    LogOut
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;