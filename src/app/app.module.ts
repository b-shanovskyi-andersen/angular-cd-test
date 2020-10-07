import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    A1Component,
    A2Component,
    B1Component,
    B2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
