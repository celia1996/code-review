import { MessageService } from './message.service';
import { Message } from '../message/message.model';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it('should start with no messages', () => {
    expect(service.messages).toEqual([]);
  });

  it('add() should push a message to the array', async () => {
    const msg = new Message('test', 'sent');
    await service.add(msg);
    expect(service.messages).toContain(msg);
  });

  it('all() should fetch and map messages', async () => {
    const fakePayload = {
      messages: [
        { text: 'A', status: 'sent' },
        { text: 'B', status: 'draft' },
      ]
    };
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve(new Response(JSON.stringify(fakePayload), { status: 200 }))
    );

    await service.all();

    expect(service.messages.length).toBe(2);
    expect(service.messages[0]).toEqual(jasmine.objectContaining({ text: 'A', status: 'sent' }));
    expect(service.messages[1]).toEqual(jasmine.objectContaining({ text: 'B', status: 'draft' }));
  });
});
