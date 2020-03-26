import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormControl, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
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
    }),
    officalInfo: this.registerFormBuilder.group({
      profession: ['', Validators.required],
      qualification: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      companyName: ['',Validators.required],
      companyLocation:['',Validators.required],
      emergencyName:['',Validators.required],
      emergencyRelation:['',Validators.required],
      emergencyPhone:['',[Validators.pattern('^[6-9]\\d{9}$'),Validators.required]],
      emergencyPhone2:['',Validators.pattern('^[6-9]\\d{9}$')],
      companyEmail:['',Validators.email],
      vehicleNo:['']
    }),    
  }); 
  

  constructor(private firestore: AngularFirestore,private registerFormBuilder: FormBuilder) {
    this.professions = this.firestore.collection('Professions',x=>x.orderBy('type')).valueChanges();
    this.bloodGroups = this.firestore.collection('BloodGroups',x=>x.orderBy('type')).valueChanges();
    this.educationalQualifications = this.firestore.collection('EducationalQualifications',x=>x.orderBy('degree')).valueChanges();
    this.humanRelations = this.firestore.collection('HumanRelations',x=>x.orderBy('relation')).valueChanges();
   }

  ngOnInit() {
  }

}