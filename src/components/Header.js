import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import LogoutButton from './LogoutButton';
import './SuggestAnime.css'

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavItem>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </NavItem>
          <NavItem>
            <LogoutButton />
          </NavItem>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
