import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WithLayout from 'WithLayout';
// Available layouts
import {
  Main as MainLayout,
  Fluid as FluidLayout,
  Fixed as FixedLayout,
} from './layouts';

// Landing pages
import {
  Home as HomeView,
} from './views/landingPages';

// Supporting pages
import {
  Faq as FaqView,
  NotFound as NotFoundView,
} from './views/supportingPages';

// Authentication pages
import {
  LoginSimple as LoginSimpleView,
} from './views/authPages';

// Documentation pages

import Crowdfundview from 'views/crowdfund/Crowdfundview';
const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={HomeView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/page-faq"
        render={(matchProps) => (
          <WithLayout {...matchProps} component={FaqView} layout={MainLayout} />
        )}
      />
      <Route
        exact
        path="/create-crowdfund"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={LoginSimpleView}
            layout={MainLayout}
          />
        )}
      />

      <Route
        path="/crowdfund/:id"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={Crowdfundview}
            layout={MainLayout}
          />
        )}
      />

      <Route
        exact
        path="/page-not-found"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={NotFoundView}
            layout={MainLayout}
          />
        )}
      />
      <Redirect to="/page-not-found" />
    </Switch>
  );
};

export default Routes;
