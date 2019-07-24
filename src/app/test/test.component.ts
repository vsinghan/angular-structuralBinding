import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-test',
  template: `
  

  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
  <ng-template #thenBlock>
    <h2>
      codevolution
    </h2>
  </ng-template>

  <ng-template #elseBlock>
    <h2>
      Hidden
    </h2>
  </ng-template>

  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked red color</div>
    <div *ngSwitchCase="'green'">You picked green color</div>
    <div *ngSwitchCase="'blue'">You picked blue color</div>
    <div *ngSwitchDefault>Pick again</div>
  </div>

  <div *ngFor="let color of colors; index as i; first as f; last as l">
    <h2>{{i}} {{f}} {{l}} {{color}}</h2>
  </div>
  
  <h2>{{"Hello " + parentData}}</h2>
  <button (click)=fireEvent()>Send Event</button>
  `,
  styles: ['']
})
export class TestComponent implements OnInit {

  public displayName = true;
  public color = "orange";
  public colors = ["red", "green", "blue", "orange"];

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit("Hey Codevolution");
  }

}
