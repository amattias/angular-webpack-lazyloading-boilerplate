import { ModuleWithProviders }          from '@angular/core'
import { Routes, RouterModule }         from '@angular/router';

// Components
import { PageComponent }               from './components/page.component'
import { PageDetailsComponent }         from './components/page.details.component'

export const PageRoutes: Routes = [
    {
        path: '',
        component: PageComponent,
        children:[ 
            { 
                path: ':page', 
                component: PageDetailsComponent 
            }]
    }   
];

export const routing: ModuleWithProviders = RouterModule.forChild(PageRoutes);