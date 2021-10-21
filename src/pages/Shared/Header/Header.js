import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home">Maxcare Hospital</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/blog">Blog</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">LogOut</Button> :
                            <Nav.Link as={HashLink} to="/login">LogIn</Nav.Link>
                        }

                        <Nav.Link>
                            <a className="nav-link d-none d-sm-inline-block" href="#">
                                {user.email ? <img style={{ height: '50px', widows: '50px', borderRadius: '50px', overflow: 'hidden' }}
                                    src={user?.photoURL}
                                    className="avatar img-fluid rounded-circle me-1" alt="Chris Wood" /> :
                                    <img style={{ height: '50px', widows: '50px', borderRadius: '50px', overflow: 'hidden' }}
                                        src="https://www.seekpng.com/png/full/847-8474751_download-empty-profile.png"
                                        className="avatar img-fluid rounded-circle me-1" alt="Chris Wood" />}
                                <span className="text-white">{user?.displayName}</span>
                            </a>
                        </Nav.Link>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;