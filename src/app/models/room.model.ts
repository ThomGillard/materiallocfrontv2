import {MaterialModel} from "./material.model";

export interface RoomModel {
  id: number;
  number: number;
  capacity: number;
  studentAccess: boolean;
  materials: MaterialModel[];

}
