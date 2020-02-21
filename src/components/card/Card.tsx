import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { RouteDetails } from './route/RouteDetails';
import { routeDictionary } from '../../models/Route';
import Stop from '../../models/Stop';
import './Card.scss';

interface Props {
  stop: Stop;
}

const ETAROUTES = gql`
  query getEtas($stop: Int) {
    etas(stop: $stop) {
      route
      avg
      bus_id
    }
    routes {
      id
      name
    }
  }
`;

export const Card = (props: Props) => {
  let defaultEtas: routeDictionary = {};
  const [etasByRoute, setEtasByRoute] = useState(defaultEtas);

  const { loading, error, data } = useQuery(ETAROUTES, {
    variables: { stop: Number(props.stop.id) }
  });

  useEffect(() => {
    if (data === undefined) {
      return;
    }

    const combinedEtas: routeDictionary = {};

    for (const eta of data.etas) {
      if (eta.route in combinedEtas) {
        combinedEtas[eta.route].push(eta.avg);
      } else {
        combinedEtas[eta.route] = [eta.avg];
      }
    }

    setEtasByRoute(combinedEtas);
  }, [props.stop, data]);

  if (loading) return <div></div>;
  else if (error) return <div></div>;

  return (
    <div className="card">
      <div className="accentLine"></div>
      <h2 className="busStopText">{props.stop.name}</h2>
      {Object.keys(etasByRoute).map((route: string, i: number) => {
        return (
          <div className="routeDetails" key={i}>
            <RouteDetails
              routeId={route}
              routes={data.routes}
              etasByRoute={etasByRoute}
            ></RouteDetails>
          </div>
        );
      })}
    </div>
  );
};
