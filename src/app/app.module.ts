import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule,routingcomponents  } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioComponent } from './radio/radio.component';
import { SwitchComponent } from './switch/switch.component';
import { FileComponent } from './file/file.component';
import { CheckboxComponent } from './checkbox/checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    RadioComponent,
    SwitchComponent,
    FileComponent,
    CheckboxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
