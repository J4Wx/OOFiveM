/// <reference path="../../../node_modules/@citizenfx/client/index.d.ts" />

import { Point, PointWithHeading } from "../../Shared/Interfaces/Point";
import Entity from "./Entity";

export default class Ped extends Entity {
    /* #region(collapsed) Armour */
    public get armour() {
        return GetPedArmour(this.id);
    }

    public set armour(amount: number) {
        SetPedArmour(this.id, amount);
    }
    /* #endregion */

    /* #region(collapsed) Health */
    public get maxHealth() {
        return GetPedMaxHealth(this.id);
    }

    public set maxHealth(amount: number) {
        SetPedMaxHealth(this.id, amount);
    }
    /* #endregion */
}
