import { Publisher, Subjects, TicketCreatedEvent } from '@som-tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
