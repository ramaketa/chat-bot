import { AuthorTypeEnum } from '../../enums/author-type.enum';

export interface Author {
    name: string;
    type: AuthorTypeEnum;
}