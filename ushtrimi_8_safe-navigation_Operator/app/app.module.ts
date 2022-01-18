import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    EventsListComponent
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

