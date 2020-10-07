import { Injectable } from '@angular/core';
import { ServiceWithoutInjectService } from './service-without-inject.service';
import { Service2Service } from './service2.service';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  text = 'service1'
  constructor(service2: Service2Service, serviceWithoutInjectService: ServiceWithoutInjectService) { 
    console.log('get service2 in service1', service2.text)
    console.log('get serviceWithoutInjectService in service1', serviceWithoutInjectService.text)
  }
}
