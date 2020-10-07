import { Component, DoCheck, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-b2',
  templateUrl: './b2.component.html',
  styleUrls: ['./b2.component.css']
})
export class B2Component implements DoCheck, AfterViewChecked {

  constructor() { }

  ngDoCheck() {
    console.log('B2 ngDoCheck')
  }

  ngAfterViewChecked() {
    console.log('B2 ngAfterViewChecked')
  }
}
