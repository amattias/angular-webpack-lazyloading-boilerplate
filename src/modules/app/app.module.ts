import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

// Components
import { AppComponent }   from './components/app.component';

// Routing
import { routing }        from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }