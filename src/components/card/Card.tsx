import React from 'react';
import './Card.scss';

export const Card = () => {
  return (
    <div className="card">
      <div className="accentLine"></div>
      <h2 className="busStopText">Pierpont Commons</h2>
      <div className="routeDetails">
        <h3 className="routeName">Commuter South</h3>
        <h4 className="routeStatus">5 minutes until next bus</h4>
      </div>
    </div>
  );
};
