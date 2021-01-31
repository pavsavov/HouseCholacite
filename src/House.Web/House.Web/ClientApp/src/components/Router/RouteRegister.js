import React from 'react';
import { Route, Switch } from 'react-router';
import { Home } from '../Home/Home';
import { ContactUs } from '../ContactUs/ContactUs';
import { Gallery } from '../Gallery/Gallery';
import { AboutUs } from '../AboutUs/AboutUs';

const RouteRegister = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/contact-us' component={ContactUs} />

      {/* register component once available */}
      <Route exact path='/gallery' component={Gallery} />
      <Route exact path='/rooms'>
        и тук няма никой
      </Route>
      <Route exact path='/about-us' component={AboutUs} />
    </Switch>
  );
};

export { RouteRegister };
