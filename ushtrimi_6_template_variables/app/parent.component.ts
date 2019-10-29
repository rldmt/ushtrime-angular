import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  template: `
    <child #childvar></child>
    <button class="btn btn-primary" (click)="childvar.stopTimer()">Stop Timer</button>
  `
})
export class ParentComponent {
  
}
