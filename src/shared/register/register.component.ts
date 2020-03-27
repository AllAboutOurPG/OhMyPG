import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public isSameAddressControl: FormControl = new FormControl(false);
  RegisterForm = this.fb.group({
    presentaddress: this.fb.group({
    Address1: ['', [Validators.required, Validators.maxLength(30)]],
    Address2: ['', [Validators.required, Validators.maxLength(30)]],
    Address3: [''],
    LandMark: ['', [Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(30)]],
    City: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(30)]],
   State: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
   Pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6,6}$')]]
    }),
    permanentaddress: this.fb.group({
      Address1: ['', Validators.required],
      Address2: ['', Validators.required],
      Address3: [''],
      LandMark: ['', Validators.pattern('^[a-zA-Z]+$')],
      City: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
     State: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
     Pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6,6}$')]]
      }),
    });
   constructor(private fb: FormBuilder) { }
  ngOnInit() {
  }

  CopyAddress() {
    if (this.isSameAddressControl.value) {
    const value = this.RegisterForm.get('presentaddress').value;
    this.RegisterForm.get('permanentaddress').patchValue(value);
    } else {
      this.RegisterForm.get('permanentaddress').reset();
    }
  }
}
