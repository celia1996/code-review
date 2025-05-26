import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';
import { MessageComponent } from '../message/message.component';
import { Message } from '../message/message.model';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-create-message',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MessageComponent,
    NgIf,
    NgClass,
  ],
  template: `
    <div *ngIf="!message.empty()">
    <app-message [message]="message" no="preview"></app-message>
  </div>

  <form (ngSubmit)="onSubmit()">
    <label class="form-label" for="text">Write Message</label>
    <textarea
      id="text"
      name="text"
      required
      [(ngModel)]="message.text"
      class="form-textarea"
    ></textarea>

    <button
      type="submit"
      [disabled]="message.status === 'pending'"
      [ngClass]="{
        'btn-primary': message.status !== 'pending',
        'btn-disabled': message.status === 'pending'
      }"
    >
      Send
    </button>
  </form>
  `
})
export class CreateMessageComponent {
  message: Message = new Message('', 'draft');

  constructor(private messageService: MessageService) {}

  async onSubmit() {
    this.message.status = 'pending';

    const res = await fetch('http://127.0.0.1:4010/messages/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: this.message.text }),
    });

    this.message.status = res.status === 204 ? 'sent' : 'failed';
    await this.messageService.add(this.message);
    this.message = new Message('', 'draft');
  }
}
