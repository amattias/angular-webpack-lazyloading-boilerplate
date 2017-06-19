import { ModuleWithProviders }          from '@angular/core'
import { Routes, RouterModule }         from '@angular/router';

// Components
import { StartComponent }               from './components/start.component'

export const StartRoutes: Routes = [
    {
        path: '',
        component: StartComponent,
        children:[]
    }   
];

export const routing: ModuleWithProviders = RouterModule.forChild(StartRoutes);