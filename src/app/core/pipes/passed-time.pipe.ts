import { Pipe, PipeTransform } from '@angular/core';
import { DateHelper } from '../helpers/date.helper';
import { Observable, map, of, timer } from 'rxjs';

@Pipe({
    name: 'passedTime',
    standalone: true
})
export class PassedTimePipe implements PipeTransform {

    transform(dateFrom?: Date): Observable<string> {
        if (!dateFrom) {
          return of('');
        }

        return timer(0, 1000).pipe(
            map(() => {
                const timeDiff: number = Math.abs(new Date().getTime() - dateFrom.getTime());
        
                return DateHelper.getPassedTimeWithDeclaration(timeDiff);
            })
        )
    }

}
