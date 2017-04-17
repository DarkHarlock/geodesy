// Type definitions for geodesy
// Project: https://github.com/chrisveness/geodesy
// Based on definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as dms from './dms';

export as namespace LatLonSpherical
export = LatLonSphericalStatic
declare var LatLonSphericalStatic: LatLonSphericalStatic;

declare interface LatLonSphericalStatic {
    new (lat: number, lon: number): LatLonSpherical.LatLonSpherical;
    (lat: number, lon: number): LatLonSpherical.LatLonSpherical;
    crossingParallels(point1: LatLonSpherical.LatLonSpherical, point2: LatLonSpherical.LatLonSpherical, latitude: number): LatLonSpherical.parallels | null;
    areaOf(polygon: LatLonSpherical.LatLonSpherical[], radius?: number): number;
}

declare namespace LatLonSphericalStatic {
    export type parallels = { lon1: number, lon2: number };

    export interface LatLonSpherical {
        lat: number;
        lon: number;
        distanceTo(point: LatLonSpherical, radius?: number): number;
        bearingTo(point: LatLonSpherical): number;
        finalBearingTo(point: LatLonSpherical): number;
        midpointTo(point: LatLonSpherical): LatLonSpherical;
        intermediatePointTo(point: LatLonSpherical, fraction: number): LatLonSpherical;
        destinationPoint(distance: number, bearing: number, radius?: number): LatLonSpherical;
        intersection(p1: LatLonSpherical, brng1: number, p2: LatLonSpherical, brng2: number): LatLonSpherical | null;
        crossTrackDistanceTo(pathStart: LatLonSpherical, pathEnd: LatLonSpherical, radius?: number): number;
        maxLatitude(bering: number): number;
        rhumbDistanceTo(point: LatLonSpherical, radius?: number): number;
        rhumbBearingTo(point: LatLonSpherical): number;
        rhumbDestinationPoint(distance: number, bearing: number, radius?: number): LatLonSpherical;
        rhumbMidpointTo(point: LatLonSpherical): LatLonSpherical;
        equals(point: LatLonSpherical): boolean;
        toString(format?: dms.format, dp?: dms.dp): string;
    }

}

declare global {
    interface Number {
        toRadians(): number;
        toDegrees(): number;
    }
}