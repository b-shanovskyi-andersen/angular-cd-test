import { Component, DoCheck, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements DoCheck, AfterViewChecked {

  constructor() { }

  ngDoCheck() {
    console.log('A ngDoCheck')
  }

  ngAfterViewChecked() {
    console.log('A ngAfterViewChecked')
  }
}
