import { Component,OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup} from '@angular/forms'

import { EventService } from './event.service'

@Component({
  selector: 'create-event',
  templateUrl: 'app/create-event.component.html',
  styles: [`
    form { margin-top: 10px; }
    label { display: block; }
    .form-group { margin-top: 5px; }
    em {color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}

  `]
})
export class CreateEventComponent implements OnInit {
  
  eventForm= new FormGroup({
    name : new FormControl(''),
    date : new FormControl(''),
    time : new FormControl(),
    location : new FormGroup({
      address : new FormControl(''),
      city : new FormControl(''),
      country : new FormControl('')
    })
  })
  constructor(private eventService:EventService, private router:Router) {
    
  }
  
  ngOnInit() {
  }
  
  saveEvent(event) {
    this.eventService.saveEvent(event)
    // this.eventForm= new FormGroup({
    //   name : new FormControl(this.name),
    //   date : new FormControl(this.date),
    //   time : new FormControl(this.time),
    //   location : new FormGroup({
    //     address : new FormControl(this.address),
    //     city : new FormControl(this.city),
    //     country : new FormControl(this.country)
    //   })
    // })
    // console.log(this.eventForm.status);  // VALID
    this.router.navigate(['/events'])
  }
  
  cancel() {
    this.router.navigate(['/events'])
  }
}