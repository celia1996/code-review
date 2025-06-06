import { Component } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { CreateMessageComponent } from './create-message/create-message.component';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [MessageService],
  imports: [
    ChatComponent,
    CreateMessageComponent
  ],
  template: `
    <div class="max-w-md mx-auto">
      <h1 class="title-h1">
        {{title}}
      </h1>
      <app-chat></app-chat>
      <app-create-message></app-create-message>
    </div>
  `,
})
export class AppComponent {
  title = 'Chat';
}
