import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  on:string='ON';
  off:string='OFF';

  constructor() { }

  ngOnInit(): void {
  }

}
