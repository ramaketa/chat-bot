export class DateHelper {

    /**
     * Функция получения прошедшего времени
     * @example 60000ms -> 1 мин
     * @param passedTime: number - прошедшее время в миллисекундах
     */
    static getPassedTimeWithDeclaration(passedTime: number): string {
        const seconds = Number((passedTime / 1000).toFixed(1));
        const minutes = Number((passedTime / (1000 * 60)).toFixed(1));
        const hours = Number((passedTime / (1000 * 60 * 60)).toFixed(1));
        const days = Number((passedTime / (1000 * 60 * 60 * 24)).toFixed(1));

        if (seconds < 60) {
            return "< 1 мин"
        }
        if (minutes < 60) {
            return minutes + " мин"
        }
        if (hours < 24) {
            return hours + " ч"
        }
        return days + " дней"
    }

}