import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';

console.clear();

const client = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});

client.on('connect', async () => {
  console.log('publisher connected to nats');

  const publisher = new TicketCreatedPublisher(client);

  try {
    await publisher.publish({
      id: '123',
      title: 'Concert',
      price: 20,
    });
  } catch (err) {
    console.error(err);
  }

  // const data = JSON.stringify({
  //   id: 123,
  //   title: 'Concert',
  //   price: 20,
  // });

  // client.publish('ticket:create', data, () => {
  //   console.log('Event Published');
  // });
});
