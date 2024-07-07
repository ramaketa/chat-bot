import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { RESPONSE_MOCK } from "../constants/response-mock";

@Injectable()
export class CommandsService {

    /**
     * Получить ответ по запросу пользователя
     * @param userMessage - запрос пользователя
     * @returns string - текст ответа
     */
    getCommandListInfo(userMessage: string): Observable<string> {
        const answer: string = RESPONSE_MOCK.commands
            .find((command) => command.command.toLowerCase() === userMessage.toLocaleLowerCase())?.response
            ?? RESPONSE_MOCK.unknownCommandResponse;

        return of(answer)
            .pipe(delay(2000)); // Иммитация серверного запроса
    }

}