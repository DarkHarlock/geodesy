// Type definitions for geodesy
// Project: https://github.com/chrisveness/geodesy
// Based on definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as vector3d from './vector3d';
import * as dms from './dms';

export as namespace LatLonVectors
export = LatLonVectorsStatic;
declare var LatLonVectorsStatic: LatLonVectorsStatic;

declare interface LatLonVectorsStatic {
    new (lat: number, lon: number): LatLonVectors.LatLonVectors;
    (lat: number, lon: number): LatLonVectors.LatLonVectors;
    intersection(path1start: LatLonVectors.LatLonVectors, path1brngEnd: LatLonVectors.LatLonVectors | number, path2start: LatLonVectors.LatLonVectors, path2brngEnd: LatLonVectors.LatLonVectors | number): LatLonVectors.LatLonVectors;
    areaOf(polygon: LatLonVectors.LatLonVectors[], radius?: number): number;
    meanOf(points: LatLonVectors.LatLonVectors[]): LatLonVectors.LatLonVectors;
}

declare namespace LatLonVectorsStatic {
    export interface LatLonVectors {
        lat: number;
        lon: number;
        toVector(): vector3d.Vector3d;
        greatCircle(bearing: number): vector3d.Vector3d;
        distanceTo(point: LatLonVectors, radius?: number): number;
        bearingTo(point: LatLonVectors): number;
        midpointTo(point: LatLonVectors): LatLonVectors;
        intermediatePointTo(point: LatLonVectors, fraction: number): LatLonVectors;
        intermediatePointOnChordTo(point: LatLonVectors, fraction: number): LatLonVectors;
        destinationPoint(distance: number, bearing: number, radius?: number): LatLonVectors;
        crossTrackDistanceTo(pathStart: LatLonVectors, pathBrngEnd: LatLonVectors | number, radius?: number): number;
        nearestPointOnSegment(point1: LatLonVectors, point2: LatLonVectors): number;
        isBetween(point1: LatLonVectors, point2: LatLonVectors): boolean;
        enclosedBy(polygon: LatLonVectors[]): boolean;
        equal(point: LatLonVectors): boolean;
        toString(format?: dms.format, dp?: dms.dp): string;
    }
}

declare module './vector3d' {
    interface Vector3d {
        toLatLonS(): LatLonVectors.LatLonVectors;
        greatCircle(bearing: number): Vector3d;
    }
}

declare global {
    interface Number {
        toRadians(): number;
        toDegrees(): number;
    }
}