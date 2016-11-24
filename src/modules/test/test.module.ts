import { NgModule }       from '@angular/core';

// Components
import { TestComponent }  from './components/test.component';
import { TestDetailsComponent }  from './components/test.details.component';

// Routing
import { routing }        from './test.routes';

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    TestComponent,
    TestDetailsComponent
  ],
  bootstrap: [ ]
})

export class TestModule { }