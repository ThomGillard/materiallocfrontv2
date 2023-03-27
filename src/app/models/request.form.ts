import {Room} from "./room.model";
import {Material} from "./material.model";

export interface RequestForm {

  userLogin: string;
  justification: string;
  neededCapacity: number;
  date: string;
  beginAt: string;
  endAt: string;
  materialId: Material[];
  additionalNotes: string;



}
export const REQUEST_FORM={
  'userlogin':[],
  'justification':[],
  'neededCapacity':[],
  'date':[],
  'beginAt':[],
  'endAt':[],
  'materialId':[],
  'additionalNotes':[]

}
