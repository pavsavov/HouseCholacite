import React from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';
import './NavMenu.css';
import { NavigationEndPoints } from './NavigationEndPoints';

// https://stackoverflow.com/questions/47338077/react-router-v4-navlink-vs-link-benefits   - active calss for selected link

//rewrite and remove react bootstrap
function NavMenu() {
  return (
    <header>
      <Navbar
        className='navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3'
        light
      >
        <Container>
          <NavbarBrand to='/'>Чолаците</NavbarBrand>
          <NavbarToggler className='mr-2' />
          <Collapse className='d-sm-inline-flex flex-sm-row-reverse' navbar>
            <NavigationEndPoints />
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export { NavMenu };
