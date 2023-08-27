import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent implements OnInit {
  form = new FormGroup({
    name : new FormControl('', [Validators.minLength(4), Validators.required]),
    isChecked : new FormControl('false')
  })
  constructor() { }

  ngOnInit(): void {
  }

}
