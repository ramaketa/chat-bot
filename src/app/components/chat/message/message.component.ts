import { Component, input, Input } from '@angular/core';
import { Message } from '../../../core/models/message/message.model';
import { AsyncPipe, NgIf } from '@angular/common';
import { AuthorTypeEnum } from '../../../core/enums/author-type.enum';
import { PassedTimePipe } from '../../../core/pipes/passed-time.pipe';

@Component({
    selector: 'app-message',
    standalone: true,
    imports: [
        NgIf,
        PassedTimePipe,
        AsyncPipe,
    ],
    templateUrl: './message.component.html',
    styleUrl: './message.component.scss'
})
export class MessageComponent {

    message = input<Message>();

    public readonly authorTypeEnum = AuthorTypeEnum;

}
