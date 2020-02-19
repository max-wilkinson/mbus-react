import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './Card.scss';

interface Props {
  stopId: number;
}

const ROUTES = gql`
  {
    stops {
      name
    }
  }
`;

export const Card = (props: Props) => {
  const { loading, error, data } = useQuery(ROUTES);

  if (loading) return <div></div>;
  else if (error) return <div></div>;

  return (
    <div className="card">
      <div className="accentLine"></div>
      <h2 className="busStopText">{data.stops[0].name}</h2>
      <div className="routeDetails">
        <h3 className="routeName">Commuter South</h3>
        <h4 className="routeStatus">5 minutes until next bus</h4>
      </div>
    </div>
  );
};
