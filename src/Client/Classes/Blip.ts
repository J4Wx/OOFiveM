/// <reference path="../../../node_modules/@citizenfx/client/index.d.ts" />

import { Colour, Sprite } from "../../Shared/Enums/Blips";
import { Point } from "../../Shared/Interfaces/Point";
import Entity from "./Entity";

export default class Blip {
    private _entity: number;

    constructor(id: number) {
        this._entity = id;
    }

    public static CreateForArea(pos: Point, width: number, height: number): Blip {
        const blip = AddBlipForArea(pos.x, pos.y, pos.z, width, height);
        return new Blip(blip);
    }

    public static CreateForCoord(pos: Point): Blip {
        const blip = AddBlipForCoord(pos.x, pos.y, pos.z);
        return new Blip(blip);
    }

    public static CreateForEntity(entity: Entity): Blip {
        const blip = AddBlipForEntity(entity.id);
        return new Blip(blip);
    }

    public static CreateForRadius(pos: Point, radius: number): Blip {
        const blip = AddBlipForRadius(pos.x, pos.y, pos.z, radius);
        return new Blip(blip);
    }

    public get id(): number {
        return this._entity;
    }

    /* #region(collapsed) Alpha */
    public get alpha() {
        return GetBlipAlpha(this.id);
    }

    public set alpha(alpha: number) {
        SetBlipAlpha(this.id, alpha);
    }
    /* #endregion */

    /* #region(collapsed) Colour */
    public get colour(): Colour {
        return GetBlipColour(this.id);
    }

    public set colour(colour: Colour) {
        SetBlipColour(this.id, colour)
    }
    /* #endregion */

    /* #region(collapsed) Coords */
    public get coords(): Point {
        const coords = GetBlipCoords(this.id);
        
        return {
            x: coords[0],
            y: coords[1],
            z: coords[2]
        }
    }

    public set coords(pos: Point) {
        SetBlipCoords(this.id, pos.x, pos.y, pos.z);
    }
    /* #endregion */

    /* #region(collapsed) Sprite */
    public get sprite(): Sprite {
        return GetBlipSprite(this.id);
    }

    public set sprite(sprite: Sprite) {
        SetBlipSprite(this.id, sprite);
    }
    /* #endregion */

    /* #region(collapsed) Rotation */
    public get rotation(): number {
        return GetBlipRotation(this.id);
    }

    public set rotation(rot: number) {
        SetBlipRotation(this.id, rot);
    }
    /* #endregion */
}
