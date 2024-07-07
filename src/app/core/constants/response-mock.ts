import { CommandResponse } from '../models/command/command-response.model';

/**
 * Ответ-заглушка для имитации серверного взаимодействия
 */
export const RESPONSE_MOCK: CommandResponse = {
    commands: [
        {
            "id": 1,
            "command": "Привет",
            "response": "Здравствуйте! Чем могу помочь?"
        },
        {
            "id": 2,
            "command": "Как тебя зовут?",
            "response": "Я ваш виртуальный ассистент."
        },
        {
            "id": 3,
            "command": "Помощь",
            "response": "Вы можете задать мне любой вопрос."
        }
    ],
    unknownCommandResponse: "Извините, я не понимаю эту команду."
}