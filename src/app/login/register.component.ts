import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  role =  [
    {name: 'CANDIDATE', role: 'CANDIDATE_ROLE'},
    {name: 'EMPLOYEER',  role: 'EMPLOYEER_ROLE'}];
  forma: FormGroup;
  constructor() { }
  ngOnInit() {
    this.forma = new FormGroup({
      role: new FormControl(null),
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    });
    this.forma.controls['role'].setValue( this.role[0], { onlySelf: true });
  }

  signUpUser(){
  console.log(this.forma.value);
  }

}
