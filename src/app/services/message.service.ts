import { Injectable } from '@angular/core';
import { Message } from '../message/message.model';

@Injectable()
export class MessageService {
  messages: Message[] = [];

  async all() {
    const res = await fetch('http://127.0.0.1:4010/messages');
    const data = await res.json();

    this.messages = data.messages.map((m: any) => new Message(m.text, m.status));
  }

  async add(message: Message) {
    this.messages.push(message);
  }
}
