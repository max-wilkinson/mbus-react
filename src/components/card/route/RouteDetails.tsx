import React from 'react';
import { routeDictionary } from '../../../models/Route';

interface Route {
  id: string;
  name: string;
}

interface Props {
  routeId: string;
  routes: Route[];
  etasByRoute: routeDictionary;
}

export const RouteDetails = (props: Props) => {
  return (
    <div>
      <h3 className="routeName">{getRouteName(props.routeId, props.routes)}</h3>
      {Object.values(props.etasByRoute[props.routeId]).map(
        (eta: any, i: number) => {
          return (
            <h4 className="routeStatus" key={i}>
              {eta} minutes until next bus
            </h4>
          );
        }
      )}
    </div>
  );
};

function getRouteName(routeId: string, routes: any): String {
  for (const route of routes) {
    if (route.id === routeId) {
      return route.name;
    }
  }
  return 'Unknown Route';
}
