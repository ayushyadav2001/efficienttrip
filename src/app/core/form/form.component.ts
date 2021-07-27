import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registrationForm:FormGroup;
  dynamicFormArray:any;

  constructor(private httpClient:HttpClient, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm=this.fb.group({

    });

    this.httpClient.get('/assets/Form.json').subscribe(data=>{
      this.dynamicFormArray=data;
      this.createFormControl();

    })
  }
  createFormControl(){
    this.dynamicFormArray.forEach(element => {
      if(element.Required ===true){
        this.registrationForm.addControl(element.ID,new FormControl('',Validators.required));

      }
      else{
        this.registrationForm.addControl(element.ID,new FormControl(''));
      }


    });
    console.log(this.registrationForm);

  }

}
