import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Material } from 'src/app/models/material.model';
import { MaterialService } from 'src/app/services/material.service';
import { RoomService } from 'src/app/services/room.service';
import {ROOM_FORM} from "../../models/room.form";
import {Router} from "@angular/router";

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss']
})

export class RoomCreateComponent implements OnInit {

  materials!: Material[];
  form: FormGroup;

  constructor(
    private readonly _materialService: MaterialService,
    private readonly _roomService: RoomService,
    private readonly _router: Router,
    builder: FormBuilder
  ){
    this.form= builder.group(ROOM_FORM);
  }

  ngOnInit(): void {
    this._materialService.getAll().subscribe( data => this.materials = data );
  }

  onSubmit(){
    if( this.form.valid ){
      console.log(this.form);
      this._roomService.create( this.form.value ).subscribe( () => this.form.reset() )
    }
  }

}
