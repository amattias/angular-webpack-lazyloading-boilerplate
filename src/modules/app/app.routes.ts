import { ModuleWithProviders }      from '@angular/core'
import { Routes, RouterModule }     from '@angular/router';

// Modules
import { StartModule }               from '../start/start.module'
import { PageModule }               from '../page/page.module'
import { TestModule }               from '../test/test.module'

// Components
import { AppComponent } from './components/app.component'

export const AppRoutes: Routes = [
    
    {
        path: '',
        loadChildren: '../start/start.module#StartModule'
    },
    {
        path: 'page',
        loadChildren: '../page/page.module#PageModule'
    },
    {
        path: 'test',
        loadChildren: '../test/test.module#TestModule'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
