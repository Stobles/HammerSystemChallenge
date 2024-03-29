import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const Project = ({ match }) => {
  return (
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/user-list`} />
      <Route
        path={`${match.url}/user-list`}
        component={lazy(() => import(`./user-list`))}
      />
      <Route
        path={`${match.url}/user-edit/:id`}
        component={lazy(() => import(`./user-edit`))}
      />
    </Switch>
  );
};

export default Project;
