import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Card } from '../card/Card';
import './CardList.scss';
import Stop from '../../models/Stop';

const STOPS = gql`
  {
    activeStops {
      id
      name
    }
  }
`;

export const CardList = () => {
  const { loading, error, data } = useQuery(STOPS);

  if (loading) return <div></div>;
  else if (error) return <div></div>;

  return (
    <div>
      {data.activeStops.slice(0, 3).map((stop: Stop, i: number) => {
        return (
          <div className="card">
            <Card stop={stop} key={i}></Card>
          </div>
        );
      })}
    </div>
  );
};
