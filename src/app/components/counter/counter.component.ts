import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  step = signal(1);
  count = signal(1);
  increment() {
    this.count.update((c) => c + this.step());
  }
  decrement() {
    this.count.update((c) => c - this.step());
  }
  reset() {
    this.count.set(0);
  }
  onStepChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if (value) this.step.set(parseInt(value));
    else this.step.set(1);
  }
}
