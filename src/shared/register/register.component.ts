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
      diffAbled: ['', Validators.required],
      email1: ['', [Validators.required, Validators.email]],
      email2: ['', [Validators.required,  Validators.email]],
      mobile1: ['', [Validators.required, Validators.minLength(10)]],
      mobile2: ['',  [Validators.required, Validators.minLength(10)]],
      religion: ['', Validators.required],
      nationality: ['', Validators.required],
      domicile: ['', Validators.required],
      aadharNo: ['', Validators.required],
      panNo: ['', Validators.required],
      passportNo: ['', Validators.required]
    }),
    address: this.registerFormBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });

  genderList: Array<any> = [
    {'value': 'M','text': 'Male'},
    {'value': 'F','text': 'FeMale'},
    {'value': 'O','text': 'Others'}
  ];
  martialStatus: Array<any> = [
    {'value': true,'text': 'Married'},
    {'value': false,'text': 'UnMarried'}
  ];

  religionList : Array<any> = [
    {'value': 'Hindu', 'text': 'Hindu'},
    {'value': 'Christian', 'text': 'Christian'},
    {'value': 'Muslim', 'text': 'Muslim'},
    {'value': 'Others', 'text': 'Others'}
  ]
  constructor(private registerFormBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
