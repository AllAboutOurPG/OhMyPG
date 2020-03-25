import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface State {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  estates: string[]= ['AndhraPradesh','odisha','Telangana', 'westBengal'];
   states: State[] = [
    {value: 'steak-0', viewValue: 'AndhraPradesh'},
    {value: 'pizza-1', viewValue: 'Odisha'},
    {value: 'tacos-2', viewValue: 'Telangana'}
  ];
  result:any;
  
  RegisterForm = this.fb.group({
    address: this.fb.group({
    Address1: ['', Validators.required],
    Address2: ['',Validators.required],
    Address3: ['',],
    LandMark: ['',Validators.pattern('^[a-zA-Z]+$')],
    City: ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
  // State: new FormControl('',Validators.required),
  Pincode: ['',[Validators.required,Validators.pattern('^[0-9]{6,6}$')]]
    })
    });
   constructor(private fb: FormBuilder,private http: HttpClient) { }
  ngOnInit() { }

  GetState()
  {
    console.log(this.RegisterForm.get('address').get('Pincode').value);
    //console.log(this.http.get<any>('http://www.postalpincode.in/api/pincode/503001'));

    this.http.get('http://www.postalpincode.in/api/pincode/503001').subscribe(
            result => console.log(result),
            error => console.log(error),
            () => {}
    )
    
  }
}
