import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'Sebastián';
  age = 18;
  img = 'https://source.unsplash.com/random';
  btnDisabled = false;
  arrayNgfor: string[] = ["Punto 1", "Punto 2", "Punto 3", "Punto 4"];

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  increasAge(){
    this.age += 1;
  }
  newNameInArray(){
    this.arrayNgfor.push(this.name);
    this.name = "";
  }
  deleteElement(index: number){
    this.arrayNgfor.splice(index, 1);
  }
}
