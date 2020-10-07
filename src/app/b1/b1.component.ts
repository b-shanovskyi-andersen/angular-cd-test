import { Component, DoCheck, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-b1',
  templateUrl: './b1.component.html',
  styleUrls: ['./b1.component.css']
})
export class B1Component implements DoCheck, AfterViewChecked {

  constructor() { }

  ngDoCheck() {
    console.log('B1 ngDoCheck')
  }

  ngAfterViewChecked() {
    console.log('B1 ngAfterViewChecked')
  }
}
