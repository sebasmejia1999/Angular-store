import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goRoute(route: string){
    this.router.navigate([route]);
  }

}
