import { ModuleWithProviders }      from '@angular/core'
import { Routes, RouterModule }     from '@angular/router';

// Modules
import { TestModule }               from '../test/test.module'
import { PageModule }               from '../page/page.module'

// Components
import { AppComponent } from './components/app.component'

export const AppRoutes: Routes = [
    {
        path: 'test',
        loadChildren: '../test/test.module#TestModule'
    },
    {
        path: '',
        loadChildren: '../page/page.module#PageModule'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
