import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'child',
  template: `
    <h3>Child Counter: {{counter}}</h3>
    <button class="btn btn-primary" (click)="buttonClicked(counter)">Click Me!</button>
  `
})
export class ChildComponent {
  @Output() eventClick = new EventEmitter()
  counter = 0
  
  ngOnInit() {
    setInterval(() => {this.counter++}, 1000)
  }
  buttonClicked() {
    this.eventClick.emit(this.counter)  
  }
}