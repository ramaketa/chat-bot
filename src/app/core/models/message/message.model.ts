import { Author } from './author.model';

export class Message {
    created: Date;
    text: string;
    author: Author;

    constructor(message: Partial<Message>) {
        this.created = message.created ?? new Date();
        this.text = message.text ?? 'текст сообщения отсутсвует';

        if (message.author) {
            this.author = message.author;
        } else {
            console.error('Отсутсвует автор сообщения')
        }
    }

}