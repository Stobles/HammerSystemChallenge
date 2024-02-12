import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";

const Dashboard = ({ match }) => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/home`} />
      <Route
        path={`${match.url}/home`}
        component={lazy(() => import(`./home`))}
      />
      <Route
        path={`${match.url}/clients`}
        component={lazy(() => import(`./clients`))}
      />
    </Switch>
  </Suspense>
);

export default Dashboard;
