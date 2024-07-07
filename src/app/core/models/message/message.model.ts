import { randomUUID } from '../../functions/random-uuid';
import { Author } from './author.model';

export class Message {
    id: string;
    created: Date;
    text: string;
    author: Author;

    constructor(message: Partial<Message>) {
        this.id = message.id ?? randomUUID();
        this.created = typeof message.created === 'string'
            ? new Date(message.created)
            : message.created ?? new Date();
        this.text = message.text ?? 'текст сообщения отсутсвует';

        if (message.author) {
            this.author = new Author(message.author);
        } else {
            console.error('Отсутсвует автор сообщения')
        }
    }

}