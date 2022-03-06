import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  amount: number = 0;
  stringDate: string = '';
  height: number = 0;
  miles: number = 0;
  celsius: number = 0;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  };

  onNameChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  onAmountChange(event: Event) {
    this.amount = Number((event.target as HTMLInputElement).value);
  }

  onDateChange(event: Event) {
    this.stringDate = (event.target as HTMLInputElement).value;
  }

  onHeightChange(event: Event) {
    this.height = Number((event.target as HTMLInputElement).value);
  }

  onMilesChange(event: Event) {
    this.miles = Number((event.target as HTMLInputElement).value);
  }

  onCelsiusChange(event: Event) {
    this.celsius = Number((event.target as HTMLInputElement).value);
  }
}
