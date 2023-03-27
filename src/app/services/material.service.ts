import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RoomModel} from "../models/room.model";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private readonly  BASE_URL ='http://localhost:8080/api/material';
  id: any;
  name: any;

  constructor(private readonly  _httpClient: HttpClient) { }

  getAll(): Observable<MaterialService[]>{
    return this._httpClient.get<MaterialService[]>(this.BASE_URL);
  }

}
