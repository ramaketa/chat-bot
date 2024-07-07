import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TitleService {

    private _defaultTitle = 'чатбот';
    private _title: string;
    private _title$: BehaviorSubject<string> = new BehaviorSubject<string>(this._defaultTitle);

    public title$: Observable<string> = this._title$.asObservable();

    set title(title: string | undefined) {
        this._title = title ?? 'чатбот';
        this._title$.next(this._title);
    }

    get title(): string {
        return this._title;
    }

}