import { Service2Service } from './service2.service';

export class ServiceWithoutInjectService {
  text = 'serviceWithoutInjectService text'

  // error: Can't resolve all parameters for ServiceWithoutInjectService
  // constructor(service2: Service2Service) { 
  //   console.log('get service2 in serviceWithoutInjectService', service2.text) 
  // }
}
