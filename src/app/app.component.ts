import { Component , OnInit } from '@angular/core';
import { FormGroup,  Validators, FormBuilder , FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  stForm: FormGroup;

  constructor(private _fb:FormBuilder) {
      this.stForm = this._fb.group({
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        address:['',[Validators.required,Validators.minLength(12)]],
        skills: new FormArray([])
      })
  }

  ngOnInit(): void {
    // this.validation();
    // // this.stForm.
    // console.log(this.stForm);
    // this.stForm.controls['firstName'].setValue("krishankant")
  }

  // validation(){
  //   this.stForm = new FormGroup({
  //     firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //     lastName: new FormControl('', [Validators.required, Validators.minLength(3)]), 
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     address: new FormControl('', [Validators.required, Validators.minLength(3)])       
  //   });
  // }

  onSubmit() {
    if (this.stForm.valid) {
      console.log(this.stForm.value);
    } else {
      console.log("Form is not valid");
    }
  }
  edit(){
    (<FormArray>this.stForm.get('skills')).push(new FormControl(null,Validators.required))
  }
}

