import Stop from '../models/Stop';

export class LocationService {
  public async determineNearbyStops(stops: Stop[]): Promise<Stop[]> {
    const location: Coordinates = await this.getUserLocation();
    return this.sortStopsByDistance(location, stops);
  }

  private async getUserLocation(): Promise<Coordinates> {
    const position: Position = await this.getPosition();
    return position.coords;
  }

  private getPosition(): Promise<Position> {
    const options = {
      enableHighAccuracy: true,
      timeout: 7000
    };

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  private sortStopsByDistance(location: Coordinates, stops: Stop[]): Stop[] {
    for (const stop of stops) {
      stop.distance = this.calculateDistance(stop, location);
    }

    stops.sort((a, b) => {
      if (a.distance === undefined || b.distance === undefined) {
        return 0;
      } else {
        return a.distance - b.distance;
      }
    });

    return stops;
  }

  private calculateDistance(stop: Stop, location: Coordinates) {
    const lat = location.latitude;
    const lon = location.longitude;

    return Math.sqrt(Math.pow(stop.lat - lat, 2) + Math.pow(stop.lon - lon, 2));
  }
}
