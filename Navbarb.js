import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbarb.css';

function Navbarb() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img className="image  s1 " src="https://media.licdn.com/dms/image/C5603AQGNIitGBKTJ5w/profile-displayphoto-shrink_800_800/0/1604043431737?e=2147483647&v=beta&t=WbmGlw8Rlqeex1R9ugGifpyPPMx-gBu26MYWx-xYjCY" alt="" width="80px" height="80px"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
           <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            
            <NavDropdown title="Home" id="navbarScrollingDropdown" className='s4'>
              <NavDropdown.Item href="/">Trade details</NavDropdown.Item>
             < NavDropdown.Divider />
              <NavDropdown.Item href="/About">
                Aboutus
              
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               Requirements
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='s3'  href="#action1">Weather</Nav.Link>
            <Nav.Link className='S5' href="#action1">Login</Nav.Link>
            <Nav.Link className='S5' href="#action1">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarb;