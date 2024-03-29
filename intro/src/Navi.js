import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,} from 'reactstrap';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Northwind App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="me-auto" navbar>
            </Nav>
            <Nav className="ml-auto" color="light">
              <NavItem>
                <Link to="/formdemo1">Form Demo 1</Link>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <CartSummary cart={this.props.cart} removeFromCart={this.props.removeFromCart}/>
            </Nav>
          </Collapse>
        </Navbar>
      </div >
    );
  }
}