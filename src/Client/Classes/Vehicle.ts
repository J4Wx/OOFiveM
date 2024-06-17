/// <reference path="../../../node_modules/@citizenfx/client/index.d.ts" />

import { Point, PointWithHeading } from "../../Shared/Interfaces/Point";
import Entity from "./Entity";

export default class Vehicle extends Entity {
    public static Create(hash, position: PointWithHeading, isNetwork: boolean = true, netMissionEntity: boolean = false): Vehicle {
        let vehicle = CreateVehicle(hash, position.x, position.y, position.z, position.h, isNetwork, netMissionEntity);
        return new Vehicle(vehicle);
    }

    /* #region(collapsed) Fuel */
    public get fuel(): number {
        return GetVehicleFuelLevel(this.id);
    }

    public set fuel(level: number) {
        SetVehicleFuelLevel(this.id, level);
    }
    /* #endregion */

    /* #region(collapsed) Doors */
    public get doorCount(): number {
        return GetNumberOfVehicleDoors(this.id);
    }

    public openDoor(index: number, loose: true, instant: false) {
        SetVehicleDoorOpen(this.id, index, loose, false);
    }

    public closeDoor(index: number, instant: false) {
        SetVehicleDoorShut(this.id, index, instant)
    }
    /* #endregion */
}
