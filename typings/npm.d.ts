import * as LatLonSpherical from './latlon-spherical';
import * as LatLonEllipsoidal from './latlon-vincenty';
import * as LatLonVectors from './latlon-vectors';
import * as Vector3d from './vector3d';
import * as Utm from './utm';
import * as Mgrs from './mgrs';
import * as OsGridRef from './osgridref';
import * as Dms from './dms';

export = geodesy;

declare namespace geodesy {
    export var LatLonSpherical: LatLonSpherical;
    export var LatLonEllipsoidal: LatLonEllipsoidal
    export var LatLonVectors: LatLonVectors;
    export var Vector3d: Vector3d;
    export var Utm: Utm;
    export var Mgrs: Mgrs;
    export var OsGridRef: OsGridRef;
    export var Dms: Dms;
}