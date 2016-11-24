import { ModuleWithProviders }          from '@angular/core'
import { Routes, RouterModule }         from '@angular/router';

// Components
import { PageComponent }               from './components/page.component'
import { StartComponent }               from './components/start.component'
import { PageDetailsComponent }         from './components/page.details.component'

export const PageRoutes: Routes = [
    {
        path: '',
        component: PageComponent,
        children:[ 
            { 
                path: '', 
                component: StartComponent 
            },
            { 
                path: 'page/:page', 
                component: PageDetailsComponent 
            }]
    }   
];

export const routing: ModuleWithProviders = RouterModule.forChild(PageRoutes);