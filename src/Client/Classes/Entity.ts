/// <reference path="../../../node_modules/@citizenfx/client/index.d.ts" />

import { ISetEntityCoords } from "../../Shared/Interfaces/FunctionParams";
import { Point } from "../../Shared/Interfaces/Point";

export default class Entity {
    private _entity: number;

    constructor(id: number) {
        this._entity = id;
    }

    public get id(): number {
        return this._entity;
    }

    /* #region(collapsed) Coords */
    public get coords(): Point {
        let pos = GetEntityCoords(this.id, false);

        return {
            x: pos[0],
            y: pos[1],
            z: pos[2]
        }
    }

    public set coords(pos: Point) {
        SetEntityCoords(
            this.id,
            pos.x,
            pos.y,
            pos.z,
            false,
            false,
            false,
            false
        )
    }

    public setCoords(pos: Point, args: ISetEntityCoords): void {
        SetEntityCoords(
            this.id,
            pos.x,
            pos.y,
            pos.z,
            args.alive ?? false,
            args.deadFlag ?? false,
            args.ragdollFlag ?? false,
            args.clearArea ?? false
        )
    }
    /* #endregion */

    /* #region(collapsed) Heading */
    public get heading() {
        return GetEntityHeading(this.id);
    }

    public set heading(heading: number) {
        SetEntityHeading(this.id, heading);
    }
    /* #endregion */

    /* #region(collapsed) Health */
    public get health() {
        return GetEntityHealth(this.id);
    }

    public set health(amount: number) {
        SetEntityHealth(this.id, amount);
    }
    /* #endregion */
}
