import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function TopNavbar() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary shadow p-3 mb-5 bg-body-tertiary rounded">
          <Container fluid>
            <Navbar.Brand href="#"><img src='data:image/jpeg;base64,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'
             alt='memory power logo' style={{width:"80px", height:"80px"}}/>Memory Power</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 Memory Power
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-between flex-grow-1 ">
                  <Nav.Link href="#action1"><i className="bi bi-house-door-fill"></i> Home</Nav.Link>
                  
                  <NavDropdown
                    title="About Us"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Meet Founder</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Our Certificates
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Courses"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action5">Fundamentals Of Memory</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action6">
                      Comperhensive Memory
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action7">
                      Panoramic Memory
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1"><i className="bi bi-telephone-fill"></i> Contact Us</Nav.Link>
                  <Button variant="outline-warning">Join Class</Button>
                  <Button variant="outline-warning">Book a free trial</Button>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default TopNavbar;