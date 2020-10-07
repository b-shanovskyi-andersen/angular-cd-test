import { Component, DoCheck, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements DoCheck, AfterViewChecked {

  constructor() { }

  ngDoCheck() {
    console.log('B ngDoCheck')
  }

  ngAfterViewChecked() {
    console.log('B ngAfterViewChecked')
  }
}
