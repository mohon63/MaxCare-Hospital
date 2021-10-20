import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Maxcare Hospital</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/blog">Blog</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">LogOut</Button> :
                            <Nav.Link as={HashLink} to="/login">LogIn</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;