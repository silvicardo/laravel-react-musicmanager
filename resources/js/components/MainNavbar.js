import React, {Component, Fragment} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class MainNavbar extends Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {

    const {navbarLinks} = this.props;

    const navItems = navbarLinks.map((item, index) => (
      <NavItem key={index}>
        <NavLink  href={`/${item}/`}>{item.toUpperCase()}</NavLink>
      </NavItem>
    ));

    return (
      <Fragment>
        <Navbar color="dark" dark>
          <NavbarBrand href="/" className="mr-auto">Music Manager</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              {navItems}
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
