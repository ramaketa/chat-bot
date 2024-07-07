import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { Message } from "../models/message/message.model";

@Injectable()
export class MessagesService {

    messages: Message[] = [];

    constructor() {
        try {
            const localStorageMessages = JSON.parse(localStorage.getItem('messages') || '[]');
            
            if (Array.isArray(localStorageMessages)) {
                localStorageMessages.forEach(localStorageMessage => {
                    this.messages.push(new Message(localStorageMessage));
                })
            }

        } catch (err) {
            this.messages = [];
            localStorage.setItem('messages', JSON.stringify([]));
            console.error('Ошибка инициализации списка сообщений из хранилища')
        }

    }

    /**
     * Имитация получения всех
     */
    getAll(): Observable<Message[]> {
        return of(this.messages)
                .pipe(delay(1000)) // Имитация api-запроса на получения списка сообщений
    }

}