import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TitleService } from '../../../core/services/title.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    private titleService: TitleService = inject(TitleService);
    public title: Signal<string | undefined> = toSignal(this.titleService.title$);

}
