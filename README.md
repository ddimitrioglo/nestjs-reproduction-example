### How to test

1. Install dependencies in both (`first` & `second` microservices): `npm i`
2. Start both microservices: `npm run start:dev`
3. Trigger event emittion: http://localhost:3001/trigger

### The result

Every second trigger I'm getting the error: `There is no matching event handler defined in the remote service. Event pattern: test_msg`

### Expectation

To recive every event!

#### Details

RabbitMQ: 3.11.4
NestJS: 9.2.1
Node.js: v14.17.5
