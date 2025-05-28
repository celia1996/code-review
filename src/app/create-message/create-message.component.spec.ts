import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { CreateMessageComponent } from './create-message.component';
import { MessageService } from '../services/message.service';

describe('CreateMessageComponent', () => {
beforeEach(() => {
  spyOn(window, 'fetch').and.callFake(
    (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
      const url = typeof input === 'string' ? input : input.toString();
      const status = url.endsWith('/send') ? 204 : 200;
      return Promise.resolve(new Response(null, { status }));
    }
  );
});


  it('does not display preview when message is empty', async () => {
    const { container } = await render(CreateMessageComponent, {
      providers: [MessageService]
    });
    expect(container.querySelector('app-message')).toBeNull();
  });

  it('displays preview when user types a message', async () => {
    const { container } = await render(CreateMessageComponent, {
      providers: [MessageService]
    });

    const textarea = screen.getByLabelText(/write message/i);
    await userEvent.type(textarea, 'Hello preview');

    await screen.findByText('Hello preview');

    expect(container.querySelector('app-message')).not.toBeNull();
  });
});
