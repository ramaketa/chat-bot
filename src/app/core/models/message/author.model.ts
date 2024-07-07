import { AuthorTypeEnum } from '../../enums/author-type.enum';

export class Author {
    name?: string;
    type: AuthorTypeEnum;

    constructor(author: { type: AuthorTypeEnum, name?: string }) {
        this.type = author.type;

        this.name = author.name;
        if (!this.name) {
            switch(author.type) {
            case AuthorTypeEnum.CHATBOT: 
                this.name = 'Ассистент';
                break;
            case AuthorTypeEnum.USER:
                this.name = 'Пользователь';
                break;
            }
        }
    }
}