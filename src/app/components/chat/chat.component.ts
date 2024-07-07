import { Component, effect, ElementRef, inject, ViewChild } from '@angular/core';
import { MessageComponent } from './message/message.component';
import { NgFor } from '@angular/common';
import { Message } from '../../core/models/message/message.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessagesStore } from '../../core/stores/messages.store';
import { MessagesService } from '../../core/services/messages.service';
import { CommandsService } from '../../core/services/commands.service';
import { AuthorTypeEnum } from '../../core/enums/author-type.enum';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
      MessageComponent,
      NgFor,
      ReactiveFormsModule
  ],
  providers: [
    CommandsService,
    MessagesService,
    MessagesStore
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  @ViewChild('messageArea') messageArea: ElementRef;

  public readonly store = inject(MessagesStore);

  public messageList = this.store.messages;
  public isLoading = this.store.isLoading;
  public sendingRequest = this.store.sendingRequest;

  public messageCtrl: FormControl<string | null>
   = new FormControl<string | null>(null, [Validators.required]);

  constructor() {
    effect(() => {
      if (this.messageList()) {
        setTimeout(() => {
          this.messageArea.nativeElement.lastElementChild.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
          })
        });
      }
    })
  }

  public sendMessage(): void {
    if (!this.messageCtrl.valid || this.sendingRequest()) {
      return;

    }
    this.store.add(new Message({
      text: this.messageCtrl.value!,
      author: {
        type: AuthorTypeEnum.USER
      }
    }))
    this.messageCtrl.patchValue(null);
  }

}
