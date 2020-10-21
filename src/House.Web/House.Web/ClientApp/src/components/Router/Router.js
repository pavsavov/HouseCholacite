import React from 'react';
import { Route, Switch } from 'react-router';
import { Home } from '../Home/Home';
import { ContactUs } from '../Form/ContactUs';

const RouterRegister = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/contact-us' component={ContactUs} />

      {/* register component once available */}
      <Route exact path='/gallery'>
        Няма никой тук
      </Route>
      <Route exact path='/rooms'>
        и тук няма никой
      </Route>
      <Route exact path='/about-us'>
        няма никой
      </Route>
    </Switch>
  );
};

export { RouterRegister };
