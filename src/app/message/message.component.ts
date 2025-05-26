import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  template: `
<div class="message-card">
  <span class="message-header">#{{ no }} - {{ message.status }}</span>
  <div
    [ngClass]="{
      'message-text--sent': message.status === 'sent',
      'message-text--draft': message.status === 'draft',
      'message-text--pending': message.status === 'pending',
      'message-text--failed': message.status === 'failed'
    }"
  >
    {{ message.text }}
  </div>
</div>
  `,
  imports: [NgClass]
})
export class MessageComponent {
  @Input({ required: true }) message: any;
  @Input() no: any;
}
