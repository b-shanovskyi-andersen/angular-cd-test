import { Component, DoCheck, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component implements DoCheck, AfterViewChecked {

  constructor() { }

  ngDoCheck() {
    console.log('A2 ngDoCheck')
  }

  ngAfterViewChecked() {
    console.log('A2 ngAfterViewChecked')
  }
}
