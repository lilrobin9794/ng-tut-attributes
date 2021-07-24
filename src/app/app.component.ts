import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    div {
      width: 100px;
      height: 100px;
    }
  `]
})
export class AppComponent {
  color: string = "red";
  switch: boolean = true;
  elements: number[] = [1, 2, 3, 4, 5];
  value: number = 10;
}
