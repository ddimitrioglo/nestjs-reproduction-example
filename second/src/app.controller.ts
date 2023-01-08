import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() {}

  @EventPattern('test_msg')
  sum(data: Record<string, any>): void {
      console.log('Received', data);
  }
}
