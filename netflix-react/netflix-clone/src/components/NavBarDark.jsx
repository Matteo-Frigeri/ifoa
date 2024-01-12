import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBarDark() {
  return (
    <Navbar expand="lg" variant="dark">
      <div className="container-fluid px-5">
        <Navbar.Brand href="./index.html">
          <img src="src/assets/netflix_logo.png" alt="Netflix Logo" id="logo" style={{ width: '120px', height: '50px' }}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />

        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="./index.html">Home</Nav.Link>
            <Nav.Link href="#">Tv Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>

          <Nav className="ml-auto">
            <Nav.Link className="active" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search icon" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Nav.Link>
            <Nav.Link href="#">KIDS</Nav.Link>
            <Nav.Link href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill icon" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
            </Nav.Link>

            <Dropdown className='me-5'>
      <Dropdown.Toggle variant="black" id="dropdown-basic">
        <img src="./src/assets/avatar.png" alt="Avatar" id="avatar-small" className="mr-0" style={{ width: '30px', height: '30px' }}/>
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        <Dropdown.Item href="./profile.html">
          <div className="d-flex align-items-center">
            <img src="./src/assets/avatar.png" alt="Avatar" id="avatar-small" className="mr-2" style={{ width: '50px', height: '50px' }} />
            Epicoder #1
          </div>
        </Dropdown.Item>
        <Dropdown.Item href="./profile.html">Manage Profiles</Dropdown.Item>
        <Dropdown.Item href="./accounts.html">Account</Dropdown.Item>
        <Dropdown.Item href="#">Help Center</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Signout Netflix</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBarDark;
