import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  name: string = 'Sebastián';
  lastName: string = 'MEJIA';
  estado: boolean = false;
  

  constructor() { }

  ngOnInit(): void {
  }

  changeState() {
    this.estado = !this.estado;
  }

}
