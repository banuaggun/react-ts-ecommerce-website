import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
export function Navbar() {
  return <NavbarBs className="bg-white shadow-sm mb-3">
    <Container>
      <Nav className="me-auto">
        <Nav.Link to="/" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to="/about" as={NavLink}>
          About
        </Nav.Link>
        <Nav.Link to="/store" as={NavLink}>
          Store
        </Nav.Link>
      </Nav>
      <Button 
        className="rounded-circle d-flex justify-content-center align-items-center" 
        style={{ 
          width: "3rem", 
          height: "3rem", 
          position: "relative", 
          borderColor: "orange", 
          color: "orange",
          marginRight:"20px"
        }} 
        variant="outline-light"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-basket2" viewBox="0 0 16 16">
          <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z" />
          <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z" />
        </svg>
        <div 
          className="rounded-circle d-flex justify-content-center align-items-center"  
          style={{
            width: "1.5rem",
            height: "1.5rem",
            position: "absolute",
            bottom: 0,
            right: 0,
            transform: "translate(45%, -100%)",
            backgroundColor:"orange",
            color:"black",
            fontWeight:"bold"
          }}
        >
          3
        </div>
      </Button>
    </Container>
  </NavbarBs>
}