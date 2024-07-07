import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { RESPONSE_MOCK } from "../constants/response-mock";

@Injectable()
export class CommandApiService {

    /**
     * Получить ответ по запросу пользователя
     * @param userMessage - запрос пользователя
     * @returns string - текст ответа
     */
    getCommandListInfo(userMessage: string): Observable<string> {
        const answer: string = RESPONSE_MOCK.commands
            .find((command) => command.command === userMessage)?.command
            ?? RESPONSE_MOCK.unknownCommandResponse;

        return of(answer)
            .pipe(delay(2000)); // Иммитация серверного запроса
    }


}