import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { CreateMessageComponent } from './create-message.component';
import { MessageService } from '../services/message.service';

describe('CreateMessageComponent', () => {
  beforeEach(() => {
    const mockResponse = new Response(null, {
      status: 204,
      statusText: 'No Content',
      headers: { 'Content-Type': 'application/json' },
    });
    spyOn(window, 'fetch').and.returnValue(Promise.resolve(mockResponse));
  });

  it('should let the user write and send a message', async () => {
    await render(CreateMessageComponent, {
      providers: [MessageService],
    });

    const textarea = screen.getByLabelText(/write message/i) as HTMLTextAreaElement;
    const button = screen.getByRole('button', { name: /send/i }) as HTMLButtonElement;

    await userEvent.type(textarea, 'Hello world');
    expect(textarea.value).toBe('Hello world');

    await userEvent.click(button);
    expect(button.disabled).toBeTrue();
  });
});
