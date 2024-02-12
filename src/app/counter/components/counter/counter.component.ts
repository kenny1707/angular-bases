import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  //MI SOLUCION
  // increaseBy( value: boolean ):void {
  //   if (value == true) {
  //     this.counter += 1;
  //   }
  //   else {
  //     this.counter -=1;
  //   }
  // }

  increaseBy( value: number ):void {
    this.counter += value;
  };

  //MI SOLUCION
  resetCounter(): void {
    this.counter = 10;
  }
}
