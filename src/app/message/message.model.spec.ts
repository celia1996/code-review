import { Message } from './message.model';

describe('Message (model)', () => {
  it('should be empty when text is an empty string', () => {
    const msg = new Message('', 'draft');
    expect(msg.empty()).toBeTrue();
  });

  it('should not be empty when text is non-empty', () => {
    const msg = new Message('hola', 'sent');
    expect(msg.empty()).toBeFalse();
  });
});
