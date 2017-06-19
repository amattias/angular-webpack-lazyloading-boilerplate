import { NgModule }               from '@angular/core';

// Components
import { PageComponent }          from './components/page.component';
import { PageDetailsComponent }   from './components/page.details.component';

// Routing
import { routing }                from './page.routes';

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    PageComponent,
    PageDetailsComponent
  ],
  bootstrap: [ ]
})

export class PageModule { }