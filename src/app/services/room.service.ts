import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RoomModel} from "../models/room.model";
import {RoomCreateComponent} from "../components/room-create/room-create.component";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private readonly  BASE_URL ='http://localhost:8080/api/room';

  constructor(private readonly  _httpClient: HttpClient) { }

  getAll(): Observable<RoomModel[]>{
    return this._httpClient.get<RoomModel[]>(this.BASE_URL);
  }

  create(form:RoomCreateComponent): Observable<never>{
    return this._httpClient.post<never>(this.BASE_URL, form);
  }
}
