import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('RMQ_CLIENT') private rmqClient: ClientProxy) {}

  @Get('/trigger')
  getHello(): string {
    const triggredAt = new Date().toISOString();
    this.rmqClient.emit('test_msg', { message: 'Hello', triggredAt })

    return `Triggered at ${triggredAt}`;
  }
}
