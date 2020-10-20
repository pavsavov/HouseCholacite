import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';

const NavigationEndPoints = () => {
  return (
    <ul className='navbar-nav flex-grow'>
      <NavItem>
        <NavLink tag={Link} className='text-dark' to='/'>
          Начало
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} className='text-dark' to='/contact-us'>
          Връзка с нас
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} className='text-dark' to='/gallery'>
          Галерия
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} className='text-dark' to='/rooms'>
          Стаи
        </NavLink>
      </NavItem>
    </ul>
  );
};

export { NavigationEndPoints };
