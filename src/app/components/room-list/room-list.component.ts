import {Component, OnInit} from '@angular/core';
import {RoomService} from "../../services/room.service";
import {RoomModel} from "../../models/room.model";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit{

  roomList!: RoomModel[];

  constructor(private readonly _roomService: RoomService) {}
ngOnInit(): void {
    this._roomService.getAll().subscribe({
      next:data=> this.roomList = data,
      error:console.error
    });
}

}
