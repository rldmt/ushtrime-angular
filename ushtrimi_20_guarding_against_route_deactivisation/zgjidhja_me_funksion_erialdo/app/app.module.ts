import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list.component';
import { EventDetailsComponent } from './event-details.component';
import { EventService } from './event.service';
import { appRoutes } from './routes'
import { EventDetailsActivator } from './event-details-activator.service'

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EventsListComponent,
    EventDetailsComponent
  ],
  providers: [ 
    EventService, 
    EventDetailsActivator,
      {
      provide: 'canDeactivateReviewEvent',
      useValue: checkReviewed
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
export function checkReviewed(component:EventDetailsComponent)  {
  console.log('hey jhe  '+ component.reviewed)
  // console.log('hey jheshjd  '+ EventDetailsComponent.toggleReviewed())
  return component.reviewed
}
