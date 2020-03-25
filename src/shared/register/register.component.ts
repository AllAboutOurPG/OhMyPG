import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.registerFormBuilder.group({
    personalDetails: this.registerFormBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      martialStatus: ['', Validators.required],
    }),
    address: this.registerFormBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });

  constructor(private registerFormBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
