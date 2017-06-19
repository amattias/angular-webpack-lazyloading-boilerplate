import { NgModule }               from '@angular/core';

// Components
import { StartComponent }          from './components/start.component';

// Routing
import { routing }                from './start.routes';

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    StartComponent
  ],
  bootstrap: [ ]
})

export class StartModule { }