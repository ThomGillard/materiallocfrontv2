import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Material } from '../models/material.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private readonly  BASE_URL ='http://localhost:8080/api/material';

  constructor(private readonly  _httpClient: HttpClient) { }

  getAll(): Observable<Material[]>{
    return this._httpClient.get<Material[]>(this.BASE_URL);
  }

}
