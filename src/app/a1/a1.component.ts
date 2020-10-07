import { Component, DoCheck, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component implements DoCheck, AfterViewChecked {
  text = "";
  private clickedNumber = 0;

  constructor() { }

  ngDoCheck() {
    console.log('A1 ngDoCheck')
  }

  ngAfterViewChecked() {
    console.log('A1 ngAfterViewChecked')
  }

  handleClick() {
    this.clickedNumber++;
    this.text = `clicked ${this.clickedNumber}`;
  }
}
