import { NgModule }               from '@angular/core';

// Components
import { PageComponent }          from './components/page.component';
import { PageDetailsComponent }   from './components/page.details.component';
import { StartComponent }          from './components/start.component';

// Routing
import { routing }                from './page.routes';

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    PageComponent,
    PageDetailsComponent,
    StartComponent
  ],
  bootstrap: [ ]
})

export class PageModule { }