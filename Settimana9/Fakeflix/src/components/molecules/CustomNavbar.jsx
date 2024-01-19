
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import DropdownButtonCustom from '../atoms/DropdownButtonCustom';


function CustomNavbar() {
  return (
    <Navbar expand="lg" style={{backgroundColor: "#212529", marginBottom: "50px"}}>
      <Container fluid>
        <Navbar.Brand>
          <img src="../src/assets/images/netflix_logo.png" width="100px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link text-light">Home</Link>
            <Link to="/tv-shows" className="nav-link text-light">TV Shows</Link>
            <Link to="/movies" className="nav-link text-light">Movies</Link>
            <Link to="/recently-added" className="nav-link text-light">Recently Added</Link>
            <Link to="/my-list" className="nav-link text-light">My List</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="d-flex justify-content-end me-5 align-items-center">
        <div className="d-flex align-items-center">
          <div className="search-icon position-relative mt-2 me-4">
            <img src="../src/assets/images/magnifying-glass-solid.svg" alt="search" width="15px" />
          </div>
          <div className="d-flex position relative mt-2 me-4">
            <img src="../src/assets/images/kids_icon.png" alt="kids" width="30px"/>
          </div>
          <div className="d-flex position relative mt-2 me-4">
            <img src="../src/assets/images/bell-solid.svg" alt="bell" width="15px"/>
          </div>
        </div>  
        <div className="mt-2">
          <DropdownButtonCustom/>
        </div>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;