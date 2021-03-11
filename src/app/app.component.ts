import { Component,AfterViewInit } from '@angular/core';
import {FormControl,FormGroup, FormBuilder,Validators, } from '@angular/forms';
import * as Feather from 'feather-icons';
import { ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task4';
  form_field1:string='Text';
  form_field2:string='Search';
  form_field3:string='Email';
  form_field4:string='URL';
  form_field5:string='Telephone';
  form_field6:string='Passowrd';
  form_field7:string='Number';
  form_field8:string='Date and Time';
  form_field9:string='Date';
  form_field10:string='Month';
  form_field11:string='Week';
  form_field12:string='Time';
  form_field13:string='Color';
  form_field14:string='Color';
  select_input1:string='Select';
  datalist_input1:string='Datalists';
  button1:string='Click here';
  range_input1:string='Example range';
  range_input2:string='Range with min and max values';

  fileToUpload: File = null;
  labelImport: ElementRef;


  constructor(private fb:FormBuilder) { }

 form=this.fb.group({
    text:['',Validators.required],
    search:['',Validators.required],  
    email:['',Validators.required],
    url:['',Validators.required], 
    telephone:['',Validators.required], 
    password:['',Validators.required], 
    number:['',Validators.required], 
    datetime:['',Validators.required], 
    date:['',Validators.required], 
    month:['',Validators.required], 
    week:['',Validators.required], 
    time:['',Validators.required], 
    color:['',Validators.required],
    color2: ['',Validators.required],
    select:['',Validators.required], 
    datalist:['',Validators.required], 
    range:[''],
    
  });
  get search() { return this.form.get('search').value; }
  get color() { return this.form.get('color').value; }
  get color2() { return this.form.get('color2').value; }
  
  public text : string=''; 
  onChange(UpdatedValue : string) :void 
  { 
    this.text = UpdatedValue; 
  } 

  // value: number = 100;
  // options: Options = {
  //   floor: 0,
  //   ceil: 250
  // };

  // changeFn(e) {
  //   this.range = e.target.value;
  // }
  
f(){
console.log(this.form.value);
}
ngAfterViewInit() {
  Feather.replace();
}

onFileChange(files: FileList) {
  this.labelImport.nativeElement.innerText = Array.from(files)
    .map(f => f.name)
    .join(', ');
  this.fileToUpload = files.item(0);
}

import(): void {
  console.log('import ' + this.fileToUpload.name);
}


}
