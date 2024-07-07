import { Command } from './command.model';

/**
 * Модель мок-ответа с сервера, содержащий команды и ответы бота.
 */
export interface CommandResponse {
    commands: Command[];
    unknownCommandResponse: string; // Ответ, в случае, если команда не распознана
}