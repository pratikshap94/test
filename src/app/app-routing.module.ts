import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileComponent } from './file/file.component';
import { RadioComponent } from './radio/radio.component';
import { SwitchComponent } from './switch/switch.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[RadioComponent,SwitchComponent,FileComponent,CheckboxComponent]
