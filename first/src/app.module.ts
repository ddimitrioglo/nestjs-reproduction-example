import { Module } from '@nestjs/common';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
          name: 'RMQ_CLIENT',
          transport: Transport.RMQ,
          options: {
              urls: ['amqp://127.0.0.1:5672'],
              queue: 'test_queue',
              queueOptions: {
                  durable: true,
              },
          },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
