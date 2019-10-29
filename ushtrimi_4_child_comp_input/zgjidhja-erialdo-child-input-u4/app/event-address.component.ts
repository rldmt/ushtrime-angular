import { Component, Input } from '@angular/core'

@Component({
  selector: 'event-address',
  template: '<span>{{address.en}}, {{address.rroga}}</span>',
})
export class EventAddressComponent { 
  @Input() address
}