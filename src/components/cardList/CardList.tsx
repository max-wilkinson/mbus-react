import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { LocationService } from '../../services/LocationService';
import { Card } from '../card/Card';
import Stop from '../../models/Stop';
import './CardList.scss';

const STOPS = gql`
  {
    activeStops {
      id
      name
      lat
      lon
    }
  }
`;

export const CardList = () => {
  const [nearbyStops, setNearbyStops] = useState<Stop[]>([]);
  const { loading, error, data } = useQuery(STOPS);

  const locationService = new LocationService();

  useEffect(() => {
    async function determineNearbyStops() {
      setNearbyStops(
        await locationService.determineNearbyStops(data.activeStops)
      );
    }

    if (data !== undefined) {
      determineNearbyStops();
    }
  });

  if (loading) return <div></div>;
  else if (error) return <div></div>;

  return (
    <div>
      {nearbyStops.slice(0, 5).map((stop: Stop, i: number) => {
        return (
          <div className="card" key={i}>
            <Card stop={stop}></Card>
          </div>
        );
      })}
    </div>
  );
};
