// Type definitions for geodesy
// Project: https://github.com/chrisveness/geodesy
// Based on definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Vector3d;
export = Vector3dStatic;
declare var Vector3dStatic: Vector3dStatic;

declare interface Vector3dStatic {
    new (x: number, y: number, z: number): Vector3d.Vector3d;
    (x: number, y: number, z: number): Vector3d.Vector3d;
}
declare namespace Vector3dStatic {
    export interface Vector3d {
        x: number;
        y: number;
        z: number;
        plus(v: Vector3d): Vector3d;
        minus(v: Vector3d): Vector3d;
        times(x: number): Vector3d;
        dividedBy(x: number): Vector3d;
        dot(v: Vector3d): number;
        cross(v: Vector3d): Vector3d;
        negate(): Vector3d;
        length(): number;
        unit(): Vector3d;
        angleTo(v: Vector3d, n?: Vector3d): number;
        rotateAround(axis: Vector3d, theta: number): Vector3d;
        toString(precision?: number): string;
    }
}
