import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { MessageComponent } from '../message/message.component';
import { Message } from '../message/message.model';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    NgForOf,
    MessageComponent
  ],
  template: `
      <app-message
        *ngFor="let message of messages; index as i"
        [message]="message"
        [no]="i"
      >
      </app-message>
  `,
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) { }

  async ngOnInit() {
    await this.messageService.all();
    this.messages = this.messageService.messages;
  }
}
