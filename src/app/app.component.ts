import { Component } from '@angular/core';
import { ServiceWithoutInjectService } from './service-without-inject.service';
import { Service1Service } from './service1.service';
import { Service2Service } from './service2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cd-test';

  constructor(service1: Service1Service, service2: Service2Service, serviceWithoutInjectService: ServiceWithoutInjectService) {
    console.log('got service1 in the AppComponent', service1.text);
    console.log('got serviceWithoutInjectService in the AppComponent', serviceWithoutInjectService.text);
  }
}
