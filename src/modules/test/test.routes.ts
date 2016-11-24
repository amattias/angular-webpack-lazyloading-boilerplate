import { ModuleWithProviders }          from '@angular/core'
import { Routes, RouterModule }         from '@angular/router';

// Components
import { TestDetailsComponent }         from './components/test.details.component'
import { TestComponent }                from './components/test.component'

export const TestRoutes: Routes = [
    {
        path: '',
        component: TestComponent,
        children:[ 
            { 
                path: 'details', 
                component: TestDetailsComponent 
            },
            { 
                path: 'details/:id', 
                component: TestDetailsComponent 
            }]
    }   
];

export const routing: ModuleWithProviders = RouterModule.forChild(TestRoutes);