import { ApplicationConfig } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { CustomTitleStrategy } from './core/services/custom-title-strategy';
import { TitleService } from './core/services/title.service';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(APP_ROUTES),
        TitleService,
        {
            provide: TitleStrategy,
            useClass: CustomTitleStrategy
        }
    ]
};
