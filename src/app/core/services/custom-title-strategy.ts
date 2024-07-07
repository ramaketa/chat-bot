import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TitleService } from './title.service';
import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Injectable()
export class CustomTitleStrategy extends TitleStrategy {

    title: Title = inject(Title)
    titleService: TitleService = inject(TitleService);

    updateTitle(snapshot: RouterStateSnapshot): void {
        this.titleService.title = this.buildTitle(snapshot);
        this.title.setTitle(this.titleService.title)
    }

}
