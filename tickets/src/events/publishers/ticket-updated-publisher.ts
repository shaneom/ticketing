import { Publisher, Subjects, TicketUpdatedEvent } from '@som-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
