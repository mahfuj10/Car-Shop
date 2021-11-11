import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth'

const Navigation = () => {

  const { user, logOut } = useAuth();
  const navItem = {
    color: "black",
    textDecoration: "none",
    marginRight: "20px",
    fontWeight: "400"
  }

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Car Collection</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user.email && <Button variant="text" sx={{ mr: 5 }} onClick={logOut}>Log Out</Button>}
            <Typography style={navItem} variant="body">{user?.displayName}</Typography>
            <NavLink style={navItem} to="/home">Home</NavLink>
            <NavLink style={navItem} to="/login">Login</NavLink>
            {user.email && <Box>
              <NavLink style={navItem} to="/collection">Collection</NavLink>
              <NavLink style={navItem} to="/dashboard">Dashboard</NavLink>
            </Box>}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;