import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  form: FormGroup;
    
  firstName = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);
  
  constructor(fb: FormBuilder) {
      this.form = fb.group({
          "firstName": this.firstName,
          "password": this.password
      });
  }

  ngOnInit(){
    this.form.valueChanges.map((value) => {
            value.firstName = value.firstName.toUpperCase();
            return value;
        })
        .filter((value) => this.form.valid)
        .subscribe((value) => {
          console.log('firstName', this.firstName);
           console.log("Model Driven Form valid value: vm = ",
                       JSON.stringify(value));
        });
  }

  onSubmit() {
      console.log("model-based form submitted");
      console.log(this.form);
  }

}
