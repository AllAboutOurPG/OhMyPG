import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { LoginService } from 'src/app/login/login.service';

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
  idProofs: Observable<any>;
  isSameAddressControl: FormControl = new FormControl(false);
  success = false;
  selectedProof:any;

  registerForm = this.registerFormBuilder.group({
    registerAs: ['', Validators.required],
    personalDetails: this.registerFormBuilder.group({      
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      martialStatus: ['', Validators.required],
      diffAbled: ['', Validators.required],
      email1: ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]],
      email2: ['', [Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]],
      mobile1: ['', [Validators.required, Validators.pattern('^[6-9]\\d{9}$')]],
      mobile2: ['', [Validators.pattern('^[6-9]\\d{9}$')]],
      religion: ['', Validators.required],
      nationality: ['', Validators.required],
      domicile: ['', Validators.required],
      aadharNo: ['', [Validators.required, Validators.pattern('^([0-9]){12}$')]],
      panNo: ['', [Validators.pattern('^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$')]],
      passportNo: ['', [Validators.pattern('^(?!^0+$)[a-zA-Z0-9]{3,20}$')]],
      languagesKnown: ['',Validators.required]      
    }),
    address: this.registerFormBuilder.group({
    presentaddress: this.registerFormBuilder.group({
      address1: ['', [Validators.required, Validators.maxLength(30)]],
      address2: ['', [Validators.required, Validators.maxLength(30)]],
      landmark: ['',Validators.maxLength(30)],
      area: ['', [Validators.required,Validators.maxLength(30)]],
      district: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(30)]],
      state: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6,6}$')]]
    }),
    permanentaddress: this.registerFormBuilder.group({
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      landmark: ['',Validators.maxLength(30)],
      area: ['', [Validators.required,Validators.maxLength(30)]],
      district: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      state: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6,6}$')]]
    })
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
      companyEmail: ['', [Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]],
      vehicleNo: ['',Validators.pattern('^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$')]
    }),
    uploadFile: ['', Validators.required],
    chooseFile: ['',Validators.required]
  });

  constructor(private firestore: AngularFirestore, private registerFormBuilder: FormBuilder, private loginService: LoginService) {
    this.professions = this.firestore.collection('Professions', x => x.orderBy('type')).valueChanges();
    this.bloodGroups = this.firestore.collection('BloodGroups', x => x.orderBy('type')).valueChanges();
    this.educationalQualifications = this.firestore.collection('EducationalQualifications', x => x.orderBy('degree')).valueChanges();
    this.humanRelations = this.firestore.collection('HumanRelations', x => x.orderBy('relation')).valueChanges();
    this.languages = this.firestore.collection('Languages', x => x.orderBy('language')).valueChanges();
    this.genders = this.firestore.collection('Genders', x => x.orderBy('gender')).valueChanges();
    this.martialStatus = this.firestore.collection('MaritalStatus', x => x.orderBy('status')).valueChanges();
    this.religions = this.firestore.collection('Religions', x => x.orderBy('religion')).valueChanges();
    this.idProofs = this.firestore.collection('IdProofs', x => x.orderBy('type')).valueChanges();    
  }

  ngOnInit() {
    this.loginService.user$.subscribe((user)=>{
      if(user){
        this.registerForm.get('personalDetails').get('email1').setValue(user.email)
      }
    })
  }

  CopyAddress() {
    if (this.isSameAddressControl.value) {
      const value = this.registerForm.get('address').get('presentaddress').value;
      this.registerForm.get('address').get('permanentaddress').patchValue(value);
    } else {
      this.registerForm.get('address').get('permanentaddress').reset();
    }
  }

  onDocPath(path: string) {
    this.registerForm.get('chooseFile').setValue(path);
  }

  Register() {
    try {
      this.firestore.collection('userProfiles').doc(this.loginService.userDetails.uid).set(this.registerForm.value);
      this.success = true;
    } catch (err) {
      console.error(err);
    }
  }
  isHovering: boolean;

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

}