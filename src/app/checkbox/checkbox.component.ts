import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormBuilder,Validators, } from '@angular/forms';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  checkbox1:string="Form checkbox";
  checkbox2:string="Form checkbox checked";
  checkbox3:string="Form checkbox right";
  checkbox4:string="Form checkbox right checked";

  constructor(private fb:FormBuilder) { }
  form=this.fb.group({
    form_checkbox1:['',Validators.required],
    form_checkbox2:['',Validators.required],  
    checkbox_right1:['',Validators.required],
    checkbox_right2:['',Validators.required], 
    checkbox_primary:['',Validators.required], 
    checkbox_success:['',Validators.required], 
    checkbox_info:['',Validators.required], 
    checkbox_warning:['',Validators.required], 
    checkbox_danger:['',Validators.required], 
    checkbox_outline_primary:['',Validators.required], 
    checkbox_outline_success:['',Validators.required], 
    checkbox_outline_info:['',Validators.required], 
    checkbox_outline_warning:['',Validators.required],
    checkbox_outline_danger: ['',Validators.required],
        
  });

  get form_checkbox1() { return this.form.get('form_checkbox1').value; }


  ngOnInit(): void {
  }

}
