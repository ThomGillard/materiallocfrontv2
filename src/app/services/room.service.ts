import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Room} from "../models/room.model";
import {RoomCreateComponent} from "../components/room-create/room-create.component";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private readonly  BASE_URL ='http://localhost:8080/api/room';
  private _roomsChanged = new BehaviorSubject<undefined>(undefined)



  get $roomChanged() {
    return this._roomsChanged.asObservable();
  }
  constructor(private readonly  _httpClient: HttpClient) { }

  getAll(): Observable<Room[]>{
    return this._httpClient.get<Room[]>(this.BASE_URL);
  }

  create(form:RoomCreateComponent): Observable<never>{
    return this._httpClient.post<never>(this.BASE_URL, form);
  }
}
