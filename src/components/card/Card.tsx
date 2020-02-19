import React from 'react';
import Stop from '../../models/Stop';
import './Card.scss';

interface Props {
  stop: Stop;
}

export const Card = (props: Props) => {
  return (
    <div className="card">
      <div className="accentLine"></div>
      <h2 className="busStopText">{props.stop.name}</h2>
      <div className="routeDetails">
        <h3 className="routeName">Commuter South</h3>
        <h4 className="routeStatus">5 minutes until next bus</h4>
      </div>
    </div>
  );
};
