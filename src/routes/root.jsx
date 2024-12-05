
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from "react-router-dom";
function Root() {
  return (
    <>
    
    <Navbar expand="lg" className="bg-body-secondary">
      <Container fluid>
        <Navbar.Brand href="#">THRIFT STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Cart</Nav.Link>
            <NavDropdown title="Store" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               About Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" id="search"  placeholder="Search"className="me-2"aria-label="Search"/>
            <Button id="search"  variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

          <Outlet />

          <h1>footer</h1>
    </>
  )
}

export default Root
