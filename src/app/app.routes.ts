import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'chat'
    },
    {
        path: 'chat',
        loadChildren: () => import('./components/chat/chat.routes').then(m => m.CHAT_ROUTES)
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
