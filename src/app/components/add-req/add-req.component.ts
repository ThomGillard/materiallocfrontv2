import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-req',
  templateUrl: './add-req.component.html',
  styleUrls: ['./add-req.component.scss']
})
export class AddReqComponent {

  materials = [
    { id: 1, name: 'Projecteur' },
    { id: 2, name: 'Tableau blanc' },
    { id: 3, name: 'Tableau numérique' },
    { id: 4, name: 'Machine à café'}
  ];

  selectedMaterials: number[] = [];

}
