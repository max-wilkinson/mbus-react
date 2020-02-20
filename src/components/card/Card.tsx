import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
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
  const { loading, error, data } = useQuery(ETAROUTES, {
    variables: { stop: Number(props.stop.id) }
  });

  if (loading) return <div></div>;
  else if (error) return <div></div>;

  return (
    <div className="card">
      <div className="accentLine"></div>
      <h2 className="busStopText">{props.stop.name}</h2>
      <div className="routeDetails">
        <h3 className="routeName">{data.routes[0].name}</h3>
        <h4 className="routeStatus">
          {data.etas[0].avg} minutes until next bus
        </h4>
      </div>
    </div>
  );
};
