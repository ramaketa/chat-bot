import { Component, Signal, signal } from '@angular/core';
import { MessageComponent } from './message/message.component';
import { NgFor } from '@angular/common';
import { Message } from '../../core/models/message/message.model';
import { AuthorTypeEnum } from '../../core/enums/author-type.enum';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
      MessageComponent,
      NgFor,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  messageList: Signal<Message[]> = signal([]);

}
