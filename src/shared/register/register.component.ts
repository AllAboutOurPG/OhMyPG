import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  professions: Observable<any>;
  bloodGroups: Observable<any>;
  educationalQualifications: Observable<any>;
  humanRelations: Observable<any>;
  languages: Observable<any>;
  genders: Observable<any>;
  martialStatus: Observable<any>;
  religions: Observable<any>;
  isSameAddressControl: FormControl = new FormControl(false);

  registerForm = this.registerFormBuilder.group({
    personalDetails: this.registerFormBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      martialStatus: ['', Validators.required],
      diffAbled: ['', Validators.required],
      email1: ['', [Validators.required, Validators.email]],
      email2: ['', [Validators.email]],
      mobile1: ['', [Validators.required, Validators.pattern('^[6-9]\\d{9}$')]],
      mobile2: ['', [Validators.pattern('^[6-9]\\d{9}$')]],
      religion: ['', Validators.required],
      nationality: ['', Validators.required],
      domicile: ['', Validators.required],
      aadharNo: ['', [Validators.required, Validators.pattern('^([0-9]){12}$')]],
      panNo: ['', [Validators.pattern('^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$')]],
      passportNo: ['', [Validators.pattern('^(?!^0+$)[a-zA-Z0-9]{3,20}$')]],
      languagesKnown: ['']
    }),
    presentaddress: this.registerFormBuilder.group({
      address1: ['', [Validators.required, Validators.maxLength(30)]],
      address2: ['', [Validators.required, Validators.maxLength(30)]],
      address3: [''],
      landMark: ['', [Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(30)]],
      city: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(30)]],
      state: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6,6}$')]]
    }),
    permanentaddress: this.registerFormBuilder.group({
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      address3: [''],
      landMark: ['', Validators.pattern('^[a-zA-Z]+$')],
      city: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      state: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6,6}$')]]
    }),
    officalInfo: this.registerFormBuilder.group({
      profession: ['', Validators.required],
      qualification: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      companyName: ['', Validators.required],
      companyLocation: ['', Validators.required],
      emergencyName: ['', Validators.required],
      emergencyRelation: ['', Validators.required],
      emergencyPhone: ['', [Validators.pattern('^[6-9]\\d{9}$'), Validators.required]],
      emergencyPhone2: ['', Validators.pattern('^[6-9]\\d{9}$')],
      companyEmail: ['', Validators.email],
      vehicleNo: ['']
    })
  });

  constructor(private firestore: AngularFirestore, private registerFormBuilder: FormBuilder) {
    this.professions = this.firestore.collection('Professions', x => x.orderBy('type')).valueChanges();
    this.bloodGroups = this.firestore.collection('BloodGroups', x => x.orderBy('type')).valueChanges();
    this.educationalQualifications = this.firestore.collection('EducationalQualifications', x => x.orderBy('degree')).valueChanges();
    this.humanRelations = this.firestore.collection('HumanRelations', x => x.orderBy('relation')).valueChanges();
    this.languages = this.firestore.collection('Languages', x => x.orderBy('language')).valueChanges();
    this.genders = this.firestore.collection('Genders', x => x.orderBy('gender')).valueChanges();
    this.martialStatus = this.firestore.collection('MaritalStatus', x => x.orderBy('status')).valueChanges();
    this.religions = this.firestore.collection('Religions', x => x.orderBy('religion')).valueChanges();
  }

  ngOnInit() {
  }

  CopyAddress() {
    if (this.isSameAddressControl.value) {
    const value = this.registerForm.get('presentaddress').value;
    this.registerForm.get('permanentaddress').patchValue(value);
    } else {
      this.registerForm.get('permanentaddress').reset();
    }
  }

}