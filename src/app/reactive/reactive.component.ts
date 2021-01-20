import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.styl']
})
export class ReactiveComponent implements OnInit {
  userForm = new FormGroup({
    nom: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.email,Validators.required,Validators.minLength(3)]),
  });

  constructor() { }

  ngOnInit(): void { console.log(this.userForm);
  
  }

}
