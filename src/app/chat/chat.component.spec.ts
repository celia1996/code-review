import { render, screen } from '@testing-library/angular';
import { ChatComponent } from './chat.component';
import { MessageService } from '../services/message.service';
import { Message } from '../message/message.model';

describe('ChatComponent', () => {
  it('should render a list of messages from the service', async () => {
    const service = new MessageService();
    service.messages = [
      new Message('one', 'sent'),
      new Message('two', 'draft')
    ];
    spyOn(service, 'all').and.resolveTo();

    await render(ChatComponent, {
      providers: [{ provide: MessageService, useValue: service }]
    });

    const items = screen.getAllByText(/one|two/);
    expect(items.length).toBe(2);
    expect(screen.getByText('#0 - sent')).toBeTruthy();
    expect(screen.getByText('#1 - draft')).toBeTruthy();
  });
});
